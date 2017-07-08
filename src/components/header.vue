<template>
	<el-row class='pageheader'>
		<el-col :xs='18' :md='24' class='header-wrap'>
			<el-col :span='5' class='logo' :xs='4'>
				<img src="../../static/images/logo.svg">
			</el-col>
			<el-col class='nav' :span='19' :xs='20'>
				<el-col :span='3' class='header-title'>
					<el-row>
						<img src="../../static/images/sub-title.svg">
					</el-row>
				</el-col>

				<el-col :span='21' class='nav-title'>
					<el-col :span='19'>
						<ul class='navigator'>
							<li v-for='item in navList'>
								<router-link :to='{path:item.path}'>{{item.name}}</router-link>
							</li>
						</ul>
					</el-col>
						
					<el-col :span='5' class='header-share'>
						<ul>
							<li v-for='item in shareLink'>
								<a>
									<i class="iconfont" :class='item.icon'></i>
								</a>
							</li>
						</ul>
					</el-col>
				</el-col>
				<el-col id='menu-button' class='menu-button' @click.native='showMenu'>
					<i  id='icon-menu' class="iconfont icon-menu"></i>
				</el-col>

				<div class="mobile-menu" v-show='isShowMenu'>
					<ul class='mobile-nav'>
						<li v-for='(item,index) in navListReverse'>
							<router-link :to='{path:item.path}'>{{item.name}}</router-link>
						</li>
					</ul>
				</div>
			</el-col>
		</el-col>
			
	</el-row>
</template>
<style scoped lang='less'>
	@pageHeight:110px;

	.pageheader{height: @pageHeight;background: #1B1B1B;z-index: 9999}
	.logo{text-align: left;position: relative;height: @pageHeight;}

	.logo img{height:70%;vertical-align: middle;position: absolute;left: 50%;top:46%;-webkit-transform:translateY(-50%) translateX(-50%);}
	.nav{position:relative;height: @pageHeight;background: url('../../static/images/nav.png')} 
	.header-title{display: flex;flex-direction: column;justify-content: center;height: @pageHeight;padding-left: 6px;}
	.header-title img{margin:5px 0;}
	.nav-title{height: @pageHeight;text-align: right;}
	.navigator{height: 100%;line-height: @pageHeight;}
	.navigator li{float: right;}
	.navigator li a{color:#fff;padding: 0 35px;height: 100%;display: block;transition:all .3s;}
	.navigator li a:hover{background: #1B1B1B}
	.header-share{height: 100%;background: #1B1B1B}
	.header-share ul{overflow: hidden;height: 100%;margin-left: 15px;}
	.header-share ul li{float: left;padding:0 10px;line-height:85px;height: 100%;position: relative;}
	.header-share ul li a{display: block;height: 100%;cursor: pointer;font-size: 60px;}
	.iconfont{font-size: 24px;color:#898989;}
	.header-share ul li a:hover .iconfont{color:#d7a717;}
	.header-share ul li img{width: 20px;vertical-align: middle;display: block;position: absolute;left: 50%;top:50%;-webkit-transform:translateY(-50%) translateX(-50%);}
	/*.header-wrap{min-width: 768px}*/
	.menu-button{width:20px;height:20px;display: none;text-align: right;position: absolute;right: 20px;cursor: pointer;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}
	.menu-button i{vertical-align: middle;}
	.mobile-menu{position: fixed;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,.8);z-index: 99999;}

	.mobile-nav{box-shadow: 2px -2px 2px #222;}
	.mobile-nav li {border-bottom: 1px solid #252525;background: #1b1b1b;}
	.mobile-nav li a{color:#eee;padding: 18px 30px;width: 100%;text-align: center;display: inline-block;box-sizing: border-box;
		
	}
	.mobile-nav li a.router-link-active{background: none;}
	.fade-enter-active, .fade-leave-active{
	  transition: all 3s ease;     
	  -webkit-transition: all 3s ease;     
	}
	.fade-enter, .fade-leave-active{
	  opacity: 0 
	}
	@media screen and (max-width: 768px) {
		.header-wrap{width: 100%}
		.nav-title{display: none;}
		@pageHeight:70px;
		.pageheader,.logo,.header-title,.nav{height: @pageHeight}
		.header-title img{width:100%;}
		.header-title>div:nth-child(2) img{display: none;}
		.header-title>div:nth-child(1) img{width: 130%;}
		.menu-button{display: block;}
		.logo img{width: 95%;}
		.nav{width: 80%;}
		.logo{width: 20%}
		.menu-button i{font-size: 20px;}
		.pageheader{position: fixed;left: 0;top: 0;width: 100%;}
		.mobile-menu{top:@pageHeight;}
	}

	@media screen and (min-width: 1200px){
		.mobile-menu{display: none;}
	}

	@media screen and (min-width: 768px) and (max-width: 1199px) {
		.header-share{display: none;}
		.navigator li a{padding: 0 20px;}
		.header-title img{width:100%;}
		.logo img{width: 80%;}
		.mobile-menu{display: none;}
	}


	@media screen and (max-device-width:768px){
		.nav-title{display: none;}
		@pageHeight:50px;
		.pageheader,.logo,.header-title,.nav{height: @pageHeight}
		.header-title img{width:100%;}
		.header-title>div:nth-child(1) img{width: 200%;}
		.header-title>div:nth-child(2) img{display: none;}
		.menu-button {display: block;font-size: 36px;}
		.menu-button i{font-size: 20px;}
		.logo{padding-left: 20px}
		.logo img{width: 85%;}
		.pageheader{position: fixed;left: 0;top: 0;width: 100%;}
		.mobile-menu{top:@pageHeight;}
		.menu-button{top:0;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}

	}

</style>
<script>
	import wxImg from '../../static/images/wx.png'
	import wbImg from '../../static/images/wb.png'
	import beImg from '../../static/images/be.png'
	export default{
		data(){
			return {
				navList:[
					{name:'最新动态',path:'/news'},
					{name:'关于丁子',path:'/company'},
					{name:'品牌案例',path:'/case'},
					{name:'首页',path:'/index'},
				],
				shareLink:[
					{icon:'icon-weixin'},
					{icon:'icon-552cd5bdeaada'},
					{icon:'icon-be'},
				],
				isShowMenu:false
			}
		},
		created(){
			const self = this;
			document.body.addEventListener('click',function(e){
				e.stopPropagation()
				if(!e.target.id){
					self.isShowMenu = false;
				}
			})
		},
		methods:{
			showMenu(){
				const self = this;
				self.isShowMenu = !self.isShowMenu;
				console.log(self.isShowMenu)
			}
		},
		computed:{
			navListReverse(){
				return this.navList.slice(0,this.navList.length).reverse();
			}
		}
	}
</script>
