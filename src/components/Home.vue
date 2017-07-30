<template>
  <div>
    <div v-if="movies.length" class="movies">
      <igpost v-for="item in filteredMovies" :title="item.title" :image="item.poster_path"></igpost>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import api from '../services/api'
import igpost from './Item'

export default {
  name: 'hello',
  data () {
    return {
      selectedGenre: null
    }
  },
  computed: {
    ...mapState([
      'movies',
      'genres'
    ]),
    filteredMovies() {
      if (this.selectedGenre) {
        const genre = parseInt(this.selectedGenre)

        return this.movies.filter( movie => {
          return movie.genre_ids.indexOf(genre) !== -1
        })
      } else {
        return this.movies
      }
    }
  },
  methods: {
    ...mapActions([
      'getMovies',
      'getGenres'
    ])
  },
  created () {
    this.getMovies()
    this.getGenres()
  },
  components: {
    igpost,
  }
}
</script>

<style lang="scss" src="../assets/scss/index.scss"></style>
