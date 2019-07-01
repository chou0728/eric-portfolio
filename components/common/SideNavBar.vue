<template>
	<div class="side-nav-bar">
		<el-menu
			:router="true"
			class="el-menu-side-nav"
			background-color="#2f2f2f"
			text-color="#fff"
			active-text-color="#fff"
		>
			<nuxt-link
				:to="{ path: routerPath(item.path) }"
				v-for="(item,index) in $t('components.SideNav.navList')"
				:key="index"
			>
				<el-menu-item :index="item.path">
					<span slot="title">{{item.name}}</span>
				</el-menu-item>
			</nuxt-link>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: 'SideNavBar',
	methods: {
		routerPath(route) {
			return `/${this.$store.state.locale}/${route}`;
		}
	}
};
</script>

<style lang="scss" scoped>
/deep/ {
	.el-menu {
		height: 100vh;
		border-right: none;
	}
	.el-menu-item {
		text-align: center;
		&:hover{
			background-color: #0c5cb8 !important;
		}
		
	}
	// .el-menu-item.is-active {
	// 	background-color: #0c5cb8 !important;
	// 	color: #fff !important;
	// }
}
</style>
