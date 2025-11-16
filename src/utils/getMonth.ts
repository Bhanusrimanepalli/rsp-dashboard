export function getMonth(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleString("en", { month: "short" });
}
