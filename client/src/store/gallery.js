import axios from 'axios'
const baseUrl = "http://localhost/joshtoon/server/api";
const state = {
    gallery: [],
    result: {error: false, msg: 'Welcome back!!'},
    snackbar: true,
    deleting: false,
}

const getters = {
    getGallery: state => state.gallery,
    getResult: state => state.result,
    getSnackbar: state => state.snackbar,
    isDeleting: state => state.deleting
}

const actions = {
    async fetchGallery({commit}) {
        const response = await axios.get(`${baseUrl}/index.php?fetchGallery`);
        commit('SET_GALLERY', response.data);
    },
    async addToGallery({commit}, payload) {
        commit('ADD_TO_GALLERY', payload);
    },
    deleteFromGallery({commit}, payload) {
        commit('DEL_FROM_GALLERY', payload);
    },
    triggerSnackbar({commit}) {
        commit('TRIGGER_SNACKBAR')
    }
}

const mutations = {
    SET_GALLERY: (state, payload) => {
        state.gallery = payload;
    },
    ADD_TO_GALLERY: (state, payload) => {
        state.gallery = [payload, ...   state.gallery];
    },  
    DEL_FROM_GALLERY: (state, payload) => {
        // console.log("payload",payload)
        const   fd = new FormData();
                fd.append('deleteFile', payload);
        state.deleting = true;
        axios.post(`${baseUrl}/index.php`, fd).then(res => {
            state.result = res.data;
            state.snackbar = true;
            payload.forEach(each => {
                state.gallery = state.gallery.filter(g => g.file_name !== each)
            });
            state.deleting = false;
        });
    },
    TRIGGER_SNACKBAR: state => {
        state.snackbar = false
    }  
}

export default {state, getters, actions, mutations};