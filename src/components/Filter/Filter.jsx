<<<<<<< HEAD
export default function Filter({filter}) {
  const filterValues = Object.keys(filter)
  for (const key in filter){
    console.log(key)
  }
  return (
    <aside className="filter">
        {filterValues.map(filterName => (
        <select className="filter-select"name={filterName}>
            <option value={filterName}>{filterName}</option>
        </select>
        ))}
    </aside>
=======
export default function Filter({ filter }) {
  // {
  //   for (const key in filter) {
  //     // console.log(key)
  //     console.log(filter.key)
  //     console.log(filter.type)

  //   }
  // }

  return (
    <aside className="filter">
      <select className="filter-select" >
        {filter.type.map(filterName => (
          < option value={filterName} > {filterName}</option>))}
      </select>
      <select className="filter-select" >
        {filter.breed.map(filterName => (
          < option value={filterName} > {filterName}</option>))}
      </select>
      <select className="filter-select" >
        {filter.age.map(filterName => (
          < option value={filterName} > {filterName}</option>))}
      </select>
      <select className="filter-select" >
        {filter.gender.map(filterName => (
          < option value={filterName} > {filterName}</option>))}
      </select>
    </aside >
>>>>>>> main
  )
}

