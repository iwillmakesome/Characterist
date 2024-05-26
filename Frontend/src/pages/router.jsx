import { createBrowserRouter } from 'react-router-dom';

// pages
import LockPage from './LockPage.jsx';
import MainPage from './MainPage/MainPage.jsx';
import NotFound from './NotFound.jsx';
import ScenePage from './ScenePage/ScenePage.jsx';
import UploadPage from './UploadPage/UploadPage.jsx';
import SearchPage from './SearchPage/SearchPage.jsx';
import CharacterPage from './CharacterPage/CharacterPage.jsx';
import AddCharacterPage from './UploadPage/AddCharacterPage.jsx';
import AddMediaPage from './UploadPage/AddMediaPage.jsx';

import Layout from '@/components/Layouts/Layout.jsx';
import FilePreview from '@/components/FilePreview.jsx';
import WorksPage from '@/pages/MediaPage/MediaPage.jsx';

export const path = {
  main: '/',

  scene: '/scene/:id',
  character: '/character/:name',
  media: '/media/:name',
  search: '/search',

  upload: '/upload',
  addCharacter: '/add_character',
  addMedia: '/add_media',

  file: '/file',

  lock: '/lock',
  notfound: '/*',
};

export const router = createBrowserRouter([
  {
    path: path.main,
    element: <Layout />,
    children: [
      {
        path: path.main,
        element: <MainPage />,
      },
      {
        path: path.scene,
        element: <ScenePage />,
      },
      {
        path: path.character,
        element: <CharacterPage />,
      },
      {
        path: path.media,
        element: <WorksPage />,
      },
      {
        path: path.search,
        element: <SearchPage />,
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
