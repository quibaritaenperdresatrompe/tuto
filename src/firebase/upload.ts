import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

async function upload(file: Blob) {
  try {
    const storage = getStorage();
    const storageRef = ref(storage, file.name);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch (error) {
    return "";
  }
}

export default upload;
