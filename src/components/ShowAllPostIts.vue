<script setup>
import { onMounted } from "vue";
import { useNoteStore } from "@/stores/note";

const note = useNoteStore();

onMounted(async () => {
  await note.getAllPostIts();
});
</script>

<template>
  <RouterLink :to="{ name: 'create-note' }">Create a post-it</RouterLink>
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
