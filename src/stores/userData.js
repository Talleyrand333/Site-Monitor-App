import { defineStore } from "pinia"

export const userData = defineStore({
    id:'userData',
    state : ()=> ({
        user_id:"7835335",
        my_name:"Ebuka"
    })
})