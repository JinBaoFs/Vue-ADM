(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6be93f0e"],{"05ad":function(t,e,i){},1146:function(t,e,i){},"4a4d":function(t,e,i){"use strict";i.r(e);var n,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[i("div",{staticClass:"search-header"},[i("a",{staticClass:"search-goback",attrs:{href:"javascript:history.go(-1)"}}),i("keep-alive",{attrs:{include:"Search"}},[i("van-search",{staticClass:"search-sah",attrs:{background:"none",placeholder:"高档画册","show-action":""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[i("div",{attrs:{slot:"action"},on:{click:function(e){return t.onSearch(t.value)}},slot:"action"},[t._v("搜索")])])],1)],1),i("div",{staticClass:"search-wrapper"},[i("p",[t._v("热门搜索")]),i("ul",t._l(t.recommend,function(e,n){return i("li",{key:n},[i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return t.SearchProduct(e)}}},[t._v("\n\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t")])])}),0)]),i("Footer")],1)},a=[],r=i("bd86"),c=(i("5852"),i("d961")),o=i("e413"),l={data:function(){return{value:"",recommend:null}},components:(n={},Object(r["a"])(n,c["a"].name,c["a"]),Object(r["a"])(n,"Footer",o["a"]),n),methods:{onSearch:function(t){this.$router.push({name:"ProductList",query:{keyword:t}})},SearchProduct:function(t){this.value=t,this.$router.push({name:"ProductList",query:{keyword:t}})}},created:function(){var t=this;this.$axios.get("http://www.ggrsc.com/mobile/index.php",{params:{act:"index",op:"search_key_list"}}).then(function(e){t.recommend=e.data.datas.list}).catch(function(t){console.log(t)})}},u=l,h=(i("a5d7"),i("2877")),f=Object(h["a"])(u,s,a,!1,null,null,null);e["default"]=f.exports},5246:function(t,e,i){"use strict";i("68ef"),i("8a0b")},"565f":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("c31d"),r=i("a142"),c=i("ad06"),o=i("7744"),l=i("dfaf"),u=Object(r["i"])("field"),h=u[0],f=u[1];e["a"]=h({inheritAttrs:!1,props:Object(a["a"])({},l["a"],{error:Boolean,leftIcon:String,rightIcon:String,readonly:Boolean,clearable:Boolean,labelAlign:String,inputAlign:String,onIconClick:Function,autosize:[Boolean,Object],errorMessage:String,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(r["c"])(this.value)&&!this.readonly},listeners:function(){return Object(a["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur})}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){void 0===t&&(t=this.$refs.input);var e=t,i=e.value,n=this.$attrs.maxlength;return"number"===this.type&&Object(r["c"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),i},onInput:function(t){this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t)},onClickLeftIcon:function(){this.$emit("click-left-icon")},onClickRightIcon:function(){this.$emit("click-icon"),this.$emit("click-right-icon"),this.onIconClick&&this.onIconClick()},onClear:function(t){t.preventDefault(),this.$emit("input",""),this.$emit("clear")},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),n=e>=48&&e<=57||46===e&&i||45===e;n||t.preventDefault()}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(r["e"])(this.autosize)){var i=this.autosize,n=i.maxHeight,s=i.minHeight;n&&(e=Math.min(e,n)),s&&(e=Math.max(e,s))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e={ref:"input",class:f("control",this.inputAlign),domProps:{value:this.value},attrs:Object(a["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners};return"textarea"===this.type?t("textarea",s()([{},e])):t("input",s()([{attrs:{type:this.type}},e]))},renderLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:f("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(c["a"],{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||e("icon")||this.rightIcon||this.icon;if(i)return t("div",{class:f("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||e("icon")||t(c["a"],{attrs:{name:this.rightIcon||this.icon}})])}},render:function(t){var e,i=this.slots,n=this.labelAlign,s={icon:this.renderLeftIcon};return i("label")&&(s.title=function(){return i("label")}),t(o["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,titleClass:f("label",n)},class:f((e={error:this.error,disabled:this.$attrs.disabled},e["label-"+n]=n,e["min-height"]="textarea"===this.type&&!this.autosize,e)),scopedSlots:s},[t("div",{class:f("body")},[this.renderInput(),this.showClear&&t(c["a"],{attrs:{name:"clear"},class:f("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),i("button")&&t("div",{class:f("button")},[i("button")])]),this.errorMessage&&t("div",{class:f("error-message")},[this.errorMessage])])}})},5852:function(t,e,i){"use strict";i("68ef"),i("1146"),i("f032")},"6b41":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("a142"),r=i("ba31"),c=i("ad06"),o=Object(a["i"])("nav-bar"),l=o[0],u=o[1];function h(t,e,i,n){return t("div",s()([{class:[u({fixed:e.fixed}),{"van-hairline--bottom":e.border}],style:{zIndex:e.zIndex}},Object(r["b"])(n)]),[t("div",{class:u("left"),on:{click:n.listeners["click-left"]||a["g"]}},[i.left?i.left():[e.leftArrow&&t(c["a"],{class:u("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:u("text")},[e.leftText])]]),t("div",{class:[u("title"),"van-ellipsis"]},[i.title?i.title():e.title]),t("div",{class:u("right"),on:{click:n.listeners["click-right"]||a["g"]}},[i.right?i.right():e.rightText&&t("span",{class:u("text")},[e.rightText])])])}h.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e["a"]=l(h)},7744:function(t,e,i){"use strict";var n=i("c31d"),s=i("2638"),a=i.n(s),r=i("a142"),c=i("dfaf"),o=i("ba31"),l=i("48f4"),u=i("ad06"),h=Object(r["i"])("cell"),f=h[0],d=h[1];function b(t,e,i,n){var s=e.icon,c=e.size,h=e.title,f=e.label,b=e.value,p=e.isLink,v=e.arrowDirection,m=i.title||Object(r["c"])(h),g=i.default||Object(r["c"])(b),k=m&&t("div",{class:[d("title"),e.titleClass]},[i.title?i.title():t("span",[h]),f&&t("div",{class:[d("label"),e.labelClass]},[f])]),x=g&&t("div",{class:[d("value",{alone:!i.title&&!h}),e.valueClass]},[i.default?i.default():t("span",[b])]),y=i.icon?i.icon():s&&t(u["a"],{class:d("left-icon"),attrs:{name:s}}),$=i["right-icon"],I=$?$():p&&t(u["a"],{class:d("right-icon"),attrs:{name:v?"arrow-"+v:"arrow"}}),j=function(t){Object(o["a"])(n,"click",t),Object(l["a"])(n)},S={center:e.center,required:e.required,borderless:!e.border,clickable:p||e.clickable};return c&&(S[c]=c),t("div",a()([{class:d(S),on:{click:j}},Object(o["b"])(n)]),[y,k,x,I,i.extra&&i.extra()])}b.props=Object(n["a"])({},c["a"],l["c"],{clickable:Boolean,arrowDirection:String}),e["a"]=f(b)},"8a0b":function(t,e,i){},9312:function(t,e,i){},a5d7:function(t,e,i){"use strict";var n=i("05ad"),s=i.n(n);s.a},ae73:function(t,e,i){},d961:function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("c31d"),r=i("a142"),c=i("565f"),o=Object(r["i"])("search"),l=o[0],u=o[1],h=o[2];e["a"]=l({inheritAttrs:!1,props:{value:String,label:String,showAction:Boolean,shape:{type:String,default:"square"},background:{type:String,default:"#ffffff"}},computed:{listeners:function(){return Object(a["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress})}},methods:{onInput:function(t){this.$emit("input",t)},onKeypress:function(t){13===t.keyCode&&(t.preventDefault(),this.$emit("search",this.value)),this.$emit("keypress",t)},onBack:function(){this.$emit("input",""),this.$emit("cancel")},renderLabel:function(){var t=this.$createElement;return this.slots("label")?this.slots("label"):this.label&&t("div",{class:u("label")},[this.label])}},render:function(t){var e=this,i=this.showAction,n={attrs:this.$attrs,on:this.listeners},a={};return this.slots("left-icon")&&(a["left-icon"]=function(){return e.slots("left-icon")}),t("div",{class:u({"show-action":i}),style:{background:this.background}},[t("div",{class:u("content",[this.shape])},[this.renderLabel(),t(c["a"],s()([{attrs:{clearable:!0,type:"search",value:this.value,border:!1,leftIcon:"search"},scopedSlots:a},n]))]),i&&t("div",{class:u("action")},[this.slots("action")||t("div",{on:{click:this.onBack}},[h("cancel")])])])}})},dfaf:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,titleClass:null,valueClass:null,labelClass:null,title:[String,Number],value:[String,Number],label:[String,Number],border:{type:Boolean,default:!0}}},e413:function(t,e,i){"use strict";var n,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-tabbar",{staticStyle:{background:"#e5e5e5",cursor:"pointer"},attrs:{"active-color":"#7d7e80"}},t._l(t.navs,function(e,n){return i("van-tabbar-item",{key:e.name,attrs:{icon:e.ico,dot:e.dot},on:{click:function(i){return t.goto(e.name,n)}}},[t._v(t._s(e.text))])}),1)],1)},a=[],r=i("bd86"),c=(i("68ef"),i("ae73"),i("c31d")),o=i("a142"),l=i("ad06"),u=i("6f2f"),h=i("48f4"),f=Object(o["i"])("tabbar-item"),d=f[0],b=f[1],p=d({props:Object(c["a"])({},h["c"],{icon:String,dot:Boolean,info:[String,Number]}),data:function(){return{active:!1}},beforeCreate:function(){this.$parent.items.push(this)},destroyed:function(){this.$parent.items.splice(this.$parent.items.indexOf(this),1)},methods:{onClick:function(t){this.$parent.onChange(this.$parent.items.indexOf(this)),this.$emit("click",t),Object(h["b"])(this.$router,this)}},render:function(t){var e=this.icon,i=this.slots,n=this.active,s=n?{color:this.$parent.activeColor}:null;return t("div",{class:b({active:n}),style:s,on:{click:this.onClick}},[t("div",{class:b("icon",{dot:this.dot})},[i("icon",{active:n})||e&&t(l["a"],{attrs:{name:e}}),t(u["a"],{attrs:{info:this.info}})]),t("div",{class:b("text")},[i("default",{active:n})])])}}),v=(i("9312"),Object(o["i"])("tabbar")),m=v[0],g=v[1],k=m({data:function(){return{items:[]}},props:{value:Number,activeColor:String,fixed:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},watch:{items:function(){this.setActiveItem()},value:function(){this.setActiveItem()}},methods:{setActiveItem:function(){var t=this;this.items.forEach(function(e,i){e.active=i===t.value})},onChange:function(t){t!==this.value&&(this.$emit("input",t),this.$emit("change",t))}},render:function(t){return t("div",{style:{zIndex:this.zIndex},class:["van-hairline--top-bottom",g({fixed:this.fixed})]},[this.slots()])}}),x=(i("5246"),i("6b41")),y={data:function(){return{navs:[{name:"Home",text:"首页",ico:"wap-home"},{name:"List",text:"分类",ico:"apps-o",dot:!0},{name:"Search",text:"搜索",ico:"search"},{name:"Cart",text:"购物车",ico:"shopping-cart-o"},{name:"Mall",text:"我的商城",ico:"contact"}]}},components:(n={},Object(r["a"])(n,x["a"].name,x["a"]),Object(r["a"])(n,k.name,k),Object(r["a"])(n,p.name,p),n),methods:{goto:function(t,e){this.$router.push({name:t}),this.$store.commit("changeIdx",e)}},created:function(){this.currentIdx=this.$store.state.active}},$=y,I=i("2877"),j=Object(I["a"])($,s,a,!1,null,null,null);e["a"]=j.exports},f032:function(t,e,i){}}]);
//# sourceMappingURL=chunk-6be93f0e.bcbf0457.js.map