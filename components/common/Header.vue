<template>
  <div class="header-container">
    <header class="the-header">
      <h1>Eric's Portfolio</h1>
      <SideNavToggle @toggle="$emit('sidenavToggle')" />
    </header>
  </div>
</template>

<script>
import SideNavToggle from '@/components/common/SideNavToggle'

export default {
  name: 'Header',
  components: {
    SideNavToggle
  },
	methods: {
		routerPath(route) {
			return `/${this.$store.state.locale}/${route}`;
		}
	}
}
</script>

<style scoped lang="scss">
.header-container {
  display: none;
  height: 60px;

  @include RWD-phone {
    display: block;
  }
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2f2f2f;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

h1 {
  font-size: 1.3rem;
  color: #fff;
}

.logo {
  margin-right: 10px;
}

.logo a {
	display: block;
  text-decoration: none;
  color: #fff;
	font-size: 1.3rem;
	text-align: center;
	cursor: pointer;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin-left: 50px;
}

.nav-item a {
  text-decoration: none;
  color: white;
	font-size: 1rem;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>
