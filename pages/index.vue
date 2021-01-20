<template>
  <div>
    <div v-for="home in homes" :key="home.objectID">
      <home-card :home="home" />
    </div>
  </div>
</template>

<script>
import homes from '~/data/homes.json'

export default {
  head: {
    title: "Homepage",
    meta: [{
      name: "description",
      content: "This is a homepage",
      hid: "description"
    }]
  },
  data() {
    return {
      homes: homes.slice(0, 3)
    }
  }
}
</script>