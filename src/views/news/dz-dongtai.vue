<template>
	<el-col class='company-wrap'>		
		<el-col class='company-txt'>
			<el-col v-for='(item,index) in dataList' :key='index' class='item-list'>
				<div>
					<el-col :span='5' class='item-date'>
						<img src='../../../static/images/points.jpg'/>
					</el-col>
					<el-col :span='18' class='job-wrap' >
						<h3 style="margin-bottom: 30px">{{item.jobName}}</h3>	
						<el-row style='clear:both;' class='mobile-txt'>
							<el-col :span='24' class='job-wrap2' :class='item.isShow?"showmore":""'>
								<el-col class='job-demans'>
									<p v-for='(demans,index) in item.demans' :key='index'>{{demans.title}}</p>
								</el-col>
							</el-col>	
						</el-row>
						<div class='news-time' style="clear: both;margin-top: 40px;">
							<el-col :span='20' class='date-txt'>
								<p>{{item.date}}</p>
							</el-col>
							<el-col :span='4' class='more-txt'>
								<span @click='showMore(index)'>MORE +</span>
							</el-col>
						</div>						
					</el-col>
				</div>			
			</el-col>
				
		</el-col>
	</el-col>
</template>
<style scoped>
	.item-list{border-bottom: 1px solid #555656;padding: 50px 0}
	.item-list p,.item-list h3{line-height: 1;font-weight: normal;}
	.item-list:last-child{border:none;}
	.icon-plus{font-size: 30px;color:#a7aeb3;cursor: pointer;}
	.more-txt{text-align: right;color:#a7aeb3;cursor: pointer;}
	.job-wrap p{color:#a7aeb3;}

	.job-demans{margin-top: 10px;}
	.job-demans p{line-height: 2;text-indent: 2em;}
	.job-wrap{margin-left:30px;overflow: hidden;transition: all .3s;-webkit-transition: all .3s;-moz-transition: all .3s;-ms-transition: all .3s;}

	.showmore{height: auto !important;}
	.item-list:last-child .job-wrap{height: auto !important}
	.job-wrap2{height: 70px;overflow: hidden;}
	.item-date img{width: 100%;}

	@media screen and (max-device-width:768px){
		.icon-plus{margin-right: 15px;}
		.item-date{width: 25%;text-align: center;display: none;}
		.item-list h3{font-size: 16px;}
		.more-txt{width: 20%;}
		.more-txt i{font-size: 18px;}
		.item-list:last-child .item-list h3{display: none;}
		.item-list{padding: 2.5rem 0 1.5rem 0;}
		.mobile-left{width: 0;}
		.mobile-txt{width: 100%;box-sizing: border-box;}
		.job-demans,.job-wrap2{width: 100%;height: 0;}
		.showmore{padding: 0rem .5rem 0 0rem;}
		.showmore .job-demans{height: auto;}
		.item-list{padding: .6rem;box-sizing: border-box;}

		.job-wrap{overflow:visible;width: 100%;margin-left: 0;padding-left: 1rem;box-sizing: border-box;}
		.news-time{margin-top: .5rem !important;width: 100%;}
		.job-wrap h3{margin-bottom: .5rem !important;}
		.date-txt,.more-txt{width: 50%;}

	}
	@media screen and (max-width:768px){
		.icon-plus{margin-right: 15px;}
		.item-date{width: 25%;text-align: center;display: none;}
		.item-list h3{font-size: 16px;}
		.more-txt{width: 20%;}
		.more-txt i{font-size: 18px;}
		.item-list:last-child .item-list h3{display: none;}
		.item-list{padding: 2.5rem 0 1.5rem 0;}
		.mobile-left{width: 0;}
		.mobile-txt{width: 100%;box-sizing: border-box;}
		.job-demans,.job-wrap2{width: 100%;height: 0;}
		.showmore{padding: 0rem .5rem 0 0rem;}
		.showmore .job-demans{height: auto;}
		.item-list{padding: .6rem;box-sizing: border-box;}
		.job-wrap{overflow:visible;width: 100%;margin-left: 0;padding-left: 1rem;box-sizing: border-box;}
		.news-time{margin-top: .5rem !important;width: 100%;}
		.job-wrap h3{margin-bottom: .5rem !important;}
		.date-txt,.more-txt{width: 50%;}
	}
</style>
<script>
	export default{
		data(){
			return {
				
				dataList:[
					{date:'2016-05-04',jobName:'LOGO设计公司价格差距是哪些因素造成的',isShow:false,
						demans:[
							{title:'没有战略规划就找不准目标需求设计，而目标需求设计，是建立在目标用户的视觉感官之上。只要针对目标需求的设计就能有效强化品牌定位，占据目标消费群的心智。是帮助没有战略规划就找不准目标需求设计，而目标需求设计，是建立在目标用户的视觉感官之上。只要针对目标需求的设计就能有效强化品牌定位，占据目标消费群的心智。是帮助没有战略规划就找不准目标需求设计，而目标需求设计，是建立在目标用户的视觉感官之上。只要针对目标需求的设计就能有效强化品牌定位，占据目标消费群的心智。是帮助...'}
						]
					},
					{date:'2016-05-04',jobName:'LOGO设计公司怎样提炼设计内容',isShow:false,
						demans:[
							{title:'没有战略规划就找不准目标需求设计，而目标需求设计，是建立在目标用户的视觉感官之上。只要针对目标需求的设计就能有效强化品牌定位，占据目标消费群的心智。是帮助没有战略规划就找不准目标需求设计，而目标需求设计，是建立在目标用户的视觉感官之上。只要针对目标需求的设计就能有效强化品牌定位，占据目标消费群的心智。是帮助没有战略规划就找不准目标需求设计，而目标需求设计，是建立在目标用户的视觉感官之上。只要针对目标需求的设计就能有效强化品牌定位，占据目标消费群的心智。是帮助...'}
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