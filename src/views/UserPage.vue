<template>
<ion-page>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>

        <ion-title>Menu</ion-title>

      </ion-toolbar>
    </ion-header>
    <SingleSideBar>
    </SingleSideBar>
  </ion-menu>

  <ion-content id="main-content">
    <ion-header>
      <ion-toolbar class='custom_toolbar2'>
        <ion-title>Server Diver</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div style="display: flex; flex-wrap: wrap;">
        <ion-card color="primary">
          <ion-card-header>
            <ion-card-title>Sites</ion-card-title>
            <ion-card-subtitle>Manage your sites</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>Perform actions like adding new sites to be monitored</ion-card-content>
        </ion-card>
        <ion-card color="primary">
          <ion-card-header>
            <ion-card-title>Servers</ion-card-title>
            <ion-card-subtitle>Manage your servers</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>Perform actions like adding a server to be monitored</ion-card-content>
        </ion-card>

      </div>
    </ion-content>

  </ion-content>
    <BottomBar>
  </BottomBar>
  </ion-page>

</template>


<script setup>
import { IonCard, IonButtons,IonMenuButton, IonLabel, IonList, IonItem, IonMenu, IonPage, IonContent,
IonHeader, IonToolbar, IonTitle, IonCardContent, IonCardHeader, IonCardSubtitle,
IonCardTitle, IonMenuToggle } from '@ionic/vue';
import SingleSideBar from '../views/SingleSideBar.vue'
import BottomBar from '../views/BottomBar.vue'

</script>

