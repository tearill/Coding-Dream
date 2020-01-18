# WebGL 魔方

- var scene = new THREE.Scene();
  创建一个新场景，用来表示即将显示的整个3D界面

- var camera = new THREE.PerspectiveCamera()
  创建一部摄影机来看到整个场景
  WebGL以相机的视角构建3D

- PerspectiveCamera() 构造器有四个参数：
  观察区域：镜头视角大小，用角度表示。
  屏幕宽高比：一般情况下，宽高比等于屏幕的宽比上屏幕的高。使用其他的值会使场景扭曲（也许正是你需要的，但一般都不是）。
  近裁切面：停止渲染前对象离摄影机的最近距离。设想一下，举起一个手指，逐渐移近双眼，某个点后就在也看不到这根手指了。
  远裁切面：停止渲染前离摄像机最远的对象的距离。
  - 将摄像机的位置设定为距 Z 轴 5 个距离单位的位置。与 CSS 类似，在屏幕之外你（观察者）的位置。

- 渲染器
  用来渲染给定的场景，可通过给定位置的摄影机观察

- 建模
  建立魔方对象模型
  BoxGeometry 模仿的形状 立方体
  MeshLambertMaterial 模仿的材质
  cube = new THREE.Mesh(geometry, material) 
  geometry 一个几何形状(形状)
  material 一个素材(形状表面外观)

- 开始动画前，为场景打光，以照亮场景中的物体
  AmbientLight 可以轻度照亮整个场景的柔光，就像户外的阳光
  SpotLight 直射的硬光，就像闪光灯和手电筒（或者它的英文字面意思——聚光灯）

- draw() 动画函数
  