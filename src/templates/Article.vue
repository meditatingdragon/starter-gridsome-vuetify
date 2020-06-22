<template>
  <Layout>
    <v-container>
      <div class="d-flex">
        <v-card class="ma-sm-5 xs-sm-6">
          <v-img height="500px" :src="$page.article.preview_image"> </v-img>

          <v-card-text>
            <h3 class="primary--text font-weight-bold mx-0 display-2 px-xs-5">
              {{ $page.article.title }}
            </h3>
            <br />
            <span class="px-xs-5">{{ $page.article.author }}</span
            ><br />
            <span class="px-xs-5"
              >Date: {{ $page.article.date }} | Time:
              {{ $page.article.timeToRead }} min to read</span
            >
            <div class="pa-xs-5 body-1">
              <ArticleContent :content="$page.article.content" />
            </div>
          </v-card-text>
        </v-card>
      </div>
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

<style scoped></style>
