(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-457951d6"],{"263e":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"publish-container"},[r("el-card",[r("div",{staticClass:"header"},[r("my-breadcrumb",[e._v("编辑文章")])],1),r("br"),r("el-form",{ref:"form",attrs:{rules:e.rules,model:e.article,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{model:{value:e.article.title,callback:function(t){e.$set(e.article,"title",t)},expression:"article.title"}})],1),r("el-form-item",{attrs:{label:"内容",prop:"content"}},[r("quill-editor",{attrs:{type:"textarea",options:e.editorOption},model:{value:e.article.content,callback:function(t){e.$set(e.article,"content",t)},expression:"article.content"}})],1),r("el-form-item",{attrs:{label:"封面"}},[r("el-radio-group",{on:{change:function(t){e.article.cover.image=[]}},model:{value:e.article.cover.type,callback:function(t){e.$set(e.article.cover,"type",t)},expression:"article.cover.type"}},[r("el-radio",{attrs:{label:1}},[e._v("单图")]),r("el-radio",{attrs:{label:3}},[e._v("三图")]),r("el-radio",{attrs:{label:0}},[e._v("无图")]),r("el-radio",{attrs:{label:-1}},[e._v("自动")])],1)],1),e.article.cover.type>0?r("el-form-item",{attrs:{label:"封面"}},[r("el-row",{attrs:{gutter:10}},e._l(e.article.cover.type,(function(t,a){return r("el-col",{key:a,attrs:{xs:12,sm:6,md:6,lg:4}},[r("my-cover",{model:{value:e.article.cover.images[a],callback:function(t){e.$set(e.article.cover.images,a,t)},expression:"article.cover.images[idx]"}})],1)})),1)],1):e._e(),r("my-channels",{model:{value:e.article.channel_id,callback:function(t){e.$set(e.article,"channel_id",t)},expression:"article.channel_id"}}),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.hSaveArticle(!1)}}},[e._v("保存")])],1)],1)],1)],1)},l=[],i=(r("96cf"),r("1da1")),n=(r("a753"),r("8096"),r("14e1"),r("953d")),c=r("2423"),o=r("2114"),s=r("663f"),u=r("b1d5"),d={name:"EditArticle",data:function(){return{rules:{title:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:5,max:30,message:"长度5-30之间",trigger:"blur"}],content:[{required:!0,message:"请输入文章内容",trigger:"blur"},{min:20,max:200,message:"最少20个字",trigger:"blur"}],channel_id:[{required:!0,message:"请选择文章频道",trigger:"blur"}]},article:{title:"test标题",channel_id:"",content:"敲代码了",cover:{type:0,images:[]}},editorOption:{placeholder:"",modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],["image"]]}}}},created:function(){this.loadArticle(this.$route.params.id)},methods:{loadArticle:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["c"])(e);case 2:a=r.sent,console.log(a),t.article=a.data.data;case 5:case"end":return r.stop()}}),r)})))()},hSaveArticle:function(e){var t=this;this.$refs.form.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("校验结果",r),!r){e.next=15;break}return e.prev=2,e.next=5,Object(c["f"])(t.article.id,t.article);case 5:a=e.sent,console.log(a),t.$message.success("修改成功"),t.$router.push("/articles"),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](2),console.log(e.t0),t.$message.error("发布失败");case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}())}},components:{MyBreadcrumb:s["a"],quillEditor:n["quillEditor"],MyChannels:o["a"],MyCover:u["a"]}},m=d,p=(r("97c4"),r("2877")),f=Object(p["a"])(m,a,l,!1,null,"4a5f5504",null);t["default"]=f.exports},"5f44":function(e,t,r){},"97c4":function(e,t,r){"use strict";var a=r("5f44"),l=r.n(a);l.a}}]);
//# sourceMappingURL=chunk-457951d6.0f137575.js.map