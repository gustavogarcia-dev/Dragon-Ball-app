'use client'; // Marca este archivo como componente de cliente

import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchPosts, Character } from '../app/service';
import Card from '@/components/Card';
import Nav from '@/components/Nav';

interface Props {
  initialCharacters: Character[];
}

export default function HomeClient({ initialCharacters }: Props) {
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);
  const [page, setPage] = useState(2); // Comienza en la página 2 ya que la 1 está cargada
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    const newCharacters = await fetchPosts(page);
    if (newCharacters.length === 0) {
      setHasMore(false);
    } else {
      setCharacters((prev) => {
        const existingIds = new Set(prev.map(c => c.id)); // IDs existentes
        const filteredNewCharacters = newCharacters.filter(c => !existingIds.has(c.id));
        return [...prev, ...filteredNewCharacters];
      });
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <main>
      <Nav />
      <InfiniteScroll
        dataLength={characters.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h3 className="text-white text-center">Loading...</h3>}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        refreshFunction={() => {
          setPage(1);
          setCharacters([]);
          fetchData();
        }}
      >
        <div className="flex flex-wrap justify-center my-24 gap-6">
          {characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              description={character.description}
              ki={character.ki}
              affiliation={character.affiliation}
              race={character.race}
              gender={character.gender}
              maxKi={character.maxKi}
            />
          ))}
        </div>
      </InfiniteScroll>
    </main>
  );
}