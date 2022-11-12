<template>
    <li>
        <h3>{{id}}</h3>
        <h3>{{title}}</h3>
        <h4>{{postBody}}</h4>
        <div class="actions">
          <base-button link :to="postDetailsLink">View Details</base-button>
        </div>

    </li>
</template>

<script>
export default {
    props: ['id', 'title', 'postBody'],
    computed: {
      postDetailsLink() {
        //uses the current path and adds id of specific post to the route
        return this.$route.path + '/'+ this.id
      }
    }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>