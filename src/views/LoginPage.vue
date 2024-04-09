<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Login</ion-title>
          <ion-back-button default-href="/" slot="start"></ion-back-button>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <form @submit.prevent="onLogin">
          <ion-list lines="none"> <ion-item>
              <ion-icon slot="start" :icon="personOutline" aria-hidden="true"></ion-icon>
              <ion-input v-model = "username" label="Username" type="text" required></ion-input>
            </ion-item>

            <ion-item>
              <ion-icon slot="start" :icon="lockClosedOutline" aria-hidden="true"></ion-icon>
              <ion-input v-model = "password" label="Password" :type="showPassword ? 'text' : 'password'" required></ion-input>
              <ion-icon
              slot="end"
              :icon="showPassword ? eyeOffOutline : eyeOutline"
              @click="togglePasswordVisibility"
            ></ion-icon>
            </ion-item>
          </ion-list>

          <ion-button type="submit" expand="block">Login</ion-button>

          <div class="forgot-password">
            <a href="/home">Forgot password?</a>
          </div>
        </form>
      </ion-content>
    </ion-page>
  </template>



<script setup lang="js">
import { ref } from "vue";
import { IonIcon, IonContent, IonBackButton, IonHeader, IonInput, IonButton, IonPage, IonImg, IonTitle, IonToolbar, IonItem, IonList } from "@ionic/vue";
import { personOutline,lockClosedOutline, eyeOutline, eyeOffOutline } from "ionicons/icons"; // Assuming you're using personOutline
const username = ref("");
 const password = ref("");
 const showPassword = ref(false);
const onLogin = async () => {
  let base_url = "https://erp.techtodohub.com/api/method/site_monitor.utils.login"
    let method = "POST"
    let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
    let data = {username:username.value.trim(),password:password.value.trim()}

    let api_response = await makeApiCall.methods.makeApiCall(base_url,method,data,headers = headers)
};

const togglePasswordVisibility = () => {


      showPassword.value = !showPassword.value;
    };



</script>
  