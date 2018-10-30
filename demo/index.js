/*webpack入口文件*/
import Vue from 'vue';
import index from './components/index.vue';
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

var myVue = new Vue({
    el:"#firstVue",
    components: {'my-component': index},
    data:{
        myData:"vue:5444778"
    }
})