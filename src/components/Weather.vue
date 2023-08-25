<template>
  <div id="app">
    <div class="main">
      <div class="search-box">
        <input class="search-bar" type="text" placeholder="Search..." v-model="data.city" @keyup.enter="getApi()" />
      </div> 
      <router-link to='/city' class="link-class">
        <CityDetails :data="data" />
      </router-link>
    </div>
  </div>
</template>

<script>

  import axios from "axios";
  import CityDetails from './CityDetails.vue'

  export default {// eslint-disable-next-line
    name: 'Weather App', 

    components:{
      CityDetails
    },

    data(){
      return{
        data:{
          city:'',
          weather: null,
          current_day:'',
          state_weather:false
        }
      }
    },

    mounted: async function(){
      this.getApi()
    },

    methods:{
      async getApi(){
        if(this.data.city===''){
          this.data.city = 'Dharwad';
        }

        const getWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.data.city}&appid=261514ec6ead072a338a344dce0fb58f`);

        console.log(getWeather);

        this.data.weather = getWeather.data;
        this.data.city = '';

        if(this.data.weather.main.temp > 16){
          this.state_weather = true;
        }else{
          this.state_weather = false;
        }
      }
    }
  }

</script>

<style scoped>

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'monsterrat',sans-serif;
  }

  #app{
    background-image: url('../assets/bg.jpg');
    background-size: cover;
  }

  .main{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }

  .search-box .search-bar{
    display: block;
    padding: 1rem;
    color: #313131;
    font-size: 20px;
    appearance: none;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 16px 0px 16px;
    transition: 0.4s;
  }

  .search-box .search-bar:focus{
    box-shadow: 0px 0px 16px;
    background-color: rgba(255, 255, 255, 0.75);
  }

  .link-class{
    text-decoration: none;
  }
</style>