<script>
import CharacterList from './AppMain/CharacterList.vue';
import SearchBox from './AppMain/SearchBox.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppMain',
    components: {
        CharacterList,
        SearchBox,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        searchCharacters() {
            const searchText = this.store.searchText;
            const url = `${this.store.API_URL}?category=${searchText}`;
            console.log('url: ', url);
            // /api/characters?category=Better+Call+Saul

            axios
                .get(url)
                .then(resp => {
                    this.store.characters = resp.data;
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }
}
</script>

<template>
    <h1>Breaking Bad</h1>
    <SearchBox @searchData="searchCharacters"></SearchBox>
    <CharacterList></CharacterList>
</template>

<style lang="scss">
h1 {
    color: white;
    margin: 2rem;
}
</style>