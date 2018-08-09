<template>
    <v-app>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <div class="text-xs-center">
                    <h1>404</h1>
                    <h2>Sorry, page not found</h2>
                    <div>
                        <v-btn @click="$router.go(-1)" color="primary">GO BACK</v-btn>
                    </div>
                </div>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: "PageNotFound"
    }
</script>

<style>
    h1 {
        font-size: 150px;
        line-height: 150px;
        font-weight: 700;
        color: #252932;
        text-shadow: rgba(61, 61, 61, .3) 1px 1px, rgba(61, 61, 61, .2) 2px 2px, rgba(61, 61, 61, .3) 3px 3px;
    }

    h2 {
        margin-top: 16px !important;
        margin-bottom: 16px !important;
        font-size: 24px !important;
        line-height: 32px !important;
    }
</style>