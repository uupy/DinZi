<template>
	<el-row :gutter="40" class='contact-wrap'>
		<el-col :span='6' class='contact-left'>
			<h3>联系我们</h3>
			<div class="contact-left-box">
				<h4>地址</h4>
				<p>深圳市宝安区翻身路佳怡商务大厦203</p>
			</div>
			<div class="contact-left-box">
				<h4>E-mail</h4>
				<p>383334684@qq.com</p>
			</div>
			<div class="contact-left-box">
				<h4>TEL</h4>
				<p>17704052821</p>
				<p>17704020863</p>
				<p>13670107052</p>
			</div>
			<div class="contact-left-box">
				<h4>Q Q</h4>
				<p>383334684</p>
			</div>
		</el-col>
		<el-col :span='18' class='contact-right'>
			<div class="contact-map" id="contact-map">
				<img :src="contact.imgSrc" />
			</div>
		</el-col>
	</el-row>
</template>
<script>
	import contact_map from '../../assets/images/contact_map.jpg'
	export default{
		data(){
			return{
				contact:{
					imgSrc:contact_map
				}
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
	.contact-wrap{padding: 40px 0 150px 0;}
	.contact-left{
		h3{
			margin-bottom: 40px;
			font-size: 30px;
			font-weight: normal;
		}
		.contact-left-box{
			padding-bottom: 40px;
			font-size:18px;
			color: #fff;
			h4{
				padding-bottom:4px;
				color: #c0c0c0;
				font-weight:normal;
			}
		}
	}
	.contact-map{
		img{
			width: 100%;
		}
	}
	@media screen and (max-device-width:768px){
		.contact-wrap{padding: 1rem;}
		.contact-left{
			width: 100%;
			text-align: center;
			h3{
				margin-bottom: 20px;
				font-size:20px;
			}
			.contact-left-box{
				padding-bottom: 20px;
				font-size:16px;
			}
		}
		.contact-right{
			width: 100%;
		}
	}
	@media screen and (max-width:768px){
		.contact-wrap{padding: 1rem;}
		.contact-left{
			width: 100%;
			text-align: center;
			h3{
				margin-bottom: 20px;
				font-size:20px;
			}
			.contact-left-box{
				padding-bottom: 20px;
				font-size:16px;
			}
		}
		.contact-right{
			width: 100%;
		}
	}
</style>