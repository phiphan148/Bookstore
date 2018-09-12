<template>
    <div>
    <div class="container-fluid h-100">
        <div class="row h-100">
            <div class="col-md-2 col-sm-12 img-home">
                <router-link class="" to="/">
                    <img class="img-fluid" alt="logo" src="../assets/bookstorelogo.png"></router-link>
            </div>
            <div class="col-md-7"></div>
            <div class="col align-self-center">
                <div class="text-right input-group">
                    <input v-model="searchBook" id="search-data" class="form-control py-2" type="search" placeholder="Search book">
                    <span class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button"><i class="fa fa-search"></i></button>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <test v-bind:bookdata="searchData"></test>
    </div>
</template>

<script>
    import test from './test.vue';
    export default {
        name: "test2",
        data() {
            return {
                searchBook: '',
            }
        },
        components: {test},
        computed: {
            bookdata() {
                return this.$store.state.bookdata;
            },
            searchData(){
                console.log(this.bookdata)
                // return this.bookdata.filter(book => book.title.toLowerCase().includes(this.searchBook.toLowerCase()) || book.description.includes(this.searchBook.toLowerCase()))
            }
        },
        created() {

        },
        methods: {
        }
    };
</script>

<style>
    input:focus, textarea {
        outline: none !important;
    }

</style>
