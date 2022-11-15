import { reactive } from 'vue';

export const store = reactive({
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    error: null,
    characters: null,
    searchText: '',
})