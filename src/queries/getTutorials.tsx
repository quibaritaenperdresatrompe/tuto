import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
} from "firebase/firestore";

import { Tutorial } from "../types/tutorial";
import getCurrentUser from "./getCurrentUser";
import initialize from "../firebase/initialize";
import select from "../utils/select";

const app = initialize();
const firestore = getFirestore(app);

export default async function getTutorials(max = Infinity) {
  const snapshot = await getDocs(
    query(
      collection(firestore, "tutorials"),
      orderBy("publishedAt", "desc"),
      limit(max)
    )
  );
  const currentUser = await getCurrentUser();
  const tutorials = snapshot.docs.map((tutorial) => ({
    ...select<Tutorial>(tutorial),
    done: Boolean(currentUser?.done?.includes(tutorial.id)),
  }));
  return tutorials;
}
