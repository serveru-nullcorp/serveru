<template>
    <div class="m-5">
        <div class="d-flex flex-row align-items-center mb-3">
            <span :text-content.prop="id" class="mr-1 monospace" id="id"></span>
            <button @click="changeID()" class="btn btn-info btn-sm" type="button">Remake</button>
        </div>
        <label for="name">Name</label>
        <div class="input-group input-group-sm">
            <input :value="name" class="form-control" id="name" placeholder="name" type="text" />
        </div>
        <br />
        <label for="description">description</label>
        <div class="input-group input-group-sm">
            <input :value="description" class="form-control" id="description" placeholder="description" type="text" />
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        computed: mapGetters(['description', 'id', 'name']),
        methods: mapActions(['changeID'])
    }
</script>

<style>
.monospace{
    font-family: Courier New, Courier, monospace;
}
</style>