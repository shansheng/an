<template>
  <div class="main">
  <!-- :to="{path:i.to?i.to:'javascript:;'}" :class="[i.disabled]"-->
  <div class="left">
      <ul class="nav">
          <li  v-for="item in $route.query.menu" class="active"><a href="javascript:;">{{item.title}}</a>
             <ul class="nav">
                 <li v-for="i in item.children">
                     <router-link v-if="i.disabled" :to="{path:i.path?i.path:'javascript:;'}"  class="disabled" event="">{{i.title}}</router-link>
                     <router-link v-else :to="{path:i.path?i.path:'javascript:;'}" >{{i.title}}</router-link>
                 </li>
             </ul>
          </li>
      </ul>
   </div>
   <div class="content">
       <!-- <div style="width: 100%; height: 100%; overflow: hidden;"><iframe id='iframeId' src="http://www.0non0.com" frameborder="no" scrolling="auto" allowtransparency="true" width="100%" height="100%"></iframe></div> -->
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
   </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'Hello 6World!'
            }
        },
        methods:{
            goLink:function(){
            $.loadIframe({src:this.$route.meta.src});
        }},
         mounted:function(){
             this.goLink()
         },
         watch: {
          // 如果路由有变化，会再次执行该方法
          "$route": "goLink"
        }
    }
</script>
