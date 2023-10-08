import { useFav } from "context/FavContext";
import { useParams } from "react-router-dom";

function Film (props: any) {

  const { id } = useParams();
  const currentFilm = props.films[Number(id) - 1];
  const [fav, updateFav] = useFav();

  const clicked = (ev: any) => {
    updateFav('films', Number(id), currentFilm);
  };

  return (
    <>
      <h3>Title: {currentFilm.title}</h3>
      <p><b>Director</b>: {currentFilm.director}</p>
      <p><b>Episode id</b>: {currentFilm.episode_id}</p>
      <p>Your current favorite film's id is: {fav['id']} </p>
      <button onClick={clicked}>Set as favorite</button>
    </>
  )
}

export default Film;