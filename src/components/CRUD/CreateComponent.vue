<template>
    <div>
     <h1>Create A Post</h1>
     <form @submit="formSubmit">
      <div >
         <label>Post Title:</label>
         <input type=text v-model="title">
        </div>

       <div >
 
          <label>Post Body:</label>
          <textarea v-model="postBody" rows="5"></textarea>

       </div>
       <br />
       <div >
        <button class="btn-success">Create</button>
       </div>
       
     </form>
    </div>
   </template>
   
   <script>
   import axios from 'axios';
//import { response } from 'express';
     export default {
      mounted() {
        console.log('component mounted');
      },
       data(){
       return {
        title: '',
        postBody:''

       }
     },
     methods: {
      formSubmit(e1) {
        e1.preventDefault();
        let postObject = this;
        axios.post('http://localhost:3000/api/v1/posts', {
          title: this.title,
          postBody: this.postBody
        })
        .then(function (response) {
          console.log("post creation successful with title of: " + this.title + " and body of " + this.postBody)
          postObject.output = response.data;
        })
        .catch(function(error) {
          console.log("post creation failed")
          postObject.output = error;
        })
      }
     }
    }
   </script>