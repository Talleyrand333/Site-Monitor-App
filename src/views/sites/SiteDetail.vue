<template>
    <ion-page>
    <ion-menu content-id="main-content" >
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>

      </ion-toolbar>
    </ion-header>
    <SingleSideBar >
    </SingleSideBar>
  </ion-menu>
      <ion-content id="main-content">
      <ion-header>
        <ion-toolbar>
        <ion-back-button default-href="/user/${userdata.email_address}" slot="start"></ion-back-button>
          <ion-title>Setup site for Monitoring</ion-title>
            <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
        </ion-buttons>
        </ion-toolbar>
      </ion-header>
        <form @submit.prevent="onSubmit">
          <ion-list>
            <ion-item>
              <ion-input helper-text="Enter URL directly and without any prefixes like www.or https:// " label="URL" v-model="url" type="text" required></ion-input>
              <ion-icon slot="start" :icon="globeOutline" aria-hidden="true"></ion-icon>
            </ion-item>
            <ion-item>
              <ion-input label="Notification Recipient" v-model="recipient" type="email" required></ion-input>
              <ion-icon slot="start" :icon="mailOutline" aria-hidden="true"></ion-icon>
            </ion-item>

          </ion-list>
          <ion-button type="submit" expand="block" :disabled="!canSubmit || submitting">Submit</ion-button>
          <ion-progress-bar v-if="submitting" type="indeterminate"></ion-progress-bar>
        </form>

      </ion-content>
      <BottomBar>
    </BottomBar>
    </ion-page>
  </template>
  <script setup lang="js">
  import { ref,onMounted, computed,inject } from "vue";
  import SingleSideBar from '../../views/SingleSideBar.vue'
  import BottomBar from '../../views/BottomBar.vue'
  import { IonPage,IonProgressBar,IonMenu,alertController, IonTitle,IonIcon, IonToolbar,IonButtons,IonMenuButton,
  IonBackButton, IonHeader, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton } from "@ionic/vue";
  import { globeOutline,mailOutline } from 'ionicons/icons';
  import { userData } from "@/stores/userData"
  const userdata = userData()
  const makeApiCall = inject('makeApiCall');

   // Inject the provided function
  const url = ref("");
  const recipient = ref("");

  const submitting = ref(false);

  const canSubmit = computed(() =>
    url.value.trim() !== "" &&
    recipient.value.trim() !== ""
  );

  const onSubmit = async () => {
    submitting.value = true;

    let base_url = "https://erp.techtodohub.com/api/method/site_monitor.utils.create_new_site"
    let method = "POST"
    let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `token ${userdata.api_key}:${userdata.api_secret}`
            }
    let myurl = url.value.trim()
    
    let data = {recipient:recipient.value.trim(),url:myurl,username:userdata.email_address}

    let api_response = await makeApiCall.methods.makeApiCall(base_url,method,data,headers = headers)
    submitting.value = false;
    console.log(api_response)
    presentAlert(api_response)
  };
  const presentAlert = async (api_response) => {
        status = api_response.response.status
        if(status==201){
            const alert = await alertController.create({
              subHeader: 'User Created',
              message: 'Site Created Successfully',
              buttons: ['OK'],
            });
        await alert.present();
        }
        else{
        const alert = await alertController.create({
              subHeader: 'Error',
              message: "Error Occurred while creating Site",
              buttons: ['OK'],
            });
        await alert.present();
        }
      }


    onMounted(() => {
        userdata.fetchData()
        })
  </script>
