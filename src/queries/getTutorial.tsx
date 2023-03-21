import { doc, getDoc, getFirestore } from "firebase/firestore";

import { Tutorial } from "../types/tutorial";
import getCurrentUser from "./getCurrentUser";
import initialize from "../firebase/initialize";
import select from "../utils/select";

const app = initialize();
const firestore = getFirestore(app);

export default async function getTutorial(id: string) {
  const snapshot = await getDoc(doc(firestore, "tutorials", id));
  const currentUser = await getCurrentUser();
  const tutorial = {
    ...select<Tutorial>(snapshot),
    done: Boolean(currentUser?.done?.includes(id)),
  };
  return tutorial;
}
