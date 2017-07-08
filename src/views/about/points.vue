<template>
	<el-col class='company-wrap'>
		<el-col :span='6' class='company-img'>
			<img src='../../../static/images/points.jpg' />
			<p>
				<span>专业高效</span>
				<span>优质出品</span>
				<span>至诚至信</span>
			</p>
		</el-col>
		<el-col :span='13' class='company-txt'>
				<h3>设计观点</h3>
				<p>没有战略规划就找不准目标需求设计，而目标需求设计，是建立在目标用户的视觉感官之上。只要针对目标需求的设计就能有效强化品牌定位，占据目标消费群的心智。是帮助企业提升商业实现战略目标。品牌在潜在顾客心智中获得一个有利的印象，并能够持久地影响他的购买决策行为。</p>

				<h3>價值观</h3>
				<p>用我的专业技术，让您的品牌价值再提升一步，这是我的立业之本。</p>
		</el-col>
	</el-col>
</template>
<style scoped>
	.company-img img {width: 100%;}
	.company-wrap{padding: 40px 0 150px 0;}
	.company-txt{margin-left: 65px;}
	.company-txt h3{font-size: 36px;font-weight: normal;line-height: 1;margin-bottom: 30px;}
	.company-txt p{line-height: 2.4;text-indent: 1em;text-align: justify;margin-bottom: 40px;}
	.company-img p{text-align: center;margin:102px 0 50px 0;}
	.company-img p span{display: inline-block;margin:0 10px;}
	@media screen and (max-device-width:768px){
		.company-img,.company-txt{width: 100%;margin-left: 0;}
		.company-img img{border:none;}
		.company-wrap{padding: 1rem;}
		.company-txt h3{text-align: center;font-size: 20px;margin:1rem;margin-top: 2rem;}
		.company-txt p{font-size: 1.2;padding: 0 1rem;font-size: 14px;}
		.company-img p{margin:1rem 0;}
	}
	@media screen and (max-width:768px){
		.company-img,.company-txt{width: 100%;margin-left: 0;}
		.company-img img{border:none;}
		.company-wrap{padding: 1rem;}
		.company-txt h3{text-align: center;font-size: 20px;margin:1rem;margin-top: 2rem;}
		.company-txt p{font-size: 1.2;padding: 0 1rem;font-size: 14px;}
		.company-img p{margin:1rem 0;}
	}
</style>