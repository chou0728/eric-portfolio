<template>
	<div class="card-wrapper">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>快速瞭解你的出資效益</span>
			</div>
			<div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
		</el-card>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text {
	font-size: 14px;
}

.item {
	margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: '';
}
.clearfix:after {
	clear: both;
}

.box-card {
	width: 480px;
}
</style>