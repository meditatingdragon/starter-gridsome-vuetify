<template>
  <Layout>
    <v-container>
      <div class="d-flex-row d-block flex-wrap d-sm-inline-flex">
        <v-card
          class="ma-sm-2 my-5"
          max-width="375"
          v-for="item in $page.articles.edges"
          :key="item.node.id"
          :href="item.node.path"
        >
          <v-img height="200px" :src="item.node.preview_image"> </v-img>

          <v-card-text>
            <h3 class="primary--text font-weight-bold mx-0 display-1">
              {{ item.node.title }}
            </h3>
            <br />
            <span class="subtitle-1">{{ item.node.author }}</span>
            <br />
            <span class="text--primary">
              <span>{{ item.node.date }}</span>
              <br />
              <span>{{ item.node.excerpt }}</span>
            </span>
          </v-card-text>

          <v-card-actions>
            <v-btn text color="orange">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div class="text-center">
        <Pager
          linkClass="v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--small primary mx-1"
          :info="$page.articles.pageInfo"
        />
      </div>
    </v-container>
  </Layout>
</template>

<page-query>
query AllArticle ($page: Int) {
	articles: allArticle ( perPage: 3, page: $page, filter: { published: { eq: true }}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        title
        author
        published
        preview_image (quality: 90)
        date (format: "MMMM D, YYYY")
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager
  }
};
</script>
