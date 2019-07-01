<template>
	<div class="sidenav-container">
		<div v-if="show" class="sidenav-backdrop" @click.prevent="$emit('close')"></div>
		<transition name="slide-side">
			<div v-if="show" class="sidenav">
				<SideNavBar @click.native.prevent="$emit('close')"/> 
			</div>
		</transition>
	</div>
</template>

<script>
import SideNavBar from '@/components/common/SideNavBar'

export default {
	name: 'SideNav',
  components: {
    SideNavBar
  },
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
};
</script>

<style lang="scss" scoped>
.sidenav-container {
	height: 100%;
	width: 100%;
}

.sidenav-backdrop {
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	position: fixed;
	top: 0;
	left: 0;
}

.sidenav {
	height: 100%;
	width: 200px;
	z-index: 10000;
	position: fixed;
	top: 0;
	left: 0;
	box-sizing: border-box;
}

</style>
