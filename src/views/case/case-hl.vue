<template>
	<section class="case_wrapper">
		<!-- <el-col :span='18' :offset='3'> -->
			<el-row class='bx-content'>
				<img src='../../assets/images/hl-1.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/hl-2.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/hl-3.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/hl-4.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/hl-5.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/hl-6.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/hl-7.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/hl-8.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/hl-9.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/hl-10.jpg'/>
			</el-row>
		<!-- </el-col>	 -->
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
	.bx-content img{max-width: 100%;display: block;}
</style>
