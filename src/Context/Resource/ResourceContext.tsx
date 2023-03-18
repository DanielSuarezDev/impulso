// src/Context/Resource/ResourceContext.tsx

import React, { createContext, useState, useEffect } from "react";
import { db, storage } from "../../Config/firebase";
import { collection, getDocs, addDoc, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export interface Resource {
  id: string;
  title: string;
  tag: string;
  description: string;
  imageURL: string;
  googleDriveLink: string;
}

export interface ResourceContextType {
  resources: Resource[];
  addResource: (
    title: string,
    tag: string,
    description: string,
    imageURL: string,
    googleDriveLink: string
  ) => Promise<void>;
  getResources: () => Promise<Resource[]>;
  getResource: (id: string) => Promise<Resource | null>;
}

export const ResourceContext = createContext<ResourceContextType>(
  {} as ResourceContextType
);

const ResourceProvider: React.FC<any> = ({ children }) => {
  const [resources, setResources] = useState<Resource[]>([]);

  const uploadImage = async (imageFile: File): Promise<string> => {
    const storageInstance = getStorage();
    const imageRef = ref(storageInstance, `imagesResource/${imageFile.name}`);
    await uploadBytes(imageRef, imageFile);
    const imageURL = await getDownloadURL(imageRef);
    return imageURL;
  };

  const getResources = async () => {
    const resourcesCollection = collection(db, "resources");
    const postSnapshot = await getDocs(resourcesCollection);
    const resourcesData = postSnapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    })) as Resource[];
    setResources(resourcesData);
    return resourcesData;
  };

  useEffect(() => {
    getResources();
  }, []);

  const getResource = async (id: string) => {
    const resourceDocRef = doc(db, "resources", id);
    const resourceDoc = await getDoc(resourceDocRef);

    if (resourceDoc.exists()) {
      const resourceData = {
        id: resourceDoc.id,
        ...resourceDoc.data(),
      } as Resource;
      return resourceData;
    }
    return null;
  };

  const addResource = async (
    title: string,
    tag: string,
    description: string,
    imageFile: any,
    googleDriveLink: string
  ) => {
    const imageURL = await uploadImage(imageFile);
    const postCollection = collection(db, "resources");
    await addDoc(postCollection, {
      title,
      tag,
      description,
      imageURL,
      googleDriveLink,
    });
    getResources();
  };

  return (
    <ResourceContext.Provider
      value={{ resources, addResource, getResources, getResource }}
    >
      {children}
    </ResourceContext.Provider>
  );
};

export { ResourceProvider };
