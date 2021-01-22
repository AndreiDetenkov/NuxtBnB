<template>
    <div style="text-align:center">
        <img src="/images/404.jpg" alt="not found">
        <br/><br/>
        <h1>Error!</h1>
        {{ error.message }} {{ error.statusCode }}
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Error!'
            } 
        },
        props: {
            error: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>