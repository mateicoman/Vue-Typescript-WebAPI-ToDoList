<template>
    <div id="app">
        <Navbar>
        </Navbar>
        <Home :items="itemsList"></Home>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Home from './components/Home.vue';
    import Navbar from './components/shared/Navbar.vue';
    import Item from './types/Item'
    import axios, { AxiosResponse } from "axios";
    import "bootstrap/dist/css/bootstrap.min.css";
    import "bootstrap-vue/dist/bootstrap-vue.css";
    import { ItemRepository }  from './repo/baseRepo'

    @Component({
        components: {
            Home,
            Navbar
        }
    })
    export default class App extends Vue {
        itemsList: Item[] = [];

        mounted() {
            this.getAllItems();
        }

        getAllItems(){
            ItemRepository.GetItems()
                .then(resp => {
                    this.itemsList = resp.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        getItemByID(id: number) {
            ItemRepository.GetItemByID(id)
                .then(resp => {
                    this.itemsList[id] = resp.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        editItem(id: number) {
            ItemRepository.EditItemByID(id)
                .then(resp => {
                    this.itemsList[id] = resp.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        addNewItem(item: Item) {
            ItemRepository.AddNewItem(item)
                .then(resp => {
                    console.log(resp);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        deleteItem(id: number) {
            ItemRepository.DeleteItemByID(id)
                .then(resp => {
                    console.log(resp)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>

<style>
</style>
