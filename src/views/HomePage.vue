<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Site Diver</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Site Diver</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div>
          <strong>Ready to Start Monitoring  {{userdata.user_id}}?</strong> <br>
        <ion-button router-link ="/register" fill="outline" color="secondary" shape="round" >
          Register
        </ion-button>
        <ion-button router-link="/login"  color="secondary" fill="outline" shape="round">
          Login
        </ion-button>




        </div>
        <div id = "image_div">
          <!-- <ion-img
          src="/src/assets/site_monitor_background.png"
        ></ion-img> -->
        </div>
        
        
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup >
import { IonIcon,IonContent,IonButton, IonHeader, IonPage,IonImg, IonTitle, IonToolbar } from '@ionic/vue';

import { userData } from "@/stores/userData"

const  userdata = userData()
</script>

<style scoped>



#image_div {
  
  width: 70%; /* Set the width of the div to 70% of the screen width */
  height: 60vh; /* Set the height of the div to 100% of the viewport height */
  background-image: url("/src/assets/site_monitor_background.png"); /* Set the background image */
  background-size: cover; /* Cover the entire div with the background image */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
  margin: 0 auto; /* Center the container horizontally */
  text-align: center;
}


#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
