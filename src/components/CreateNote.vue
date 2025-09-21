<template>
  <RouterLink :to="{ name: 'create-note' }">
    <button
      class="rounded-lg bg-blue-500 hover:bg-blue-700 p-3 cursor-pointer text-white flex gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      Create a post-it
    </button>
  </RouterLink>
</template>
