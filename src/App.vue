<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
<!--  <router-view/>-->
 <div style="max-width: 768px; margin: auto; padding: 80px;">
   <button style="width: 100%; padding: 5px" type="button" @click="get">Reload single fact</button>
   <div v-if="singleFactLoading">
     Loading
   </div>
   <div v-else-if="singleFact.error">Error loading data</div>
   <div v-else>
     <h1 v-if="singleFact.data">{{singleFact.data.fact}}</h1>
     <h1 v-else>Could not find a fact</h1>
   </div>
   <hr>
   <button style="width: 100%; padding: 5px" type="button" @click="find">Reload all facts</button>
   <div v-if="allFactsLoading">
     Loading
   </div>
   <div v-else-if="allFacts.error">Error loading data</div>
   <div v-else>
     <ul v-if="allFacts.data.data.length">
       <li v-for="item in allFacts.data.data" :key="item.fact">
         {{item.fact}}
       </li>
     </ul>
     <div v-else>
       No facts
     </div>
   </div>
 </div>
</template>

<script lang="ts" setup>
import useFacts from '@/composables/api/useFacts'

const { response: singleFact, get, loading: singleFactLoading } = useFacts()
const { response: allFacts, find, loading: allFactsLoading } = useFacts()

get()
find()
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
