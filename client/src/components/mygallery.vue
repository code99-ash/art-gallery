<template>
    <div>
        <div class="box-container">
            <div class="box" :key="g.id" v-for="g in getGallery">
                <img :src="g.url" :alt="g.file_name" />
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'MyGallery',
    computed: mapGetters(['getGallery']),
}
</script>

<style scoped>

    .box-container {
        width: 100%;
        margin: 20px auto;
        columns: 4;
        column-gap: 0px;
    }

    .box-container .box{
        width: 100%;
        overflow: hidden;
        break-inside: avoid-column;
    }

    .box-container .box img{
        max-width: 100%;
        min-height: 220px;
    }

    @media (max-width: 1200px) {
        .box-container {
            columns: 3;
            width: calc(100% - 40px);
            box-sizing: border-box;
        }
        .box-container .box img{
            max-width: 100%;
            min-height: 200px;
        }
    }
    @media (max-width: 768px) {
        .box-container {
            columns: 2;
            /* width: calc(100% - 40px);
            box-sizing: border-box; */
        }
    }

</style>