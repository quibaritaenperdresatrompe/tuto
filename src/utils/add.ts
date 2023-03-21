export default function add(data: string[] = [], value: string) {
  return [...new Set([...data, value])];
}
