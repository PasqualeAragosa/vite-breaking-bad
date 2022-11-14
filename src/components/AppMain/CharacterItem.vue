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
.character {
    height: 300px;
    background-color: black;
    background-image: linear-gradient(to top, #036727, #13483B);
    color: white;
    padding: 1rem;
    margin: 1.5rem 0;


    img {
        height: 140px;
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }

    span {
        display: inline-block;
        font-size: 1rem;
    }

    span.name {
        text-transform: uppercase;
    }
}
</style>