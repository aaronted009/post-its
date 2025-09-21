<script setup>
import { onMounted } from "vue";
import { useNoteStore } from "@/stores/note";
import CreateNote from "@/components/CreateNote.vue";

const note = useNoteStore();

onMounted(async () => {
  await note.getAllPostIts();
});
</script>

<template>
  <CreateNote />
  <div v-for="postit in note.postits">
    <ul>
      <li>
        Id :
        {{ postit._id }} | Title : {{ postit.title }} | Content :
        {{ postit.content }} | Created at : {{ postit.createdAt }} | Updated at
        : {{ postit.updatedAt }}
      </li>
      <RouterLink :to="{ name: 'note', params: { id: postit._id } }"
        >Edit</RouterLink
      >
      <button @click="note.deletePostIt(postit._id)">Delete</button>
    </ul>
  </div>
</template>
