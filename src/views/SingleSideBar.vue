<template>
        <ion-content class="ion-padding">
        <ion-card>
             <div style="display: flex; align-items: center;">
            <ion-thumbnail>
                <img src="/src/assets/blank_profile.png" />
              </ion-thumbnail>
            <ion-card-header>
              <ion-card-title>{{userdata.full_name}}</ion-card-title>
              <ion-card-subtitle>{{userdata.email_address}}</ion-card-subtitle>
            </ion-card-header>
            </div>
          </ion-card>
        <ion-list>
            <div>
            <ion-item :button="true" router-link = '/home'>
            <ion-icon slot="start" :icon = "globeOutline" ></ion-icon>
            <ion-badge slot="end">{{userdata.sites}}</ion-badge>
             <ion-label>Registered Sites</ion-label>
            </ion-item>
             </div>
            <ion-item :button="true" router-link = '/home'>
            <ion-icon slot="start" :icon = "serverOutline" ></ion-icon>
            <ion-badge slot="end">{{userdata.servers}}</ion-badge>
              <ion-label  >Registered Servers</ion-label>
            </ion-item>

            <ion-item :button="true" router-link = '/home' >
                <ion-icon  slot="start"  :icon = "analyticsOutline" ></ion-icon>
              <ion-label>View Dashboard</ion-label>
            </ion-item>

            <ion-item :button="true" router-link = '/home' >
                <ion-icon slot="start" :icon = "personOutline" ></ion-icon>
              <ion-label>Profile</ion-label>
            </ion-item>

            <ion-item :button="true"  router-link = '/home'>
                <ion-icon slot="start" :icon = "callOutline" ></ion-icon>
              <ion-label color="danger" >Contact Us</ion-label>
            </ion-item>

        </ion-list>
   </ion-content>
</template>

<script setup lang="js">
  import { userData } from "@/stores/userData"
  import { IonPage,IonThumbnail,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonCardTitle ,IonBadge, IonTitle,IonIcon, IonToolbar, IonMenu, IonMenuButton,
  IonHeader,IonButtons, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton } from "@ionic/vue";
  import { serverOutline,personOutline,globeOutline,analyticsOutline,callOutline } from 'ionicons/icons';
    const userdata = userData()
  </script>


