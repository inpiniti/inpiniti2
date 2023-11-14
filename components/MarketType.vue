<template>
  <ButtonList
    title="MarketType"
    :list="['KOSPI', 'KOSDAQ']"
    :selected="marketType"
    @click="onClick"
  />
</template>
<script setup lang="ts">
const { getFinancials } = useFinancial();

const marketType = useState<"KOSPI" | "KOSDAQ" | undefined>("marketType");

const onClick = (market_type: "KOSPI" | "KOSDAQ" | undefined) => {
  marketType.value = market_type;
  getFinancials();
};
</script>
