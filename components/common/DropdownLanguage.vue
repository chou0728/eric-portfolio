<template>
	<div class="dropdown">
		<el-dropdown trigger="click">
			<span class="el-dropdown-title">
				{{ $t('components.DropdownLanguage.title') }}
				<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<nuxt-link :to="langLink('zhTW')">
					<el-dropdown-item>繁體中文</el-dropdown-item>
				</nuxt-link>
				<nuxt-link :to="langLink('zhTW')">
					<el-dropdown-item>简体中文</el-dropdown-item>
				</nuxt-link>
				<nuxt-link :to="langLink('zhTW')">
					<el-dropdown-item>English</el-dropdown-item>
				</nuxt-link>
				<!-- <nuxt-link :to="langLink('zhCN')">
					<el-dropdown-item>简体中文</el-dropdown-item>
				</nuxt-link>
				<nuxt-link :to="langLink('enUS')">
					<el-dropdown-item>English</el-dropdown-item>
				</nuxt-link> -->
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
export default {
	name: 'DropdownLanguage',
	computed: {
		currentRoute() {
			const array = this.$route.name.split('-');
			const length = array.length;
			return length === 1 ? '' : array[length - 1];
		}
	},
	methods: {
		langLink(lang) {
			return `/${lang}/${this.currentRoute}`;
		}
	}
};
</script>

<style lang="scss" scoped>
.dropdown {
	cursor: pointer;
}
.el-dropdown-title {
	outline: 0;
	&:hover {
		color: $color-primary;
	}
}
</style>