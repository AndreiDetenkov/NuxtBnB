<template>
    <div>
        {{ lat }} / {{ lng }} - {{ label }}<br />
        <div v-for="home in homes" :key="home.objectID">
            {{ home.title }}<br />
        </div>
    </div>
</template>

<script>
export default {
    name: 'search',
    watchQuery: ['lat'],
    async asyncData({ query, $dataApi }) {
        const data = await $dataApi.getHomesByLocations(query.lat, query.lng)

        return {
            homes: data.json.hits,
            label: query.label,
            lat: query.lat,
            lng: query.lng,
        }
    },
}
</script>
