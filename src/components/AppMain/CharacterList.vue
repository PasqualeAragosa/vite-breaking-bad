<script>
import { store } from '../../store.js';
import CharacterItem from './CharacterItem.vue';

export default {
    name: 'CharacterList',
    components: {
        CharacterItem
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <div class="characters">
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <CharacterItem v-for="character in store.characters" :character="characters"></CharacterItem>
                </div>
                <!-- /.col-2 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </div>
    <!-- /.characters -->

</template>

<style lang="scss" scoped>

</style>