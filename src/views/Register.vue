<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>

          <ion-title>Register</ion-title>
          <ion-back-button default-href="/home" slot="start"></ion-back-button>
        </ion-toolbar>
      </ion-header>
      
      <ion-content>
        <form @submit.prevent="onSubmit">
          <ion-list>
            <ion-item>
              <ion-input label="Email" v-model="email" type="email" required></ion-input>
              <ion-icon slot="start" :icon="mailOutline" aria-hidden="true"></ion-icon>
            </ion-item>
            <ion-item>
                <ion-icon slot="start" :icon="personOutline" aria-hidden="true"></ion-icon>
              <ion-input label="Full Name" v-model="fullName" type="text" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-icon slot="start" :icon="callOutline" aria-hidden="true"></ion-icon>
              <ion-input label="Phone Number" v-model="phoneNumber" type="tel" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-icon slot="start" :icon="lockClosedOutline" aria-hidden="true"></ion-icon>
              <ion-input minlength="10" label="Password" v-model="password" :type="showPassword ? 'text' : 'password'" required>
               <ion-icon
                 slot="end"
              :icon="showPassword ? eyeOutline : eyeOffOutline "
              @click="togglePasswordVisibility"
            ></ion-icon>
            </ion-input>
            </ion-item>
            
          </ion-list>
          <ion-button type="submit" expand="block" :disabled="!canSubmit || submitting">Submit</ion-button>
          <ion-progress-bar v-if="submitting" type="indeterminate"></ion-progress-bar>
        </form>
        <div class="login-button">
            
            <RouterLink to="/login">Go to Login Page</RouterLink>
          </div>
      </ion-content>
    </ion-page>
  </template>
  <script setup lang="js">
  import { ref,defineComponent, computed,inject } from "vue";
  import { IonPage,IonProgressBar,alertController, IonTitle,IonIcon, IonToolbar, IonBackButton, IonHeader, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton } from "@ionic/vue";
  import { lockClosedOutline,callOutline,mailOutline,personOutline,eyeOutline, eyeOffOutline } from 'ionicons/icons';
  const makeApiCall = inject('makeApiCall');
  const fullName = ref("");
  const showPassword = ref(false);
   // Inject the provided function
  const phoneNumber = ref("");
  const password = ref("");
  const email = ref("");
  const submitting = ref(false);
  
  const canSubmit = computed(() =>
    fullName.value.trim() !== "" &&
    phoneNumber.value.trim() !== "" &&
    password.value.trim() !== "" &&
    email.value.trim() !== ""
    
  );
  
  const onSubmit = async () => {
    submitting.value = true;

    let base_url = "https://erp.techtodohub.com/api/method/site_monitor.utils.create_new_user"
    let method = "POST"
    let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
    let data = {email:email.value.trim(),full_name:fullName.value.trim(),password:password.value.trim()}

    let api_response = await makeApiCall.methods.makeApiCall(base_url,method,data,headers = headers)
    // Implement your form submission logic here
    // For example, send data to a backend API

    // Assuming successful submission, reset the form
    presentAlert(api_response)
    fullName.value = "";
    phoneNumber.value = "";
    password.value = "";
    email.value = "";
    submitting.value = false

  };

  const presentAlert = async (api_response) => {

        status = api_response.response.status

        if(status==200){
            const alert = await alertController.create({
              subHeader: 'User Created',
              message: 'User Created Successfully',
              buttons: ['OK'],
            });
        await alert.present();
        }
        else if(status==400){
            const alert = await alertController.create({
              subHeader: 'User Exists',
              message: 'User Already exists, Please login',
              buttons: ['OK'],
            });
        await alert.present();
        }
        else{
        const alert = await alertController.create({
              subHeader: 'Error',
              message: "Error Occurred while creating User",
              buttons: ['OK'],
            });
        await alert.present();
        }
      }

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };
  </script>
  