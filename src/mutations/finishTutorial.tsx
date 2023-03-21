import { doc, getFirestore, updateDoc } from "firebase/firestore";

import getCurrentUser from "../queries/getCurrentUser";
import initialize from "../firebase/initialize";
import add from "../utils/add";

const app = initialize();
const firestore = getFirestore(app);

export default async function finishTutorial(id: string) {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    await updateDoc(doc(firestore, "users", currentUser.id), {
      done: add(currentUser.done, id),
    });
  }
}
