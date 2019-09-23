<template>
  <Layout>
    <v-container>
      <v-row align="stretch" align-content="stretch">
        <v-col md="4" cols="12">
          <v-card class="pa-5">
            <div class="text-center">
              <v-avatar size="256" color="primary">
                <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" />
              </v-avatar>
            </div>
            <v-card-title class="align-end fill-height">{{aboutData.aboutMe.name}}</v-card-title>
            <v-card-text>
              <span class="font-weight-bold">{{aboutData.aboutMe.title}}</span>
              <br />
              {{aboutData.aboutMe.bio}}
            </v-card-text>
            <div class="text-center">
              <v-chip
                class="ma-1"
                color="primary"
                v-for="(item, index) in aboutData.aboutMe.hashtags"
                :key="index"
              >{{item}}</v-chip>
            </div>
          </v-card>
        </v-col>
        <v-col md="8" cols="12">
          <v-card color="accent lighten-2">
            <v-card-title
              class="display-2 align-end fill-height"
            >{{aboutData.aboutMe.long_summary_title}}</v-card-title>
            <v-card-text class="headline">{{aboutData.aboutMe.long_summary}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <Chart :skillsData="aboutData.aboutMe.skills" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="display-2 text-center my-5">My Developer Story</div>
          <Timeline :timeline="aboutData.aboutMe.timeline" />
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import Timeline from "../components/Timeline";
import Chart from "../components/Chart";
import aboutData from "~/data/about.yml";

export default {
  components: {
    Timeline,
    Chart
  },
  data() {
    return {
      aboutData
    };
  }
};
</script>
