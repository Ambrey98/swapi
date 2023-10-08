import Film from "components/film/Film";
import Person from "components/person/Person";
import Planet from "components/planet/Planet";
import SearchBar from "components/searchBar/SearchBar";
import useStarWars from "hooks/useStarWars";
import Films from "pages/films/Films";
import People from "pages/people/People";
import Planets from "pages/planets/Planets";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function Main() {
  const location = useLocation();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [films, setFilms] = useStarWars('films', setIsLoading);
  const [people, setPeople] = useStarWars('people', setIsLoading);
  const [planets, setPlanets] = useStarWars('planets', setIsLoading);
  const [keyword, setKeyword] = useState<string>('');
  const [page, setPage] = useState<string>(location.pathname);

  function fetchDatas() {
    try {
      if (location.pathname.indexOf('/films') > -1) {
        setFilms(keyword);
      }
      if (location.pathname.indexOf('/people') > -1) {
        setPeople(keyword); 
      }
      if (location.pathname.indexOf('/planets') > -1) {
        setPlanets(keyword); 
      }
    } catch (error) {
      console.log(error);
      throw new Error('Ann error occured while fetching');
    }
  };

  const saveSearch = (currValue: string) => {
    setKeyword(currValue);
  }

  useEffect(() => {
    fetchDatas();
  }, [page, keyword, setFilms, setPeople, setPlanets]);

  useEffect(() => {
    const currentPage = location.pathname.split('/')[1];
    const previousPage = page.split('/')[1];

    if (previousPage !== currentPage) {
      setPage(location.pathname);
      setKeyword('');
    };

  }, [location.pathname]);

  return (
    <>
      <SearchBar saveSearch={saveSearch} keyword={keyword} />
      { isLoading && <h3>Loading...</h3> }
      { location.pathname.split('/')[1] === 'films' && !isLoading && 
        <>
          <Films films={films} />
          <hr />
          { id && <Film films={films} />}
        </>
      }
      { location.pathname.split('/')[1] === 'people' && !isLoading &&
        <>
          <People people={people} />
          <hr />
          {id && <Person people={people} />}
        </>
       }
      { location.pathname.split('/')[1] === 'planets' && !isLoading &&
        <>
          <Planets planets={planets} />
          <hr />
          {id && <Planet planets={planets} />}
        </>
      }
    </>
  )
}

export default Main;