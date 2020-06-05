# PC 端扫码登陆方案，并需要传递哪些信息  

1. 业务考题  
  JWT(cookie session) 轮询 二维码扫码登录  
2. node 前端 登录 API 的业务分开理解  

二维码：一段信息的图片  node qrcode 生成  
微信 App，手机微信登录了，扫码  
- 手机 App 微信、github、qq 已经登录(前提) => cookie(token)  
  头像，id，用户名 => 二维码里等待着头像，id，用户名(发送 ajax 请求)  
  1. 二维码里 mongodb 存二维码信息 qrcode_id、time、expires 等  
  2. 手机扫码的时候已经登录，有一个 token 标记身份，把 token 给二维码，扫码的时候手机端触发一个 ajax post 请求到服务器端，带上 token、qrcode_id，在服务器端解析出用户 user_id  
  3. mongodb 二维码，登录中，解析登录信息，token 也传给 PC 端页面，PC 端也登录成功  
  4. 跳转，已登录成功  
- 扫码之后，App 中用户头像，id，登录状态都传到了 PC 端  
- 结果是 PC 站登录了  
服务器端要知道你是谁，token oAuth 代替 cookie  

## 实践  
1. node 插入一条 qrcode 记录，{ qrcode_id, expires_at, create_at }，用中间件生成一个二维码图片  
2. PC 端显示二维码  
<!-- 3. 扫码，等到 qrcodeId，使用 postman 模拟   -->
3. 手机端登录状态  
  - 注册 -> 登录 jwt 生成 token 手机端准备好  
4. 手机真正扫码，走服务器端，将 qrcodeId 和 token 结合  
  手机端带着 token 访问 qocode/scanned  
5. 手机端会出来一个授权或取消的页面，qrcode 记录还要被刷新  
5. 轮询

待扫描，已扫码等待确认，已确认 => 生命周期  
待扫描：自动生成 id、创建时间、过期时间  
已扫描等待确认：scanned、把 user_id、user_info 写入  
已确认：alreadyUsed(使用了)、status(所有状态)  

- 待扫描  
  1. 生成二维码阶段，此阶段和移动端无关，**PC 端和服务端交互**  
  2. PC 端携带设备信息向服务端发起二维码请求，服务端生成唯一的二维码 ID，并将二维码 ID 和 PC 设备信息关联起来  
  3. PC 端收到二维码 ID 后将二维码 ID 以二维码的形式展示，等待扫码  
  4. **PC 端启动一个定时器，轮询查询二维码的状态**  
  二维码有 expiredAt 过期时间，超过时间未扫描二维码将会失效  

- 已扫描等待确认授权  
  1. 扫码之后，二维码数据中的 scanned 字段变为 true，进入**移动端和服务器端的交互阶段**  
  2. 移动端扫码获得二维码的 ID，然后**移动端将自己的 token 身份信息凭证 + 二维码 ID 作为参数发送给服务器**  
  3. 服务器端将 token 和二维码 ID 绑定，**生成一个一次性 token 返回给移动端，作为确认授权的凭证**  
  4. **PC 端定时器轮询到二维码状态改变，将 PC 端二维码状态 scanned 更新为 true，待确认**  

- 已确认  
  1. 移动端收到一次性 token 后携带一次性 token 到服务器端确认授权/登录  
  2. 服务器端完成校验，定时器轮询更新二维码状态 => alreadyUsed: true，并给 PC 端生成一个正式 token，后续 PC 端持正式 token 进行后续操作访问服务端  
  3. 后续 PC 端访问基于正式 token  
  在服务器端会跟移动端一样，维护着 token 和二维码、PC 设备信息、账号等信息  

## 总结  
PC 端创建二维码信息并生成二维码图片，生成定时器轮询，手机扫描二维码，携带 token 和 二维码 ID 给服务器端，服务器端验证 token 并将其和 二维码 ID 绑定，生成一次性 token 给移动端，更新二维码状态，移动端拿着一次性 token 到服务器端给 PC 端授权/登录，服务器端校验完成后给 PC 端一个正式 token 用于后续交互  

移动端使用自己的 token 去授权和登录，服务器端基于移动端的 token 分发一个对应的 token 给 PC 端证明身份，与 OAuth 的流程相似  

## 登录的本质  
cookie uid 每次会随着 http 的请求在头部带上，不能太长，否则很耗时  
服务端解析 uid 验证身份。decode uid  

jwt token 前端每次自带 token 传递，服务器端解析 token  
jwt 不浪费 http 头部  