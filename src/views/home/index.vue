<template>
	<el-row>
		<el-col :sm='24'>
			<el-col>
				<v-banner :bannerDatas="banners"></v-banner>
			</el-col>
			<el-col class="home_content">
				<el-col class='case-list'>
					<el-col>
						<el-col class='case-wrap'>
							<el-col v-if='index!=caseList.length-1' v-for='(item,index) in caseList' @click='goCase'>
								<img :src='item.img' />
								<span class="case-cover">
								</span>
								<p class="cover-title">{{item.name}}</p>							
							</el-col>

							<el-col v-else @click='moreCase'>
								<p class="more-span">
									<span></span>
									<span></span>
									<span></span>
								</p>
							</el-col>
						</el-col>
					</el-col>	
					<el-col class='more'>					
						<span class='more-btn' @click='moreCase'>MORE</span>
					</el-col>
				</el-col>

				<el-col class='about'>
					<h3 class='about-title'>丁子品牌设计 ——您的优质品牌形象设计合作伙伴</h3>
					<el-col :span="22" :offset='1'>
						<el-col :span="10" class='about-img'>
							<img src='../../../static/images/img_company_01.jpg' />
						</el-col>
						<el-col :span="14" class='about-img'>
							<div class='about-txt'>
								<div class='para p1'>
									<h3>服务宗旨</h3>
									<p>用我的专业技术，让您的品牌价值再提升一步，</p>
									<p>这是我的立业之本。</p>
								</div>
								<div class="para p2">
									<h3>核心价值观</h3>
									<p><span>专业高效</span><span>优质出品</span><span>至诚至信</span></p>
								</div>
								<div class="para p3">
									<p>专注中小企业品牌设计服务</p>
								</div>
							</div>
							<img src='../../../static/images/img_company_02.jpg' />
						</el-col>
					</el-col>
					<el-col :span="22" :offset='1' class='team'>
						<p class="team-title">专业的品牌营销思维及设计团队</p>
						<p class="team-desc">快速反应 \ 高效无缝对接客户</p>
					</el-col>
					<el-col class='more'>					
						<span class='more-btn' @click='joinDinz'>Join DiNZ</span>
					</el-col>
				</el-col>	

				<el-col class='news'>
					<el-col :span='22' :offset='1'>
						<el-col :span='8' class='news-wrap'>
							<ul>
								<li v-for='item in newsList1'>
									{{item.title}}
								</li>
							</ul>
						</el-col>
						<el-col :span='8' class='news-wrap'>
							<ul>
								<li v-for='item in newsList2'>
									{{item.title}}
								</li>
							</ul>
						</el-col>
						<el-col :span='8' class='news-wrap'>
							<ul>
								<li v-for='item in newsList3'>
									{{item.title}}
								</li>
							</ul>
						</el-col>
					</el-col>
				</el-col>			
			</el-col>
		</el-col>
	</el-row>
