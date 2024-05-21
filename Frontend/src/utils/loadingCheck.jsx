import Loading from '@/components/Loading/Loading.jsx';

export default function loadingCheck(data, components) {
  if (data === undefined || !Array.isArray(data)) return <Loading />;
  else return components;
}
