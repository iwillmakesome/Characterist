import Loading from '@/components/Loading/Loading.jsx';

export default function loadingCheck(data, components) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <Loading />;
  } else {
    return components;
  }
}
