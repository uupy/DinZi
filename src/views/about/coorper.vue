<template>
	<el-row class='coorper-wrap'>
		<el-row :gutter="40">
			<el-col :span='6' class='company-img'>
				<img src='../../../static/images/points.jpg' />
			</el-col>
			<el-col :span='18' class='company-txt'>
				<el-row class='company-con' v-for="(item,index) in company" :key="index">
					<h3>{{item.title}}</h3>
					<div v-html="item.content"></div>
				</el-row>
			</el-col>
		</el-row>
		<el-row class='coorper-img'>
			<el-col class='coorper-img-item' v-for="(item,index) in coorper" :key="index">
				<div class='coorper-img-item-box'>
					<template v-if="item.link !== ''">
						<a :href="item.link" target="_blank">
							<img :src="item.src" :alt="item.alt" />
						</a>
					</template>
					<template v-else>
						<img :src="item.src" :alt="item.alt" />
					</template>
				</div>
			</el-col>
		</el-row>
	</el-row>
</template>
<script>
	import coorper_001 from '../../assets/images/coorper_001.png'
	import coorper_002 from '../../assets/images/coorper_002.png'
	import coorper_003 from '../../assets/images/coorper_003.png'
	import coorper_004 from '../../assets/images/coorper_004.png'
	import coorper_005 from '../../assets/images/coorper_005.png'
	import coorper_006 from '../../assets/images/coorper_006.png'
	import coorper_007 from '../../assets/images/coorper_007.png'
	import coorper_008 from '../../assets/images/coorper_008.png'
	import coorper_009 from '../../assets/images/coorper_009.png'
	import coorper_010 from '../../assets/images/coorper_010.png'
	export default{
		data(){
			return{
				company:[
					{
						title:'合作伙伴',
						content:'<p>与丁子合作，您将会得到更成熟的品牌建设服务。我们以客户至上，同时也相互挑战，力求呈现最好的品牌建设成果。</p>'
					}
				],
				coorper:[
					{src:coorper_001,link:'',alt:''},
					{src:coorper_002,link:'',alt:''},
					{src:coorper_003,link:'',alt:''},
					{src:coorper_004,link:'',alt:''},
					{src:coorper_005,link:'',alt:''},
					{src:coorper_006,link:'',alt:''},
					{src:coorper_007,link:'',alt:''},
					{src:coorper_008,link:'',alt:''},
					{src:coorper_009,link:'',alt:''},
					{src:coorper_010,link:'',alt:''}
				]
			}
		},
		created(){
		},
		methods:{
			
		},
		components:{
			
		}
	}
</script>
<style lang="less">
	.company-img img {width: 100%;box-sizing: border-box;}
	.coorper-wrap{padding: 40px 0 150px 0;}
	.company-txt h3{font-size: 30px;font-weight: normal;line-height: 1;margin-bottom:25px;}
	.coorper-img{
		padding-top: 50px;
	}
	.coorper-img-item{
		width: 20%;
		padding: 3px;
		img{
			width: 100%;
			transition: 0.4s;
		}
	}
	.coorper-img-item-box{
		border:1px solid #fff;
		overflow: hidden;
		&:hover img{
			-webkit-transform: scale(1.1);
			-moz-transform: scale(1.1);
			-ms-transform: scale(1.1);
			-o-transform: scale(1.1);
			transform: scale(1.1);
			
		}
	}
	@media screen and (max-device-width:768px){
		.company-img,.company-txt{width: 100%;margin-left: 0;}
		.company-img img{border:none;}
		.coorper-wrap{padding: 1rem;}
		.company-txt h3{text-align: center;font-size: 20px;margin:1rem;margin-top: 2rem;}
		.company-txt p{font-size: 1.2;padding: 0 1rem;font-size: 14px;}
		.coorper-img{
			padding-top: 15px;
		}
		.coorper-img-item{
			width: 50%;
		}
	}
	@media screen and (max-width:768px){
		.company-img,.company-txt{width: 100%;margin-left: 0;}
		.company-img img{border:none;}
		.coorper-wrap{padding: 1rem;}
		.company-txt h3{text-align: center;font-size: 20px;margin:1rem;margin-top: 2rem;}
		.company-txt p{font-size: 1.2;padding: 0 1rem;font-size: 14px;}
		.coorper-img{
			padding-top: 15px;
		}
		.coorper-img-item{
			width: 50%;
		}
	}
</style>