<template>
    <div>
      {{ movie.title }} 
    </div>
</template> 

<script>

import axios from 'axios'

export default {
    name: "fivePage",
    data() {
        return {
            movie: {}, 
            filmId: null   
        }
    },
    mounted() {
        this.filmId = this.$route.params.moveId
        this.loadMovie()
    },
    methods: {
        loadMovie(){
      axios
      .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${this.filmId}`)
      .then(response => {
        this.movie = response.data.data.movie
     
      });
    },
    }
}
</script>