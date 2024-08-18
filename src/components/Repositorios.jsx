import React, { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebaseConfig';  // Asegúrate de que esta sea la ruta correcta a tu configuración de Firebase

const Repositorios = () => {
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [currentFolder, setCurrentFolder] = useState('');

  useEffect(() => {
    const fetchFolders = async () => {
      const foldersRef = ref(storage, 'files/');
      const folderList = await listAll(foldersRef);
      setFolders(folderList.prefixes);  // `prefixes` contiene las subcarpetas
    };

    fetchFolders();
  }, []);

  const handleFolderClick = async (folderName) => {
    setCurrentFolder(folderName);
    const folderRef = ref(storage, `files/${folderName}/`);
    const fileList = await listAll(folderRef);
    
    const filesUrls = await Promise.all(
      fileList.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return { name: item.name, url };
      })
    );

    setFiles(filesUrls);
  };

  return (
    <div>
      <h2>Repositorios</h2>
      <div>
        <h3>Carpetas</h3>
        <ul>
          {folders.map((folder) => (
            <li key={folder.name}>
              <button onClick={() => handleFolderClick(folder.name)}>
                {folder.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {currentFolder && (
        <div>
          <h3>Archivos en {currentFolder}</h3>
          <ul>
            {files.map((file) => (
              <li key={file.name}>
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Repositorios;
