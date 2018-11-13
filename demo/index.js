/*webpack入口文件*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import './assets/base.css';
import './assets/main.css';
import index from './components/index.vue';
import menu from './components/menu.vue';
import StaticTables from './components/demo/StaticTables.vue';
import DataTables from './components/demo/DataTables.vue';
/** 插件*/
import base from './components/plugins/base.vue';
import dencrypt from './components/plugins/encrypt.vue';
import icon from './components/plugins/icon.vue';
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
      title:"DataGrid（数据网格）",
      children:
      [
        {
          title:"Static Tables",
          path:'StaticTables',
          component:StaticTables
        },
        {
          title:"Data Tables",
          path:"DataTables",
          component:DataTables
        },
        {
          title:"Foo Tables",
          disabled:true
        },
        {
          title:"Bootstrap Tables",
          disabled:true
        },
        {
          title:"DataGrid",
          disabled:true
        }
      ]
    },
    {
      title:"Tree（树）",
      children:
      [
        {
          title:"anTree",
          disabled:true
        },
        {
          title:"zTree",
          disabled:true
        }
      ]
    },
    {
      title:"Form（表单）",
      children:
      [
        {
          title:"Validation",
          disabled:true
        },
        {
          title:"AreaSelect",
          disabled:true
        },
        {
          title:"DatePicker",
          disabled:true
        },
        {
          title:"Chosen",
          disabled:true
        }
      ]
    },
    {title:"Dialog（弹出框）"},
    {
      title:"Uploader（上传）",
      children:
      [
        {
          title:"Dropzone",
          disabled:true
        }
      ]
    },
    {
      title:"Map（地图）",
      children:
      [
        {
          title:"百度地图（在线）",
          disabled:true
        },
        {
          title:"百度地图（本地）",
          disabled:true
        }
      ]
    }
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
          title:"扩展脚本",
          disabled:true
        }
      ]
    },
    {
      title:"Tool（工具）",
      children:
      [
        {
          title:"混淆加密",
          path:'encrypt',
          component: dencrypt
        },
        {
          title:"iconfont图标库",
          path:'icon',
          component: icon
        }
      ]
    },
    
  ]
  ,
  extend:
  [
    {
      title:"手机（WebApp）",
      children:
      [
        {
          title:"xui.js",
          disabled:true
        },
        {
          title:"Swiper",
          path:'base',
          component: base
        },
        {
          title:"Iscroll",
          disabled:true
        }
      ]
    },
    {
      title:"甘特图（Gantt）",
      children:
      [
        {
          title:"示例",
          disabled:true
        }
      ]
    },
    {
      title:"Mobile示例",
      children:
      [
        {
          title:"示例1",
          disabled:true
        },
        {
          title:"示例2",
          disabled:true
        }
      ]
    }
  ],
  library:
  [
    {
      title:"前端",
      children:
      [
        {
          title:"HTML5",
          path:'base',
          component: base
        },
        {
          title:"CSS3",
          disabled:true
        },
        {
          title:"Flex",
          disabled:true
        }
      ]
    },
    {
      title:"Nodejs",
      children:
      [
        {
          title:"Vue",
          disabled:true
        },
        {
          title:"Koa",
          disabled:true
        }
      ]
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
  if(!arr)return;
  var children=[];
  for(var i = 0; i < arr.length; i++){
    var item=arr[i].children;
    if(!item)continue; 
    for(var j = 0; j <item.length; j++){
      var oldchild=item[j];
      if(!oldchild.path)continue;
      oldchild["meta"]={active:active,title:arr[i].title};
      children.push(oldchild);
    }
  }
  return children;
}

const routes = [
  { 
    path: '/',
    redirect:'/demo/StaticTables',
    meta:{title:"首页",active:"home"}
  },
  { 
    path: '/demo', 
    default:'/demo/StaticTables',
    meta:{title:"Demo（教程）",active:"demo"}, 
    component: menu,
    children: menuRoutes(menuArry.demo,"demo")
  },
  { 
    path: '/plugins', 
    default:'/plugins/base',
    meta:{title:"Plugins（插件）",active:"plugins"}, 
    component: menu,
    children: menuRoutes(menuArry.plugins,"plugins")
  },
  { 
    path: '/extend', 
    default:'/extend/base',
    meta:{title:"Extension（扩展）",active:"extend"}, 
    component: menu,
    children: menuRoutes(menuArry.extend,"extend")
  },
  { 
    path: '/library', 
    default:'/library/base',
    meta:{title:"Library（藏书阁）",active:"library"}, 
    component: menu,
    children: menuRoutes(menuArry.library,"library")
  },
  { 
    path: '/download', 
    meta:{title:"Donwload（下载）",active:"download"}, 
    component: menu,
    children: menuRoutes(null,"download")
  }
]


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  //mode: 'history',
  routes // (缩写) 相当于 routes: routes
})


router.beforeEach((to, from, next) => {
  
  to.query["head"]=routes;
  to.query["menu"]=menuArry[to.meta.active];
  if (to.meta.title) {
      document.title = "anUI "+to.meta.title;
  }
  console.log(to);
  next()
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
