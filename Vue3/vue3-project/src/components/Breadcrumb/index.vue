<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in breadList" :key="index">
        <a :href="item.path">{{ item.meta.title }}</a>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import { reactive, toRefs, watch, nextTick } from 'vue';
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    const state = reactive({
      breadList: []
    })

    watch(() => route.path, () => {
      nextTick(() => {
        getBreadcrumb()
      })
    }, {
      immediate: true
    })

    const getBreadcrumb = () => {
      const { matched } = router.currentRoute.value
      const matches = matched.filter((item) => item.meta && item.meta.title)
      state.breadList = matches.filter((item) => item.meta && item.meta.title);
    }

    return {
      ...toRefs(state),
      getBreadcrumb
    }
  }
}
</script>

<style lang="scss" scoped>

</style>