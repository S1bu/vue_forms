<template>
    <div class="container-fluid">
        <div class="row">
            <p class="lead">
                Copyright &copy; {{ cYear }} <!--current year with using javascript-->
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                cYear: new Date().getUTCFullYear() //getting the current year via javascript
            }
        }
    }
</script>

<style scoped>

</style>