import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("note", () => {
  const postits = ref([]);
  const url = "https://post-it.epi-bluelock.bj/notes/";
  const postIt = ref();
  const postItTitle = ref("");
  const postItContent = ref("");
  let noteUrl = ref();

  //   CRUD methods for Note (Post-it) management
  //   ---------------------------------------------
  //   Retrieve all notes
  async function getAllPostIts() {
    try {
      const response = await fetch(url);
      const results = await response.json();
      if ("notes" in results) {
        postits.value = results["notes"];
        return results["notes"];
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  //   Create a note
  async function create() {
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
  }

  //   Retrieve a note
  async function getPostIt() {
    try {
      const response = await fetch(noteUrl.value);
      const results = await response.json();
      postIt.value = results;
      postItTitle.value = postIt.value.title;
      postItContent.value = postIt.value.content[0];
      return results;
    } catch (error) {
      console.error(error.message);
    }
  }

  //   Update retrieved note
  async function update() {
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
      const response = await fetch(noteUrl.value, fetchData);
      const results = await response.json();
      return results;
    } catch (error) {
      console.error(error.message);
    }
  }

  //   Delete retrieved note
  async function deletePostIt(id) {
    try {
      noteUrl.value = url + id;
      const response = await fetch(noteUrl.value, {
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
  }
  //   ---------------------------------------------
  //   🔼 Notes CRUD methods.

  return {
    url,
    noteUrl,
    postits,
    getAllPostIts,
    postItTitle,
    postItContent,
    create,
    getPostIt,
    update,
    deletePostIt,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNoteStore, import.meta.hot));
}
