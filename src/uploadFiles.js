// src/uploadFiles.js
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

const uploadFiles = async (files) => {
  const promises = [];

  for (const file of files) {
    const storageRef = ref(storage, `repositories/${file.name}`);
    promises.push(uploadBytes(storageRef, file));
  }

  try {
    await Promise.all(promises);
    alert("Files uploaded successfully!");
  } catch (error) {
    console.error("Error uploading files: ", error);
    alert("Error uploading files.");
  }
};

export default uploadFiles;
