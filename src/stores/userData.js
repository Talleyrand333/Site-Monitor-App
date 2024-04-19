import { defineStore } from "pinia"

export const userData = defineStore({
    id:'userData',
    state : ()=> ({
        api_key:"",
        api_secret:"",
        full_name:"",
        sites:0,
        servers:0,
        email_address:""
    }),
    actions: {
        updateData(api_response,username){
          this.api_key = api_response.response.data.api_key
          this.api_secret = api_response.response.data.api_secret
          this.full_name = api_response.response.data.full_name
          this.sites = api_response.response.data.sites
          this.servers = api_response.response.data.servers
          this.email_address = username
        },
        storeData(api_response,username){
            const jsonString = JSON.stringify(api_response);
            const userString = JSON.stringify(username);
            // Set the JSON string in localStorage
            localStorage.setItem('userdata', jsonString);
             localStorage.setItem('cur_user', userString);
        },
        fetchData(){
            let data = localStorage.getItem('userdata')
            if(data){
               let username =   localStorage.getItem('cur_user');
                data = JSON.parse(data)
                username = JSON.parse(username)
                this.updateData(data,username)
                }
        }

    }

})