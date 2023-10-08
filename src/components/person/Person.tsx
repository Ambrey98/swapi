import { useParams } from "react-router-dom";

function Person(props: any) {
  const { id } = useParams();
  const currentPerson = props.people[Number(id) - 1];

  return (
    <>
      <h3><b>Name</b>: {currentPerson.name}</h3>
      <p><b>Height</b>: {currentPerson.height}</p>
      <p><b>Gender</b>: {currentPerson.gender}</p>
    </>
  )
}

export default Person;