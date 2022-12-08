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
//users
import RegisterComponent from './components/authentication/RegisterComponent.vue';
import LoginComponent from './components/authentication/LoginComponent.vue';

import NotFound from './components/NotFound.vue';

//const isLoggedIn = false;

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomeComponent},
        {path: '/posts', component: PostListComponent},
        {path: '/posts/:id',
         component: PostDetails,
        props: true},
        {path: '/posts/edit/:id', component: EditComponent},
        {path: '/create', component: CreateComponent},
        {path: '/posts/delete/:id', component: DeletePost},
        {path: '/register', component: RegisterComponent},
        {path: '/login', component: LoginComponent},
        //invalid route
        {path: '/(.*)', component: NotFound}
    ],
});


/*router.beforeEach((to, from, next) => {
    if (to.name !== '/login' && !isLoggedIn) next({ name: '/login' })
    else next()
  }) */
export default router;