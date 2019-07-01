<template>
	<div>
    <Header @sidenavToggle="displaySidenav = !displaySidenav" />
    <Sidenav :show="displaySidenav" @close="displaySidenav = false" />
		<nuxt/>
	</div>
</template>

<script>
import Header from '@/components/common/Header';
import Sidenav from '@/components/common/Sidenav';

export default {
	components: {
		Header,
		Sidenav
	},
  data() {
    return {
      displaySidenav: false
    }
  },
};
</script>
