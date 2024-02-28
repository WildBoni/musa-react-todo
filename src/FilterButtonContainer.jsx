import FilterButton from "./FilterButton";

export default function FilterButtonContainer() {
  return (
    <div>
      <span>Filtra: </span>
      <FilterButton text={'Tutti'} />
      <FilterButton text={'Rimasti'} />
      <FilterButton text={'Completati'} />
    </div>
  )
}