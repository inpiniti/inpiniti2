export const useSearch = () => {
  const yyyy_mm = useState<string>("yyyy_mm", () => "2023.01");
  const search_word = useState<string>("search_word", () => "");

  return {
    yyyy_mm,
    search_word,
  };
};
