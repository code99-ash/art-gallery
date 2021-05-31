<template>
    <div>
        <h1 class="text-center">Joshtoon's Overview</h1> 

        <div class="container">
            <div class="row">
                <div class="col-3 col-lg-2" :key="i" v-for="(overview, i) in getGallery" @click="showModalImage(overview.id)">
                    <div class="card">
                        <img class="card-img" :src="overview.url" alt="">
                    </div>
                </div>
            </div>
        </div>

        <Lightbox :dialog="dialog" :image="image" />

    </div>
</template>
<script>
import Lightbox from '../../../components/admin/modal/lightbox'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AdminHome',
    components: { Lightbox },
    computed: mapGetters(['getGallery']),
    data() {
        return {
            dialog: false,
            image: 'assets/gallery/33.png',
        }
    },
    created() {
        this.fetchGallery();
    },
    methods: {
        ...mapActions(['fetchGallery']),
        showModalImage(id) {
            const img = this.overviews.find(each => each.id == id).img;
            console.log(img)
            this.dialog = !this.dialog;
            this.image = img;
        }
    }
}
</script>

<style scoped>
    .search-form {
        z-index: 10;
    }
    .card-img {
        cursor: pointer;
    }
    @media (max-width: 460px) {
        .card .card-img {
            height: 135px;
        }
    }
    @media (min-width: 460px) {
        .card .card-img {
            height: 265px;
        }
    }
    @media (min-width: 950px) {
        .card .card-img {
            height: 280px;
        }
    }
</style>