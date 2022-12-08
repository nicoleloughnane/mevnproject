<template>
  <section>
    
    <base-card>
    <h2>Create a new Post</h2>
    <form @submit.prevent="submitForm">
        <!--these form controls are for the user to input new blog post information
        v-model binds with data in return statement, trim gets rid of excess whitespace-->
        <div class="form-control" :class="{invalid: !title.isValid}">
         <label for="title">Post Title:</label>
         <input type="text" id="title" v-model.trim="title.val" @blur="clearValidity('title')" />
         <p v-if="!title.isValid">Title of post must not be empty</p>
        </div>

        <div class="form-control" :class="{invalid: !postBody.isValid}">
         <label for="postBody">Post Body:</label>
         <textarea id="postBody" rows="5" v-model.trim="postBody.val" @blur="clearValidity('postBody')"></textarea>
         <p v-if="!postBody.isValid">Body of post must not be empty</p>
        </div>

       <div >
        <base-button>Create</base-button>
       </div>
       
    </form>
    </base-card>
  </section>
   </template>
   
   <script>
   import axios from 'axios';
     export default {
       data(){
       return {
        //values are set to empty initially 
        //because new post hasn't been created yet
        title: {
          val: '',
          isValid: true
        },
        postBody: {
          val: '',
          isValid: true
        },
        formIsValid: true
       }
     },
     methods: {
      clearValidity(input) {
        this[input].isValid = true;
      },
      //validate form information
      validateForm() {
        this.formIsValid = true;
        //if it is still left empty, invalid form input
        if(this.title.val === '') {
          this.title.isValid = false;
          this.formIsValid = false;
        }
        if(this.postBody.val === '') {
          this.postBody.isValid = false;
          this.formIsValid = false;
        }

    },
    //user submits the post creation form
      submitForm() {
        this.validateForm();
        //if invalid, do a return to prevent rest of method
        //from executing
        if(!this.formIsValid) {
          return;
        }

        let postObject = this;
        axios.post('http://localhost:3000/api/v1/posts', {
          title: this.title.val,
          postBody: this.postBody.val
        })
        .catch(function(error) {
          console.log("post creation failed")
          postObject.output = error;
        })

        //for testing purposes
        const formData = {
                t: this.title.val,
                pb: this.postBody.val
            };
          console.log(formData);
            //send user back to the list of posts page
          this.$router.push('/posts');
      },
      
      
     }
    }
   </script>
   <style scoped>
   
   .form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}
p {
  color:red;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
  </style>

