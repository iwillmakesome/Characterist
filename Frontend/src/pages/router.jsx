import { createBrowserRouter } from 'react-router-dom';

// pages
import LockPage from './LockPage.jsx';
import MainPage from './MainPage/MainPage.jsx';
import NotFound from './NotFound.jsx';
import ScenePage from './ScenePage/ScenePage.jsx';
import UploadPage from './UploadPage/UploadPage.jsx';
import ListPage from './ListPage/ListPage.jsx';
import CharacterPage from './CharacterPage/CharacterPage.jsx';
import AddCharacterPage from './UploadPage/AddCharacterPage.jsx';
import AddMediaPage from './UploadPage/AddMediaPage.jsx';

import Layout from '@/components/Layouts/Layout.jsx';
import FilePreview from '@/components/FilePreview.jsx';
import WorksPage from '@/pages/WorksPage/WorksPage.jsx';

export const path = {
  root: '/',
  lock: '/lock',
  scene: '/scene/*',

  list: '/list',
  character: '/character/*',
  media: '/media/*',

  upload: '/upload',
  addCharacter: '/add_character',
  addMedia: '/add_media',

  file: '/file',
  notfound: '/*',
};

export const router = createBrowserRouter([
  {
    path: path.root,
    element: <Layout />,
    children: [
      {
        path: path.root,
        element: <MainPage />,
      },
      {
        path: path.scene,
        element: <ScenePage />,
      },
      {
        path: path.upload,
        element: <UploadPage />,
      },
      {
        path: path.addCharacter,
        element: <AddCharacterPage />,
      },
      {
        path: path.addMedia,
        element: <AddMediaPage />,
      },
      {
        path: path.list,
        element: <ListPage />,
      },
      {
        path: path.character,
        element: <CharacterPage />,
      },
      {
        path: path.works,
        element: <WorksPage />,
      },

      {
        path: path.notfound,
        element: <NotFound />,
      },
    ],
  },
  {
    path: path.file,
    element: <FilePreview />,
  },
  {
    path: path.lock,
    element: <LockPage />,
  },
]);
