import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
} from "firebase/firestore";

import { Tutorial } from "../types/tutorial";
import initialize from "../firebase/initialize";

const app = initialize();
const firestore = getFirestore(app);

async function updateTutorial() {
  try {
  } catch (error) {}
}

export default updateTutorial;
