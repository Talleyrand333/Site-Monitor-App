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
              <ion-input label="Username" type="text" required></ion-input>
            </ion-item>
  
            <ion-item>
              
              <ion-icon slot="start" :icon="lockClosedOutline" aria-hidden="true"></ion-icon>
              <ion-input label="Password" type="password" required></ion-input>
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
import { personOutline,lockClosedOutline } from "ionicons/icons"; // Assuming you're using personOutline

const onLogin = async () => {
  // Implement your login logic here
};


</script>
  