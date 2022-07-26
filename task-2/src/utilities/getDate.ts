export const getDate = (): string => {
  const addZero = (num: number): string => (num < 10 ? `0${num}` : String(num));

  const d = new Date();

  return `${addZero(d.getDate())}.${addZero(d.getMonth() + 1)}.${d.getFullYear()} ${addZero(
    d.getHours()
  )}:${addZero(d.getMinutes())}`;
};
