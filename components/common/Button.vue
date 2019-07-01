<template>
	<el-button type="primary" @click="$emit('click')">{{text}}</el-button>
</template>

<script>
export default {
	name:'Button',
	props: {
		text: {
			type: String,
			required: true
		},
	}
};
</script>

<style lang="scss" scoped>
// .el-button {
// 	@include RWD-pc {
// 		background: $color-black;
// 	}
// }
</style>