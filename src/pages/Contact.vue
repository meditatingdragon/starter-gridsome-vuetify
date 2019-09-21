<template>
  <Layout>
    <v-container>
      <h1>Contact Us</h1>
      <p>Send a message, and we'll reply as soon as possible!</p>

      <v-form ref="form" v-model="valid" lazy-validation name="contact">
        <v-text-field
          v-model="name"
          :counter="30"
          :rules="nameRules"
          label="Name"
          required
          autocomplete
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          autocomplete
        ></v-text-field>

        <v-textarea
          v-model="message"
          label="Message"
          required
        ></v-textarea>
        <v-btn
          :disabled="!valid"
          color="success"
          @click="validate"
          required
        >
          Submit
        </v-btn>
      </v-form>
    </v-container>
  </Layout>
</template>

<script>
export default {
  data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 30) || 'Name must be less than 10 characters',
        v => (v && v.length > 2) || 'Name must be greater than 2 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: '',
      
  }),
  metaInfo: {
    title: 'About us'
  },
  methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>