<script setup>
import { useNoteStore } from "@/stores/note";
import EditNoteButton from "./EditNoteButton.vue";
import DeleteNoteButton from "./DeleteNoteButton.vue";

const note = useNoteStore();

defineProps({
  title: String,
  content: String,
  noteId: String,
});

function truncateString(str, maxLength) {
  // Check if the string's length exceeds the specified maximum length
  if (str.length > maxLength) {
    // If it does, slice the string from the beginning up to (maxLength - 3)
    // to account for the "..." ellipsis, and then append "..."
    return str.slice(0, maxLength - 3) + "...";
  }
  // If the string's length does not exceed the maximum, return the original string
  return str;
}
</script>
<template>
  <div
    class="relative w-100 h-50 p-5 flex-col gap-3 rounded border cursor-pointer"
    @click="note.redirectToNotePage(noteId)"
  >
    <div class="font-semibold text-xl">{{ truncateString(title, 30) }}</div>
    <div>{{ truncateString(content, 50) }}</div>
    <div class="absolute top-1 right-1 flex gap-3 content-center">
      <EditNoteButton :note-id="noteId" />
      <DeleteNoteButton :note-id="noteId" />
    </div>
  </div>
</template>
