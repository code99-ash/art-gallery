<template>
    <div class="bg-dark">
        <div class="body-gradient" id="home">
            <img src="../assets/images/banner2.jpeg" alt="" class="banner-img">
            <nav class="nav nav-stacked py-3 justify-content-end px-5 my-0 position-fixed w-100" 
                :style="{background: navBackground}">
                <button v-scroll-to="'#home'" class="btn nav-link" :style="{color: navLink}">Home</button>
                <button v-scroll-to="'#about'" class="btn nav-link" :style="{color: navLink}">About</button>
                <button v-scroll-to="'#recent'" class="btn nav-link" :style="{color: navLink}">Recent</button>
                <button v-scroll-to="'#gallery'" class="btn nav-link" :style="{color: navLink}">Gallery</button>
                <button v-scroll-to="'#contact'" class="btn nav-link" :style="{color: navLink}">Contact</button>
            </nav>

            <div class="container banner-container" style="padding-top: 120px">
                <div class="row pb-5">
                    <div class="col-md-7 banner-content">
                        <h1 class="text-light">Josh<span class="text-danger">toons</span></h1>
                        <h1 class="display-3 desc"><span class="text-danger">Art</span> Gallery</h1>
                        <p class="text-light my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam qui, voluptatum nihil repudiandae totam magni adipisci ducimus quis laborum! Tempora ullam ipsam consequuntur incidunt obcaecati.</p>
                        <button class="btn bg-black text-danger contact-btn">Contact Us</button>
                    </div>
                    <div class="col-md-5 col-lg-4 d-none d-md-inline">
                        <div class="card feature-card" style="z-index: 0; top: 20px; left: 20px">
                            <img class="card-img feature-img" src="../assets/gallery/5.png">
                        </div>
                        <div class="card feature-card" style="z-index: 0; top: 40px; left: 40px">
                            <img class="card-img feature-img" src="../assets/gallery/2.png">
                        </div>
                        <div class="card feature-card" style="z-index: 0; top: 60px; left: 60px">
                            <img class="card-img feature-img" src="../assets/gallery/1.png">
                        </div>
                        <div class="card feature-card" style="z-index: 0; top: 80px; left: 80px">
                            <img class="card-img feature-img" src="../assets/gallery/4.png">
                        </div>
                        <div class="card feature-card" style="z-index: 0; top: 100px; left: 100px">
                            <img class="card-img feature-img" src="../assets/gallery/3.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section id="about" ref="about" class="container sections position-relative">
            <div class="jumbotron">
                <h1 class="header display-3 mb-3">About</h1>
                <img class="about-img float-left float-md-right">
                <div class="lead">
                    <p>I am <strong>Joshua Azeez</strong>, Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima mollitia voluptatibus enim harum hic nostrum magnam maxime, exercitationem sed repudiandae temporibus. Nisi, corrupti tenetur fugiat perferendis ratione animi ducimus odit!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam, voluptatum itaque quia minus aperiam?</p>
                </div>
            </div>
        </section>

        <!-- <section id="recent" class="jumbotron sections">
            <div class="container">
                <h2 class="header display-3 mb-3">Recent Uploads</h2>
                <el-carousel :interval="10000" type="card" class="carousel-div">
                    <el-carousel-item :key="i" v-for="(g, i) in recent">
                        <el-image
                            :src="g.url"
                            fit="fit"
                            class="recent-img"
                        ></el-image>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </section> -->

        <section id="gallery" ref="gallery" class="jumbotron sections">
            <div class="container">
                <h2 class="header display-3 mb-3">Gallery</h2>
                <MyGallery :myGallery="myGallery" />
            </div>
        </section>

        <section id="contact" ref="contact" class="jumbotron sections">
            <div class="container">
                <h2 class="header display-3 mb-3">Contact Us</h2>
                <div class="row">
                    <div class="col-md-5 py-3">
                        <div class="group mb-2">
                            <div class="d-block h5">Address:</div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, mollitia. Lorem, ipsum dolor.</p>
                        </div>
                        <div class="group mb-2">
                            <div class="d-block h5">Email:</div>
                            <p>Joshuaazeez@gmail.com</p>
                        </div>
                        <div class="group mb-2">
                            <div class="d-block h5">Mobile Number:</div>
                            <p>+234 90 707 92 047</p>
                        </div>

                    </div>
                    <div class="col-md-7 mx-auto">
                        <form>
                            <div class="row">
                                <div class="col-6 form-group">
                                    <!-- <label for="name">Name</label> -->
                                    <input type="text" class="form-control" placeholder="John Doe">
                                </div>
                                <div class="col-6 form-group">
                                    <!-- <label for="email">Email</label> -->
                                    <input type="email" class="form-control" placeholder="user@gmail.com">
                                </div>
                                <div class="col-12 form-group">
                                    <!-- <label for="subject">Subject</label> -->
                                    <input type="text" class="form-control" placeholder="Subject">
                                </div>
                                <div class="col-12 form-group">
                                    <!-- <label for="msg">Message</label> -->
                                    <textarea rows="8" class="form-control" placeholder="Your message here..."></textarea>
                                </div>
                                <div class="col-12 form-group">
                                    <button class="btn btn-success w-100">
                                        Send <v-icon class="text-light">mdi-message</v-icon>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- <Lightbox :dialog="dialog" :image="image" /> -->
    </div>
</template>

