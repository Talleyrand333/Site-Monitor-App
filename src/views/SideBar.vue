<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>
           <div style="display: flex; align-items: center;">
              <ion-thumbnail>
                <img src="/src/assets/site_logo.png" />

              </ion-thumbnail>
              <span style="margin-left: 10px;">Server Diver</span>
            </div>
         </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-card>
             <div style="display: flex; align-items: center;">
            <ion-thumbnail>
                <img src="/src/assets/blank_profile.png" />
              </ion-thumbnail>
            <ion-card-header>
              <ion-card-title>User Full Name</ion-card-title>
              <ion-card-subtitle>User Email Address</ion-card-subtitle>
            </ion-card-header>
            </div>
          </ion-card>
        <ion-list>
            <div router-link = '/home'>
            <ion-item>
            <ion-icon slot="start" :icon = "globeOutline" ></ion-icon>
             <ion-label>Registered Sites</ion-label>
            </ion-item>
             </div>



            <ion-item>
            <ion-icon slot="start" :icon = "serverOutline" ></ion-icon>
              <ion-label  >Registered Servers</ion-label>
            </ion-item>

            <ion-item >
                <ion-icon  slot="start"  :icon = "analyticsOutline" ></ion-icon>
              <ion-label>View Dashboard</ion-label>
            </ion-item>

            <ion-item >
                <ion-icon slot="start" :icon = "personOutline" ></ion-icon>
              <ion-label>Profile</ion-label>
            </ion-item>

            <ion-item >
                <ion-icon slot="start" :icon = "logOutOutline" ></ion-icon>
              <ion-label>Logout</ion-label>
            </ion-item>

        </ion-list>
   </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Server Diver</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
    <p>This is the content</p>
     </ion-content>
  </ion-page>
</template>

<script setup lang="js">
  import { ref,defineComponent, computed,inject } from "vue";
  import { IonPage,IonThumbnail,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonCardTitle ,IonProgressBar,alertController, IonTitle,IonIcon, IonToolbar, IonMenu, IonMenuButton,IonBackButton,
  IonHeader,IonButtons, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton } from "@ionic/vue";
  import { serverOutline,personOutline,globeOutline,analyticsOutline,logOutOutline } from 'ionicons/icons';

  </script>

