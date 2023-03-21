import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import initialize from "../firebase/initialize";
import select from "../utils/select";

export interface User {
  id: string;
  email: string | null;
  done?: string[];
}

const app = initialize();
const auth = getAuth(app);
const firestore = getFirestore(app);

export type UserContextType = User | null;

const UserContext = createContext<UserContextType>(null);

const UserProvider = ({ children }: { children?: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const ref = doc(firestore, "users", user.uid);
        const snapshot = await getDoc(ref);
        if (!snapshot.exists()) {
          await setDoc(ref, {
            email: user.email,
            done: [],
          });
        }
        setUser({
          id: user.uid,
          email: user.email,
          done: select<User>(snapshot)?.done || [],
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUserContext = (): UserContextType => useContext(UserContext);

export default UserProvider;
