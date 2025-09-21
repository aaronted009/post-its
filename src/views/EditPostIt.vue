<script setup>
import { onMounted } from "vue";
import { useNoteStore } from "@/stores/note";
import { useRoute } from "vue-router";
import BackToNotes from "@/components/BackToNotes.vue";

const note = useNoteStore();
const route = useRoute();

onMounted(async () => {
  note.noteUrl = note.url + route.params.id;
  await note.getPostIt();
});
</script>
<template>
  <div class="relative text-center m-auto max-w-1/2 mb-5">
    <BackToNotes />
  </div>
  <form class="m-auto text-center bg-yellow-100 p-5 rounded max-w-1/2">
    <input type="text" name="title" id="title" v-model="note.postItTitle" />
    <br />
    <textarea
      name="content"
      id="content"
      v-model="note.postItContent"
    ></textarea>
    <br />
    <input @click="note.update" type="button" value="Enregistrer" />
  </form>
</template>
