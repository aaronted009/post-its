<script setup>
import { onMounted, ref } from "vue";
import { useNoteStore } from "@/stores/note";
import { useRoute } from "vue-router";
import EditNoteButton from "@/components/EditNoteButton.vue";

const note = useNoteStore();
const isEditing = ref(false);
const route = useRoute();

onMounted(async () => {
  note.noteUrl = note.url + route.params.id;
  await note.getPostIt();
});
</script>
<template>
  <section class="relative">
    <div
      class="absolute top-1 right-1 flex gap-3 content-center"
      @click="isEditing = !isEditing"
    >
      <EditNoteButton :note-id="note.postIt._id" />
    </div>
    <form v-if="isEditing">
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
