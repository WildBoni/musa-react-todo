import FilterButton from "./FilterButton";

export default function FilterButtonContainer({setFilter}) {
  function handleChange(event) {
    setFilter(event.target.value)
  }
  return (
    <div>
      <span>Filtra: </span>
      <input type="text" onChange={(event) => handleChange(event)} />      
      {/* <FilterButton text={'Tutti'} />
      <FilterButton text={'Rimasti'} />
      <FilterButton text={'Completati'} /> */}
    </div>
  )
}