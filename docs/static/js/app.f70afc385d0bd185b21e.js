webpackJsonp([1],{"46hw":function(t,e){},"6Q+L":function(t,e){},KRc6:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("uhj/")},null,null).exports,i=n("/ocq"),o=n("bOdI"),c=n.n(o),l={name:"Icon",props:{type:String},computed:{iconClasses:function(){return[["emic-icon","icon-"+this.type]]}},methods:{handleClick:function(t){this.$emit("click",t)}}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("i",{class:this.iconClasses,on:{click:this.handleClick}})},staticRenderFns:[]};var d=n("VU/8")(l,u,!1,function(t){n("46hw")},"data-v-b9683a84",null).exports,p={name:"Button",components:{Icon:d},props:{size:String,round:Boolean,plain:Boolean,disabled:Boolean,type:String,icon:String},computed:{classes:function(){var t;return["emic-btn",(t={},c()(t,"emic-btn-"+this.size,this.size),c()(t,"emic-btn-"+this.type,this.type),c()(t,"is-plain",this.plain),c()(t,"is-round",this.round),t)]}},methods:{handleClick:function(t){this.$emit("click",t)}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:this.classes,attrs:{disabled:this.disabled},on:{click:this.handleClick}},[e("Icon",{attrs:{type:this.icon}}),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var _=n("VU/8")(p,v,!1,function(t){n("dWfY")},"data-v-512ee4a9",null).exports,h={name:"page-button",components:{Button:_}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  type:\n  "),n("Button",[t._v("默认按钮")]),t._v(" "),n("Button",{attrs:{type:"primary"}},[t._v("主要按钮")]),t._v(" "),n("Button",{attrs:{type:"danger"}},[t._v("危险按钮")]),t._v(" "),n("br"),t._v("\n  size:\n  "),n("Button",{attrs:{size:"small"}},[t._v("小号按钮")]),t._v(" "),n("Button",[t._v("默认按钮")]),t._v(" "),n("Button",{attrs:{size:"large"}},[t._v("大号按钮")]),t._v(" "),n("br"),t._v("\n  round:\n  "),n("Button",[t._v("默认按钮")]),t._v(" "),n("Button",{attrs:{round:""}},[t._v("圆形按钮")]),t._v(" "),n("br"),t._v("\n  plain:\n  "),n("Button",{attrs:{plain:""}},[t._v("默认按钮")]),t._v(" "),n("Button",{attrs:{type:"primary",plain:""}},[t._v("主要按钮")]),t._v(" "),n("Button",{attrs:{type:"danger",plain:""}},[t._v("危险按钮")]),t._v(" "),n("br"),t._v("\n  \n  disabld:\n  "),n("Button",{attrs:{disabled:""}},[t._v("默认按钮")]),t._v(" "),n("Button",{attrs:{type:"primary",disabled:""}},[t._v("主要按钮")]),t._v(" "),n("Button",{attrs:{type:"danger",disabled:""}},[t._v("危险按钮")]),t._v(" "),n("Button",{attrs:{plain:"",disabled:""}},[t._v("默认按钮")]),t._v(" "),n("Button",{attrs:{type:"primary",plain:"",disabled:""}},[t._v("主要按钮")]),t._v(" "),n("Button",{attrs:{type:"danger",plain:"",disabled:""}},[t._v("危险按钮")])],1)},staticRenderFns:[]};var m=n("VU/8")(h,f,!1,function(t){n("kIN+")},"data-v-3d9299bc",null).exports,g=function(t,e){return e.some(function(e){return e===t})},b=function(t){return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[Object.prototype.toString.call(t)]},y={name:"Alert",components:{Icon:d},data:function(){return{prefixCls:"emic",closed:!1}},computed:{wrapClasses:function(){return["emic-alert","emic-alert-"+this.type,c()({},"emic-alert-center",this.center)]}},props:{type:{validator:function(t){return g(t,["info","success","warning","error"])},default:"info"},closeable:Boolean,showIcon:{type:Boolean,default:!0},center:Boolean},methods:{close:function(t){this.closed=!0,this.$emit("close",t)}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade-up"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.closed,expression:"!closed"}],class:t.wrapClasses},[n("div",{class:t.prefixCls+"-alert-msg"},[t.showIcon?n("Icon",{attrs:{type:t.type}}):t._e(),t._v(" "),t._t("default")],2),t._v(" "),t.closeable?n("span",{class:t.prefixCls+"-alert-close",on:{click:t.close}},[t._t("close",[n("Icon",{attrs:{type:"close"}})])],2):t._e()])])},staticRenderFns:[]},k={name:"page-alert",components:{Alert:n("VU/8")(y,x,!1,null,null,null).exports}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Alert",{attrs:{showIcon:!1}},[t._v("一般消息提示")]),t._v(" "),n("Alert",[t._v("一般消息提示")]),t._v(" "),n("Alert",{attrs:{center:""}},[t._v("一般消息提示")]),t._v(" "),n("Alert",{attrs:{type:"warning"}},[t._v("警告消息提示")]),t._v(" "),n("Alert",{attrs:{type:"success"}},[t._v("成功消息提示")]),t._v(" "),n("Alert",{attrs:{type:"error"}},[t._v("错误消息提示")]),t._v(" "),n("Alert",{attrs:{type:"error",closeable:""}},[t._v("错误消息提示")])],1)},staticRenderFns:[]};var w=n("VU/8")(k,I,!1,function(t){n("mQOh")},"data-v-f115c1ea",null).exports,C={name:"SwitchBtn",data:function(){return{currentValue:this.value}},props:{value:{type:Boolean,default:!1},disabled:Boolean},computed:{switchClass:function(){return["emic-switch",c()({},"emic-switch-checked",this.currentValue),c()({},"emic-switch-disabled",this.disabled)]}},methods:{toggle:function(){!this.disabled&&(this.currentValue=!this.currentValue)}}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{class:this.switchClass,on:{click:this.toggle}},[e("input",{attrs:{type:"hidden"},domProps:{value:this.currentValue}})])},staticRenderFns:[]},V={name:"page-switch",components:{SwitchBtn:n("VU/8")(C,B,!1,null,null,null).exports},data:function(){return{switch1:!1,switch2:!0,switch3:!1,switch4:!0}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SwitchBtn",{model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}),t._v(" "),n("br"),t._v(" "),n("SwitchBtn",{model:{value:t.switch2,callback:function(e){t.switch2=e},expression:"switch2"}}),t._v(" "),n("br"),t._v(" "),n("SwitchBtn",{attrs:{disabled:""},model:{value:t.switch3,callback:function(e){t.switch3=e},expression:"switch3"}}),t._v(" "),n("br"),t._v(" "),n("SwitchBtn",{attrs:{disabled:""},model:{value:t.switch4,callback:function(e){t.switch4=e},expression:"switch4"}})],1)},staticRenderFns:[]};var S=n("VU/8")(V,$,!1,function(t){n("yrsl")},"data-v-98567f50",null).exports,P={name:"pagination",components:{Icon:d},props:{total:{type:Number,default:0},pageGap:{type:Number,default:2},showTotal:Boolean,small:Boolean},data:function(){return{prefixCls:"emic",currentPage:1}},computed:{paginationWrap:function(){return["emic-pagination"]}},methods:{changePage:function(t){this.currentPage=t,this.$emit("page-change",t)},prev:function(){1!==this.currentPage&&this.changePage(this.currentPage-1)},next:function(){this.currentPage!==this.total&&this.changePage(this.currentPage+1)}},watch:{currentPage:function(t){}}},R={render:function(){var t,e,n=this,a=n.$createElement,r=n._self._c||a;return r("div",{class:n.paginationWrap},[n.showTotal?r("span",{class:n.prefixCls+"-pagination-total"},[n._v("\n    共"+n._s(n.total)+"条\n  ")]):n._e(),n._v(" "),r("ul",[r("li",{class:(t={},t[n.prefixCls+"-pagination-disabled"]=1===n.currentPage,t),on:{click:n.prev}},[r("Icon",{attrs:{type:"arrow-left"}})],1),n._v(" "),n._l(n.total,function(t){return n.currentPage+n.pageGap+1<t&&t!==n.total&&n.currentPage-n.pageGap-1<t&&1!==t?n._e():r("li",{key:t,class:(e={},e[n.prefixCls+"-pagination-current"]=t===n.currentPage,e)},[n.currentPage+n.pageGap===t&&t!==n.total||n.currentPage-n.pageGap===t&&1!==t?r("a",[n._v("...")]):r("a",{on:{click:function(e){n.changePage(t)}}},[n._v(n._s(t))])]);var e}),n._v(" "),r("li",{class:(e={},e[n.prefixCls+"-pagination-disabled"]=n.currentPage===n.total,e),on:{click:n.next}},[r("Icon",{attrs:{type:"arrow-right"}})],1)],2)])},staticRenderFns:[]};var E={name:"page-pagination",components:{Pagination:n("VU/8")(P,R,!1,function(t){n("6Q+L")},"data-v-336c853a",null).exports}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Pagination",{attrs:{total:5}}),this._v(" "),e("br"),this._v(" "),e("Pagination",{attrs:{total:10,showTotal:""}})],1)},staticRenderFns:[]},U=n("VU/8")(E,F,!1,null,null,null).exports,N={name:"Input",components:{Icon:d},props:{value:[String,Number],minlength:Number,maxlength:Number,placeholder:String,readonly:Boolean,disabled:Boolean,rows:{type:Number,default:2},type:{validator:function(t){return g(t,["text","search","number","textarea"])},default:"text"},clearable:Boolean,prefixIcon:String,suffixIcon:String},data:function(){return{currentValue:this.value}},computed:{inputWrapClass:function(){return["emic-wrap-input"]},inputInnerClass:function(){return[c()({},"emic-input-suffix",this.clearable||this.suffixIcon),c()({},"emic-input-prefix",this.prefixIcon),"textarea"===this.type?"emic-inner-textarea":"emic-inner-input"]}},methods:{handleInput:function(t){var e=t.target.value;this.$emit("input",e),this.setCurrentValue(t.target.value)},handleChange:function(t){this.$emit("change",t.target.value)},setCurrentValue:function(t){this.currentValue=t},handleFocus:function(t){this.$emit("focus",t)},clear:function(t){this.setCurrentValue(""),this.$emit("clear",t)}},watch:{value:function(t){this.setCurrentValue(t)}},created:function(){},mounted:function(){}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.inputWrapClass},["textarea"!==t.type?[t.prefixIcon?n("span",{staticClass:"input-prefix"},[n("Icon",{attrs:{type:t.prefixIcon}})],1):t._e(),t._v(" "),n("input",t._b({class:t.inputInnerClass,domProps:{value:t.currentValue},on:{input:t.handleInput,change:t.handleChange,focus:t.handleFocus}},"input",t.$props,!1)),t._v(" "),n("span",{staticClass:"input-suffix"},[t.clearable&&t.currentValue?n("Icon",{attrs:{type:"error"},on:{click:t.clear}}):t.suffixIcon?n("Icon",{attrs:{type:t.suffixIcon}}):t._e()],1)]:[n("textarea",t._b({class:t.inputInnerClass,domProps:{value:t.currentValue},on:{input:t.handleInput,change:t.handleChange,focus:t.handleFocus}},"textarea",t.$props,!1))]],2)},staticRenderFns:[]};var A={name:"page-input",components:{Input:n("VU/8")(N,W,!1,function(t){n("KRc6")},"data-v-3b24d895",null).exports},data:function(){return{input1:"",input2:""}},methods:{test:function(){}},mounted:function(){}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v('type: "text"  / input1:'+t._s(t.input1))]),t._v(" "),n("Input",{attrs:{placeholder:"请输入内容",maxlength:10},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),t._v(" "),n("p",[t._v('type: "text"  / input2:'+t._s(t.input2))]),t._v(" "),n("Input",{attrs:{placeholder:"请输入内容",type:"textarea",rows:4},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}}),t._v(" "),n("p",[t._v("disabled: true")]),t._v(" "),n("Input",{attrs:{placeholder:"请输入内容",disabled:""}}),t._v(" "),n("p",[t._v("clearable: true")]),t._v(" "),n("Input",{attrs:{placeholder:"请输入内容",clearable:""}}),t._v(" "),n("p",[t._v("prefix-icon")]),t._v(" "),n("Input",{attrs:{placeholder:"请输入内容","prefix-icon":"search"}}),t._v(" "),n("p",[t._v("suffix-icon")]),t._v(" "),n("Input",{attrs:{placeholder:"请输入内容","suffix-icon":"date"}}),t._v(" "),n("Input",{attrs:{placeholder:"请输入内容","suffix-icon":"time"}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("td",[t._v("参数")]),t._v(" "),n("td",[t._v("说明")]),t._v(" "),n("td",[t._v("可选值")]),t._v(" "),n("td",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("类型")]),t._v(" "),n("td",[t._v("[String] text/textrea")]),t._v(" "),n("td",[t._v("text")])]),t._v(" "),n("tr",[n("td",[t._v('rows（type = "textrea" 可用）')]),t._v(" "),n("td",[t._v("textrea行数")]),t._v(" "),n("td",[t._v("[Number]")]),t._v(" "),n("td",[t._v("2")])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",[t._v("是否禁用")]),t._v(" "),n("td",[t._v("[Boolean]")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("clearable")]),t._v(" "),n("td",[t._v("是否可清空")]),t._v(" "),n("td",[t._v("[Boolean]")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("clearable")]),t._v(" "),n("td",[t._v("是否可清空")]),t._v(" "),n("td",[t._v("[Boolean]")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("prefix-icon")]),t._v(" "),n("td",[t._v("前置icon")]),t._v(" "),n("td",[t._v("[String]")]),t._v(" "),n("td",[t._v("/")])]),t._v(" "),n("tr",[n("td",[t._v("suffix-icon")]),t._v(" "),n("td",[t._v("后置icon")]),t._v(" "),n("td",[t._v("[String]")]),t._v(" "),n("td",[t._v("/")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("td",[t._v("事件")]),t._v(" "),n("td",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("foucs")]),t._v(" "),n("td",[t._v("失去焦点时触发")])]),t._v(" "),n("tr",[n("td",[t._v("input")]),t._v(" "),n("td",[t._v("输入时触发")])]),t._v(" "),n("tr",[n("td",[t._v("clear")]),t._v(" "),n("td",[t._v("清空input框时触发（clearable=true时有效）")])])])])}]},L=n("VU/8")(A,j,!1,null,null,null).exports,G={name:"radio",props:{value:[String,Number,Boolean],label:[String,Number],disabled:Boolean},data:function(){return{currentValue:this.value,currentLabel:this.label,group:!1}},computed:{radioWrapClass:function(){return["emic-radio",c()({},"emic-radio-disabled",this.disabled)]},radioIconClass:function(){return["emic-radio-icon",c()({},"emic-radio-icon-checked",this.currentValue===this.currentLabel)]}},methods:{change:function(t){this.group?this.$parent.change(t.target.value):(this.currentValue=!0,this.$emit("input",!0))}},watch:{currentValue:function(t){this.currentValue=t}},mounted:function(){this.$parent;if("radio-group"===this.$parent.$options._componentTag)this.group=!0,this.currentValue=this.value;else{if("boolean"!==b(this.value))throw"value should be true or false";this.currentLabel=this.value?this.currentValue:!this.currentValue}}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{class:t.radioWrapClass},[n("span",{class:t.radioIconClass},[n("input",{attrs:{type:"radio",disabled:t.disabled},domProps:{value:t.currentLabel,checked:t.currentValue===t.currentLabel},on:{change:t.change}})]),t._v(" "),n("span",[t._t("default",[t._v(t._s(t.currentLabel))])],2)])},staticRenderFns:[]},T=n("VU/8")(G,O,!1,null,null,null).exports,z={name:"radio-group",props:{value:[String,Number]},data:function(){return{currentValue:this.value}},methods:{change:function(t){this.currentValue=t,this.$emit("change",t),this.$emit("input",t),this.updateValue()},updateValue:function(){var t=this;this.$children.forEach(function(e){e.currentValue=t.currentValue})}},watch:{value:function(t){this.currentValue=t,this.updateValue()}},mounted:function(){this.updateValue()}},M={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},staticRenderFns:[]},Q=n("VU/8")(z,M,!1,null,null,null).exports;T.Group=Q;var H={name:"page-radio",components:{Radio:T,RadioGroup:Q},data:function(){return{radio1:!1,radio2:!0,radio3:"B",radio4:"1"}}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("- 单个单选框")]),t._v(" "),n("p",[t._v("single - "+t._s(t.radio1))]),t._v(" "),n("Radio",{model:{value:t.radio1,callback:function(e){t.radio1=e},expression:"radio1"}},[t._v("单个单选框")]),t._v(" "),n("p",[t._v("single - "+t._s(t.radio2))]),t._v(" "),n("Radio",{model:{value:t.radio2,callback:function(e){t.radio2=e},expression:"radio2"}},[t._v("单个单选框")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("p",[t._v("- 单选框组")]),t._v(" "),n("p",[t._v("group1 - "+t._s(t.radio3))]),t._v(" "),n("radio-group",{model:{value:t.radio3,callback:function(e){t.radio3=e},expression:"radio3"}},[n("Radio",{attrs:{label:"A",disabled:""}},[t._v("单选框A")]),t._v(" "),n("Radio",{attrs:{label:"B"}},[t._v("单选框B")]),t._v(" "),n("Radio",{attrs:{label:"C"}},[t._v("单选框C")])],1),t._v(" "),n("p",[t._v("group2 - "+t._s(t.radio4))]),t._v(" "),n("radio-group",{model:{value:t.radio4,callback:function(e){t.radio4=e},expression:"radio4"}},[n("Radio",{attrs:{label:"1"}},[t._v("单选框1")]),t._v(" "),n("Radio",{attrs:{label:"2"}},[t._v("单选框2")]),t._v(" "),n("Radio",{attrs:{label:"3"}},[t._v("单选框3")])],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("td",[t._v("属性")]),t._v(" "),n("td",[t._v("说明")])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("data")]),t._v(" "),n("td",[t._v("\n          双向绑定数据\n          "),n("br"),t._v("\n          单独使用 "),n("code",[t._v("Radio")]),t._v(" 时 类型只能为 [Boolean]\n          "),n("br"),t._v("\n          使用  "),n("code",[t._v("RadioGroup")]),t._v("时，类型可以为 [String, Number, Boolean] ")])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",[t._v("[Boolean]是否置灰")])]),t._v(" "),n("tr",[n("td",[t._v("label")]),t._v(" "),n("td",[t._v("[String, Number]当前选项的value值")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("td",[this._v("事件名")]),this._v(" "),e("td",[this._v("说明")])]),this._v(" "),e("tbody",[e("tr",[e("td",[this._v("change")]),this._v(" "),e("td",[this._v("选项状态发生变化时")])])])])}]},D=n("VU/8")(H,q,!1,null,null,null).exports,K={name:"checkbox",components:{Icon:d},props:{value:[String,Number,Boolean],disabled:Boolean,label:[String,Number,Boolean]},computed:{checkboxWrapClass:function(){return["emic-checkbox",c()({},"emic-checkbox-disabled",this.disabled)]}},data:function(){return{checked:!1,group:!1}},methods:{change:function(t){if(this.disabled)return!1;this.checked=t.target.checked,this.group?this.$parent.change():this.$emit("input",this.checked)}},mounted:function(){var t=this;this.$parent;if("CheckboxGroup"===this.$parent.$options._componentTag)this.group=!0,this.$parent.value.forEach(function(e){e===t.label&&(t.checked=!0)});else{if("boolean"!==b(this.value))throw"value should be true or false";this.checked=this.value}}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{class:t.checkboxWrapClass},[n("Icon",{attrs:{type:t.checked?"checked":"unchecked"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox",disabled:t.disabled},domProps:{value:t.label,checked:Array.isArray(t.checked)?t._i(t.checked,t.label)>-1:t.checked},on:{change:[function(e){var n=t.checked,a=e.target,r=!!a.checked;if(Array.isArray(n)){var s=t.label,i=t._i(n,s);a.checked?i<0&&(t.checked=n.concat([s])):i>-1&&(t.checked=n.slice(0,i).concat(n.slice(i+1)))}else t.checked=r},t.change]}}),t._v(" "),t._t("default",[t._v(t._s(t.label))])],2)},staticRenderFns:[]},Y=n("VU/8")(K,X,!1,null,null,null).exports,J={name:"checkbox-group",props:{value:{type:Array,default:[]}},data:function(){return{currentValue:this.value}},methods:{change:function(){this.updateModel(),this.$emit("input",this.currentValue)},updateModel:function(){var t=[];this.$children.forEach(function(e){"Checkbox"===e.$options._componentTag&&e.checked&&t.push(e.label)}),this.currentValue=t}},mounted:function(){this.updateModel()}},Z={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},staticRenderFns:[]},tt=n("VU/8")(J,Z,!1,null,null,null).exports;Y.Group=tt;var et={name:"page-checkbox",components:{Checkbox:Y,CheckboxGroup:tt},data:function(){return{data1:!1,data2:["2"]}}},nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("单个Checkbox : "+t._s(t.data1))]),t._v(" "),n("Checkbox",{model:{value:t.data1,callback:function(e){t.data1=e},expression:"data1"}},[t._v(" checkbox ")]),t._v(" "),n("Checkbox",{attrs:{disabled:""},model:{value:t.data1,callback:function(e){t.data1=e},expression:"data1"}},[t._v(" checkbox ")]),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("CheckboxGroup : "+t._s(t.data2))]),t._v(" "),n("CheckboxGroup",{model:{value:t.data2,callback:function(e){t.data2=e},expression:"data2"}},[n("Checkbox",{attrs:{label:"1"}},[t._v(" 香蕉 ")]),t._v(" "),n("Checkbox",{attrs:{label:"2",disabled:""}},[t._v(" 苹果 ")]),t._v(" "),n("Checkbox",{attrs:{label:"3"}},[t._v(" 例子 ")])],1)],1)},staticRenderFns:[]},at=n("VU/8")(et,nt,!1,null,null,null).exports,rt={name:"page-icon",components:{Icon:d}},st={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("表单类 from")]),t._v(" "),n("Icon",{attrs:{type:"search"}}),t._v(" "),n("Icon",{attrs:{type:"search-2"}}),t._v(" "),n("Icon",{attrs:{type:"date"}}),t._v(" "),n("Icon",{attrs:{type:"time"}}),t._v(" "),n("Icon",{attrs:{type:"unchecked"}}),t._v(" "),n("Icon",{attrs:{type:"checked"}}),t._v(" "),n("Icon",{attrs:{type:"upload"}}),t._v(" "),n("Icon",{attrs:{type:"refresh"}}),t._v(" "),n("h3"),t._v(" "),n("Icon",{attrs:{type:"close"}}),t._v(" "),n("h3",[t._v("信息提示类 tips")]),t._v(" "),n("Icon",{attrs:{type:"info"}}),t._v(" "),n("Icon",{attrs:{type:"error"}}),t._v(" "),n("Icon",{attrs:{type:"success"}}),t._v(" "),n("Icon",{attrs:{type:"warning"}}),t._v(" "),n("h3",[t._v("方向类 direction")]),t._v(" "),n("Icon",{attrs:{type:"arrow-left"}}),t._v(" "),n("Icon",{attrs:{type:"arrow-up"}}),t._v(" "),n("Icon",{attrs:{type:"arrow-right"}}),t._v(" "),n("Icon",{attrs:{type:"arrow-down"}}),t._v(" "),n("h3",[t._v("loading")]),t._v(" "),n("Icon",{attrs:{type:"loading"}}),t._v(" "),n("Icon",{attrs:{type:"loading_icon"}}),t._v(" "),n("h3",[t._v("table")]),t._v(" "),n("Icon",{attrs:{type:"more"}}),t._v(" "),n("Icon",{attrs:{type:"trash"}}),t._v(" "),n("Icon",{attrs:{type:"edit"}}),t._v(" "),n("Icon",{attrs:{type:"add"}}),t._v(" "),n("h3",[t._v("view")]),t._v(" "),n("Icon",{attrs:{type:"order"}}),t._v(" "),n("Icon",{attrs:{type:"tips"}})],1)},staticRenderFns:[]};var it=n("VU/8")(rt,st,!1,function(t){n("WXd6")},"data-v-d6e38fe2",null).exports,ot=n("Gu7T"),ct=n.n(ot),lt={name:"upload",components:{Icon:d},props:{action:{type:String,required:!0},multiple:{type:Boolean,default:!1},data:{type:Object,default:function(){return{}}},accept:String,defaultFileList:{type:Array,default:function(){return[]}}},computed:{uploadWrapClass:function(){return["emic-upload"]},fileListClass:function(){return["emic-file-list"]}},data:function(){return{fileList:this.defaultFileList,resultIcon:"success"}},methods:{handleClick:function(){this.$refs.input.click()},change:function(t){var e=t.target.files;this.multiple?this.fileList=[].concat(ct()(this.fileList),ct()(e)):this.fileList=[e[0]],console.log(this.fileList)},post:function(t){var e=this;(new FormData).append(this.name,t),ajax({headers:this.headers,withCredentials:this.withCredentials,file:t,data:this.data,filename:this.name,action:this.action,onProgress:function(n){e.handleProgress(n,t)},onSuccess:function(n){e.handleSuccess(n,t)},onError:function(n,a){e.handleError(n,a,t)}})}}},ut={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.uploadWrapClass},[n("label",{on:{click:t.handleClick}},[t._t("default"),t._v(" "),n("input",{ref:"input",attrs:{type:"file",name:"file",multiple:t.multiple},on:{change:t.change}})],2),t._v(" "),t._t("tip"),t._v(" "),n("transition-group",{class:t.fileListClass,attrs:{tag:"ul",name:"list"}},t._l(t.fileList,function(e,a){return n("li",{key:a},[n("Icon",{attrs:{type:"order"}}),t._v(" "),n("span",{staticClass:"file-list-name"},[t._v(t._s(e.name))]),t._v(" "),n("Icon",{staticClass:"icon-result",attrs:{type:t.resultIcon}})],1)}))],2)},staticRenderFns:[]},dt={name:"page-upload",components:{Upload:n("VU/8")(lt,ut,!1,null,null,null).exports,Button:_}},pt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{}},[e("Upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/"}},[e("Button",{attrs:{icon:"upload"}},[this._v("上传文件")])],1)],1)},staticRenderFns:[]},vt=n("VU/8")(dt,pt,!1,null,null,null).exports,_t={name:"progress-bar",props:{type:{type:String,default:"line",validator:function(t){return g(t,["line","circle"])}},percent:{type:Number,default:0,validator:function(t){return t>=0&&t<=100}},status:{type:String,default:"normal",validator:function(t){return g(t,["normal","success","error"])}},strokeWidth:{type:Number,default:6},showInfo:{type:Boolean,default:!0},infoInside:Boolean},computed:{progressWrapClass:function(){return["emic-progress","emic-progress-"+this.status,{"progress-show-info":this.showInfo}]},progressOuterStyle:function(){return{height:this.strokeWidth+"px"}},progressInnerStyle:function(){return{width:this.percent+"%",lineHeight:this.strokeWidth-2+"px"}},radius:function(){return 50-this.strokeWidth/2},pathString:function(){return"M 50,50 m 0,-"+this.radius+"\n                a "+this.radius+","+this.radius+" 0 1 1 0,"+2*this.radius+"\n                a "+this.radius+","+this.radius+" 0 1 1 0,-"+2*this.radius},len:function(){return 2*Math.PI*this.radius},pathStyle:function(){return{"stroke-dasharray":this.len+"px "+this.len+"px","stroke-dashoffset":(100-this.percent)/100*this.len+"px",transition:"stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease"}}},mounted:function(){}},ht={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.progressWrapClass},["line"===t.type?[n("div",{staticClass:"progress-bar"},[n("div",{staticClass:"progress-bar-outer",style:t.progressOuterStyle},[n("div",{staticClass:"progress-bar-inner",style:t.progressInnerStyle},[t.infoInside?n("span",{staticClass:"progress-info"},[t._v(t._s(t.percent)+" %")]):t._e()])])]),t._v(" "),t.infoInside?t._e():t._t("default",[n("span",{staticClass:"progress-info"},[t._v(t._s(t.percent)+" %")])])]:[n("svg",{attrs:{viewBox:"0 0 100 100"}},[n("path",{staticClass:"progress-circle-track",attrs:{"stroke-width":t.strokeWidth,d:t.pathString}}),t._v(" "),n("path",{staticClass:"progress-circle-path",style:t.pathStyle,attrs:{"stroke-width":t.strokeWidth,d:t.pathString}})]),t._v(" "),n("div",{staticClass:"progress-circle-inner"},[t._t("default",[t._v("\n       "+t._s(t.percent)+" %\n       ")])],2)]],2)},staticRenderFns:[]},ft={name:"page-progress",components:{Progress:n("VU/8")(_t,ht,!1,null,null,null).exports,Icon:d,Button:_},data:function(){return{data:60}},methods:{add:function(){if(this.data+10>100)return 100;this.data+=10},minus:function(){if(this.data-10<0)return 0;this.data=this.data-10}}},mt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticStyle:{width:"350px"}},[n("h3",[t._v('type: "line"')]),t._v(" "),n("Progress",{attrs:{percent:50}}),t._v(" "),n("Progress",{attrs:{percent:20,status:"error"}}),t._v(" "),n("Progress",{attrs:{percent:80,status:"success"}}),t._v(" "),n("Progress",{attrs:{percent:50,status:"success"}},[n("Icon",{attrs:{type:"success"}}),t._v("成功")],1),t._v(" "),n("Progress",{attrs:{percent:50,strokeWidth:15,"info-inside":!0}})],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("h3",[t._v('type: "circle"')]),t._v(" "),n("div",{staticStyle:{width:"100px"}},[n("Progress",{attrs:{percent:50,type:"circle"}}),t._v(" "),n("Progress",{attrs:{percent:t.data,type:"circle",status:"success"}}),t._v(" "),n("Button",{on:{click:t.add}},[t._v("+")]),t._v(" "),n("Button",{on:{click:t.minus}},[t._v("-")]),t._v(" "),n("Progress",{attrs:{percent:10,type:"circle",status:"error"}},[n("Icon",{attrs:{type:"close"}})],1)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("td",[t._v("参数")]),t._v(" "),n("td",[t._v("说明")]),t._v(" "),n("td",[t._v("默认值")])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v('[String]进度条类型："line"/"circle"')]),t._v(" "),n("td",[t._v('"line"')])]),t._v(" "),n("tr",[n("td",[t._v("percent")]),t._v(" "),n("td",[t._v("[Number]百分比")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("status")]),t._v(" "),n("td",[t._v("[String]进度条状态")]),t._v(" "),n("td",[t._v('"normal"')])]),t._v(" "),n("tr",[n("td",[t._v("strokeWidth")]),t._v(" "),n("td",[t._v("[Number]进度条宽度")]),t._v(" "),n("td",[t._v("6（px）")])]),t._v(" "),n("tr",[n("td",[t._v("show-info")]),t._v(" "),n("td",[t._v("[Boolean]是否展示其他信息")]),t._v(" "),n("td",[t._v("true")])]),t._v(" "),n("tr",[n("td",[t._v("info-inside")]),t._v(" "),n("td",[t._v("[Boolean]信息是否展示在内部")]),t._v(" "),n("td",[t._v("false")])])])])}]},gt=n("VU/8")(ft,mt,!1,null,null,null).exports;a.a.use(i.a);var bt=new i.a({routes:[{path:"/",redirect:"/button"},{path:"/icon",name:"pageIcon",component:it},{path:"/button",name:"pageButton",component:m},{path:"/alert",name:"pageAlert",component:w},{path:"/switch",name:"pageSwitch",component:S},{path:"/pagination",name:"pagePagination",component:U},{path:"/input",name:"pageInput",component:L},{path:"/radio",name:"pageRadio",component:D},{path:"/checkbox",name:"pageCheckbox",component:at},{path:"/upload",name:"pageUpload",component:vt},{path:"/progress",name:"pageProgress",component:gt}]});n("yh13");a.a.config.productionTip=!1,new a.a({el:"#app",router:bt,components:{App:s},template:"<App/>"})},WXd6:function(t,e){},dWfY:function(t,e){},"kIN+":function(t,e){},mQOh:function(t,e){},"uhj/":function(t,e){},yh13:function(t,e){},yrsl:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f70afc385d0bd185b21e.js.map