import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from './components/HomeComponent.vue';
//create
import CreateComponent from './components/CRUD/CreateComponent.vue';
//Get/read, read by id
import PostListComponent from './components/CRUD/PostListComponent.vue';
import PostDetails from './components/CRUD/PostDetails.vue';
//put/update
import EditComponent from './components/CRUD/EditComponent.vue';
//delete
import DeletePost from './components/CRUD/DeletePost.vue';

import NotFound from './components/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomeComponent},
        {path: '/posts', component: PostListComponent},
        {path: '/posts/:id', component: PostDetails},
        {path: '/posts/edit/:id', component: EditComponent},
        {path: '/create', component: CreateComponent},
        {path: '/posts/delete/:id', component: DeletePost},
        //invalid route
        {path: '/:notFound(.*)', component: NotFound}
    ],
});

export default router;