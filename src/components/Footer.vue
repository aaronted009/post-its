<script setup>
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
</script>

<template>
  <footer
    class="relative bottom-0 w-full text-center py-5 bg-white shadow-sm shadow-gray-400 text-gray-500 mt-5"
  >
    © {{ currentYear }} Made by
    <a href="https://github.com/aaronted009/">Teddy Aaron ABALLO</a>
  </footer>
</template>
