<template>
  <div>
    <div style="display:flex">
      <img v-for="image in home.images" :key="image" :src="image" width="200" height="150" alt="">
    </div>
    {{ home.title }}<br/>
    ${{ home.pricePerNight }} / night<br/>
    <img src="/images/marker.svg" width="20" height="20" />{{ home.location.address }} {{ home.location.city }} {{ home.location.state }} {{ home.location.country }}<br/>
    <img src="/images/star.svg" width="20" height="20" />{{ home.reviewValue }}<br/>
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bath <br/>
    {{ home.description }}
    <div style="width:800px;height:600px" ref="map"></div>
  </div>
</template>

<script>
import homes from '~/data/homes.json'

export default {
  head() {
    return {
      title: this.home.title
    }
  },
  data() {
    return {
      home: {}
    }
  },
  created() {
    this.home = homes.find(item => item.objectID === this.$route.params.id)  
  },
  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng)
  }
}
</script>

<style lang="scss" scoped>

</style>