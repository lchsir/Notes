<template>
  <div class="gome-container">
    <Sidebar />
    <div class="gome-main">
      <Header />
      <Main />
    </div>
  </div>
</template>
<script>

import Sidebar from '@/components/Layout/Sidebar'
import Header from '@/components/Layout/Header'
import Main from '@/components/Layout/Main'
export default {
  components: {
    Sidebar,
    Main,
    Header
  },
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.gome-container {
  height: 100vh;
  display: flex;
  .gome-main {
    flex: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
</style>