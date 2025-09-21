<script setup>
import { onMounted } from "vue";
import { useNoteStore } from "@/stores/note";
import { useRoute } from "vue-router";

const note = useNoteStore();
const route = useRoute();

onMounted(async () => {
  note.noteUrl = note.url + route.params.id;
  await note.getPostIt();
});
</script>
<template>
  <form>
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
