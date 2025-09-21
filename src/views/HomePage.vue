<template>
  <main class="flex flex-col text-center justify-content-center pt-5">
    <div>
      <img
        src="/src/assets/images/post-its.png"
        alt="Post-its pinned"
        class="w-1/3 h-1/3 m-auto"
      />
    </div>
    <div>
      <RouterLink
        :to="{ name: 'showAll' }"
        class="rounded-lg bg-sky-500 hover:bg-sky-700 p-3 cursor-pointer text-white"
        >Voir les notes</RouterLink
      >
    </div>
  </main>
</template>