</template>
<style scoped lang="less">
	.about_us,.stock,.case_list{cursor: pointer;}
	.item-row{background: #fff;margin-top:60px;position: relative;}
	.case-wrap>div{position: relative;}

	.case-cover{position: absolute;opacity: 0;left: 0;top: 0;height: 100%;width: 100%;background: #000;z-index: 999;transition: all .4s;-webkit-transition: all .4s;-moz-transition: all .4s;-ms-transition: all .4s;cursor: pointer}

	.case-wrap>div{width: 20%;overflow: hidden;}
	.case-wrap>div img{position:relative;z-index:99;width: 100%;cursor: pointer;transition: all .4s;-webkit-transition: all .4s;-moz-transition: all .4s;-ms-transition: all .4s;}
	.case-wrap>div img:hover{transform: scale(1.2);-webkit-transform: scale(1.2);-moz-transform: scale(1.2);-ms-transform: scale(1.2);}

	.cover-title{width:100%;cursor: pointer;position: absolute;left:50%;top: 50%;z-index: 99999;opacity: 0;-webkit-transition: all .3s;-moz-transition: all .3s;-ms-transition: all .3s;color:#fff;text-align: center;transform:translateY(-50%) translateX(-50%);-webkit-transform:translateY(-50%) translateX(-50%);-moz-transform:translateY(-50%) translateX(-50%);-ms-transform:translateY(-50%) translateX(-50%);font-size: 24px;}

	.more-btn{border:1px solid #999;color:#666;padding:12px 30px;cursor: pointer;}
	.more-btn:hover{background: #ED811C;border:1px solid #ED811C;color:#fff;transition: all .4s;-webkit-transition: all .4s;-moz-transition: all .4s;-ms-transition: all .4s;}
	.more{clear:both;margin:50px auto;text-align: center}
	.case-wrap{
		.el-col{
			&:hover .case-cover{
				opacity: .6;
			}
			&:hover img{
				-webkit-transform:scale(1.2);transform:scale(1.2);-moz-transform:scale(1.2);-ms-transform:scale(1.2);
			}
			&:hover .cover-title{opacity: 1;}
		}
	}

	.case-wrap>div:last-child{background:#d2d2d2;cursor: pointer}
	.case-wrap>div:last-child img,.case-wrap>div:last-child .case-cover{display: none !important}
	.case-wrap>div:last-child:after{content:'';display: block;margin-top:81%;}
	.case-wrap>div:last-child span{display: inline-block;width: 12px;height: 10px;border-radius: 6px;background:#fff;}
	.more-span {position: absolute;left:50%;top:50%;transform:translateY(-50%) translateX(-50%);-webkit-transform:translateY(-50%) translateX(-50%);-moz-transform:translateY(-50%) translateX(-50%);-ms-transform:translateY(-50%) translateX(-50%);}

	.case-title{text-align: center;margin:15px;}
	.more-case{float: left;}


	.about{margin-top:30px;}
	.about-title{color:#151515;text-align: center;margin-bottom: 30px;font-size: 24px;padding:0 15px;}
	.about-img{box-sizing: border-box;padding-left:5px;overflow: hidden;position: relative}
	.about-img:first-child{padding-left: 0;}
	.about-img img {width:100%;height: 420px;}
	.team{margin-top: 5px;box-sizing: border-box;overflow: hidden;text-align: center;background: #535353;color:#fff;padding: 12rem 0;}
	.team img{padding-left: 5px;width:100%;max-height: 430px;}
	.team-title{font-size: 36px;line-height: 2;}
	.team-desc{color:#FDD900}

	.about-txt{position: absolute;left:20px;top:20px;z-index: 999;color:#fff;}
	.about-txt h3{font-weight: normal;padding: 15px 0;transform:translateX(-100%);-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);-ms-transform:translateX(-100%);transition:all .5s 0s;-webkit-transition:all .5s 0s;}

	.about-txt .para p{transform:translateX(-110%);-webkit-transform:translateX(-110%);-moz-transform:translateX(-110%);-ms-transform:translateX(-110%);transition:all .5s 0s;-webkit-transition:all .5s 0s;}

	.about-txt .para{margin-bottom: 50px;}

	.about-txt .para:last-child{margin:120px 0 0 0;}
	.about-txt p{font-size: 14px;line-height: 2;}

	.about-txt .para:nth-child(1) h3{transition:all .3s 0s;-webkit-transition:all .3s 0s;}
	.about-txt .para:nth-child(1) p {transition:all .3s .3s;-webkit-transition:all .3s .4s;}
	.about-txt .para:nth-child(2) p {transition:all .3s .9s;-webkit-transition:all .3s .9s;}
	.about-txt .para:nth-child(3) p {transition:all .3s 1.2s;-webkit-transition:all .3s 1.2s;}
	.about-txt .para:nth-child(2) h3{transition:all .3s .6s;-webkit-transition:all .3s .6s;}


	.about-img:hover .about-txt h3{transform:translateX(0);-webkit-transform:translateX(0);}
	.about-img:hover .about-txt .p1 p{transform:translateX(0);-webkit-transform:translateX(0);}
	.about-img:hover .about-txt .p2 p{transform:translateX(0);-webkit-transform:translateX(0);}
	.about-img:hover .about-txt .p3 p{transform:translateX(0);-webkit-transform:translateX(0);}


	.news-wrap{font-size: 14px;color:#999;box-sizing: border-box;padding-left: 10%;}
	.news-wrap ul li:first-child{font-size: 16px;margin:15px 0;overflow: visible;margin-bottom: 20px;}
	.news-wrap:first-child{padding-left: 0;}
	.news{margin-top: 30px;margin-bottom: 60px;}
	.news-wrap ul li{cursor: pointer;position: relative;white-space: nowrap;overflow: hidden;text-overflow:ellipsis;line-height: 1.5;}
	.news-wrap ul li:hover{color:#333;}

	.news-wrap ul li:first-child:after{content:'';display: block;width:32px;height: 1px;background: #999;position: absolute;left:0;bottom: -10px;}

	.news-wrap ul{position: relative}
	.news-wrap ul:after{content:'';content:'';display: block;width:16px;height: 1px;background: #999;position: absolute;left:0;bottom: -12px;}


	@media screen and (max-device-width:768px){
		.case-wrap>div{width: 50%}
		.case-wrap>div:last-child{display: none;}
		.about-img{width:100%;margin-top:5px;padding-left: 0;height: 160px;}
		.about-img img{height:auto;}
		.team{padding: 2.5rem 0;}
		.team-title{font-size: 22px;}
		.news{display: none;}
	}
	@media screen and (max-width:768px){
		.case-wrap>div{width: 50%}
		.case-wrap>div:last-child{display: none;}
		.about-img{width:100%;margin-top:5px;padding-left: 0;height: 160px;}
		.about-img img{height:auto;}
		.team{padding: 2.5rem 0;box-sizing: border-box;height: 160px;}
		.team-title{font-size: 22px;}
		.news{display: none;}
	}
</style>

<script>
	import vBanner from '@/components/banner.vue'
	import Banner1 from '../../../static/images/banner_home_01.jpg'
	import Banner2 from '../../../static/images/banner_home_02.jpg'
	import Banner3 from '../../../static/images/banner_home_03.jpg'

	import Case1 from '../../../static/images/img_case_01.jpg'
	import Case2 from '../../../static/images/img_case_02.jpg'
	import Case3 from '../../../static/images/img_case_03.jpg'
	import Case4 from '../../../static/images/img_case_04.jpg'
	import Case5 from '../../../static/images/img_case_05.jpg'
	import Case6 from '../../../static/images/img_case_06.jpg'
	import Case7 from '../../../static/images/img_case_07.jpg'
	import Case8 from '../../../static/images/img_case_08.jpg'
	import Case9 from '../../../static/images/img_case_09.jpg'
	import Case10 from '../../../static/images/img_case_10.jpg'
	import Case11 from '../../../static/images/img_case_11.jpg'
	import Case12 from '../../../static/images/img_case_12.jpg'
	import Case13 from '../../../static/images/img_case_13.jpg'
	import Case14 from '../../../static/images/img_case_14.jpg'



	export default{
		data(){
			return{
				banners:[
            		{src:Banner1,link:'',alt:'',index:1},
            		{src:Banner2,link:'',alt:'',index:2},
            		{src:Banner3,link:'',alt:'',index:3},
            	],
            	caseList:[
            		{img:Case1,link:'',name:'本姓酒'},
            		{img:Case2,link:'',name:'Fortes'},
            		{img:Case3,link:'',name:'爱丽舍'},
            		{img:Case4,link:'',name:'汉凯'},
            		{img:Case5,link:'',name:'Smile Cakes'},
            		{img:Case6,link:'',name:'慢猴'},
            		{img:Case7,link:'',name:'草橙酒业'},
            		{img:Case8,link:'',name:'Inhuo'},
            		{img:Case9,link:'',name:'优央'},
            		{img:Case10,link:'',name:'尚里'},
            		{img:Case11,link:'',name:'本姓酒'},
            		{img:Case12,link:'',name:'Epire'},
            		{img:Case13,link:'',name:'紫罗兰'},
            		{img:Case14,link:'',name:'灵丹瑜伽'},
            		{img:'',link:'',name:'更多案例>>'},
            	],
            	newsList1:[
            		{title:'丁子动态 >',link:''},
            		{title:'LOGO设计公司价格差距是哪些因素造成的',link:''},
            		{title:'LOGO设计公司怎样提炼设计内容',link:''},
            		{title:'LOGO设计公司应遵循哪三大原则',link:''},
            		{title:'影响LOGO设计公司创意设计因素有哪些',link:''},
            	],
            	newsList2:[
            		{title:'丁子观点 >',link:''},
            		{title:'将品牌形象钉在消费者心智里',link:''},
            		{title:'品牌快速赢得消费者信任的29种方法',link:''},
            		{title:'十分钟看懂 聚焦',link:''},
            		{title:'丁子徐浅谈“钉视觉”美学',link:''},
            	],
            	newsList3:[
            		{title:'行业咨讯 >',link:''},
            		{title:'微信时代的产品包装设计需将升级',link:''},
            		{title:'原研哉公开2020年东京奥运会LOGO',link:''},
            		{title:'美国时装品牌Calvin Klein更换新LOGO',link:''},
            		{title:'小米公司松果电子品牌LOGO',link:''},
            	]

			}
		},
		created(){
		},
		methods:{	
			goCase(){

			},
			moreCase(){

			},
			joinDinz(){

			}
		},
		components:{ 
			vBanner
		}
	}	
</script>