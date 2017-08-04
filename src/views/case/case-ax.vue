<template>
	<section class="case_wrapper">
		<el-row class='bx-content ax-content-1'>
			<img src='../../assets/images/case_ax_01.jpg'/>
		</el-row>
		<el-row class='bx-content ax-content-2'>
			<el-col :span="12" class='ax-content-2-left'>
				<img src='../../assets/images/case_ax_02.jpg'/>
			</el-col>
			<el-col :span="12" class='ax-content-2-right'>
				<img src='../../assets/images/case_ax_03.jpg'/>
			</el-col>
		</el-row>
		<el-row class='bx-content ax-content-3'>
			<img src='../../assets/images/case_ax_bg_01.jpg'/>
			<div class="ax-content-inner">
				<img src='../../assets/images/case_ax_04.png'/>
			</div>
		</el-row>
		<el-row class='bx-content ax-content-4'>
			<img src='../../assets/images/case_ax_05.jpg'/>
		</el-row>
		<el-row class='bx-content ax-content-5'>
			<img src='../../assets/images/case_ax_06.jpg'/>
		</el-row>
		<el-row class='bx-content ax-content-6'>
			<el-col :span="12">
				<img src='../../assets/images/case_ax_07.jpg'/>
			</el-col>
			<el-col :span="12">
				<img src='../../assets/images/case_ax_08.jpg'/>
			</el-col>
		</el-row>
		<el-row class='bx-content ax-content-7'>
			<img src='../../assets/images/case_ax_09.jpg'/>
		</el-row>
		<el-row class='bx-content ax-content-8'>
			<img src='../../assets/images/case_ax_10.jpg'/>
		</el-row>
	</section>
</template>
<script>
	export default {
		data(){
			return {
							
			}
		},
		mounted: function(){ 
			const self = this;
			self.$nextTick(()=>{
				const dom_h = $(document).height();
				$('.case_content').each(function(){
					const _this = $(this);
					if(_this.offset().top < dom_h*4/5){
						_this.addClass('animated');
					}
				});
				$('#app-wrapper').scroll(function(){
					$('.case_content').each(function(){
						const _this = $(this);
						if(_this.offset().top < dom_h*3/4){
							_this.addClass('animated');
						}
					});
				});
			});
		},
		methods: {
			
		}	
	}
</script>
<style lang='less'>
	.bx-content{}
	.bx-content img{position: relative; max-width: 100%;display: block;margin: 0 auto;border:0;}
	.ax-content-2{
		z-index: 100;
		box-shadow: 0 0 100px #333;
	}
	.ax-content-2{
		background:#bcda00;
	}
	.ax-content-2-left{
		border-right: 5px solid #fff;
	}
	.ax-content-2-right{
		border:0;
	}
	.ax-content-inner{
		position: absolute;
		bottom: 0;
		left:50%;
		width:100%;
		transform:translateX(-50%);
		img{
			margin: 0 auto;
		}
	}
</style>
