<template>
    <div class="container text-left">
        <h2>Today's Chores</h2>
        <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center"
                               v-for="item in items"
                               :key="item.name"
                               :class="{ 'is-done': item.isComplete }">
                <span>{{ item.name }}</span>
                <b-button   :variant="btnClass(item)"
                            @click="item.isComplete = !item.isComplete">
                    {{ btnIcon(item) }}
                </b-button>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import Item from './../types/Item'

    @Component
    export default class Home extends Vue {
        @Prop() items!: Item[];

        mounted() {

        }
        btnClass(item: Item): string {
            console.log(item)
            return item.isComplete ? "success" : "danger";
        }

        btnIcon(item: Item): string| number {
            return item.isComplete ? '\u2713' : "\u2717";
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .is-done {
        color: #666;
    }
</style>
