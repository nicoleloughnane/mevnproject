<template>
    <section>
    <base-card>
    <h4>{{id}}</h4>
    <h2>{{title}}</h2>
    <!--author to be added in future-->
    <h4>{{postBody}}</h4>
    </base-card>
  
    </section>
</template>

<script>
import PostsAPI from '@/services/PostsAPI';
export default {
    props: ['id', 'title', 'postBody'],
    data() {
     
    },
    computed: {
    
    },
    created() {
      // this.selectedPost = this.$store.getters['posts/posts'].find(
      //   (post) => post === this.id
      // );
    },
    mounted() {
    this.getPostId();
  },

    methods: {
    async getPostId() {
      const response = await PostsAPI.getPostById(this.id);
      //this.posts = response.data;

      console.log(response);
      const {postBody, title} = response.data
      this.$props.postBody = postBody 
      this.$props.title = title
    } 
  }
}

</script>