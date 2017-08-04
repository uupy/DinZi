<template>
	<div class="app-wrapper optiscroll" id='app-wrapper'>
		<pageheader id='pageheader' class='pageheader'></pageheader>
		<div class="page_content" id='page_content'>
			<router-view></router-view>
		</div>
		<pagefooter></pagefooter>
		<div class="back-top" @click="goTop">
			<i class="iconfont icon-backtop"></i>	
		</div>
	</div>
</template>
<script>
	import pageheader from '@/components/header'
	import pagefooter from '@/components/footer'
	import Optiscroll from 'optiscroll'
	export default {
		data(){
			return {
				footerHeight:0,
				headerHeight:0,				
			}
		},
		components: {
			pagefooter,
			pageheader
		},
		mounted: function(){ 

		},
		created(){
			this.$nextTick(function(){
				var element = document.querySelector('#app-wrapper')
				var myOptiscrollInstance = new Optiscroll(element);
				$('#app-wrapper').scroll(function(){
					if($('.optiscroll-content')[0].scrollTop > 600){
						$('.back-top').css({opacity:1})
					}else{
						$('.back-top').css({opacity:0})
					}
				});
			})
				
		},
		methods: {
			goTop(){
				$('.optiscroll-content').stop().animate({scrollTop:0});
			}
		}
			
	}
</script>
<style lang='less'>
	@headerHeight:110px;
	.app-wrapper{height: 100%;overflow-x: scroll;}
	.page_content{background: #fff;position: relative;z-index: 66666;}
	.optiscroll-vtrack{width: 6px;}
	.pageheader{position: relative;z-index: 9999999;}
	.back-top{position: fixed;right:20px;bottom: 20px;z-index:99999;opacity: 0;transition:0.4s;}
	.icon-backtop{font-size: 30px;cursor:pointer;color: #d7a717;}
	@media screen and (max-width: 768px) {
		@pageHeight:70px;
		.page_content{margin-top: @pageHeight}
	}

	@media screen and (min-width: 1200px){
		
	}

	@media screen and (min-width: 768px) and (max-width: 1199px) {
		
	}


	@media screen and (max-device-width:768px){
		@pageHeight:50px;
		.page_content{margin-top: @pageHeight}
	}
</style>
