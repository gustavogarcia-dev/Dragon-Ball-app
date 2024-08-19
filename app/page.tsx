
import { fetchPosts, Character } from './service';
import HomeClient from '../components/HomeClient';

interface Props {
  initialCharacters: Character[];
}

export default async function Page() {
  // Obtener datos en el servidor
  const initialCharacters = await fetchPosts(1);

  //  datos al componente de cliente
  return <HomeClient initialCharacters={initialCharacters} />;
}
