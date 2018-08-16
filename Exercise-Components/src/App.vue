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
    import Header from './Components/Header.vue'
    import ServerList from './Components/ServerList.vue'
    import ServerDetails from './Components/ServerDetails.vue'
    import Footer from './Components/Footer.vue'
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
