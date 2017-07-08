<template>
	<el-col class='company-wrap'>		
		<el-col class='company-txt'>
			<el-col v-for='(item,index) in dataList' class='item-list'>
				<div>
					<el-col :span='4' class='item-date'>
						<p>{{item.date}}</p>
					</el-col>
					<el-col :span='12' class='job-wrap' >
						<h3>{{item.jobName}}</h3>					
					</el-col>				
					<el-col :span='8' class='more-txt'>
						<i class='iconfont icon-plus' @click='showMore(index)'></i>
					</el-col>
				</div>
					
				<el-row style='clear:both;' class='mobile-txt'>
					<el-col :span='4' style='height:1px;' class='mobile-left'></el-col>
					<el-col :span='20' class='job-wrap job-wrap2' :class='item.isShow?"showmore":""'>
						<p v-if='index!=dataList.length-1'>职位要求：</p>
						<el-col class='job-demans'>
							<p v-for='demans in item.demans'>{{demans.title}}</p>
						</el-col>
					</el-col>	
				</el-row>				
			</el-col>
				
		</el-col>
	</el-col>
</template>
<style scoped>
	.item-list{border-bottom: 1px solid #555656;padding: 50px 0}
	.item-list p,.item-list h3{line-height: 1;font-weight: normal;}
	.item-list:last-child{border:none;}
	.icon-plus{font-size: 30px;color:#a7aeb3;cursor: pointer;}
	.more-txt{text-align: right;}
	.job-wrap p{color:#a7aeb3;}

	.job-demans{margin-top: 10px;}
	.job-demans p{line-height: 1.5;}
	.job-wrap{overflow: hidden;transition: all .3s;-webkit-transition: all .3s;-moz-transition: all .3s;-ms-transition: all .3s;}

	.showmore{height: auto !important;}
	.item-list:last-child .job-wrap{height: auto !important}
	.job-wrap2{height: 70px;overflow: hidden;}

	@media screen and (max-device-width:768px){
		.icon-plus{margin-right: 15px;}
		.item-date{width: 30%;text-align: center;}
		.item-list h3{font-size: 16px;}
		.more-txt{width: 20%;}
		.more-txt i{font-size: 18px;}
		.item-list:last-child .item-list h3{display: none;}
		.item-list{padding: 2rem 0 1.5rem 0;}
		.mobile-left{width: 0;}
		.mobile-txt{width: 100%;box-sizing: border-box;}
		.job-demans,.job-wrap2{width: 100%;height: 0;}
		.showmore{padding: 1rem .5rem 0 1rem;}
		.showmore .job-demans{height: auto;}
	}
	@media screen and (max-width:768px){
		.icon-plus{margin-right: 15px;}
		.item-date{width: 30%;text-align: center;}
		.item-list h3{font-size: 16px;}
		.more-txt{width: 20%;}
		.more-txt i{font-size: 18px;}
		.item-list:last-child .item-list h3{display: none;}
		.item-list{padding: 2rem 0 1.5rem 0;}
		.mobile-left{width: 0;}
		.mobile-txt{width: 100%;box-sizing: border-box;}
		.job-demans,.job-wrap2{width: 100%;height: 0;}
		.showmore{padding: 1rem .5rem 0 1rem;}
		.showmore .job-demans{height: auto;}
	}
</style>
<script>
	export default{
		data(){
			return {
				
				dataList:[
					{date:'2016-05-04',jobName:'资深平面设计师/全职',isShow:false,
						demans:[
							{title:'1、三年以上平面设计或广告行业工作经验；'},
							{title:'2、热爱设计，具有良好的审美素养、扎实的造型能力，有原创激情'},
							{title:'3、能够提出独立的创意概念并准确执行'},
						]
					},
					{date:'2016-05-04',jobName:'编辑文案/全职',isShow:false,
						demans:[
							{title:'1、中文、广告、新闻专业，有媒体工作经验者优先考虑；'},
							{title:'2、熟悉创意策划、品牌管理、媒体传播方面的知识或经验'},
							{title:'3、熟悉创意策划、品牌管理、媒体传播方面的知识或经验'},
						]
					}
					,
					{date:'HR邮箱',jobName:'HR邮箱',isShow:false,
						demans:[
							{title:'38333@qq.com'}
						]
					}
				]
			}
		},
		created(){

		},
		methods:{
			showMore(index){
				this.dataList[index].isShow = !this.dataList[index].isShow;
			}
		}
	}
</script>