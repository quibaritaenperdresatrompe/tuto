import { DocumentSnapshot } from "firebase/firestore";

export type Record<T> = T & { id: string };

export default function select<T>(
  snapshot: Pick<DocumentSnapshot, "id" | "exists" | "data">
): Record<T> | null {
  if (!snapshot.exists()) {
    return null;
  }
  const data = snapshot.data() as T;
  return { id: snapshot.id, ...data };
}
