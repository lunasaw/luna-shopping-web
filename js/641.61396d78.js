"use strict";(self["webpackChunkluna_shopping_web"]=self["webpackChunkluna_shopping_web"]||[]).push([[641],{4641:function(t,s,a){a.r(s),a.d(s,{default:function(){return _}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"prodetail"},[s("van-nav-bar",{attrs:{fixed:"",title:"商品详情页","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("van-swipe",{attrs:{autoplay:3e3},on:{change:t.onChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[s("div",{staticClass:"custom-indicator"},[t._v(" "+t._s(t.current+1)+" / "+t._s(t.images.length)+" ")])]},proxy:!0}])},t._l(t.images,(function(t,a){return s("van-swipe-item",{key:a},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.external_url,expression:"image.external_url"}]})])})),1),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[s("div",{staticClass:"price"},[s("span",{staticClass:"now"},[t._v("￥"+t._s(t.detail.goods_price_min))]),s("span",{staticClass:"oldprice"},[t._v("￥"+t._s(t.detail.goods_price_max))])]),s("div",{staticClass:"sellcount"},[t._v("已售"+t._s(t.detail.goods_sales)+"件")])]),s("div",{staticClass:"msg text-ellipsis-2"},[t._v(" "+t._s(t.detail.goods_name)+" ")]),s("div",{staticClass:"service"},[s("div",{staticClass:"left-words"},[s("span",[s("van-icon",{attrs:{name:"passed"}}),t._v("七天无理由退货")],1),s("span",[s("van-icon",{attrs:{name:"passed"}}),t._v("48小时发货")],1)]),s("div",{staticClass:"right-icon"},[s("van-icon",{attrs:{name:"arrow"}})],1)])]),t.total>0?s("div",{staticClass:"comment"},[s("div",{staticClass:"comment-title"},[s("div",{staticClass:"left"},[t._v("商品评价 ("+t._s(t.total)+"条)")]),s("div",{staticClass:"right"},[t._v("查看更多 "),s("van-icon",{attrs:{name:"arrow"}})],1)]),s("div",{staticClass:"comment-list"},t._l(t.commentList,(function(a){return s("div",{key:a.comment_id,staticClass:"comment-item"},[s("div",{staticClass:"top"},[s("img",{attrs:{src:a.user.avatar_url||t.defaultImg,alt:""}}),s("div",{staticClass:"name"},[t._v(t._s(a.user.nick_name))]),s("van-rate",{attrs:{size:16,value:a.score/2,color:"#ffd21e","void-icon":"star","void-color":"#eee"}})],1),s("div",{staticClass:"content"},[t._v(" "+t._s(a.content)+" ")]),s("div",{staticClass:"time"},[t._v(" "+t._s(a.create_time)+" ")])])})),0)]):t._e(),s("div",{staticClass:"tips"},[t._v("商品描述")]),s("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.detail.content)}}),s("div",{staticClass:"footer"},[s("div",{staticClass:"icon-home"},[s("van-icon",{attrs:{name:"wap-home-o"}}),s("span",[t._v("首页")])],1),s("div",{staticClass:"icon-cart",on:{click:t.goCartPage}},[t.cartTotal>0?s("span",{staticClass:"num"},[t._v(t._s(t.cartTotal))]):t._e(),s("van-icon",{attrs:{name:"shopping-cart-o"}}),s("span",[t._v("购物车")])],1),s("div",{staticClass:"btn-add",on:{click:t.addFn}},[t._v("加入购物车")]),s("div",{staticClass:"btn-buy",on:{click:t.buyFn}},[t._v("立刻购买")])]),s("van-action-sheet",{attrs:{title:"cart"===t.mode?"加入购物车":"立刻购买"},model:{value:t.showPannel,callback:function(s){t.showPannel=s},expression:"showPannel"}},[s("div",{staticClass:"product"},[s("div",{staticClass:"product-title"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.detail.goods_image,alt:""}})]),s("div",{staticClass:"right"},[s("div",{staticClass:"price"},[s("span",[t._v("¥")]),s("span",{staticClass:"nowprice"},[t._v(t._s(t.detail.goods_price_min))])]),s("div",{staticClass:"count"},[s("span",[t._v("库存")]),s("span",[t._v(t._s(t.detail.stock_total))])])])]),s("div",{staticClass:"num-box"},[s("span",[t._v("数量")]),s("CountBox",{model:{value:t.addCount,callback:function(s){t.addCount=s},expression:"addCount"}})],1),t.detail.stock_total>0?s("div",{staticClass:"showbtn"},["cart"===t.mode?s("div",{staticClass:"btn",on:{click:t.addCart}},[t._v(" 加入购物车 ")]):t._e(),"buyNow"===t.mode?s("div",{staticClass:"btn now",on:{click:t.goBuyNow}},[t._v(" 立刻购买 ")]):t._e()]):s("div",{staticClass:"btn-none"},[t._v("该商品已抢完")])])])],1)},o=[],e=(a(7658),a(4543)),n=a(6731),c=a(9782),l=a(9018),d={methods:{loginConfirm(){return!this.$store.getters.token&&(this.$dialog.confirm({title:"温馨提示",message:"此时需要先登录才能继续操作哦",confirmButtonText:"去登陆",cancelButtonText:"再逛逛"}).then((()=>{this.$router.replace({path:"/login",query:{backUrl:this.$route.fullPath}})})).catch((()=>{})),!0)}}},r={name:"ProDetail",mixins:[d],data(){return{images:[],current:0,detail:{},total:0,commentList:[],defaultImg:n,mode:"cart",showPannel:!1,addCount:1,cartTotal:0}},components:{CountBox:c.Z},async created(){this.getDetail(),this.getComments(),this.getCartTotal()},computed:{goodsId(){return this.$route.params.id}},methods:{onChange(t){this.current=t},addFn(){this.mode="cart",this.showPannel=!0},buyFn(){this.mode="buyNow",this.showPannel=!0},goCartPage(){this.$router.push("/cart")},goBuyNow(){this.loginConfirm()||this.$router.push({path:"/pay",query:{mode:"buyNow",goodsId:this.goodsId,goodsSkuId:this.detail.skuList[0].goods_sku_id,goodsNum:this.addCount}})},async getCartTotal(){const{data:t}=await(0,l.I3)();this.cartTotal=t.cartTotal},async getComments(){const{data:{list:t,total:s}}=await(0,e.U3)(this.goodsId,3);this.commentList=t,this.total=s},async getDetail(){const{data:{detail:t}}=await(0,e.Aw)(this.goodsId);this.detail=t,this.images=t.goods_images},async addCart(){if(this.loginConfirm())return;const{data:t}=await(0,l.Z5)(this.goodsId,this.addCount,this.detail.skuList[0].goods_sku_id);this.cartTotal=t.cartTotal,this.$toast("加入购物车成功"),this.showPannel=!1}}},v=r,u=a(1001),m=(0,u.Z)(v,i,o,!1,null,"5a1a46ce",null),_=m.exports}}]);
//# sourceMappingURL=641.61396d78.js.map