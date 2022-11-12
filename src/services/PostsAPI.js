import api from './api';

export default {
    getPosts() {
        return api().get('api/v1/posts');
    }
}