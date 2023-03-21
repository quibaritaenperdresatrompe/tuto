export default function remove(data: string[] = [], value: string) {
  return [...new Set(data.filter((item) => item !== value))];
}
