"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[148],{94148:function(t,e,l){l.r(e),l.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",[t.state?e("div",{staticClass:"div"},[e("el-form",{staticClass:"div1",attrs:{"label-position":t.labelPosition,"label-width":"80px",model:t.formLabelAlign}},[e("el-form-item",{attrs:{label:"岗位编号：","label-width":"100px"}},[e("el-input",{model:{value:t.formLabelAlign.id,callback:function(e){t.$set(t.formLabelAlign,"id",e)},expression:"formLabelAlign.id"}})],1),e("el-form-item",{attrs:{label:"岗位编码：","label-width":"100px"}},[e("el-input",{model:{value:t.formLabelAlign.posicode,callback:function(e){t.$set(t.formLabelAlign,"posicode",e)},expression:"formLabelAlign.posicode"}})],1),e("el-form-item",{attrs:{label:"岗位名称：","label-width":"100px"}},[e("el-input",{model:{value:t.formLabelAlign.name,callback:function(e){t.$set(t.formLabelAlign,"name",e)},expression:"formLabelAlign.name"}})],1),e("el-form-item",{attrs:{label:"修改时间：","label-width":"100px"}},[e("el-input",{model:{value:t.formLabelAlign.createTime,callback:function(e){t.$set(t.formLabelAlign,"createTime",e)},expression:"formLabelAlign.createTime"}})],1),e("div",{staticClass:"butcal"},[e("el-button",{attrs:{type:"primary"},on:{click:t.query}},[t._v("确定")]),e("el-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1):t._e(),e("el-row",{staticClass:"userIndexBtn"},[e("el-button",{attrs:{type:"primary"}},[t._v("新增")]),e("el-button",{attrs:{type:"success"}},[t._v("修改")]),e("el-button",{attrs:{type:"danger"}},[t._v("删除")])],1),e("el-table",{staticClass:"userIndex",attrs:{data:t.tableData}},[e("el-table-column",{attrs:{type:"selection",width:"55"}}),e("el-table-column",{attrs:{label:"岗位编号",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("i",{staticClass:"el-icon-time"}),e("span",[t._v(t._s(l.row.id))])]}}])}),e("el-table-column",{attrs:{prop:"nickName",label:"岗位编码",width:"110px"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("i",{staticClass:"el-icon-time"}),e("span",[t._v(t._s(l.row.posicode))])]}}])}),e("el-table-column",{attrs:{label:"岗位名称",width:"110px"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("i",{staticClass:"el-icon-time"}),e("span",[t._v(t._s(l.row.name))])]}}])}),e("el-table-column",{attrs:{label:"状态",width:"100px"}},[e("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),e("el-table-column",{attrs:{prop:"time",label:"创建时间",width:"160px"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("i",{staticClass:"el-icon-time"}),e("span",[t._v(t._s(l.row.createTime))])]}}])}),e("el-table-column",{staticStyle:{"margin-left":"20px"},attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(e){return t.handleEdit(l.$index,t.tableData)}}},[t._v("编辑")]),e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleDelete(l.$index,l.row)}}},[t._v("删除")])]}}])})],1)],1)},i=[],n=l(22915),s={data(){return{tableData:[],value:!0,state:!1,labelPosition:"left",formLabelAlign:{},formLabelWidth:"120px",index:""}},methods:{handleEdit(t,e){this.state=!0,this.index=t,console.log(t,e),this.formLabelAlign=this.tableData[t],console.log(this.tableData)},query(){this.tableData[this.index]=this.formLabelAlign,this.state=!1},cancel(){this.state=!1},handleDelete(t,e){this.tableData.splice(t,1)},async getMockList(){try{const t=await(0,n.Tm)();console.log(t),0==t.data.code&&(this.tableData=t.data.data.data)}catch(t){console.log(t)}}},mounted(){this.getMockList()}},o=s,r=l(1001),c=(0,r.Z)(o,a,i,!1,null,"4ed2160b",null),u=c.exports},22915:function(t,e,l){l.d(e,{$f:function(){return o},Rg:function(){return n},Tm:function(){return s},jJ:function(){return i}});var a=l(31109);const i=()=>a.Z.get("/user/user"),n=()=>a.Z.get("/user/role"),s=()=>a.Z.get("/user/position"),o=()=>a.Z.get("/journal/journal")}}]);
//# sourceMappingURL=148.5a144caf.js.map