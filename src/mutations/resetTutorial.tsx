import { doc, getFirestore, updateDoc } from "firebase/firestore";

import getCurrentUser from "../queries/getCurrentUser";
import initialize from "../firebase/initialize";
import remove from "../utils/remove";

const app = initialize();
const firestore = getFirestore(app);

export default async function resetTutorial(id: string) {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    await updateDoc(doc(firestore, "users", currentUser.id), {
      done: remove(currentUser.done, id),
    });
  }
}
