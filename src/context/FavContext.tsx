import useLocalStorage from "hooks/useLocalStorage";
import { createContext, useContext } from "react";
import { IShape } from "types/ContextTypes";

const FavContext = createContext<IShape | any>([]); // now we have a context object

function FavProvider(props: any) {
  // Create the provider and its functionality
  const shape: IShape = {
    type: '', // films, planets, people
    id: 0, // id of film or planet or person
    data: {} // the actual data object
  };
  // const [fav, setFav] = useState<IShape>(shape);
  const [fav, setFav] = useLocalStorage('myFav', shape);

  function updateFav(type: string, id: number, data: any) {
    setFav({
      type,
      id,
      data
    });
  };

  return (
    <FavContext.Provider value={[fav, updateFav]} {...props} />
  )
}

function useFav() {
  // for pages that want to access the context object's value (in this case fav and updateFav)
  // useFav is our custom hook
  const context = useContext(FavContext);
  if (!context) throw new Error('Not inside the Provider');
  return context; // [fav, updateFav]
}

export { useFav, FavProvider };