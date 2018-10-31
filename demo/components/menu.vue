<template>
  <div class="main">
   <ul class="nav">
       <li class="active"><a href="javascript:;">Base（基础）</a>
        <ul class="nav">
            <li><router-link to='./index'>简介</router-link></li>
            <li><router-link to='./encrypt'>js加密</router-link></li>
        </ul>
       </li>
   </ul>
   <div class="content">
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
