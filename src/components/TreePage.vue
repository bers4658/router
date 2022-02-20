<template>
    <div>
      это третья страница 

        <div>
            Значение id: {{filmId}}
        </div>

        <!-- #/fivePage/2 -->
        <!-- #/fivePage/23 -->
        <!-- #/fivePage/25 -->
        
    </div>
</template>

<script>

export default {
    name: "treePage",
    data() {
        return {
            filmId: null
        }
    },
    mounted() {
        this.filmId = this.$route.params.id
        console.log(this.$route.params.id );
    }
}
</script>