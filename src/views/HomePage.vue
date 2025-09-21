<template>
  <main class="text-center content-center pt-5">
    <img
      src="/src/assets/images/post-its.png"
      alt="Post-its pinned"
      class="w-1/4 h-1/4"
    />
    <RouterLink
      :to="{ name: 'showAll' }"
      class="rounded-lg bg-sky-500 hover:bg-sky-700 p-3 cursor-pointer text-white"
      >Voir les notes</RouterLink
    >
  </main>
</template>
