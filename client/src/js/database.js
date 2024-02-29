import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  if (typeof actualImplementation === 'function') {
    const db = await initdb();
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.add({ content });
  await tx.done;
  console.log('Content added to IndexedDB');
} else {
console.error('putDb not implemented');
}
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  if (typeof getDbImplementation === 'function') {
    const db = await initdb();
    const tx = db.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const content = await store.getAll();
    await tx.done;
    console.log('Content retrieved from IndexedDB');
    return content;
  } else {
    console.error('getDb not implemented');
}
}




initdb();
