/*webpack入口文件*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import './assets/base.css';
import './assets/main.css';

/*左侧菜单栏 */
import menu from './components/menu.vue';
/*Demo（教程） */
// import StaticTables from './components/demo/StaticTables.vue';
// import DataTables from './components/demo/DataTables.vue';
// import FooTables from './components/demo/FooTables.vue';
// import BootstrapTables from './components/demo/BootstrapTables.vue';
// import DataGrid from './components/demo/DataGrid.vue';
/*Plugins（插件）*/
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
          iframe:"demo/pages/demo/datagrid/StaticTables.html"
          //component:StaticTables
        },
        {
          title:"Data Tables",
          path:"DataTables",
          iframe:"demo/pages/demo/datagrid/DataTables.html"
         //component:DataTables
        },
        {
          title:"Foo Tables",
          path:"FooTables",
          iframe:"demo/pages/demo/datagrid/FooTables.html"
          //component:FooTables
        },
        {
          title:"Bootstrap Tables",
          path:"BootstrapTables",
          iframe:"demo/pages/demo/datagrid/BootstrapTables.html"
          //component:BootstrapTables
        },
        {
          title:"DataGrid",
          path:"DataGrid",
          iframe:"demo/pages/demo/datagrid/DataGrid.html"
          //component:DataGrid
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
          path:"zTree",
          iframe:"demo/pages/demo/tree/zTree_v3/api/API_cn.html"
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
          path:'base'
        },
        {
          title:"扩展脚本",
          disabled:true
        }
      ]
    },
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
          iframe:'https://lastsoup.github.io/themes/nifty/icons-ionicons.html'
        }
      ]
    },
    
  ]
  ,
  extend:
  [
   
    {
      title:"甘特图（Gantt）",
      children:
      [
        {
          title:"示例",
          path:"gantt",
          iframe:"demo/pages/extension/gantt.html"
        }
      ]
    },
    {
      title:"移动前端（Mobile）",
      children:
      [
        {
          title:"示例1",
          path:'mobile1',
          iframe:'https://lastsoup.github.io/mobile/boluoyuan'
        },
        {
          title:"示例2",
          path:'mobile2',
          iframe:'https://lastsoup.github.io/mobile/yui'
        }
      ]
    },
    {
      title:"打印（Print）",
      children:
      [
        {
          title:"示例1",
          path:'print1',
          iframe:'http://www.zfxxgk.suzhou.gov.cn/sxqzf/szsrmzf/201801/t20180112_946803.html'
        },
        {
          title:"示例2",
          path:'print2',
          iframe:'http://adminlte.la998.com/pages/examples/invoice-print.html'
        },
      ]
    },
    {
      title:"主题（Theme）",
      children:
      [
        {
          title:"Nifty",
          path:'nifty',
          iframe:'https://lastsoup.github.io/themes/nifty'
        },
        {
          title:"Ace",
          path:'ace',
          iframe:'https://lastsoup.github.io/themes/ace'
        },
        {
          title:"AdminLTE",
          path:'adminlte',
          iframe:'http://adminlte.la998.com/'
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
          path:'html5',
          iframe:'http://www.w3school.com.cn/html5/index.asp'
        },
        {
          title:"CSS3",
          path:'css3',
          iframe:'http://www.w3school.com.cn/css3/index.asp'
        },
        {
          title:"Flex",
          path:'flex',
          iframe:'http://www.runoob.com/w3cnote/flex-grammar.html'
        }
      ]
    },
    {
      title:"Nodejs",
      children:
      [
        {
          title:"Vue",
          path:'vue',
          iframe:'https://cn.vuejs.org/v2/guide/'
        },
        {
          title:"Vue Router",
          path:'vue-router',
          iframe:'https://router.vuejs.org/zh/'
        },
        {
          title:"Koa2",
          path:'koa2',
          iframe:'https://chenshenhai.github.io/koa2-note/'
        }
      ]
    },
    {
      title:"WebGL",
      children:
      [
        {
          title:"threejs",
          path:'threejs',
          iframe:'https://threejs.org/examples/'
        },
        {
          title:"babylonjs",
          path:'babylonjs',
          iframe:'https://www.babylonjs.com/'
        },
        {
          title:"claygl",
          path:'claygl',
          iframe:'http://examples.claygl.xyz/'
        },
        {
          title:"hightopo",
          path:'hightopo',
          iframe:'http://www.hightopo.com/demos/index.html'
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
      //router-view换成Iframe
      var iframeStr='<div style="width:100%;height:100%;overflow: hidden;"><iframe src="'+(oldchild.iframe?oldchild.iframe:"http://www.0non0.com")+'" frameborder="no" scrolling="auto" allowtransparency="true" width="100%" height="100%"></iframe></div>';
      var Iframe = {template:iframeStr}
      oldchild.component=Iframe;
      //router-view换成Iframe
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
    default:'/extend/gantt',
    meta:{title:"Extension（扩展）",active:"extend"}, 
    component: menu,
    children: menuRoutes(menuArry.extend,"extend")
  },
  { 
    path: '/library', 
    default:'/library/html5',
    meta:{title:"Library（藏书阁）",active:"library"}, 
    component: menu,
    children: menuRoutes(menuArry.library,"library")
  },
  { 
    path: '/download', 
    meta:{title:"Donwload（下载）",active:"download"}, 
    component: menu,
    children: menuRoutes(null,"download")
  },
  { 
    path: '/docs', 
    meta:{title:"Document（帮助文档）",active:"docs"}, 
    component: menu,
    children: null
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
