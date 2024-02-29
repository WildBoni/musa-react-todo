import FilterButton from "./FilterButton";

export default function FilterButtonContainer({setFilter}) {
  function handleChange(event) {
    // setFilter arriva come prop: è la funzione per impostare un filtro
    // Quindi la chiamo passando il testo che ha scritto l'utente nell'input
    setFilter(event.target.value)
  }
  return (
    <div>
      <span>Filtra: </span>
      <input type="text" onChange={(event) => handleChange(event)} />      
    </div>
  )
}