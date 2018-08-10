<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="$store.state.core.sidebar.show" fixed app class="elevation-1" :mini-variant="$store.state.core.sidebar.mini">
            <v-toolbar flat>
                <v-icon medium v-if="$store.state.core.sidebar.status == 1">home</v-icon>
                <span v-if="$store.state.core.sidebar.status == 2" class="title">Menu</span>
            </v-toolbar>

            <v-divider></v-divider>

            <v-list>
                <template v-for="(item, i) in items">
                    <v-layout v-if="item.heading" :key="i" row align-center>
                        <v-flex>
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
            <v-toolbar-side-icon @click.native="toggleSidebar"></v-toolbar-side-icon>
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
            toggleSidebar: function () {
                this.$store.commit("core/toggleSidebar")
            },
            menuItemClick: (item) => {
                console.log("Clicked : " + item.text);
            }
        }
    }
</script>

<style>
</style>