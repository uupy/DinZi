<template>
	<div class="app-wrapper optiscroll" id='app-wrapper'>
		<pageheader id='pageheader'></pageheader>
		<div class="page_content" id='page_content'>
			<router-view></router-view>
		</div>
		<pagefooter></pagefooter>
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
			pageheader,
		},
		mounted: function(){ 

		},
		created(){
			this.$nextTick(function(){
				var element = document.querySelector('#app-wrapper')
				var myOptiscrollInstance = new Optiscroll(element);
			})
				
		},
		methods: {
			
		}
			
	}
</script>
<style lang='less'>
	@headerHeight:110px;
	.app-wrapper{height: 100%;overflow-x: scroll;}
	.page_content{background: #fff;}
	.optiscroll-vtrack{width: 6px;}

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
