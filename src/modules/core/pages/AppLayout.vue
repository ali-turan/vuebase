<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" fixed app class="elevation-4">
            <v-toolbar flat>
                <span class="title">Menu</span>
            </v-toolbar>

            <v-divider></v-divider>

            <v-list dense>
                <template v-for="(item, i) in items">
                    <v-layout v-if="item.heading" :key="i" row align-center>
                        <v-flex >
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>
                    <v-list-tile v-else :key="i" @click="menuItemClick(item)">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="grey--text">
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar fixed app>
            <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
            <span class="title ml-3 mr-5">VueBase&nbsp;
                <!-- <span class="text">Keep</span> -->
            </span>
            <v-spacer></v-spacer>
            <v-text-field solo flat hide-details label="Search" prepend-inner-icon="search"></v-text-field>

        </v-toolbar>

        <v-content class="app-content">
            <transition name="slide-x-transition" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "AppLayout",
        data: () => ({
            drawer: null,
            items: [{
                    icon: 'lightbulb_outline',
                    text: 'Menu Item 1'
                },
                {
                    icon: 'touch_app',
                    text: 'Menu Item 2'
                },
                {
                    divider: true
                },
                {
                    heading: 'Labels'
                },
                {
                    icon: 'settings',
                    text: 'Settings'
                },
                {
                    icon: 'help',
                    text: 'Help'
                }
            ]
        }),
        methods: {
            menuItemClick : (item) => {
                console.log("Clicked : " + item.text);
            }
        }
    }
</script>

<style>

</style>