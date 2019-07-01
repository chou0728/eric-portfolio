<template>
	<div class="default-layout">
		<nuxt />
		
		<!-- <div class="default-layout-pc">
			<div class="default-layout-pc__left">
				<SideNavBar />
			</div>
			<div class="default-layout-pc__right">
				<nuxt />
			</div>
		</div>
		<div class="default-layout-phone">
			<Header @sidenavToggle="displaySideNav = !displaySideNav" />
			<SideNav :show="displaySideNav" @close="displaySideNav = false" />
			<nuxt />
		</div> -->
	</div>
</template>

<script>
import Header from '@/components/common/Header';
import SideNav from '@/components/common/SideNav';
import SideNavBar from '@/components/common/SideNavBar';

export default {
	components: {
		Header,
		SideNav,
		SideNavBar
	},
	data() {
		return {
			displaySideNav: false
		};
	}
};
</script>

<style scoped lang="scss">

.default-layout-pc {
	display: flex;
	@include RWD-phone {
		display: none;
	}

	&__left {
		width: 180px;
	}

	&__right {
		width: calc(100% - 180px);
		height: 100vh;
		overflow: auto;
	}
}

.default-layout-phone {
	@include RWD-phone-up {
		display: none;
	}
}
</style>

