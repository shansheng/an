<template>
<div class="container">
<div class="row">
                <div class="col-md">
                    <div class="form-group">
<a data-original-title="" class="btn btn-light"><i class="icon-cloud-upload"></i>&nbsp;选择文件</a>
                    </div>
                </div>

                <div class="col-md">
                    <div class="form-group">
                         <a  class="btn btn-primary" title="Obfuscate" v-on:click="minify"><i class="icon-settings"></i>混淆</a>
                        <a  class="btn btn-primary" title="Obfuscate" v-on:click="obfuscate"><i class="icon-settings"></i>加密</a>
                    </div>
                </div>
            </div>
<div class="row">
                <div class="col-md">
                    <div class="form-group">
                        <textarea v-model="content" name="ctl00$MainContent$TextBox1" rows="16" cols="20" id="ctl00_MainContent_TextBox1" class="form-control form-control-md" spellcheck="false" placeholder="Input Javascript code here">
                        </textarea>
                    </div>
                </div>

                <div class="col-md">
                    <div class="form-group">
                        <textarea name="ctl00$MainContent$TextBox2" rows="16" cols="20" id="ctl00_MainContent_TextBox2" class="form-control form-control-md" spellcheck="false" placeholder="Obfuscated result">
                        {{res}}
                        </textarea>
                    </div>
                </div>
            </div>
</div>
</template>
<script src="https://cdn.jsdelivr.net/npm/javascript-obfuscator/dist/index.browser.js"></script>
<script src="https://skalman.github.io/UglifyJS-online/uglify/lib/minify.js"></script>
<script src="https://skalman.github.io/UglifyJS-online/uglify/lib/utils.js"></script>
<script src="https://skalman.github.io/UglifyJS-online/uglify/lib/ast.js"></script>
<script src="https://skalman.github.io/UglifyJS-online/uglify/lib/parse.js"></script>
<script src="https://skalman.github.io/UglifyJS-online/uglify/lib/transform.js"></script>
<script src="https://skalman.github.io/UglifyJS-online/uglify/lib/scope.js"></script>
<script src="https://skalman.github.io/UglifyJS-online/uglify/lib/output.js"></script>
<script src="https://skalman.github.io/UglifyJS-online/uglify/lib/compress.js"></script>
<script src="https://skalman.github.io/UglifyJS-online/uglify/lib/propmangle.js"></script>
<script>
//import JavaScriptObfuscator from 'javascript-obfuscator';
    export default {
        data () {
            return {
                content: `
(function(){
    var variable1 = '5' - 3;
    var variable2 = '5' + 3;
    var variable3 = '5' + - '2';
    var variable4 = ['10','10','10','10','10'].map(parseInt);
    var variable5 = 'foo ' + 1 + 1;
    console.log(variable1);
    console.log(variable2);
    console.log(variable3);
    console.log(variable4);
    console.log(variable5);
})();
`,
                res: ''
            }
        },
        methods:{
            obfuscate:getObfuscatedCode,
            minify:getUglifyJSCode  
        }
    }

function getUglifyJSCode(){
 this.res=minify(this.content);
}
function getObfuscatedCode(){
var obfuscationResult = JavaScriptObfuscator.obfuscate(this.content,
    {
        compact: false,
        controlFlowFlattening: true
    }
);
this.res=obfuscationResult.getObfuscatedCode();
}

</script>

<style scoped>
.container{
    background-color: #f7f7f7 !important;
    height: 100%;
}
.row {
 padding: 15px;
}

.col-md{
    width: 50%;
    float: left;
}

.form-group{
    padding: 10px;
}

.form-control {
    font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New;
    display: block;
    width: 100%;
    line-height: 1.25;
    color: #495057;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}

.btn {
    position: relative;
    transition: .2s ease;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.25;
    border-radius: .25rem;
    transition: all .15s ease-in-out;
}

.btn-primary {
    color: #fff;
    background-color: #0078ca;
    border-color: #0078ca;
}

.btn-primary:hover {
    color: #fff;
    background-color: #0072c0;
    border-color: #0072c0;
}

.btn-light {
    color: #292b2c;
    background-color: #fff;
    border-color: #ccc;
}

.btn-light:hover {
  color: #111;
  background-color: #e2e6ea;
  border-color: #dae0e5;
}
</style>