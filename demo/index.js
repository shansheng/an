/*webpack入口文件*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import './assets/base.css';
import './assets/main.css';
import index from './components/index.vue';
import menu from './components/menu.vue';
import dencrypt from './components/demo/encrypt.vue';
import base from './components/plugins/base.vue';
import pencrypt from './components/plugins/encrypt.vue';
// import JavaScriptObfuscator from 'javascript-obfuscator';

// var obfuscationResult = JavaScriptObfuscator.obfuscate(
//     `
//         (function(){
//             var variable1 = '5' - 3;
//             var variable2 = '5' + 3;
//             var variable3 = '5' + - '2';
//             var variable4 = ['10','10','10','10','10'].map(parseInt);
//             var variable5 = 'foo ' + 1 + 1;
//             console.log(variable1);
//             console.log(variable2);
//             console.log(variable3);
//             console.log(variable4);
//             console.log(variable5);
//         })();
//     `,
//     {
//         compact: false,
//         controlFlowFlattening: true
//     }
// );

// console.log(obfuscationResult.getObfuscatedCode());
const menuArry={
  demo:
  [
    {
      title:"Tool（工具）",
      children:
      [
        {
          title:"js加密",
          path:'encrypt',
          component: dencrypt
        },
        {
          title:"iconfont图标库",
          disabled:true
        }
      ]
    },
    {title:"DataGrid（数据网格）"},
    {title:"Tree（树）"},
    {title:"Form（表单）"},
    {title:"Uploader（上传）"},
    {title:"Map（地图）"},
    {title:"Dialog（弹出框）"},
    {title:"Extension（扩展）"},
    {title:"参考文档"}
  ],
  plugins:
  [
    {
      title:"Base（基础）",
      children:
      [
        {
          title:"基础脚本",
          path:'base',
          component: base
        },
        {
          title:"xui.js",
          disabled:true
        }
      ]
    },
    {
      title:"Donwload（下载）"
    }
  ]
};

Vue.use(VueRouter);
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Index = { template: '<div class="main"><center><h1>欢迎使用anUI！</h1><p>作者：cqy</p><p>联系方式：qingtang166@qq.com</p></center></div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const menuRoutes=function(arr,active){
  var children=[];
  for(var i = 0,len = arr.length; i < len; i++){
    var item=arr[i].children;
    if(!item)continue; 
    for(var j = 0,len = item.length; j < len; j++){
      var oldchild=item[j];
      if(!oldchild.path)continue;
      oldchild["meta"]={active:active,title:arr[i].title};
      children.push(oldchild);
    }
  }
  return children;
}

const routes = [
  { path: '/',meta:{title:"首页",active:"home"}, component: index},
  { 
    path: '/demo', 
    component: menu,
    children: menuRoutes(menuArry.demo,"demo")
  },
  { 
    path: '/plugins', 
    component: menu,
    children: menuRoutes(menuArry.plugins,"plugins")
  }
]
// const routes = [
//   { path: '/',meta:{title:"首页",active:"home"}, component: index},
//   { 
//     path: '/demo', 
//     component: menu,
//     children: [
//       {
//         path:'encrypt',
//         meta:{active:"demo"},
//         component: dencrypt
//       }
//     ]
//   },
//   { 
//     path: '/plugins', 
//     component: menu,
//     children: [
//       {
//         path:'base',
//         meta:{active:"plugins"},
//         component: base
//       },
//       {
//         path:'encrypt',
//         meta:{active:"plugins"},
//         component: pencrypt
//       }
//     ] 
//   }
// ]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  //mode: 'history',
  routes // (缩写) 相当于 routes: routes
})


router.beforeEach((to, from, next) => {
  to.query["menu"]=menuArry[to.meta.active];
  if (to.meta.title) {
      document.title = "anUI-"+to.meta.title;
  }
  next()
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
