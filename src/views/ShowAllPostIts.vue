<script setup>
import { onMounted } from "vue";
import { useNoteStore } from "@/stores/note";
import CreateNoteButton from "@/components/CreateNoteButton.vue";
import Note from "@/components/Note.vue";

const note = useNoteStore();

onMounted(async () => {
  await note.getAllPostIts();
});
</script>

<template>
  <main class="text-start p-5">
    <CreateNoteButton />
    <section class="grid grid-cols-4 gap-3 my-5">
      <div v-for="postit in note.postits">
        <Note
          :title="postit.title"
          :content="postit.content[0]"
          :note-id="postit._id"
        />
      </div>
    </section>
  </main>
</template>
