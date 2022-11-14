<script>
import { store } from '../../store';
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
                <div class="col-2" v-for="character in store.characters">
                    <CharacterItem :character="character"></CharacterItem>
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