<template>
	<el-row>
		<el-col :sm='24'>
			<el-col>
				<v-banner :bannerDatas="banners"></v-banner>
			</el-col>
			<el-col class="home_content">
				<!-- <img src='../../../static/images/banner_home_01.jpg' /> -->
			</el-col>
		</el-col>
	</el-row>
</template>
<style scoped>
	.about_us,.stock,.case_list{cursor: pointer;}
	.item-row{background: #fff;margin-top:60px;position: relative;}
	
</style>

<script>
	import vBanner from '@/components/banner.vue'
	import Banner1 from '../../../static/images/banner_home_01.jpg'
	import Banner2 from '../../../static/images/banner_home_02.jpg'
	import Banner3 from '../../../static/images/banner_home_03.jpg'
	export default{
		data(){
			return{
				banners:[
            		{src:Banner1,link:'',alt:'',index:1},
            		{src:Banner2,link:'',alt:'',index:2},
            		{src:Banner3,link:'',alt:'',index:3},
            	],

			}
		},
		created(){
		},
		methods:{
			
		},
		components:{ 
			vBanner
		}
	}	
</script>