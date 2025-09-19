<script setup>
import { onMounted, ref } from "vue";

let postits = ref();

const url = "https://post-it.epi-bluelock.bj/notes";

const getAllPostIts = async () => {
  try {
    const response = await fetch(url);
    const results = await response.json();
    if ("notes" in results) {
      return results["notes"];
    }
  } catch (error) {
    console.error(error.message);
  }
};

const deletePostIt = async (id) => {
  console.log(id);
  try {
    let deleteUrl = url + "/" + id;
    const response = await fetch(deleteUrl, {
      method: "DELETE",
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.error(error.message);
  } finally {
    postits.value = await getAllPostIts();
    window.location.reload();
  }
};

onMounted(async () => {
  postits.value = await getAllPostIts();
});
</script>

<template>
  <RouterLink :to="{ name: 'create-note' }">Create a post-it</RouterLink>
  <div v-for="postit in postits">
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
      <button @click="deletePostIt(postit._id)">Delete</button>
    </ul>
  </div>
</template>
