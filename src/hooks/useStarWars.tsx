import axios from "axios";
import { useEffect, useState } from "react";

function useStarWars(category: string, setIsLoading: any) {
  const [list, setList] = useState<any>([]);
  const [keyword, setKeyword] = useState<string>('');

  axios.defaults.baseURL = 'https://swapi.dev/api/';

  useEffect(() => {
    setIsLoading(true);
    axios.get(category, { params: { search: keyword } })
    .then(response => {
      setList(response.data.results);
    })
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false));
  }, [keyword]);

  return [list, setKeyword];
}

export default useStarWars;