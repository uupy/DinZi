<template>
	<div class="about-wraper">
		<el-col class='about-banner'>
			<v-banner :bannerDatas="banners"></v-banner>
		</el-col>
		<el-col class='about-content'>
			<el-col :span='22' :offset='1' class='about-inner'>
				<el-col :span='2' class='about-nav'>
					<ul>
						<li v-for='item in aboutNav' :key='item.name'>
							<router-link :to='{path:item.link}'>{{item.name}}</router-link>
						</li>
					</ul>
				</el-col>
				<el-col :span='20' :offset='2' class='about-views'>
					<router-view></router-view>
				</el-col>
			</el-col>
		</el-col>
	</div>
</template>
<style scoped lang='less'>
	.about-banner{max-height: 400px;overflow: hidden;}
	.about-content{background: #333;padding: 50px 0 0 0;}
	.about-inner{border-bottom: 1px solid #ebebeb;}
	.about-nav{height: 300px;border-top: 1px solid #FDD001;}
	.about-wraper{padding-bottom: 30px;color:#ebebeb;}
	.about-wraper a{color:#ebebeb;}
	.about-wraper .router-link-active{background: none;color:#FDD001;}
	.about-nav li a{display: block;width: 100%;padding: 8px 0;white-space: nowrap;}
	.about-nav li a:hover{color:#FDD001;}

	.about-views{border-top: 1px solid #ebebeb}

	@media screen and (max-device-width:768px){
		.about-nav,.about-inner,.about-views,.company-img{width: 100%;margin-left: 0;}
		.about-nav li{font-size: 14px;flex: 1;text-align: center;padding: .5rem 0}
		.about-content{padding: 1rem 0;}
		.about-nav ul{display: flex;flex-direction: row;}
		.about-nav{height: auto;}
	}
	@media screen and (max-width:768px){
		.about-nav,.about-inner,.about-views,.company-img{width: 100%;margin-left: 0;}
		.about-nav li{font-size: 14px;flex: 1;text-align: center;padding: .5rem 0}
		.about-content{padding: 1rem 0;}
		.about-nav ul{display: flex;flex-direction: row;}
		.about-nav{height: auto;}
	}
</style>
<script>
	import Banner1 from '@/assets/images/news-banner.jpg'
	import vBanner from '@/components/banner.vue'
	export default{
		data(){
			return{
				banners:[
					{src:Banner1,link:'',alt:'',index:1},
				],
				aboutNav:[
					{name:'丁子动态',link:'/dzdt'},
					{name:'行业资讯',link:'/hyzx'}
				]
			}
		},
		created(){
		},
		methods:{
			viewChange(link){
				this.$router.push({path:link})
			}
		},
		components:{
			vBanner
		}
	}
</script>