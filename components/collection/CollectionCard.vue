<template>
  <div class="flex rounded-xl bg-white p-4">
    <div class="flex flex-row">
      <div><font-awesome-icon :icon="['fas', 'vector-square']" /></div>
      <div>섹터</div>
    </div>
    <div>
      <div>
        <div>총 개수</div>
        <div>38</div>
      </div>
      <div>
        <div>총 데이터</div>
        <div>123,123</div>
      </div>
      <div>
        <div>기간</div>
        <div>2015.03 ~ 2023.09</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
