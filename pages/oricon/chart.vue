<template>
  <UTabs :items="items" @change="onChange" />
  <UTabs :items="items2" @change="onChange2" />
  <p>참고 : 2023-12-04 부터 집계하고 있습니다.</p>
  <div v-if="_computed">
    <Bar
      ref="chartRef"
      id="my-chart-id"
      :options="chartOptions"
      :data="_computed"
      @click="chartClick"
    />
  </div>
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

import { Bar, getDatasetAtEvent } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartOptions = {
  responsive: true,
};

const book = ref<any>({
  data: [],
  error: "",
});

const isLoading = ref(false);

const chartRef = ref(null);

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

const _computed = computed(() => {
  if (!book.value.data) return { labels: [], datasets: [{ data: [] }] };

  const groupedData = book.value.data.reduce((acc: any, post: any) => {
    const 만화책 = `${post.kr} ${post.booknum}`;
    if (acc[만화책]) {
      acc[만화책] += Number(post.sales);
    } else {
      acc[만화책] = Number(post.sales);
    }
    return acc;
  }, {});

  // groupedData를 배열로 변환하고 정렬
  const sortedData = Object.entries(groupedData).sort(
    (a, b) => Number(b[1]) - Number(a[1])
  );

  // 정렬된 배열에서 labels와 data 추출
  const labels = sortedData.map(([label]) => label);
  const data = sortedData.map(([, value]) => Number(value));

  return {
    labels,
    datasets: [{ data }],
  };
});

function chartClick(event: any) {
  if (!chartRef.value) {
    return;
  }

  const {
    value: { chart },
  } = chartRef;

  if (!chart) {
    return;
  }

  datasetAtEvent(getDatasetAtEvent(chart, event));
}

const datasetAtEvent = (dataset: any) => {
  if (!dataset.length) return;

  const datasetIndex = dataset[0].datasetIndex;

  console.log("dataset", dataset);
  console.log("datasetIndex", datasetIndex);
};

// 위 데이터는 차트 데이터

// 아래는 탭

const items = [
  {
    label: "최근 1주일",
  },
  {
    label: "최근 1달",
  },
  {
    label: "최근 3달",
  },
  {
    label: "최근 6달",
  },
  {
    label: "최근 1년",
  },
  {
    label: "최근 3년",
  },
  {
    label: "최근 5년",
  },
  {
    label: "최근 10년",
  },
  {
    label: "전체",
  },
];

const items2 = [
  {
    label: "상위 5개",
  },
  {
    label: "상위 10개",
  },
  {
    label: "상위 30개",
  },
  {
    label: "상위 50개",
  },
  {
    label: "상위 100개",
  },
  {
    label: "전체",
  },
];

function onChange(index: number) {
  const item = items[index];
}

function onChange2(index: number) {
  const item = items2[index];
}
</script>
