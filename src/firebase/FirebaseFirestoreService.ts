import firebase from "./FirebaseConfig";

const firestore = firebase.firestore();

const createDocument = (collection: any, document: any) => {
  return firestore.collection(collection).add(document);
};

const readDocument = (collection: string, id: string) => {
  return firestore.collection(collection).doc(id).get();
};

const readDocuments = async ({ collection, queries, orderByField, orderByDirection, perPage, cursorId }: { collection: string, queries: any, orderByField: any, orderByDirection: any, perPage: any, cursorId: any; }) => {
  let collectionRef: any = firestore.collection(collection);

  if (queries && queries.length > 0) {
    for (const query of queries) {
      collectionRef = collectionRef.where(
        query.field,
        query.condition,
        query.value
      );
    }
  }

  if (orderByField && orderByDirection) {
    collectionRef = collectionRef.orderBy(orderByField, orderByDirection);
  }

  if (perPage) {
    collectionRef = collectionRef.limit(perPage);
  }

  if (cursorId) {
    const document = await readDocument(collection, cursorId);
    collectionRef = collectionRef.startAfter(document);
  }

  return collectionRef.get();
};

const updateDocument = (collection: string, id: string, document: any) => {
  return firestore.collection(collection).doc(id).update(document);
};

const deleteDocument = (collection: string, id: string) => {
  return firestore.collection(collection).doc(id).delete();
};

const FirebaseFirestoreService = {
  createDocument,
  readDocuments,
  updateDocument,
  deleteDocument
};

export default FirebaseFirestoreService;