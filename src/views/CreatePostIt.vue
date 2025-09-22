<script setup>
import { useNoteStore } from "@/stores/note";
import { onMounted } from "vue";

const note = useNoteStore();

onMounted(() => {
  // Empty form inputs for creation.
  note.postItTitle = "";
  note.postItContent = "";
});
</script>

<template>
  <main class="w-full px-5">
    <form class="bg-green-100 p-5 rounded m-auto max-w-1/2">
      <label for="title" class="block text-sm/6 font-medium">Titre</label>
      <input
        class="border rounded"
        type="text"
        name="title"
        id="title"
        required
        v-model="note.postItTitle"
      />
      <br />
      <label for="content" class="block text-sm/6 font-medium">Contenu</label>
      <textarea
        class="border rounded"
        name="content"
        id="content"
        required
        v-model="note.postItContent"
      ></textarea>
      <br />
      <input
        @click="note.create"
        type="button"
        value="Créer"
        class="rounded shadow-sm shadow-gray-400 cursor-pointer mt-5 px-5 py-2 bg-green-300"
      />
    </form>
  </main>
</template>
