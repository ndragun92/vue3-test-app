<template>
 <div class="container mx-auto p-10">
   <div class="bg-gray-200 p-10 text-center mb-8 rounded-md">
     <ui-button class="mb-4" @click="get">Reload single fact</ui-button>
     <ui-loader v-if="singleFactLoading" />
     <div v-else-if="singleFact.error">Error loading data</div>
     <div v-else>
       <h1 v-if="singleFact.data">{{singleFact.data.fact}}</h1>
       <h1 v-else>Could not find a fact</h1>
     </div>
   </div>
   <hr>
   <div class="bg-gray-200 p-10 mb-8 rounded-md">
     <div class="text-center mb-4">
       <ui-button @click="find">Reload all facts</ui-button>
     </div>
     <ui-loader v-if="allFactsLoading" />
     <div v-else-if="allFacts.error">Error loading data</div>
     <div v-else>
       <ol class="list-decimal" v-if="allFacts.data.data.length">
         <li v-for="item in allFacts.data.data" :key="item.fact">
           {{item.fact}}
         </li>
       </ol>
       <div v-else>
         No facts
       </div>
     </div>
   </div>
 </div>
</template>

<script lang="ts" setup>
import useFacts from '@/composables/api/useFacts'
import UiButton from '@/components/ui/UiButton/UiButton.vue'
import UiLoader from '@/components/ui/UiLoader/UiLoader.vue'

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
