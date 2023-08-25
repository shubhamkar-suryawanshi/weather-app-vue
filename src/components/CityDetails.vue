<template>
    <div v-if="data.weather" class="content">
        <div class="header">
            <h1>{{data.weather.name}}</h1>
            <h3>{{ new Date().toLocaleString() }}</h3>
        </div>
        <div class="temp">
            <h2>{{Math.round(data.weather.main.temp)}}&deg;</h2>
        </div>
        <div class="state">
            <h3>{{ data.weather.weather[0].main}}</h3>
        </div> 
    </div>
</template>

<script>

    export default {// eslint-disable-next-line
        name: 'City', 
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }

</script>

<style scoped>

  .content{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .temp{
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 6rem;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 1rem;
  box-shadow: 3px 6px rgba(0,0,0,0.25);
  }

  .header{
    font-size: 1.25rem;
    color: azure;
    box-shadow: rgba(3,3,3, 0.3);
  }

  .state{
    color: #FFF;
    font-size: 3rem;
    font-style: italic;
    text-shadow: 3px 6px rgba(0,0,0,0.25);
  }

</style>