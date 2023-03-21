import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { User } from "../providers/UserProvider";
import initialize from "../firebase/initialize";
import select from "../utils/select";

const app = initialize();
const firestore = getFirestore(app);
const auth = getAuth(app);

export default async function getCurrentUser() {
  if (auth.currentUser) {
    const snapshot = await getDoc(
      doc(firestore, "users", auth.currentUser.uid)
    );
    const user = select<User>(snapshot);
    return user;
  }
  return null;
}
