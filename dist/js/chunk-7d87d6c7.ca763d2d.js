(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d87d6c7"],{"0283":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ordering"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/dishes"}}},[t._v("菜品管理")]),n("el-breadcrumb-item",[t._v("添加菜品")])],1),n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loadmen,expression:"loadmen",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"content-view-ten"},[n("div",{staticClass:"image-view-title"},[n("div",{staticClass:"image-list dishes-title"},[t._v("菜品类目")]),n("div",[n("el-select",{attrs:{placeholder:"请选择菜品类目"},model:{value:t.catevalue,callback:function(e){t.catevalue=e},expression:"catevalue"}},t._l(t.category,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),n("div",{staticClass:"image-view-title"},[n("div",{staticClass:"image-list dishes-title"},[t._v("菜品名称")]),n("el-input",{attrs:{type:"text",placeholder:"请输入菜品名称",clearable:!0},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("div",{staticClass:"image-view-title"},[n("div",{staticClass:"image-list dishes-title"},[t._v("菜品价格")]),n("div",{staticClass:"establish",staticStyle:{"margin-bottom":"20px"}},[n("img",{attrs:{src:i("1a2c")}}),n("p",{on:{click:function(e){return t.estab_lish(!0)}}},[t._v("创建规格(选填)")])]),n("div",[t.att_hide?n("div",{staticClass:"att-name-view"},[n("p",[t._v("属性名")]),n("div",{staticClass:"att-name"},[n("el-input",{attrs:{type:"text",placeholder:"输入属性名,比如口味",clearable:!0},model:{value:t.att_name,callback:function(e){t.att_name=e},expression:"att_name"}}),n("img",{attrs:{src:i("067c")},on:{click:function(e){return t.estab_lish(!1)}}})],1)]):t._e(),n("div",{staticClass:"sub-spec"},[t._l(t.sub_data,(function(e,r){return n("div",{staticClass:"sub-spec-dele"},[t.att_hide?n("el-input",{attrs:{type:"text",placeholder:""==t.att_name?"请输入口味":"请输入"+t.att_name,clearable:!0},model:{value:e.attribute,callback:function(i){t.$set(e,"attribute",i)},expression:"item.attribute"}}):t._e(),n("el-input",{attrs:{min:"0",type:"number",placeholder:"输入菜品价格",clearable:!0},model:{value:e.unitprice,callback:function(i){t.$set(e,"unitprice",i)},expression:"item.unitprice"}}),n("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"选择菜品单位"},model:{value:e.unit,callback:function(i){t.$set(e,"unit",i)},expression:"item.unit"}},t._l(t.company,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),"自定义单位"==e.unit?n("el-input",{attrs:{type:"text",placeholder:"输入自定义单位",clearable:!0},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}}):t._e(),"自定义单位"==e.unit?n("div",[n("el-button",{staticStyle:{width:"100%",padding:"12px 20px"},attrs:{type:"success",size:"medium",loading:t.unitload,disabled:t.unitload},on:{click:function(e){return t.dishunit()}}},[t._v("添加自定义单位")])],1):t._e(),t.sub_data.length>1?n("img",{attrs:{src:i("067c")},on:{click:function(e){return t.remove(r)}}}):t._e()],1)})),t.att_hide?n("div",{staticClass:"establish"},[n("img",{attrs:{src:i("1a2c")}}),n("p",{on:{click:function(e){return t.add_to()}}},[t._v("添加子属性")])]):t._e()],2)])]),n("div",{staticClass:"image-view-title",staticStyle:{display:"none"}},[n("div",{staticClass:"image-list dishes-title"},[t._v("菜品价格(元)")]),n("div",{staticClass:"upload-option"},[n("el-input",{attrs:{min:"0",type:"number",placeholder:"请输入菜品价格",clearable:!0},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),n("el-select",{attrs:{placeholder:"请选择菜品单位"},model:{value:t.compvalue,callback:function(e){t.compvalue=e},expression:"compvalue"}},t._l(t.company,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),"自定义单位"==t.compvalue?n("el-input",{attrs:{type:"text",placeholder:"请输入自定义单位",clearable:!0},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}}):t._e(),"自定义单位"==t.compvalue?n("div",{staticStyle:{"margin-right":"0 !important"}},[n("el-button",{staticStyle:{width:"100%",padding:"12px 20px"},attrs:{type:"success",size:"medium",loading:t.unitload,disabled:t.unitload},on:{click:function(e){return t.dishunit()}}},[t._v("添加自定义单位")])],1):t._e()],1)]),n("div",{staticClass:"image-view-title"},[n("div",{staticClass:"image-list dishes-title"},[t._v("菜品图片")]),n("div",[n("el-upload",{attrs:{action:t.action,"list-type":"picture-card",name:"file",accept:".jpg,.png,.webp,.jfif,.jpeg",limit:1,"on-remove":t.bannerRemove,"on-success":t.bannerSuccess,"on-preview":t.handlepreview,multiple:!1,"on-error":t.onErr,"before-upload":t.project,"file-list":t.goodsimage}},[n("i",{staticClass:"el-icon-plus"})]),n("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)]),n("div",{staticClass:"image-button"},[n("el-button",{attrs:{type:"success",size:"medium",loading:t.load,disabled:t.load},on:{click:function(e){return t.bTn(t.but)}}},[t._v(t._s(t.but))])],1)])],1)},r=[],a=(i("a450"),i("4890"),i("1bc7"),i("0c84"),i("e186"),i("febe")),o={data:function(){return{loadmen:!1,category:[],company:[],action:this.Urls.m().uploadres,load:!1,unitload:!1,catevalue:"",name:"",att_name:"",price:"",compvalue:"",goodsimage:[],unit:"",but:"上架菜品",dialogImageUrl:"",dialogVisible:!1,pagenum:0,custom:!1,id:"",att_hide:!1,sub_data:[{attribute:"",unitprice:"",unit:""}],attribute:"",tri_att:""}},methods:{handlepreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},onErr:function(t){this.loadmen=!1,this.$message.error("上传失败,尝试重新上传")},project:function(t){this.loadmen=!0},bannerRemove:function(t,e){this.goodsimage=[]},bannerSuccess:function(t,e,i){this.goodsimage.push({url:t.data,uid:e.uid}),this.loadmen=!1},obtaincate:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,i,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=new this.Request(this.Urls.m().obtaincate+"?page="+this.pagenum).modeget(),i=new this.Request(this.Urls.m().obtainunit).modeget(),Promise.all([e,i]).then((function(t){n.category=t[0].data.data.result,n.company=t[1].data.data,n.company.push({label:"自定义单位",value:"自定义单位",_id:"980",unid:"980"})})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dishunit:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.unitload=!0,e={unit:this.unit},t.prev=2,t.next=5,new this.Request(this.Urls.m().dishunit,this.$qs.stringify(e)).modepost();case 5:i=t.sent,200!=i.status?new this.mytitle(this.$message,"warning",i.data.msg).funtitle():(new this.mytitle(this.$message,"success",i.data.msg).funtitle(),this.compvalue="",this.unit="",this.obtaincate()),this.unitload=!1,t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](2),this.unitload=!1,new this.mytitle(this.$message,"error","服务器发生错误,请重试").funtitle();case 14:case"end":return t.stop()}}),t,this,[[2,10]])})));function e(){return t.apply(this,arguments)}return e}(),bTn:function(t){var e=this;this.load=!0;var i=this.category.filter((function(t,i){return t.value==e.catevalue})),n=0==i.length?"":i[0].cid,r={id:this.id,category:this.catevalue,name:this.name,att_hide:this.att_hide,att_name:this.att_name,specs:JSON.stringify(this.sub_data),image:JSON.stringify(this.goodsimage),value:n};"上架菜品"==t?this.purequest(r,t,this.Urls.m().uploaddishes):this.purequest(r,t,this.Urls.m().modifydishes)},purequest:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e,i,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new this.Request(n,this.$qs.stringify(e)).modepost();case 3:r=t.sent,200!=r.status?new this.mytitle(this.$message,"warning",r.data.msg).funtitle():(new this.mytitle(this.$message,"success",r.data.msg).funtitle(),this.$router.push({name:"dishes"})),this.load=!1,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),this.load=!1,new this.mytitle(this.$message,"error","服务器发生错误,请重试").funtitle();case 12:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(e,i,n){return t.apply(this,arguments)}return e}(),estab_lish:function(t){this.att_hide=t,0==t&&(this.att_name="",this.sub_data=[],this.sub_data.push({attribute:"",unitprice:"",unit:""}))},add_to:function(){this.sub_data.push({attribute:"",unitprice:"",unit:""}),console.log(this.sub_data)},remove:function(t){this.sub_data.splice(t,1),console.log(this.sub_data)}},created:function(){var t=this.$route.params;this.obtaincate(),"{}"!=JSON.stringify(t)&&(this.but="修改提交",this.id=t.item._id,this.catevalue=t.item.category,this.name=t.item.name,this.goodsimage=t.item.image,this.att_hide=t.item.att_hide,this.att_name=t.item.att_name,this.sub_data=t.item.specs)}},s=o,c=(i("c59b"),i("cba8")),u=Object(c["a"])(s,n,r,!1,null,"78a73a0a",null);e["default"]=u.exports},"0451":function(t,e,i){var n=i("9cff"),r=i("d1cb"),a=i("839a")("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}},"067c":function(t,e,i){t.exports=i.p+"img/yichu.32025e54.svg"},"0c84":function(t,e,i){"use strict";var n=i("1663")(!0);i("120f")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=n(e,i),this._i+=t.length,{value:t,done:!1})}))},1663:function(t,e,i){var n=i("212e"),r=i("3ab0");t.exports=function(t){return function(e,i){var a,o,s=String(r(e)),c=n(i),u=s.length;return c<0||c>=u?t?"":void 0:(a=s.charCodeAt(c),a<55296||a>56319||c+1===u||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):a:t?s.slice(c,c+2):o-56320+(a-55296<<10)+65536)}}},"1a2c":function(t,e,i){t.exports=i.p+"img/tianjia.705126d8.svg"},"1bc7":function(t,e,i){for(var n=i("25ba"),r=i("93ca"),a=i("84e8"),o=i("0b34"),s=i("065d"),c=i("953d"),u=i("839a"),l=u("iterator"),h=u("toStringTag"),d=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=r(f),m=0;m<p.length;m++){var v,g=p[m],y=f[g],b=o[g],w=b&&b.prototype;if(w&&(w[l]||s(w,l,d),w[h]||s(w,h,g),c[g]=d,y))for(v in n)w[v]||a(w,v,n[v],!0)}},"3b1e":function(t,e,i){},4890:function(t,e,i){"use strict";var n=i("e99b"),r=i("e9aa")(2);n(n.P+n.F*!i("95b6")([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},"70f2":function(t,e,i){var n=i("0451");t.exports=function(t,e){return new(n(t))(e)}},"95b6":function(t,e,i){"use strict";var n=i("0926");t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},c59b:function(t,e,i){"use strict";i("3b1e")},d1cb:function(t,e,i){var n=i("cea2");t.exports=Array.isArray||function(t){return"Array"==n(t)}},e186:function(t,e,i){var n=function(t){"use strict";var e,i=Object.prototype,n=i.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,i){return t[e]=i}}function u(t,e,i,n){var r=e&&e.prototype instanceof v?e:v,a=Object.create(r.prototype),o=new j(n||[]);return a._invoke=k(t,i,o),a}function l(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function v(){}function g(){}function y(){}var b={};c(b,a,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(O([])));_&&_!==i&&n.call(_,a)&&(b=_);var x=y.prototype=v.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function i(r,a,o,s){var c=l(t[r],t,a);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){i("next",t,o,s)}),(function(t){i("throw",t,o,s)})):e.resolve(h).then((function(t){u.value=t,o(u)}),(function(t){return i("throw",t,o,s)}))}s(c.arg)}var r;function a(t,n){function a(){return new e((function(e,r){i(t,n,e,r)}))}return r=r?r.then(a,a):a()}this._invoke=a}function k(t,e,i){var n=h;return function(r,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===r)throw a;return R()}i.method=r,i.arg=a;while(1){var o=i.delegate;if(o){var s=C(o,i);if(s){if(s===m)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===h)throw n=p,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=f;var c=l(t,e,i);if("normal"===c.type){if(n=i.done?p:d,c.arg===m)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(n=p,i.method="throw",i.arg=c.arg)}}}function C(t,i){var n=t.iterator[i.method];if(n===e){if(i.delegate=null,"throw"===i.method){if(t.iterator["return"]&&(i.method="return",i.arg=e,C(t,i),"throw"===i.method))return m;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=l(n,t.iterator,i.arg);if("throw"===r.type)return i.method="throw",i.arg=r.arg,i.delegate=null,m;var a=r.arg;return a?a.done?(i[t.resultName]=a.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,m):a:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var i=t[a];if(i)return i.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function i(){while(++r<t.length)if(n.call(t,r))return i.value=t[r],i.done=!1,i;return i.value=e,i.done=!0,i};return o.next=o}}return{next:R}}function R(){return{value:e,done:!0}}return g.prototype=y,c(x,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(S.prototype),c(S.prototype,o,(function(){return this})),t.AsyncIterator=S,t.async=function(e,i,n,r,a){void 0===a&&(a=Promise);var o=new S(u(e,i,n,r),a);return t.isGeneratorFunction(i)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(x),c(x,s,"Generator"),c(x,a,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function r(n,r){return s.type="throw",s.arg=t,i.next=n,r&&(i.method="next",i.arg=e),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),T(i),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var r=n.arg;T(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:O(t),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},e9aa:function(t,e,i){var n=i("1e4d"),r=i("1b96"),a=i("8078"),o=i("201c"),s=i("70f2");t.exports=function(t,e){var i=1==t,c=2==t,u=3==t,l=4==t,h=6==t,d=5==t||h,f=e||s;return function(e,s,p){for(var m,v,g=a(e),y=r(g),b=n(s,p,3),w=o(y.length),_=0,x=i?f(e,w):c?f(e,0):void 0;w>_;_++)if((d||_ in y)&&(m=y[_],v=b(m,_,g),t))if(i)x[_]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return _;case 2:x.push(m)}else if(l)return!1;return h?-1:u||l?l:x}}},febe:function(t,e,i){"use strict";function n(t,e,i,n,r,a,o){try{var s=t[a](o),c=s.value}catch(u){return void i(u)}s.done?e(c):Promise.resolve(c).then(n,r)}function r(t){return function(){var e=this,i=arguments;return new Promise((function(r,a){var o=t.apply(e,i);function s(t){n(o,r,a,s,c,"next",t)}function c(t){n(o,r,a,s,c,"throw",t)}s(void 0)}))}}i.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=chunk-7d87d6c7.ca763d2d.js.map