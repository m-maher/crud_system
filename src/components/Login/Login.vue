<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-center align-items-center">
      <b-col cols="6">
        <h1 class="page-title">Login</h1>
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model.trim="formData.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model.trim="formData.password"
              placeholder="Enter Password"
              required
            ></b-form-input>
          </b-form-group>

          <p v-if="isLoading" class="loading">Loading...</p>

          <b-button class="login-btn" type="submit" variant="primary"
            >Login</b-button
          >
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { login } from "./auth";

export default {
  name: "LoginComponent",
  data() {
    return {
      formData: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
      isLoading: false,
    };
  },
  methods: {
    onSubmit() {
      const payload = {
        email: this.formData.email,
        password: this.formData.password,
      };
      this.isLoading = true;
      login(payload)
        .then((token) => {
          this.isLoading = false;
          if (token) {
            this.$store.dispatch("setLoginToken", token);
            this.$router.push({ name: "Home" });
          } else {
            this.isResponseInValid = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
.page-title {
  text-align: center;
  margin-bottom: 40px;
}

.login-btn {
  width: 100%;
  padding: 15px !important;
  margin-top: 20px;
}

.loading {
  display: flex;
  justify-content: center;
  font-size: 20px;
}
</style>
