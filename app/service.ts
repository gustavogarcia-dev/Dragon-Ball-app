export type Character = {
    id: number;
    name: string;
    ki: string;
    race:string;
    gender:string;
    description:string;
    image:string;
    affiliation:string;
    maxKi:string;

  };
  
  
  // obtener los datos de la API
  export async function fetchPosts(page: number = 1): Promise<Character[]> {
    const res = await fetch(`https://dragonball-api.com/api/characters?page=${page}`, {
      // datos más recientes 
        cache: 'no-store', 
    });
  
    if (!res.ok) {
      throw Error('Failed to fetch data');
    }
  
    const data = await res.json();
    
    if (Array.isArray(data)) {
      return data; 
    }

    return data.items || []; 
    
  }
  