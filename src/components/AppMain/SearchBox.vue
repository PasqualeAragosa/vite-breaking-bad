<script>
import { store } from '../../store.js';

export default {
    name: 'SearchBox',
    emits: ['searchData'],
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="search d-flex gap-2 my-5">

        <input type="search" class="form-control" v-model="store.searchText" placeholder="Search by category"
            @keyup.enter="$emit('searchData')">

        <button type="submit" class="btn btn-primary" @click="$emit('searchData')">Search</button>

        <div class="founded">
            <span v-if="foundedCharacters !== 0">
                Trovati {{ this.store.foundedCharacters }} personaggi
            </span>
        </div>
        <!-- /.founded -->
    </div>
</template>

<style lang="scss">
.search {
    margin-left: 2rem;
    max-width: 500px;
}

span {
    color: white;
}
</style>