<script setup>
import { onMounted, ref } from "vue";
import { useNoteStore } from "@/stores/note";
import { useRoute } from "vue-router";
import EditNoteButton from "@/components/EditNoteButton.vue";
import BackToNotes from "@/components/BackToNotes.vue";

const note = useNoteStore();
const isEditing = ref(false);
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
  <section
    class="relative text-center bg-yellow-100 p-5 rounded m-auto max-w-1/2"
  >
    <div
      class="absolute top-1 right-1 flex gap-3 content-center"
      @click="isEditing = !isEditing"
    >
      <EditNoteButton :note-id="note.postIt._id" />
    </div>
    <form v-if="isEditing" class="bg-yellow-100 p-5 rounded">
      <input type="text" name="title" id="title" v-model="note.postItTitle" />
      <br />
      <textarea
        name="content"
        id="content"
        v-model="note.postItContent"
      ></textarea>
      <br />
      <input @click="note.update" type="button" value="Enregistrer" />
      <!-- <button @click="isEditing = !isEditing" type="button">Annuler</button> -->
    </form>
    <div v-else>
      <div>
        {{ note.postItTitle }}
      </div>
      <div>
        {{ note.postItContent }}
      </div>
    </div>
  </section>
</template>
