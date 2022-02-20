<template>
    <div>
      <div>
            Значение id: {{filmId}}
            <div>
            <a href="#/fivePage/2">
                <div>
                    1 фильм
                </div>
            </a>
            </div>

</div>


            
<div v-for="movie in movies" :key='movie.id'>
            <div>
              <div> 
                  

 <a href="#/fivePage/:moveId">
                <div>
                    {{ movie.title }} 
                </div>
            </a>


               
              </div>
            </div>
</div>
      


       

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "fourPage",
    data() {
        return {
            filmId: null,
            movies: {},
            page: 1,
        }
    },
    mounted() {
        console.log(this.movies);
        this.loadPage()
        this.filmId = this.$route.params.id
        
    },

    methods: {
        loadPage(){
      axios
      .get(`https://yts.mx/api/v2/list_movies.json/?limit=15&page=${this.page}`)
      .then(response => {
        this.movies = response.data.data.movies
     
      });
    },
}
}
</script>