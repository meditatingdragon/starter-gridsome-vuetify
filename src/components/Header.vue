<template>
  <v-toolbar color="teal darken-1" dark>
    <v-btn text large href="/">
      <g-image src="~/favicon.png" height="35" width="35" class="mr-5"/>
      <span class="headline font-weight-bold">{{$static.metadata.siteName}}</span>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>fa-search</v-icon>
    </v-btn>
    <v-toolbar-items>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/articles">Articles</v-btn>
      <v-btn text to="/contact">Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {

}
</script>