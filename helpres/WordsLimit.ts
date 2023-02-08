export const WordsLimit = (str: string, limit: number) => {
  return str.split(" ").splice(0, limit).join(" ");
};
