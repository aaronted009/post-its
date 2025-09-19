<script setup>
import { ref, onMounted } from "vue";
const postItTitle = ref(null);
const postItContent = ref(null);
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

const create = async () => {
  let data = {
    title: postItTitle.value,
    content: [postItContent.value],
  };
  let fetchData = {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
  };

  try {
    const response = await fetch(url, fetchData);
    const results = await response.json();
    // empty fields after submission
    postItTitle.value = "";
    postItContent.value = "";
    return results;
  } catch (error) {
    console.error(error.message);
  } finally {
    postits.value = await getAllPostIts(); // Get all post-its with the most recent added
  }
};

onMounted(async () => {
  postits.value = (await getAllPostIts()) || [];
});
</script>

<template>
  <form>
    <input type="text" name="title" id="" v-model="postItTitle" />
    <br />
    <textarea name="content" id="" v-model="postItContent"></textarea>
    <br />
    <input @click="create" type="button" value="Créer" />
  </form>
</template>
