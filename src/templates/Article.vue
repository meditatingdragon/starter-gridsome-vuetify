<template>
  <Layout>
    <v-container>
        <v-card class="ma-5">
        <v-img height="500px" :src="$page.article.preview_image">
        </v-img>
        
        <v-card-text>
          <h3 class="teal--text font-weight-bold mx-0 display-2 px-5">{{$page.article.title}}</h3>
          <br/>
          <span class="px-5">{{$page.article.author}} | Date: {{$page.article.date}} | Time: {{$page.article.timeToRead}} to read</span>
          <div class="pa-5 body-1">
            <ArticleContent :content="$page.article.content" />
          </div>
        </v-card-text>
        </v-card>
    </v-container>
  </Layout>
</template>

<page-query>
query Article ($path: String!) {
  article: article (path: $path) {
    path
    title
    author
    date (format: "MMMM D, YYYY")
    timeToRead
    content
    excerpt
    published
    preview_image
  }
}
</page-query>

<script>
import ArticleContent from "@/components/ArticleContent";

export default {
  components: {
    ArticleContent
  }
};
</script>

<style scoped>
</style>
