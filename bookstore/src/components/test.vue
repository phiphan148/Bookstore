<template>
    <div class="container">
        <div class="row">
            <div class="info-card  col" v-for="item in bookdata">
                <div class="front">
                    <img class="card-image" :src="item.cover" alt="cover">
                </div>
                <div class="back text-left">
                    <div><span class="font-weight-bold">Title: </span>{{item.title}}</div>
                    <div><span class="font-weight-bold">Description: </span>{{item.description}}</div>
                    <div><span class="font-weight-bold">Language: </span>{{item.language}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "test",
        data() {
            return {

            }
        },
        props:{
            bookdata: {
                type: Array,
                required: true,
            },
        },
        computed: {

        },
        created() {

        },
        methods: {
        }
    };
</script>

<style>
    .info-card {
        margin: 10px 0px;
        /*-webkit-perspective: 600px;*/
        box-sizing: border-box;
    }

    .front, .back {
        background: #FFF;
        border-radius: 6px;
        transition: -webkit-transform 1s;
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        border: 1px solid black;
    }

    .front {
        overflow: hidden;
        width: 250px;
        height: 100%;
        position: absolute;
        z-index: 1;
        padding: 20px;
    }

    .back {
        padding-top: 0px;
        width: 250px;
        height: 100%;
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

</style>
