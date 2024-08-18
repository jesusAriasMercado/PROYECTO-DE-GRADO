import React, { useState } from 'react';
import menu from '../assets/icons8-menu-32.png';
import github from '../assets/logotipo-de-github.png';
import mas from '../assets/mas.png';
import abajo from '../assets/icons8-clasificar-abajo-30.png';
import punto from '../assets/punto-dentro-de-un-circulo.png';
import juntas from '../assets/icons8-comparar-git-30.png';
import bandeja from '../assets/icons8-bandeja-de-entrada-32.png';
import usuario from '../assets/icons8-usuario-24.png';
import papas from '../assets/icons8-menu-papas-fritas-48.png';
import logo1 from '../assets/githubCopilotIcon.png';
import logo2 from '../assets/githubDesktopIcon.png';
import portada from '../assets/portada.png';
import { storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import Repositorios from '../components/Repositorios';

const Home = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');
  const [repoName, setRepoName] = useState('');
  const [visibility, setVisibility] = useState('private');
  const [folderName, setFolderName] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Verifica si el nombre de la carpeta fue especificado
      const folder = folderName.trim() !== '' ? `${folderName}/` : '';
      const storageRef = ref(storage, `files/${folder}${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setUrl(downloadUrl);
            console.log('Archivo disponible en:', downloadUrl);
          });
        }
      );
    }
  };

  const handleCreateRepository = () => {
    if (repoName.trim() === '') {
      alert('Please enter a repository name.');
      return;
    }

    console.log(`Creating repository: ${repoName} with visibility: ${visibility}`);

    // Lógica para crear el repositorio, por ejemplo, enviando datos a un servidor o API.
  };

  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
  };

  const goToRepositorios = () => {
    navigate('/Repositorios');
  };

  return (
    <div className='text-black'>
      <div className='bg-[#F6F8FA] pt-4 pb-4 flex justify-between'>
        <div className='flex gap-4'>
          <img className='pl-5' src={menu} alt="menu icon" />
          <div className='flex gap-3'>
            <img src={github} alt="github logo" />
            <h1>Dashboard</h1>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <input
            className='border-2 border-[#D0D7DE] bg-[#F6F8FA] rounded-lg w-[300px]'
            type="text"
            placeholder='Type / to search'
          />
          <div className="h-full border-l-2 border-gray-300 mx-2" style={{ width: '3px' }}></div>
          <div className='gap-2 border border-[#D0D7DE] flex rounded-lg w-[60px]'>
            <div className='w-[12px] pt-2 ml-3'>
              <img src={mas} alt="mas icon" />
            </div>
            <div className='w-[12px] pt-2'>
              <img src={abajo} alt="abajo icon" />
            </div>
          </div>
          <div className='border border-[#D0D7DE] flex rounded-lg w-[30px]'>
            <div className='w-[20px] mt-1 ml-1'>
              <img src={punto} alt="punto icon" />
            </div>
          </div>
          <div className='border border-[#D0D7DE] flex rounded-lg w-[30px]'>
            <div className='w-[22px] mt-1 ml-1'>
              <img src={juntas} alt="juntas icon" />
            </div>
          </div>
          <div className='border border-[#D0D7DE] flex rounded-lg w-[30px]'>
            <div className='w-[24px] mt-1'>
              <img src={bandeja} alt="bandeja icon" />
            </div>
          </div>
          <div className='border border-[#D0D7DE] flex rounded-lg w-[35px]'>
            <div className='ml-1'>
              <img src={usuario} alt="usuario icon" />
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-[40px]'>
        <div className='pl-7 pt-[50px]'>
          <h1 className='font-semibold text-sm'>Create your first project</h1>
          <p className='text-sm pt-2'>
            Ready to start building? Create a repository <br />
            for a new idea or bring over an existing <br /> repository
            to keep contributing to it.
          </p>
          <br />
          <div>
            <div className='flex gap-3'>
              <button
                className='bg-[#1F883D] text-white w-[150px] pt-1 pb-1 rounded-md font-semibold text-sm'
                onClick={handleUpload} // Aquí va el manejador de subida
              >
                Create repository
              </button>
              <button className='text-[#0969DA] text-sm'>
                import repository
              </button>
            </div>
          </div>
          <div>
            <input type="file" onChange={handleChange} />
            <br />
            <button onClick={handleUpload}>Subir Archivo</button>
            <div>Progreso: {progress}%</div>
            {url && <div>Archivo subido: <a href={url}>Ver archivo</a></div>}
            <input
              type="text"
              value={repoName}
              onChange={(e) => setRepoName(e.target.value)}
            />
            <button onClick={handleCreateRepository}>Create Repository</button>
          </div>
        </div>

        <div className="h-screen border-l-2 border-gray-300" style={{ width: '1px' }}></div>

        <div className='pt-[20px] flex flex-col flex-grow'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-medium'>Home</h1>
            <div className='flex gap-7'>
              <button className='text-[#0969DA] pt-1'>Send feedback</button>
              <div className='bg-[#F6F8FA] rounded-lg'>
                <button className='flex items-center gap-1 p-1'>
                  <img src={papas} alt="papas icon" />
                  <span className='font-semibold'>Feed</span>
                </button>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap gap-[100px]'>
            <div className='pt-[50px] w-[400px]'>
              <div className='bg-white border border-[#D0D7DE] p-4 rounded-md shadow-md'>
                <h2 className='font-semibold text-sm mb-4'>Create a new repository</h2>
                <div className='mb-4'>
                  <label className='block text-sm font-medium' htmlFor='repositoryName'>Repository name</label>
                  <input
                    className='border border-[#D0D7DE] rounded-md p-2 w-full'
                    type='text'
                    id='repositoryName'
                    placeholder='name your new repository...'
                    value={repoName}
                    onChange={(e) => setRepoName(e.target.value)}
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium'>Visibility</label>
                  <div className='mb-2'>
                    <div className='flex items-center'>
                      <input type='radio' id='public' name='visibility' value='public' className='mr-2'
                        checked={visibility === 'public'}
                        onChange={(e) => setVisibility(e.target.value)}
                      />
                      <label htmlFor='public' className='text-sm font-medium'>Public</label>
                    </div>
                    <p className='text-xs text-[#636C76]'>Anyone on the internet can see this repository</p>
                  </div>
                  <div className=''>
                    <div className='flex items-center'>
                      <input type='radio' id='private' name='visibility' value='private' className='mr-2'
                        checked={visibility === 'private'}
                        onChange={(e) => setVisibility(e.target.value)}
                      />
                      <label htmlFor='private' className='text-sm font-medium'>Private</label>
                    </div>
                    <p className='text-xs text-[#636C76]'>You choose who can see and commit to this repository</p>
                  </div>
                </div>
                <button className='bg-[#1F883D] text-white font-semibold rounded-md px-4 py-2' onClick={handleCreateRepository}>
                  Create a new repository
                </button>
              </div>
            </div>
            <div className='pt-[50px] w-[400px]'>
              <div className='bg-white border border-[#D0D7DE] p-4 rounded-md shadow-md'>
                <h2 className='font-semibold text-sm mb-4'>Introduce yourself with a profile README</h2>
                <p className='mb-4 text-[#636C76] text-sm'>
                  Share information about yourself by creating a profile README, which appears at the top of your profile page.
                </p>
                <div className='bg-[#F6F8FA] border border-[#DEE3E8] p-4 rounded-md'>
                  <div className='mb-4 flex items-center justify-between'>
                    <h3 className='text-sm mb-2'>jesusAriasMercado/README.md</h3>
                    <button className='bg-[#1F883D] text-white font-semibold rounded-md w-[80px]'>
                      Create
                    </button>
                  </div>
                  <div className='border-t border-[#DEE3E8] p-1'>
                    <ul className='list-disc pl-5 text-sm'>
                      <li>🔥 Hi, I'm @jesusAriasMercado</li>
                      <li>👀 I'm interested in ...</li>
                      <li>🌱 I'm currently learning ...</li>
                      <li>💞️ I'm looking to collaborate on ...</li>
                      <li>📫 How to reach me ...</li>
                      <li>😄 Pronouns: ...</li>
                      <li>⚡ Fun fact: ...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-[50px] w-[800px]'>
            <h3 className='text-base mb-4 text-[#636C76]'>Use tools of the trade</h3>
            <div className='flex gap-10'>
              <div className='bg-white border border-[#D0D7DE] p-4 rounded-md shadow-md flex items-center gap-4'>
                <img src={logo1} alt="GitHub Desktop" className='w-[50px]' />
                <div>
                  <h4 className='font-semibold text-sm mb-1'>Simplify your development workflow with a GUI</h4>
                  <p className='text-sm text-[#636C76]'>
                    <a href="https://desktop.github.com/" className='text-[#0969DA] underline'>
                      Install GitHub Desktop
                    </a> to visualize, commit, and push changes without ever touching the command line.
                  </p>
                </div>
              </div>
              <div className='bg-white border border-[#D0D7DE] p-4 rounded-md shadow-md flex items-center gap-4'>
                <img src={logo2} alt="GitHub Copilot" className='w-[50px]' />
                <div>
                  <h4 className='font-semibold text-sm mb-1'>Get AI-based coding suggestions</h4>
                  <p className='text-sm text-[#636C76]'>
                    <a href="https://github.com/features/copilot" className='text-[#0969DA] underline'>
                      Try GitHub Copilot free for 30 days
                    </a>, which suggests entire functions in real time, right from your editor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-[50px] w-[800px]'>
            <h3 className='text-base mb-4 text-[#636C76]'>Get started on GitHub</h3>
            <div className='flex gap-10'>
              <div className='bg-white border border-[#D0D7DE] p-4 rounded-md shadow-md w-[380px]'>
                <a href='https://www.youtube.com/watch?v=pBy1zgt0XPc' target='_blank' rel='noopener noreferrer'>
                  <img src={portada} alt='What is GitHub?' className='rounded-md mb-2 w-full' />
                </a>
                <button className='bg-[#0366D6] text-white font-semibold rounded-md px-4 py-2 w-full'>
                  What is GitHub?
                </button>
              </div>
              <div className='bg-white border border-[#D0D7DE] p-4 rounded-md shadow-md flex flex-col justify-between w-[380px]'>
                <div >
                  <img src={juntas} alt='GitHub flow' />
                </div>
                <div>
                  <h4 className='font-semibold text-sm mb-2'>Follow this exercise to try the GitHub flow</h4>
                  <p className='text-sm text-[#636C76] mb-4'>
                    GitHub's "Hello World" tutorial teaches you essentials, where you create your own repository and learn GitHub's pull request workflow for creating and reviewing code.
                  </p>
                  <button className='bg-[#F6F8FA] text-black text-sm font-semibold rounded-md px-4 py-2'>
                    Try the GitHub flow
                  </button>
                  <div style={{ marginTop: '20px' }}>
                    <button onClick={goToRepositorios}>
                      Ver Repositorios
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
