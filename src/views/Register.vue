<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Register</ion-title>
          <ion-back-button default-href="/" slot="start"></ion-back-button>
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
              <ion-input minlength="10" label="Password" v-model="password" type="password" required>
                
            </ion-input>
            </ion-item>
            
          </ion-list>
          <ion-button type="submit" expand="block" :disabled="!canSubmit">Submit</ion-button>
        </form>
      </ion-content>
    </ion-page>
  </template>
  <script setup lang="js">
  import { ref, computed,inject } from "vue";
  import { IonPage,alertController, IonTitle,IonIcon, IonToolbar, IonBackButton, IonHeader, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton } from "@ionic/vue";
  import { lockClosedOutline,callOutline,mailOutline,personOutline } from 'ionicons/icons';
  const makeApiCall = inject('makeApiCall');
  const fullName = ref("");
   // Inject the provided function
  const phoneNumber = ref("");
  const password = ref("");
  const email = ref("");
  const submitted = ref(false);
  
  const canSubmit = computed(() =>
    fullName.value.trim() !== "" &&
    phoneNumber.value.trim() !== "" &&
    password.value.trim() !== "" &&
    email.value.trim() !== ""
    
  );
  
  const onSubmit = async () => {
    submitted.value = true;

    let base_url = "https://erp.techtodohub.com/api/method/frappe.core.doctype.user.user.sign_up"
    let method = "post"
    let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
    let data = {email:email.value.trim(),full_name:fullName.value.trim(),redirect_to:0}

    let api_response = await makeApiCall.methods.makeApiCall(base_url,method,data,headers = headers)
    console.log(api_response)


    // Implement your form submission logic here
    // For example, send data to a backend API
  
    // Assuming successful submission, reset the form
    fullName.value = "";
    phoneNumber.value = "";
    password.value = "";
    email.value = "";
    presentAlert()
    //console.log(this)
  };



  const presentAlert = async () => {
        const alert = await alertController.create({
          
          subHeader: 'User Created',
          message: 'User Created Successfully',
          buttons: ['OK'],
        });

        await alert.present();
      }
  </script>
  