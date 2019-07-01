<template>
	<div class="title-wrapper">
		<h2 class="title">{{ $t(`${i18nPrefix}.title`) }}</h2>
		<p class="description" v-html="$t(`${i18nPrefix}.description`)" v-if="$t(`${i18nPrefix}.description`)" />
	</div>
</template>

<script>
export default {
	name: 'Title',
	props: {
		i18nPrefix: {
			type: String,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.title-wrapper {
	padding: 0 20px 40px 20px;
	text-align: center;
	color: $color-gray-deep;
}

.title {
	padding-bottom: 10px;
}

.description {
	padding-bottom: 10px;
}

</style>