# 广告人商城
### 项目介绍
* 1.整个项目基于Vue框架开发,该项目由登录页、注册页 、首页、我的商城、列表、购物车、商品详情构成
* 2.该项目由用户登录、注册、列表页模糊查询排序筛选、购物车增、删、查、改、等功能组成。
### 演示地址
http://39.98.226.200:6868

### 技术栈
* 前端:SPA单页面应用、组件化开发、Vue-Router路由、VueX存储公共数据、Axios请求、VantUi美化界面、ES6、ES7、Less新特性
* 后端:Nodejs登录注册接口、Token令牌
* 数据库:Mongodb存储用户
* 构建工具:Webpack
* 管理工具:Git

### 项目架构
```
│  App.vue
│  main.js
│
├─components
│      BackTop.vue
│      FootFc.vue
│      FootNav.vue
│      HeaderSearch.vue
│      NavMenu.vue
│
├─image
│      80_05005681603308877_240.jpg
│      default_user_portrait.gif
│      detailsBanner1.jpg
│      detailsBanner2.jpg
│      detailsBanner3.jpg
│      h-nav1.png
│      star_r.png
│      user-bg.png
│
├─less
│      main.less
│      mixin.less
│      reset.less
│
├─page
│  │  index.vue
│  │
│  ├─cart
│  │      Cart.vue
│  │
│  ├─goods
│  │      Goods.vue
│  │
│  ├─home
│  │      Advertisement.vue
│  │      Hgoods.vue
│  │      Home.vue
│  │      Navs.vue
│  │      NoticBar.vue
│  │      Product.vue
│  │      ProductBack.vue
│  │      SearchC.vue
│  │      SearchT.vue
│  │      Slide.vue
│  │
│  ├─list
│  │      List.vue
│  │
│  ├─login
│  │      Field.vue
│  │      Hearder.vue
│  │      Login.vue
│  │
│  ├─personal
│  │      ItemFun.vue
│  │      Personal.vue
│  │      PersonalTop.vue
│  │      Small.vue
│  │      State.vue
│  │
│  ├─productList
│  │  │  index.vue
│  │  │
│  │  └─productListLess
│  │          index.less
│  │
│  ├─reg
│  │      Field.vue
│  │      Hearder.vue
│  │      Reg.vue
│  │
│  └─search
│          Search.vue
│
├─router
│      index.js
│
└─store
        index.js
```
