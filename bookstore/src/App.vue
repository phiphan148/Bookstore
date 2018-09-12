<template>
  <div id="app">
    <Book></Book>
  </div>
</template>

<script>
    import Book from './components/Book'
    export default {
        components: {Book},
        data () {
            return {
              bookData: [],
            }
        },
        created: function () {
            this.getData();
        },
        methods: {
            getData() {
                let url = 'https://api.myjson.com/bins/8zpvs';
                fetch(url)
                    .then(response => response.json())
                    .then((jsonData) => {
                        let data = jsonData;
                        this.bookData = data.books;
                        this.$store.commit('getBookData',this.bookData);
                    });
            },
        }
    };
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
