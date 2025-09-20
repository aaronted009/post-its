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
  <form>
    <input type="text" name="title" id="" v-model="note.postItTitle" />
    <br />
    <textarea name="content" id="" v-model="note.postItContent"></textarea>
    <br />
    <input @click="note.create" type="button" value="Créer" />
  </form>
</template>
