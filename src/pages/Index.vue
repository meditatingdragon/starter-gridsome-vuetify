<template>
  <Layout>
    <v-card
        class="ma-5"
        v-for="item in $page.articles.edges"
        :key="item.node.id"
        :href="item.node.path"
      >
        <v-img height="400px" :src="item.node.preview_image">
          
        </v-img>
        
        <v-card-text>
          <span class="teal--text font-weight-bold mx-0 display-1">{{item.node.title}}</span>
          <br/>
          <span class="subtitle-1">{{item.node.author}}</span>
          <br />
          <span class="text--primary">
            <span>{{item.node.date}}</span>
            <br />
            <span>{{item.node.excerpt}}</span>
          </span>
        </v-card-text>

        <v-card-actions>
          <v-btn text color="orange" :href="item.node.path">Read More</v-btn>
        </v-card-actions>
      </v-card>

  </Layout>
</template>

<page-query>
  query GetArticles {
    articles: allArticle (perPage: 1, filter: { published: { eq: true }}) {
      edges {
        node {
          id
          path
          date (format: "MMMM D, YYYY")
          preview_image (quality: 90)
          title
          published
          excerpt
        }
      }
    }
  }
</page-query>

<script>
</script>

<style>
</style>
