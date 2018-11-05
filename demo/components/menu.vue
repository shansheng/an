<template>
  <div class="main">
  <!-- :to="{path:i.to?i.to:'javascript:;'}" :class="[i.disabled]"-->
  <div class="left">
      <ul class="nav">
          
          <li  v-for="item in $route.query.menu" class="active"><a href="javascript:;">{{item.title}}</a>
             <ul class="nav">
                 <li v-for="i in item.children">
                     <router-link v-if="i.disabled" :to="{path:i.path?i.path:'javascript:;'}"  class="disabled" event="">{{i.title}}</router-link>
                     <router-link v-else :to="{path:i.path?i.path:'javascript:;'}">{{i.title}}</router-link>
                 </li>
             </ul>
          </li>
      </ul>
   </div>
   <div class="content">
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
        }
    }
</script>
