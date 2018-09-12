<template>
    <div>
        <div class="container-fluid h-100 mb-3">
            <div class="row h-100">
                <div class="col-md-2 img-home">
                    <router-link class="" to="/">
                        <img class="img-fluid" alt="logo" src="../assets/bookstorelogo.png"></router-link>
                </div>
                <div class="col-md-7"></div>
                <div class="col align-self-center">
                    <div class="text-right input-group">
                        <input v-model="searchBook" id="search-data" class="form-control py-2" type="search"
                               placeholder="Search book">
                        <span class="input-group-append">
                        <button class="btn-style btn" type="button"><i class="fa fa-search"></i></button>
                    </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="info-card" v-for="item in searchData">
                    <div class="front">
                        <img class="card-image" :src="item.cover" alt="cover">
                    </div>
                    <div class="back text-left">
                        <div><span id="myPopup" class="font-weight-bold">Title: </span>{{item.title}}</div>
                        <div><span class="font-weight-bold">Description: </span>{{item.description}}</div>
                        <div><span class="font-weight-bold">Language: </span>{{item.language}}</div>
                        <div class="text-center mt-2">
                            <button id="show-modal" @click="showModal = true" class="font-weight-bold">Details</button>
                        </div>
                    </div>
                    <modal v-if="showModal" @close="showModal = false">
                        <h3 slot="header">
                            <img class="card-image" :src="this.item.detail" alt="cover">
                        </h3>
                    </modal>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import modal from './modal.vue';
    import fancyBox from 'vue-fancybox';
    import VueGallery from 'vue-gallery';
    import VuePictureSwipe from 'vue-picture-swipe';

    export default {
        name: "Book",
        components: {modal, 'gallery': VueGallery, fancyBox, 'vue-picture-swipe': VuePictureSwipe},
        data() {
            return {
                searchBook: '',
                showModal: false,
            }
        },
        beforeCreate() {
            this.$parent.getData();
        },
        computed: {
            bookdata() {
                return this.$store.state.bookdata;
            },
            searchData: function () {
                return this.bookdata.filter(book => book.title.toLowerCase().includes(this.searchBook.toLowerCase()) || book.description.toLowerCase().includes(this.searchBook.toLowerCase()) || book.language.toLowerCase().includes(this.searchBook.toLowerCase()))
            }
        },
    };
</script>

<style scoped>
    @media only screen and (max-width: 767px) {
        .img-home {
            text-align: center;
            width: 200px;
        }
    }

    .info-card {
        margin: 10px auto;
        /*-webkit-perspective: 600px;*/
        box-sizing: border-box;
    }

    .front, .back {
        border-radius: 6px;
        transition: -webkit-transform 1s;
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        border: 1px solid #EC1C67;
    }

    .back {
        background: #e4e4e4;
    }

    .front {
        overflow: hidden;
        width: 250px;
        height: 350px;
        position: absolute;
        z-index: 1;
        padding: 20px;
    }

    .back {
        padding-top: 0px;
        width: 250px;
        height: 350px;
        -webkit-transform: rotateY(-180deg);
        overflow: scroll;
        padding: 20px;
    }

    .info-card:hover .back {
        -webkit-transform: rotateY(0);
    }

    .info-card:hover .front {
        -webkit-transform: rotateY(180deg);
    }

    .card-image {
        width: 100%;
        height: 100%;
    }

    input:focus, textarea {
        outline: none !important;
    }

    button {
        padding: 5px 15px;
        color: white;
        background-color: #EC1C67;
        border-radius: 3px;
        border: none;
    }

    button:hover {
        cursor: pointer;
    }

    .btn-style {
        background-color: #EC1C67;
        border: 1px solid #EC1C67;
    }

    #search-data {
        border: 1px solid #EC1C67;
    }
</style>
