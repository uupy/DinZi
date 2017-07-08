<template>
	<section class="case_wrapper">
		<el-row class="case_content1">
			<el-col :span="12" class="case_left">
				<p>致力成为海南省 农业丨文化丨旅游 地域IP品牌</p>
				<img src="../../assets/images/img_mh_01.png" alt="">
				<h3>海南省 慢生活 不猴急</h3>
				<p class="subtext">海南慢猴网络科技有限公司</p>
			</el-col>
			<el-col :span="12" class="case_right">
				<p class="mh_logo">
					<img src="../../assets/images/img_mh_01.png" alt="">
					<span>机会与痛点</span>
				</p>
				<p class="con">海南，生态的<b>绿洲</b>，文化的沙漠</p>
			</el-col>
		</el-row>
		<el-row class="case_content2">
			<el-col :span="12" class="case_left">
				<p class="mh_logo">
					<img src="../../assets/images/img_mh_01.png" alt="">
					<span>参考案例</span>
				</p>
			</el-col>
			<el-col :span="12" class="case_right">
				<el-col :span="9">
					<h3>市场参考</h3>
					<p>日本贫困县熊本县</p>
					<p>地方IP项目</p>
					<p>名称：熊本熊（Kumamon）</p>
					<p>性别：男</p>
					<p>生日：2010年3月12日</p>
					<p>家乡：日本熊本县</p>
					<p>职业：公务员（县政府营业部、幸福部部长）</p>
					<p>熟悉他的朋友大概已经知道，熊本熊并非意外走红，其实是靠成功的营销。</p>
					<p>起初，熊本只是熊本县政府为了配合新干线开通宣传，而设计出的吉祥物。当他正式诞生后，这个没什么特点、以农业为特点的熊本县还是启动的相应的营销计划。</p>
				</el-col>
				<el-col :span="15">
					<img src="../../assets/images/img_mh_new.jpg" alt="">
				</el-col>
			</el-col>
		</el-row>
		<el-row class="case_content3">
			<el-col :span="12">
				<p class="mh_logo">
					<img src="../../assets/images/img_mh_01.png" alt="">
					<span>慢猴介绍</span>
				</p>
			</el-col>
			<el-col :span="12"></el-col>
		</el-row>
		<el-row class="case_content4">
			<el-col :span="12"></el-col>
			<el-col :span="12"></el-col>
		</el-row>
		<el-row class="case_content5">
			<el-col :span="12"></el-col>
			<el-col :span="12"></el-col>
		</el-row>
		<el-row class="case_content6">
			<el-col :span="12"></el-col>
			<el-col :span="12"></el-col>
		</el-row>
		<el-row class="case_content7">
			<el-col :span="12"></el-col>
			<el-col :span="12"></el-col>
		</el-row>
		<el-row class="case_content8">
			<el-col :span="12"></el-col>
			<el-col :span="12"></el-col>
		</el-row>
	</section>
</template>
<script>
	export default {
		data(){
			return {
							
			}
		},
		components: {
			
		},
		mounted: function(){ 

		},
		methods: {
			
		}
			
	}
</script>
<style lang='less'>
	@headerHeight:110px;
	.case_wrapper{
		div[class^="case_content"]{
			.case_left,.case_right{
				padding: 40px 0 20px;
			}
		}
		text-align: center;
	}
	.case_content1,.case_content3{
		color: #bd8701;
		background:#feee00;
	}
	.case_content1{
		.case_left{
			border-right: 4px solid #fff;
			img{
				width: 70%;
				margin: 60px auto 20px;
			}
			h3{
				font-size: 28px;
				font-weight: normal;
			}
			.subtext{
				padding-top: 30px;
				font-size:12px;
			}
		}
		.case_right{
			.mh_logo{
				padding-left: 40px;
				text-align:left;
			}
			.con{
				padding-top: 13%;
				font-size: 32px;
				b{
					color: #92d050;
					font-weight: normal;
				}
			}
		}
	}
	.case_content2{
		color: #94890d;
		.case_left{
			border-right: 4px solid #feee00;
		}
		.case_right{
			.el-col{
				padding:0 20px;
			}
			text-align:left;
			p{

			}
			img{
				width: 100%;
			}
		}
	}
	.mh_logo{
		img{
			display: inline-block;
			width: 150px;
			vertical-align: middle;
		}
		span{
			display: inline-block;
			padding-left:10px;
			vertical-align: middle;
			font-size: 28px;
		}
	}
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
