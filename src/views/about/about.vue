<template>
	<div class="about-wraper">
		<el-col class='about-banner'>
			<v-banner :bannerDatas="banners"></v-banner>
		</el-col>
		<el-col class='about-content'>
			<el-col :span='22' :offset='1' class='about-inner'>
				<el-col :span='2' class='about-nav'>
					<ul>
						<li v-for='item in aboutNav'>
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
		.about-nav{width: 100%;}
	}
	@media screen and (max-width:768px){
		.about-nav{width: 100%;}
	}
</style>
<script>
	import Banner1 from '../../../static/images/banner_inner_01.jpg'
	import vBanner from '@/components/banner.vue'
	export default{
		data(){
			return{
				banners:[
					{src:Banner1,link:'',alt:'',index:1},
				],
				aboutNav:[
					{name:'公司介绍',link:'/company'},
					{name:'丁子观点',link:'/points'},
					{name:'加入我们',link:'/join-us'},
					{name:'合作伙伴',link:'/coorper'},
					{name:'联系我们',link:'/contact'},
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