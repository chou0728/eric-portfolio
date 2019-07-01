<template>
  <div class="header-container">
    <header class="the-header">
      <div class="logo">
        <nuxt-link to="/">ERIC</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item" v-for="(item,index) in $t('components.Header.navList')" :key="index">
						<nuxt-link :to="{ path: routerPath(item.path) }">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <SideNavToggle @toggle="$emit('sidenavToggle')" />
    </header>
  </div>
</template>

<script>
import SideNavToggle from '@/components/common/SideNavToggle'

export default {
  name: 'TheHeader',
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

<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 40px;
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
