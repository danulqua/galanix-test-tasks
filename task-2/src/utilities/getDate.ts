export const getDate = (): string => {
  // Transform '1-9' to '01-09'
  const addZero = (num: number): string => (num < 10 ? `0${num}` : String(num));

  const d = new Date();

  return `${addZero(d.getDate())}.${addZero(d.getMonth() + 1)}.${d.getFullYear()} ${addZero(
    d.getHours()
  )}:${addZero(d.getMinutes())}`;
};
