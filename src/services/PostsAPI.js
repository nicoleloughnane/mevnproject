import api from './api';
//utilizes the api to communicate with the backend and perform CRUD operations
export default {
    getPosts() {
        return api().get('api/v1/post');
    },
    getPostById(id) {
        return api().get(`api/v1/post/${id}`);
    },
    createPost(data) {
        return api().post('api/v1/post/', data);
    },
    updatePost(id, params) {
        return api().put(`api/v1/post/${id}`, params);
    },
    delete(id) {
        return api().delete(`api/v1/post/${id}`);
    }
}