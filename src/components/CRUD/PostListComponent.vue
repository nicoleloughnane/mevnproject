<template>

      <h1>List of Posts</h1>
      <br />
      <section>
        <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/create">Add new Post</base-button>
      </div>
      <div class="posts">
        <ul>
          <post-item v-for="post in posts"
           :key="post.id"
           :id="post.id"
           :title="post.title" 
           :post-body="post.postBody">
          </post-item>
        </ul>
      </div>
    </base-card>
    </section>

</template>
   
<script>
import PostsAPI from '@/services/PostsAPI';
import PostItem from '../PostItem.vue';
export default {
  components: {
    PostItem
  },

  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.loadPosts();
  },
  methods: {
    async loadPosts() {
      const response = await PostsAPI.getPosts();
      this.posts = response.data;
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>