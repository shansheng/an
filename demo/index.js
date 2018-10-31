/*webpack入口文件*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import menu from './components/menu.vue';
import dencrypt from './components/demo/encrypt.vue';
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
Vue.use(VueRouter);
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Index = { template: '<center><h1>欢迎使用anUI！</h1><p>作者：cqy</p><p>联系方式：qingtang166@qq.com</p></center>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/',meta:{title:"首页",active:"home"}, component: Index },
  { 
    path: '/demo', 
    component: menu,
    children: [
      {
        path:'index',
        meta:{title:"简介",active:"demo"},
        component:  { template: '<center><h1>欢迎使用anUI Demo！</h1><p>作者：cqy</p><p>联系方式：qingtang166@qq.com</p></center>' }
      },
      {
        path:'encrypt',
        meta:{title:"js加密",active:"demo"},
        component: dencrypt
      }
    ]
  },
  { 
    path: '/plugins', 
    component: menu,
    children: [
      {
        path:'index',
        meta:{title:"简介",active:"plugins"},
        component:  { template: '<center><h1>欢迎使用anUI 插件！</h1><p>作者：cqy</p><p>联系方式：qingtang166@qq.com</p></center>' }
      },
      {
        path:'encrypt',
        meta:{title:"js加密",active:"plugins"},
        component: pencrypt
      }
    ] 
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  //mode: 'history',
  routes // (缩写) 相当于 routes: routes
})

router.beforeEach((to, from, next) => {
  console.log(to);
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
