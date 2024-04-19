import axios from 'axios'; // Assuming you're using Axios
 import { ref } from "vue";
export default {
  name: 'api',
  methods: {
    async makeApiCall(url, method = null, data = null, headers = {}) {
      const response = ref(null);
      const error = ref(null);
      const loading = ref(true); // Optional loading state

      try {

        const axiosResponse = await axios({
          method,
          url,
          data,
          headers,
        });
        response.value = axiosResponse.data;

         let api_response = JSON.parse(response._value['message'])
         return { 'response':api_response,'error':null}; // Return all values for flexibility
      } catch (err) {
        error.value = err;
        return { 'response':null,'error':error.value}; // Return all values for flexibility
      }


    },
  },
};



