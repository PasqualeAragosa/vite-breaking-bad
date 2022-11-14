<script>

export default {
    name: 'CharacterItem',
    props: {
        character: Object
    }
}
</script>

<template>

    <div class="character">
        <img :src="character.img" :alt="character.name">
        <div class="details">
            <span class="name">
                {{ character.name }}
            </span>
            <!-- /.name -->
            <span class="category">
                {{ character.category }}
            </span>
            <!-- /.category -->
            <span class="status">
                {{ character.status }}
            </span>
            <!-- /.status -->
        </div>
        <!-- /.details -->
    </div>
    <!-- /.character -->

</template>

<style lang="scss" scoped>

</style>