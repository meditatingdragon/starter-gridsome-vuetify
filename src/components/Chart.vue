<template>
  <v-card
    class="mx-auto"
    color="grey lighten-4"
  >
    <v-card-title>
      <v-row align="start">
        <div class="mx-5 subtitle black--text text-uppercase">
          Professional Skills
        </div>
      </v-row>
    </v-card-title>

    <v-sheet color="transparent">
      <v-sparkline
        key="test"
        :smooth="16"
        :gradient="['#f72047', '#ffd200', '#1feaea']"
        :line-width="3"
        type="bar"
        :value="values"
        :show-labels="true"
        auto-draw
        stroke-linecap="round"
      >
      <template v-slot:label="item">
            {{keys[item.index]}}
      </template>
      
      </v-sparkline>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  props: {
    skillsData: Array
  },
  data: () => ({
    }),
  computed: {
    values() {
      return this.skillsData.map( (obj) => {
        return obj.rank;
      })
    },
    keys() {
      return this.skillsData.map( (obj)=> {
        return obj.name;
      })
    }
  },
}
</script>