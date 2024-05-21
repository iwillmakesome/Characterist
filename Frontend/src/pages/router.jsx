import { createBrowserRouter } from 'react-router-dom';

import LockPage from './LockPage.jsx';
import MainPage from './MainPage/MainPage.jsx';
import NotFound from './NotFound.jsx';
import ScenePage from './ScenePage/ScenePage.jsx';
import UploadPage from './UploadPage/UploadPage.jsx';
import ListPage from './ListPage/ListPage.jsx';
import CharacterPage from './CharacterPage/CharacterPage.jsx';

import Layout from '@/components/Layouts/Layout.jsx';
import FilePreview from '@/components/FilePreview.jsx';
import WorksPage from '@/pages/WorksPage/WorksPage.jsx';

export const path = {
  root: '/',
  lock: '/lock',
  scene: '/scene/*',
  upload: '/upload',
  list: '/list',
  file: '/file',
  character: '/character',
  works: '/works',

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

      // extra
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
