<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="../../../statics/profile.svg">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                {{ $t('admin.login') }}
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
              ref="myForm"
            >
              <q-input
                filled
                v-model="username"
                :label="$t('admin.username')"
                lazy-rules
                :rules="[ val => val && val.length > 0 || $t('admin.usernameRequired')]"
              />

              <q-input
                type="password"
                filled
                v-model="password"
                :label="$t('admin.password')"
                lazy-rules
                :rules="[ val => val && val.length > 0 || $t('admin.passwordRequired')]"
              />

              <div>
                <q-btn :label="$t('admin.login')" type="button" color="primary" @click="sendForm()"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import BaseService from '../../../assets/js/base.service.js'
export default {
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods:{
    sendForm(){
      
      this.$refs.myForm.validate().then(success => {
        if(success){
          let data = {
            phone: this.username,
            password: this.password
          }
          this.$store.dispatch('auth/login',data).then(() => {
            this.$router.push('/admin')
          });
        }
      });
    }
  },
  beforeCreate(){
    if(this.$store.state.auth.token != null){
      this.$router.push("/admin");
    }
  }
}
</script>

<style>

  .bg-image {
   background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
  }
</style>
