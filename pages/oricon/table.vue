<template>
  <div>
    <div v-if="!book.data">Loading ...</div>
    <div v-else>
      <UTable
        sort-asc-icon="i-heroicons-arrow-up-20-solid"
        sort-desc-icon="i-heroicons-arrow-down-20-solid"
        :sort-button="{
          icon: 'i-heroicons-sparkles-20-solid',
          color: 'primary',
          variant: 'outline',
          size: '2xs',
          square: false,
        }"
        class="w-full"
        :columns="[
          { key: 'id', label: 'ID' },
          { key: 'jp', label: 'Jp', sortable: true },
          { key: 'kr', label: 'Kr', sortable: true },
          { key: 'booknum', label: 'Booknum', sortable: true },
          { key: 'name', label: 'Name', sortable: true },

          { key: 'sales', label: 'Sales', sortable: true },
          { key: 'rank', label: 'Rank' },
          { key: 'date', label: 'Date' },
        ]"
        :rows="book.data"
        @select="rowSelect"
      />
    </div>
  </div>
  <UModal v-model="isOpen">
    <div class="flex gap-4 p-4 flex-row">
      <UFormGroup label="Jp" name="jp">
        <UInput v-model="selected.jp" disabled />
      </UFormGroup>

      <UFormGroup label="Kr" name="kr">
        <UInput v-model="selected.kr" />
      </UFormGroup>

      <UButton @click="update" :leading="isLoading"> kr 수정 </UButton>
    </div>
  </UModal>
</template>
<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://etnyrefdmddqiuatswhb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
);

definePageMeta({
  layout: "empty",
});

const book = ref<any>({
  data: [],
  error: "",
});

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

const isLoading = ref(false);
const selected = ref();
const isOpen = ref(false);

function rowSelect(row: any) {
  isOpen.value = true;
  selected.value = row;
}

async function update() {
  isLoading.value = true;

  await supabase
    .from("book")
    .update({ kr: selected.value.kr })
    .eq("jp", selected.value.jp);

  isOpen.value = false;
  isLoading.value = false;

  select();
}
</script>