<script>
// import Lightbox from '../components/admin/modal/lightbox'
import { mapGetters, mapActions } from 'vuex'
import MyGallery from '../components/mygallery'

export default {
    name: 'LandingPage',
    components: { 
        // Lightbox
        MyGallery
    },
    computed: mapGetters(['getGallery']),
    data() {
        return {
            features: [
                {id: 1, img: 'assets/gallery/5.png'},
                {id: 2, img: 'assets/gallery/2.png'},
                {id: 3, img: 'assets/gallery/3.png'},
                {id: 4, img: 'assets/gallery/4.png'},
                {id: 5, img: 'assets/gallery/1.png'}
            ],
            myGallery: [],
            group: 0, // request param
            navBackground: 'transparent',
            dialog: false,
            image: 'assets/gallery/33.png',
            navLink: '#fff',
        }
    },
    created() {
        this.checkScroll();
        this.watchScroll();
        this.fetchGallery()
        return this.features.map((each, i) => {
            const dimens = {top: `${20 + i*20}px`, left: `${20 + i*20}px`};
            const newEach = {...each, ...dimens};
            // console.log(newEach);
            return newEach;
        });

    },
    beforeMount() {
        this.setToGallery();
    },

    methods: {
        ...mapActions(['fetchGallery']),
        goto(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;

            window.scrollTo(0, top);
        },
        setToGallery() {
            const urls = this.getGallery.map(each => {
                return {src: each.url}
            });
            this.myGallery = urls;
        },
        watchScroll() {
            window.addEventListener('scroll', () => {
                this.checkScroll();
            })
        },
        checkScroll() {
            this.navBackground = window.scrollY > 120? '#000' : 'transparent';
            this.navLink = window.scrollY > 120? 'red !important' : '#fff !important';
        },
        showModalImage(id) {
            const img = this.gallery.find(each => each.id == id).url;
            console.log(img)
            this.dialog = true;
            this.image = img;
        },
        
    }
   
}
</script>

<style>
    .btn.nav-link {
        box-shadow: none !important;
    }
    .bg-dark {
        background: #222 !important;
        color: #999 !important;
    }
    .group {
        box-shadow: inset 4px 0 0 0 #222;
        padding: 5px 0 5px 15px;
        margin: 20px !important;
    }
    .jumbotron {
        background: #343a40 !important;
        color: #999 !important;
    }
    .theme--dark.v-overlay {
        background: #000 !important;
        opacity: .95 !important;
    }
    .text-danger {
        color: red !important;
    }
    .btn-danger {
        background: red !important;
    }
    .bg-black {
        background: #000 !important;
    }
    .text-black {
        color:#000;
    }
    .sections {
        min-height: 100vh;
        padding-top: 120px;
    }
    nav {
        z-index: 10 !important;
        width: 100%;
        transition: .4s ease-in-out;
    }
    .body-gradient {
        background: linear-gradient(to right bottom, #000, #0a0000, #0c0c0c);
        background-blend-mode: overlay;
        height: 100vh;
        width: 100%;
    }
    .banner-img {
        height: inherit;
        width: 100%;
        filter: blur(5px);
        -webkit-filter: blur(5px);
        position: absolute;
        top: 0;
        opacity: .5;
    }
    .nav-link {
        color: #eaeaea !important;
        padding: 20px;
        transition: .4s ease-in-out;
        transition-property: initial;
    }
    .router-link-exact-active {
        background: #f00 !important;
        padding: 20px 25px;
        transition-property: initial;
    }
    .banner-content {
        vertical-align: middle;
    }
    .banner-content h1 {
        font-size: 85px;
        letter-spacing: 4px;
        line-height: 1.2em;
    }
    @media (max-width: 400px) {
        .banner-content h1 {
            font-size: 65px;
        }
        .nav-link {
            padding: 10px;
        }
        .router-link-exact-active {
            padding: 10px;
        }
    }
    @media (max-width: 420px) {
        .nav-link {
            padding: 10px;
        }
        .router-link-exact-active {
            padding: 10px;
        }
        .about-img {
            width: 150px;
            height: 150px;
        }
    }
    .banner-content .desc {
        text-shadow: 2px 2px 4px ivory;
        font-weight: 600;
    }
    .feature-card {
        background: initial !important;
        cursor: pointer;
    }
    .feature-img {
        max-height: 420px;
        position: absolute; 
    }
    .feature-card:hover {
        z-index: 10 !important;
        top: 0 !important;
        left: -100px !important;
    }

    #gallery {
        margin-bottom: 2px !important;
    }
    /*
    * Recent Uploads
    */



    .contact-btn {
        font-weight: bold;
        /* float: right; */
        transition: .2s ease-in-out;
    }
    .contact-btn:hover {
        background: #222;
    }

    #about-container {
        background: rgb(206, 201, 201);
        margin: 20px 0;
        box-sizing: border-box;
        align-content: center;
        padding: 30px;
    }
    .about-img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background: url('../assets/images/about/about.jpeg');
        background-position: center;
        background-size: cover;
        margin: 5px;
    }
    .header {
        font-size: 45px;
        align-items: center;
    }
    .header::before, .header::after {
        content: "";
        width: 150px;
        height: 4px;
        background: red;
        display: block;
    }
    .about-text {
        font-size: 22px;
        letter-spacing: 1.8px;
        color: #333;
    }
</style>