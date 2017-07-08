<template>
	<el-row class='footer'>
		<el-col :span='22' :offset='1'>
			<el-col :span='3' class='dz_ewm'>
				<img src='../../static/images/dz_ewm.jpg' />
			</el-col>
			<el-col :span='5' class='dz_title'>
				<img src='../../static/images/logo.svg' />
				<img src='../../static/images/page-title.png' />
				<p class="footer-txt">深圳市宝安区翻身路佳怡商务大厦203</p>
				<p class="footer-txt">TEL：13670107052</p>
				<p class="footer-txt">Q Q：383334684</p>
			</el-col>
			<el-col :span='9' class='footer-nav'>
				<el-col :span='6'>
					<ul>
						<li v-for='item in caseMenu'>
							{{item.name}}
						</li>
					</ul>
				</el-col>
				<el-col :span='6'>
					<ul>
						<li v-for='item in aboutMenu'>
							{{item.name}}
						</li>
					</ul>
				</el-col>
				<el-col :span='6'>
					<ul>
						<li v-for='item in pointMenu'>
							{{item.name}}
						</li>
					</ul>
				</el-col>
				<el-col :span='6'>
					<ul>
						<li v-for='item in contactMenu'>
							{{item.name}}
						</li>
					</ul>
				</el-col>
			</el-col>
			<el-col :span='6' class='copyright'>
				<p class="footer-txt">粤ICP备20111825号</p>
				<p class="footer-txt">©Dinz Design 2005-2016</p>
				<p class="footer-txt">本网站设计、源代码及其中所展示之作品著作权</p>
				<p class="footer-txt">均属于深圳丁子品牌设计</p>
				<p class="footer-txt">保留所有权利。</p>
				<p class="footer-txt">粤公网安备 33010502002359号</p>
			</el-col>
			<el-col class='copyright-mobile'>
				<p>Copyright &copy; 深圳丁子品牌设计</p>
			</el-col>
		</el-col>	
	</el-row>
</template>
<style scoped>
	.footer{background: #333;padding:2rem 0;width: 100%;font-size: 14px;clear:both;}
	.dz_ewm{text-align: right;box-sizing: border-box;}
	.dz_ewm img{max-width: 140px;display: inline;width: 100%}
	.dz_title img:nth-child(2){margin-left: 6px;max-width: 125px;margin:6px;width: 100%}
	.dz_title img:nth-child(1){max-width: 140px;width: 100%}
	.footer-txt{line-height: 1.4;color:#ccc;font-size: 14px;margin-left: 6px;}
	.dz_title{margin-left: 6px;}
	.footer-nav{color:#ccc;}
	.footer-nav ul li:nth-child(1){font-size: 16px;position: relative;margin-bottom: 20px;letter-spacing: 20px;}
	.footer-nav ul li:nth-child(1):after{position: absolute;left:0;bottom: -10px;content:'';height: 1px;background: #ccc;width: 53px}
	.footer-nav ul li {line-height: 1.6;}
	.copyright .footer-txt{line-height: 1.8;}
	.copyright-mobile{display: none;color: #ccc;text-align: center;}

	@media screen and (max-device-width:768px){
		.footer{padding: 1rem 0;}
		.dz_ewm,.dz_title,.footer-nav,.copyright{display: none;}
		.copyright-mobile{display: block;}
	}
	@media screen and (max-width:768px){
		.dz_ewm,.dz_title,.footer-nav,.copyright{display: none;}
		.copyright-mobile{display: block;}
		.copyright{width: 100%;}
		.copyright .footer-txt{float: left;}
	}
</style>
<script>
	export default{
		data(){
			return {
				caseMenu:[
					{name:'案例',link:''},
					{name:'品牌策划',link:''},
					{name:'品牌设计',link:''},
					{name:'商业空间',link:''},
					{name:'丁子服务',link:''},
				],
				aboutMenu:[
					{name:'关于',link:''},
					{name:'丁子是谁',link:''},
					{name:'丁子优势',link:''},
					{name:'合作须知',link:''},
					{name:'丁子精神',link:''},
				],
				pointMenu:[
					{name:'观点',link:''},
					{name:'丁子观点',link:''},
					{name:'丁子动态',link:''},
					{name:'行业资讯',link:''},
				],
				contactMenu:[
					{name:'联系',link:''},
					{name:'联系方式',link:''},
					{name:'人才招聘',link:''},
					{name:'位置地图',link:''},
				],
			}
		},
		created(){

		},
		methods:{

		}
	}
</script>
