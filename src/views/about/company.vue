<template>
	<el-col class='company-wrap'>
		<el-col :span='6' class='company-img'>
			<img src='../../../static/images/img_company_01.jpg' />
		</el-col>
		<el-col :span='13' class='company-txt'>
				<h3>關於我們</h3>
				<p>丁子品牌设计，有寓意“钉子精神”之意，有钻研不惧阻碍、独立追求的张力，形简于“丁”，简于心和初衷，我们追求作品的高度，去冗就简不形式的服务初心。团队于2007年始建于深圳，前身为工作室规模历时10年成长的沉淀，与众多企业达成友好的合作，团队培养出许多新锐设计师，拥有多位业界杰出的设计师，为合作伙伴交付数量庞大的优秀作品与成功案例。丁子品牌设计专注中小企业品牌建设，如VIS、LOGO、画册、包装、网店、装饰空间等领域，为企业策划全年品牌战略方案，助力企业的业界影响力与知名度，搭建各领域之间交流及服务的平台。致力于为注重“企业形象”和“品牌气质”的高要求客户提供整体形象创建与改造升级设计服务。由业内知名总监合力智建，靠专业和口碑吸引众多客户；</p>
		</el-col>
	</el-col>
</template>
<style scoped>
	.company-img img {width: 100%;border:10px solid #EBF8E7;}
	.company-wrap{padding: 40px 0 150px 0;}
	.company-txt{margin-left: 65px;}
	.company-txt h3{font-size: 36px;font-weight: normal;line-height: 1;margin-bottom: 30px;}
	.company-txt p{line-height: 2.4;text-indent: 1em;text-align: justify;}
	@media screen and (max-device-width:768px){
		.company-img,.company-txt{width: 100%;margin-left: 0;}
		.company-img img{border:none;}
		.company-wrap{padding: 1rem;}
		.company-txt h3{text-align: center;font-size: 20px;margin:1rem;margin-top: 2rem;}
		.company-txt p{font-size: 1.2;padding: 0 1rem;font-size: 14px;}
		
	}
	@media screen and (max-width:768px){
		.company-img,.company-txt{width: 100%;margin-left: 0;}
		.company-img img{border:none;}
		.company-wrap{padding: 1rem;}
		.company-txt h3{text-align: center;font-size: 20px;margin:1rem;margin-top: 2rem;}
		.company-txt p{font-size: 1.2;padding: 0 1rem;font-size: 14px;}
		
	}
</style>