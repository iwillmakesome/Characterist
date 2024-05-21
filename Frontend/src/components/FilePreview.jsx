import { useSearchParams } from 'react-router-dom';

export default function FilePreview() {
  const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
  const [searchParams] = useSearchParams();
  const queryType = searchParams.get('type');
  const queryLocation = searchParams.get('location');

  return (
    <>
      {queryType === 'image' ? (
        <img src={`${BACKEND_HOST}/files?location=${queryLocation}`} />
      ) : (
        <video controls>
          <source
            src={`${BACKEND_HOST}/files?location=${queryLocation}`}
            type={'video/mp4'}
          />
        </video>
      )}
    </>
  );
}
