(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3fd5"],{"5eb1":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"card mb-3",class:[t.isHome()?"p-3 border-0":null]},[s("h4",{class:[t.isHome()?"font-italic mb-3":"card-header"]},[t._v(t._s(t.$t("recent_posts")))]),s("div",{class:[t.isHome()?null:"card-body"]},[t.posts.length>0?s("transition-group",{attrs:{name:"staggered-fade",tag:"ul"}},t._l(t.posts.take(5),function(e,a){return s("li",{key:"recent-post-"+a+"-"+e.slug,staticClass:"mb-1"},[s("b-link",{attrs:{to:{name:"post-page",params:{slug:e.slug}}}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})):s("p",{staticClass:"text-muted font-italic"},[t._v(t._s(t.$t("no_posts")))])],1)])},n=[],r=(s("96cf"),s("1da1")),c=s("d4ec"),i=s("bee2"),o=s("99de"),u=s("7e84"),l=s("262e"),p=s("9ab4"),d=s("60a3"),b=s("f4ad"),f=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.posts=[],t}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"created",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.posts.length<1)){t.next=6;break}return t.next=3,Object(b["f"])();case 3:e=t.sent,s=e.data,this.posts=s.data;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),e}(d["c"]);f=p["a"]([d["a"]],f);var h=f,m=h,v=s("2877"),_=Object(v["a"])(m,a,n,!1,null,null,null);_.options.__file="RecentPostsCard.vue";e["default"]=_.exports}}]);