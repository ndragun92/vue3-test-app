<template>
  <div class="flex justify-center items-center h-full">
    <div class="w-12 h-12 border-4 border-indigo-400 rounded-full loader"></div>
  </div>
</template>

<style scoped>
@keyframes loader-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  border-right-color: transparent;
  animation: loader-rotate 1s linear infinite;
}
</style>
