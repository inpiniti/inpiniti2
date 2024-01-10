<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://etnyrefdmddqiuatswhb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
);

const book = ref<any>({
  data: [],
  error: "",
});

const isLoading = ref(false);

onMounted(() => {
  select();
});

async function select() {
  isLoading.value = true;
  try {
    book.value = await supabase.from("book").select();
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

async function insert() {
  isLoading.value = true;
  try {
    await supabase.from("book").insert([
      {
        jp: "Alexandre Dumas",
        kr: "Alexandre Dumas",
        sales: "324221",
        rank: "2",
        booknum: "12",
        date: "2023-11-05",
      },
    ]);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
    select();
  }
}
</script>

<template>
  <UButton @click="insert">book insert</UButton>

  <UModal v-model="isLoading">
    <div>로딩중 ...</div>
  </UModal>
  {{ book.data }}
</template>
