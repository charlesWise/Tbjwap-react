## react多页面脚手架
用webpack打包js和css并生成html文件将react组件提前渲染到页面中。
* [Features](#features)
* [项目部署](#项目部署)
    * [开发环境](#开发环境)
    * [生产环境](#生产环境)
* [目录树](#目录树)

## Features
不改变原有的react写法，可以复用react组件。
## 项目部署
在项目根目录下执行 
 ```
npm install
 ```     
### 开发环境
在项目根目录下执行 
```
npm start;
```   
#### 开发环境代理服务器设置
打开webpack文件夹base.js,找到devServer.proxy,把里面的规则替换成开发环境需要拦截的规则。

### 生产环境
在项目根目录下执行 
```
npm run dist;
```  
要发布的资源在dist文件夹下。

## 目录树

```
- root/               # 根目录
  - src/                # 开发目录
  - dist/            # 发布目录
  + webpack/             # webpack配置文件
  webpack.config.*.js   # 各个环境的webpack配置入口文件
  package.json          # 项目配置
  README.md             # 项目说明

```

### 个人笔记

```
<Route path="/city/:cityid" getComponent={ City } ></Route>
<Link to={'/city/' + cityid}></Link>
let cityid = this.props.params.cityid;

this.props.router.push({pathname:'/msite', query:{geohash}})
let geohash = this.props.location.query.geohash
```