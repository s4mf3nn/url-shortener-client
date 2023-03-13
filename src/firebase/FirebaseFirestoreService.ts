import firebase from "./FirebaseConfig";

const firestore = firebase.firestore();
const auth = firebase.auth();

const createDocument = (collection: string, document: any) => {
  const userId = auth.currentUser?.uid || null;
  firestore.collection(collection).add({ ...document, userId });
  incrementStat('totalLinks');
};

const incrementStat = (type: 'totalLinks' | 'totalViews') => {
  const collectionRef = firestore.collection('statistics').doc(type);
  collectionRef.update(type, firebase.firestore.FieldValue.increment(1));
};

const getListOfDocuments = async (collection: string) => {
  const userId = auth.currentUser?.uid;
  return firestore.collection(collection).where("userId", "==", userId).orderBy("createdAt", "desc").get();
};

const readDocuments = async (collection: string) => {
  return firestore.collection(collection).get();
};

const FirebaseFirestoreService = {
  createDocument,
  getListOfDocuments,
  readDocuments
};

export default FirebaseFirestoreService;