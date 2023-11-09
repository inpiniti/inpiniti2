import { useWindowScroll, useWindowSize, useTimeoutFn } from "@vueuse/core";

const config = {
  timeoutInMs: 3000,
  contentScrollThresholdInPercentage: 300,
};

export const usePolitePopup = () => {
  const visible = useState("visible", () => false);
  const readTimeElapsed = useState("read-time-elapsed", () => false);

  const { start } = useTimeoutFn(
    () => {
      readTimeElapsed.value = true;
    },
    config.timeoutInMs,
    { immediate: false }
  );
  const { y: scrollYInPx } = useWindowScroll();
  const { height: windowHeight } = useWindowSize();

  // Returns percentage scrolled (ie: 80 or NaN if trackLength == 0)
  const amountScrolledInPercentage = computed(() => {
    const documentScrollHeight = document.documentElement.scrollHeight;
    const trackLength = documentScrollHeight - windowHeight.value;
    const percentageScrolled = Math.floor(
      (scrollYInPx.value / trackLength) * 100
    );
    return percentageScrolled;
  });

  const scrolledContent = computed(
    () =>
      amountScrolledInPercentage.value >=
      config.contentScrollThresholdInPercentage
  );

  const trigger = () => {
    readTimeElapsed.value = false;
    start();
  };

  const setClosed = () => {
    visible.value = false;
  };

  watch(
    [readTimeElapsed, scrolledContent],
    ([newReadTimeElapsed, newScrolledContent]) => {
      if (newReadTimeElapsed && newScrolledContent) {
        visible.value = true;
      }
    }
  );

  return {
    visible,
    trigger,
    setClosed,
  };
};
