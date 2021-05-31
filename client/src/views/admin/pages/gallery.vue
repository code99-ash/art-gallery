<template>
    <div>
        <nav class="breadcrumb">
            <button class="btn btn-danger rounded-pill" @click="deleteImages()">
                <v-progress-circular
                indeterminate
                color="red"
                class="isLoading text-light px-3"
                v-if="isDeleting"
                :width="3"
                ></v-progress-circular>
                <span v-else>Delete</span> 
            </button>
        </nav>
        
        <div class="row pt-3">
            <div class="col-4 col-md-3 col-lg-2">
                <div class="card" style="border-color:#eaeaea;">
                    <div class="card-img">
                        <img src="../../../assets/gallery/1.png" alt="" class="card-img">
                        <div class="position-absolute upload-card" @click.prevent="clickUpload()">
                            <i class="el-icon-plus"></i>
                            <v-progress-circular
                            indeterminate
                            color="red"
                            class="isLoading text-primary"
                            v-if="isLoading"
                            ></v-progress-circular>
                        </div>
                        <input type="file" ref="file" id="file" style="display: none;" @change="uploadFile()">
                    </div>
                </div>
            </div>
            <div class="col-4 col-md-3 col-lg-2" :key="g.file_name" v-for="g in getGallery" @click="showModalImage(g.file_name)">
                <div class="card" style="border-color:#eaeaea;">
                  <img class="card-img" :src="g.url" alt="">
                  <div class="del-check">
                      <span @click="clickOn(g.file_name)" :ref="`${g.file_name}-span`" class="check-span">
                          <i class="fas fa-check text-light" :ref="`${g.file_name}-mark`" style="display: none" aria-hidden="true"></i>
                      </span>
                    <input type="checkbox" :ref="g.file_name" :id="g.file_name" @click="selectImage($event, g.file_name)">
                  </div>
                </div>
            </div>
        </div>

        <Lightbox :dialog="dialog" :image="image" />

        
        <v-snackbar
            v-model="getSnackbar"
            :multi-line="multiLine"
            :timeout="timeout"
            >
                <v-card :class="['p-3', 'm-0', getResult.error? 'text-danger':'text-success']">
                    {{getResult.msg}}
                </v-card>

            <template v-slot:action="{ attrs }">
                <v-btn
                color="red"
                text
                v-bind="attrs"
                @click="triggerSnackbar()"
                >
                close
                </v-btn>
            </template>
        </v-snackbar>
        
    </div>
</template>

<script>
import Lightbox from '../../../components/admin/modal/lightbox'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
    name: 'Gallery',
    components: { Lightbox },
    computed: mapGetters(['getGallery', 'getSnackbar', 'getResult', 'isDeleting']),
    data() {
        return {
            gallery: [],
            dialog: false,
            timeout: 5000,
            multiLine: true,
            image: 'assets/gallery/33.png',
            fullscreenLoading: true,
            selectedImage: [],
            isLoading: false,
        }
    },
    created() {
        this.fetchGallery();
    },
    methods: {
        ...mapActions(['fetchGallery', 'addToGallery', 'deleteFromGallery', 'triggerSnackbar']),
        
        showModalImage(file_name) {
            const img = this.getGallery.find(each => each.file_name == file_name).url;
            // console.log(img)
            this.dialog = true;
            this.image = img;
        },
        clickUpload() {
            this.$refs.file.click();
        },
        uploadFile() {
            const file = this.$refs.file.files[0];
            const fd = new FormData();
                    fd.append('uploadToGallery', true);
                    fd.append('file', file);
                    console.log("file", file)

            if(file == undefined) 
            return false;

            this.isLoading = true;

            axios.post('http://localhost/joshtoon/server/api/index.php', fd, { 
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    console.log(res.data)
                    const resp = res.data;

                    if(resp.error == false) {

                        const {id, file_name, url} = resp.msg;
                        const newData = {id, file_name, url};
                        // this.gallery = [newData, ...this.gallery];
                        this.addToGallery(newData);
                        console.log(this.getGallery)
                    }
                    this.isLoading = false;
                }).catch(e => {
                    console.log(e)
                })
        },

        selectImage(e, file_name) {
            const isChecked = e.target.checked;
            console.log(e)
            const image = this.getGallery.find(each => each.file_name == file_name);
            const fileName = image.file_name;

            const findImage = this.selectedImage.filter(each => each == fileName);
            
                if(isChecked && findImage.length == 0) {
                    this.selectedImage.push(fileName);
                    // console.log("selected", this.selectedImage);
                }

                if(!isChecked && findImage.length > 0) {
                    this.selectedImage = this.selectedImage.filter(each => each !== fileName);
                    // console.log("selected", this.selectedImage);
                }
            
        },

        deleteImages() {
            if(this.selectedImage.length == 0)
            return;

            this.deleteFromGallery(this.selectedImage);
        },

        clickOn(id) {
            this.$refs[id][0].click();
            const isChecked = this.$refs[id][0].checked;
            // console.log(checkbox)
            if(isChecked) {
                this.$refs[`${id}-span`][0].style.background = "red";
                this.$refs[`${id}-mark`][0].style.display = "block";
            } else {
                this.$refs[`${id}-span`][0].style.background = "#999";
                this.$refs[`${id}-mark`][0].style.display = "none";
            }
            
        }

    }
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";

    .isLoading.text-primary {
        color: blue !important;
        position: absolute;
    }
    .v-snack__content {
        padding: 0 !important;
    }
    .upload-card {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px dashed #999;
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
    .del-check {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0;
        width: 20px;
        height: 20px;
    }
    .check-span {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background:#999;
        padding: 2px;
    }
</style>