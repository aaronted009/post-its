<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
let postItTitle = ref(null);
let postItContent = ref(null);
const route = useRoute();

console.log(route.params.id);

let postIt = ref({});

const url = "https://post-it.epi-bluelock.bj/notes/" + route.params.id;

const getPostIt = async () => {
  try {
    const response = await fetch(url);
    const results = await response.json();
    return results;
  } catch (error) {
    console.error(error.message);
  }
};

const update = async () => {
  let data = {
    title: postItTitle.value,
    content: [postItContent.value],
  };

  let fetchData = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
  };

  try {
    const response = await fetch(url, fetchData);
    const results = await response.json();
    return results;
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(async () => {
  postIt.value = await getPostIt();
  postItTitle.value = postIt.value.title;
  postItContent.value = postIt.value.content[0];
});
</script>
<template>
  <form>
    <input type="text" name="title" id="title" v-model="postItTitle" />
    <br />
    <textarea name="content" id="content" v-model="postItContent"></textarea>
    <br />
    <input @click="update" type="button" value="Enregistrer" />
  </form>
</template>
