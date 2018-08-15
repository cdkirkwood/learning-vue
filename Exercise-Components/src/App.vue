<template>
    <div class="container">
        <Header /> 
        <hr>
        <div class="row">
            <ServerList />
            <ServerDetails />
        </div>
        <hr>
        <div class="row">
            <Footer />
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import ServerList from './ServerList.vue'
    import ServerDetails from './ServerDetails.vue'
    import Footer from './Footer.vue'
    export default {
        components: {
            Header,
            ServerList,
            ServerDetails,
            Footer
        }
    }
</script>

<style>

</style>
