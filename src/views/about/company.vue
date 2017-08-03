<template>
	<el-row :gutter="40" class='company-wrap'>
		<el-col :span='6' class='company-img'>
			<img src='../../../static/images/img_company_01.jpg' />
			<el-row class='company-img-txt'>
				<el-col :span="8" class='company-img-subtxt'>专业高效</el-col>
				<el-col :span="8" class='company-img-subtxt'>优质出品</el-col>
				<el-col :span="8" class='company-img-subtxt'>至诚至信</el-col>
			</el-row>
		</el-col>
		<el-col :span='18' class='company-txt'>
			<el-row class='company-con' v-for="(item,index) in company" :key="index">
				<h3>{{item.title}}</h3>
				<div v-html="item.content"></div>
			</el-row>
		</el-col>
	</el-row>
</template>
<script>
	export default{
		data(){
			return{
				company:[
					{
						title:'關於我們',
						content:'<p>丁子品牌设计，有寓意“钉子精神”之意，有钻研不惧阻碍、独立追求，形简于“丁”，简于心和初衷，我们追求作品的高度，去冗就简不形式的服务初心。团队于2007年始建于深圳，前身为工作室规模历时10年成长的沉淀，与众多企业达成友好的合作团队培育出许多新锐设计师，拥有多位业界杰出的设计师，为合作伙伴交付数量庞大的优秀作品与成功案例。丁子设计致力于打造精品设计的权威机构。专注企业品牌VIS、LOGO、画册、包装、网店、装饰空间登领域的品牌建设，为企业策划全年品牌战略方案，致力于提升企业的业界影响力与知名度，搭建各领域之间交流及服务的平台。</p>'
					},
					{
						title:'核心理念',
						content:'<p>丁子品牌立足深圳，目前公司设计体系分为品牌设计和电商设计两大类。以往丁子为不少知名品牌提供了获得认可的设计服务，建立起友好的合作关系，但我们的初衷更偏重于服务创业型的中小企业，致力为他们提供整体形象创建与改造升级设计服务，目前已经与20多家企业建立年度服务合作，深圳的本土企业，客户有需求的，丁子会不定期派驻设计师驻点深入了解企业设计需求，无缝对接计划和汇总工作，我们希望自己能做的，不仅仅是表面的美化设计，而是能融入企业，了解企业的一个部门，做系统的品牌设计和形象表达。</p>'
					},
					{
						title:'服务宗旨',
						content:'<p>用我的专业技术，让您的品牌价值再提升一步，这是我的立业之本。</p>'
					},
					{
						title:'企业追求',
						content:`<p>专业 高效 优质出品 至诚至信</p>
								 <p>致力于为注重“企业形象”和“品牌气质”的高要求为客户提供整体形象创建与改造升级设计服务。</p>
								`
					}
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
	.company-img img {width: 100%;border:10px solid #EBF8E7;box-sizing: border-box;}
	.company-wrap{padding: 40px 0 150px 0;}
	/*.company-txt{margin-left: 65px;}*/
	.company-txt h3{font-size: 30px;font-weight: normal;line-height: 1;margin-bottom:25px;}
	/*.company-txt p{line-height: 22px;text-indent: 1em;text-align: justify;}*/
	.company-img-txt{
		padding-top:20px;
		text-align:center;
	}
	.company-con{
		padding-bottom:40px;
		p{
			line-height: 30px;
			// text-indent: 2em;
			text-align: justify;
		}
	}
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