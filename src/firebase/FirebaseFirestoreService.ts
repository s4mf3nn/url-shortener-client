import firebase from "./FirebaseConfig";

const firestore = firebase.firestore();
const auth = firebase.auth();

const createDocument = (collection: string, document: any) => {
  const userId = auth.currentUser?.uid || null;
  return firestore.collection(collection).add({ ...document, userId });
};

const getListOfDocuments = async (collection: string) => {
  const userId = auth.currentUser?.uid;
  return firestore.collection(collection).where("userId", "==", userId).orderBy("createdAt", "desc").get();
};

const FirebaseFirestoreService = {
  createDocument,
  getListOfDocuments
};

export default FirebaseFirestoreService;