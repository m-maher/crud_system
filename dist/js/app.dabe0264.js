(function(){"use strict";var t={5390:function(t,e,a){var o=a(9242),n=a(3396);function i(t,e,a,o,i,r){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}var r={name:"App"},s=a(89);const l=(0,s.Z)(r,[["render",i]]);var u=l,d=a(2026),m=a(2483),c=a(65),p=a(6265),g=a.n(p);const f="Token";function h(){return localStorage.getItem(f)}function b({email:t,password:e}){return g().post("https://reqres.in/api/login",{email:t,password:e}).then((t=>{if(200==t.status){if(null!=t.data.token)return localStorage.setItem(f,t.data.token),t.data.token}else alert("invalid login")}))}const _={state:{token:h()},mutations:{setLoginToken(t,e){t.token=e}},actions:{async setLoginToken(t,e){t.commit("setLoginToken",e)}},getters:{getLoginToken:t=>t.token}};var w=_,v=(0,c.MT)({modules:{LoginModule:w}});function k(t,e,a,o,i,r){const s=(0,n.up)("Login",!0);return(0,n.wg)(),(0,n.j4)(s)}const y=(0,n._)("h1",{class:"page-title"},"Login",-1),D={key:0,class:"loading"},L=(0,n.Uk)("Login");function C(t,e,a,i,r,s){const l=(0,n.up)("b-form-input"),u=(0,n.up)("b-form-group"),d=(0,n.up)("b-button"),m=(0,n.up)("b-form"),c=(0,n.up)("b-col"),p=(0,n.up)("b-row"),g=(0,n.up)("b-container");return(0,n.wg)(),(0,n.j4)(g,{class:"bv-example-row"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"justify-content-center align-items-center"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{cols:"6"},{default:(0,n.w5)((()=>[y,(0,n.Wm)(m,{onSubmit:(0,o.iM)(s.onSubmit,["prevent"])},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{id:"input-group-1",label:"Email address:","label-for":"input-1"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{id:"input-1",modelValue:r.formData.email,"onUpdate:modelValue":e[0]||(e[0]=t=>r.formData.email=t),modelModifiers:{trim:!0},type:"email",placeholder:"Enter email",required:""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(u,{id:"input-group-2",label:"Password:","label-for":"input-2"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{id:"input-2",modelValue:r.formData.password,"onUpdate:modelValue":e[1]||(e[1]=t=>r.formData.password=t),modelModifiers:{trim:!0},placeholder:"Enter Password",required:""},null,8,["modelValue"])])),_:1}),r.isLoading?((0,n.wg)(),(0,n.iD)("p",D,"Loading...")):(0,n.kq)("",!0),(0,n.Wm)(d,{class:"login-btn",type:"submit",variant:"primary"},{default:(0,n.w5)((()=>[L])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1})}var M={name:"LoginComponent",data(){return{formData:{email:"eve.holt@reqres.in",password:"cityslicka"},isLoading:!1}},methods:{onSubmit(){const t={email:this.formData.email,password:this.formData.password};this.isLoading=!0,b(t).then((t=>{this.isLoading=!1,t?(this.$store.dispatch("setLoginToken",t),this.$router.push({name:"Home"})):this.isResponseInValid=!0})).catch((t=>{console.log(t)}))}}};const T=(0,s.Z)(M,[["render",C]]);var U=T,W={name:"LoginPage",components:{Login:U}};const q=(0,s.Z)(W,[["render",k]]);var j=q;function F(t,e,a,o,i,r){const s=(0,n.up)("Home",!0);return(0,n.wg)(),(0,n.j4)(s)}var V=a(7139);const P=(0,n._)("h1",{class:"page-title"},"Customers Data",-1),O={class:"table"},I=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{scope:"col"},"ID"),(0,n._)("th",{scope:"col"},"Avatar"),(0,n._)("th",{scope:"col"},"First Name"),(0,n._)("th",{scope:"col"},"Last Name"),(0,n._)("th",{scope:"col"},"Email"),(0,n._)("th",{scope:"col"},"Update"),(0,n._)("th",{scope:"col"},"Delete")])],-1),S={scope:"row"},E=["src"],N=(0,n.Uk)("Update"),H=(0,n.Uk)("Delete"),x={key:0,class:"modal-layer"},Z={class:"modal-content"},$=(0,n._)("h3",{class:"modal-description"}," Are you make sure of deleting this customer ? ",-1),z={class:"modal-options"},A={key:1,class:"modal-layer"},K={class:"modal-content"},R=(0,n._)("h3",{class:"modal-description"},"Update Customer Information",-1),Y={class:"modal-options"},B={key:2,class:"loading"},G=(0,n.Uk)("More"),J={key:4,class:"no-more-data"};function Q(t,e,a,o,i,r){const s=(0,n.up)("b-button"),l=(0,n.up)("b-form-input"),u=(0,n.up)("b-form-group"),d=(0,n.up)("b-col"),m=(0,n.up)("b-row"),c=(0,n.up)("b-container");return(0,n.wg)(),(0,n.j4)(c,{class:"bv-example-row"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{class:"justify-content-center align-items-center"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{cols:"8"},{default:(0,n.w5)((()=>[P,(0,n._)("table",O,[I,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.listingData,((t,e)=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[(0,n._)("th",S,(0,V.zw)(t.id),1),(0,n._)("td",null,[(0,n._)("img",{src:t.avatar},null,8,E)]),(0,n._)("td",null,(0,V.zw)(t.first_name),1),(0,n._)("td",null,(0,V.zw)(t.last_name),1),(0,n._)("td",null,(0,V.zw)(t.email),1),(0,n._)("td",null,[(0,n.Wm)(s,{onClick:e=>r.updateCustomer(t.id),variant:"primary",class:"btn"},{default:(0,n.w5)((()=>[N])),_:2},1032,["onClick"])]),(0,n._)("td",null,[(0,n.Wm)(s,{onClick:e=>r.deleteCustomer(t.id),variant:"danger",class:"btn"},{default:(0,n.w5)((()=>[H])),_:2},1032,["onClick"])])])))),128))])]),i.isDeleteModal?((0,n.wg)(),(0,n.iD)("div",x,[(0,n._)("div",Z,[$,(0,n._)("div",z,[(0,n._)("button",{class:"btn btn-secondary",onClick:e[0]||(e[0]=t=>i.isDeleteModal=!1)}," Close "),(0,n._)("button",{class:"btn btn-danger",onClick:e[1]||(e[1]=(...t)=>r.deleteConfirmation&&r.deleteConfirmation(...t))}," Delete ")])])])):(0,n.kq)("",!0),i.isUpdateModal?((0,n.wg)(),(0,n.iD)("div",A,[(0,n._)("div",K,[R,(0,n._)("div",null,[(0,n.Wm)(u,{id:"input-group-1",label:"First Name:","label-for":"input-1"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{id:"input-1",modelValue:i.updateForm.first_name,"onUpdate:modelValue":e[2]||(e[2]=t=>i.updateForm.first_name=t),modelModifiers:{trim:!0},type:"text",placeholder:"Enter first name",required:""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(u,{id:"input-group-2",label:"Last Name:","label-for":"input-2"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{id:"input-2",modelValue:i.updateForm.last_name,"onUpdate:modelValue":e[3]||(e[3]=t=>i.updateForm.last_name=t),modelModifiers:{trim:!0},type:"text",placeholder:"Enter last name",required:""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(u,{id:"input-group-3",label:"Email:","label-for":"input-3"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{id:"input-3",modelValue:i.updateForm.email,"onUpdate:modelValue":e[4]||(e[4]=t=>i.updateForm.email=t),modelModifiers:{trim:!0},type:"email",placeholder:"Enter email",required:""},null,8,["modelValue"])])),_:1})]),(0,n._)("div",Y,[(0,n._)("button",{class:"btn btn-secondary",onClick:e[5]||(e[5]=t=>i.isUpdateModal=!1)}," Close "),(0,n._)("button",{class:"btn btn-primary",onClick:e[6]||(e[6]=(...t)=>r.updateConfirmation&&r.updateConfirmation(...t))}," Update ")])])])):(0,n.kq)("",!0),i.isLoading?((0,n.wg)(),(0,n.iD)("p",B,"Loading...")):(0,n.kq)("",!0),i.isThierMoreData?((0,n.wg)(),(0,n.j4)(s,{key:3,onClick:r.getMore,variant:"primary",class:"more-btn"},{default:(0,n.w5)((()=>[G])),_:1},8,["onClick"])):(0,n.kq)("",!0),i.isThierMoreData&&0!=i.listingData.length?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",J," No more customers data "))])),_:1})])),_:1})])),_:1})}var X={name:"HomeComponent",data(){return{listingData:[],isThierMoreData:!0,isLoading:!1,listingPageNumber:1,customerId:0,isDeleteModal:!1,isUpdateModal:!1,updateForm:{first_name:"",last_name:"",email:""}}},methods:{getCustomersListingData(){this.isLoading=!0,g().get(`https://reqres.in/api/users?page=${this.listingPageNumber}`).then((t=>{null!=t.data.data&&0!=t.data.data.length?1==this.listingPageNumber?this.listingData=t.data.data:this.listingData=[...this.listingData,...t.data.data]:(1==this.listingPageNumber&&(this.listingData=[]),this.isThierMoreData=!1),this.isLoading=!1}))},updateCustomer(t){this.customerId=t,this.isUpdateModal=!0},updateConfirmation(){g().put(`https://reqres.in/api/users/${this.customerId}`,this.updateForm).then((t=>{200==t.status?(this.listingData=this.listingData.filter((e=>{if(e.id==this.customerId){for(let a in this.updateForm)""!=this.updateForm[a]&&null!=this.updateForm[a]&&(e[a]=t.data[a]);for(let t in this.updateForm)this.updateForm[t]=""}return e})),this.isUpdateModal=!1):alert("Try again later")})).catch((t=>{console.log(t)}))},deleteCustomer(t){this.customerId=t,this.isDeleteModal=!0},deleteConfirmation(){g()["delete"](`https://reqres.in/api/users/${this.customerId}`).then((t=>{204==t.status?(this.listingData=this.listingData.filter((t=>t.id!==this.customerId)),this.isDeleteModal=!1):alert("Try again later")})).catch((t=>{console.log(t)}))},getMore(){!this.isLoading&&this.isThierMoreData&&(this.listingPageNumber+=1,this.getCustomersListingData())}},created(){this.getCustomersListingData()}};const tt=(0,s.Z)(X,[["render",Q]]);var et=tt,at={name:"HomePage",components:{Home:et}};const ot=(0,s.Z)(at,[["render",F]]);var nt=ot;const it=[{path:"/Login",name:"Login",component:j},{path:"/Home",name:"Home",component:nt}],rt=(0,m.p7)({history:(0,m.PO)("https://reqres.in/api"),routes:it});rt.beforeEach(((t,e,a)=>{let o=v.getters.getLoginToken;console.log(o),"Login"===t.name||o?"Login"==t.name&&o?a({name:"Home"}):a():a({name:"Login"})}));var st=rt;const lt=(0,o.ri)(u);lt.use(d.ZP),lt.use(st),lt.use(v),lt.mount("#app")}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,o,n,i){if(!o){var r=1/0;for(d=0;d<t.length;d++){o=t[d][0],n=t[d][1],i=t[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(s=!1,i<r&&(r=i));if(s){t.splice(d--,1);var u=n();void 0!==u&&(e=u)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[o,n,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,r=o[0],s=o[1],l=o[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var d=l(a)}for(e&&e(o);u<r.length;u++)i=r[u],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},o=self["webpackChunkcrud_system"]=self["webpackChunkcrud_system"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(5390)}));o=a.O(o)})();
//# sourceMappingURL=app.dabe0264.js.map