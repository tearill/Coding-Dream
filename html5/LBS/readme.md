# LBS - Location Based Service  

- 如何让自己的代码跑在 www.taobao.com  
  localhost 127.0.0.1  
  本地 -> aliyun 域名  

  前端上班第一个难题 运行代码  
  在本地支持 www.taobao.com  

  修改 C:\Windows\System32\drivers\etc\hosts  
  127.0.0.1       www.taobao.com  

- 原始的情况  
  访问 www.taobao.com 上淘宝  
  在本地的域名缓存中先查找，访问过之后本地会缓存  
  如果本地没有，会向最近的服务商询问 -> 域名系统 -> 国内域名 -> 美国  

  host 先来这个文件查找，程序员来设置  
  www.taobao.com 本地  

- 如何干掉 :8080  
  nginx  
  Vue -> 通过 vue.config.js proxy 将 8080 请求 /api/users/create -> proxy <---> 转发到 3000 端口  

  nginx  
  反向代理 www.taobao.com:80 -> www.taobao.com default_port 80 端口  

- nginx  
  nginx 是高性能反向代理  
  配置下反向代理  
  :80 default 端口，不用加 www.taobao.com 默认使用 80 端口提供服务  
  8080 live-server 由 80 端口代理  

- 我离肯德基有多远？  
  百度地图，API  
  把自己的坐标经纬度，店的坐标 计算距离有多远  