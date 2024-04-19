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
              :icon="showPassword ? eyeOutline : eyeOffOutline "
              @click="togglePasswordVisibility"
            ></ion-icon>
            </ion-item>
          </ion-list>

          <ion-button type="submit" expand="block">Login</ion-button>
           <ion-progress-bar v-if="submitting" type="indeterminate"></ion-progress-bar>

          <div class="forgot-password">
            <a href="/home">Forgot password?</a>
          </div>
        </form>
      </ion-content>
    </ion-page>
  </template>



<script setup lang="js">
import { userData } from "@/stores/userData"
import { ref,inject } from "vue";
import { useRouter } from 'vue-router';
import { IonIcon, IonContent,IonProgressBar,toastController,alertController, IonBackButton, IonHeader, IonInput,
 IonButton, IonPage, IonImg, IonTitle, IonToolbar, IonItem, IonList } from "@ionic/vue";
import { personOutline,lockClosedOutline, eyeOutline, eyeOffOutline } from "ionicons/icons"; // Assuming you're using personOutline
const username = ref("");
const router = useRouter();
const submitting = ref(false);
const makeApiCall = inject('makeApiCall');
const password = ref("");
const  userdata = userData()
const showPassword = ref(false);
const onLogin = async () => {
submitting.value = true
  let base_url = "https://erp.techtodohub.com/api/method/site_monitor.utils.login"
    let method = "POST"
    let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
    let data = {username:username.value.trim(),password:password.value.trim()}

    let api_response = await makeApiCall.methods.makeApiCall(base_url,method,data,headers = headers)

    submitting.value = false

    if(api_response.response.status == 200){

          userdata.updateData(api_response,username.value)
          userdata.storeData(api_response,username.value)
          const toast = await toastController.create({
          message: 'Login Successful!',
          duration: 2000,
          position: 'bottom',
        });
        await toast.present();
        let new_url = `/user/${username.value}`;

        username.value = ""
        password.value = ""

        router.push( new_url)
      }
     else{
         const alert = await alertController.create({
              subHeader: 'Error',
              message: api_response.response.message,
              buttons: ['OK'],
            });
        await alert.present();
        password.value = ""

     }

};
const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };
</script>
  