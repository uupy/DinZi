<template>
	<section class="case_wrapper">
		<!-- <el-col :span='18' :offset='3'> -->
			<el-row class='bx-content'>
				<img src='../../assets/images/fts-1.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/fts-2.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/fts-3.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/fts-4.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/fts-5.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/fts-6.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/fts-7.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/fts-8.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/fts-9.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/fts-10.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/fts-11.jpg'/>
			</el-row>
			<el-row class='bx-content'>
				<img src='../../assets/images/fts-12.jpg'/>
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
