<template>
    <ion-footer>
    <ion-toolbar>
    <div class="button_row">
    <ion-buttons slot="secondary" >

      <ion-button>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <ion-icon :icon="notificationsCircle"></ion-icon>
        Notifications
        </div>
      </ion-button>


      <ion-button>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <ion-icon :icon="settings"></ion-icon>
        Settings
         </div>
      </ion-button>


      <ion-button>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <ion-icon :icon="logOut"></ion-icon>
        Logout
         </div>
      </ion-button>

    </ion-buttons>
    </div>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup>
import { IonTitle, IonFooter, IonToolbar,IonIcon,IonButtons,IonButton } from '@ionic/vue';
import { logOut,notificationsCircle,  settings } from 'ionicons/icons';
</script>

<style>
  .button_row {
    display: flex;  /* Make the container a flexbox */
    justify-content: center;
  }

</style>