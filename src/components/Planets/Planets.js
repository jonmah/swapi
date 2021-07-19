import { usePlanets } from "@hooks"

const Planets = () => {
  const { data, isError, isFetching } = usePlanets()

  console.log(data)
  console.log(isError)
  console.log(isFetching)
  return (
    <div>
      <h2>Planets</h2>
      {isFetching ? (
        <div>Loading</div>
      ) : isError ? (
        <div>Error fetching data</div>
      ) : (
        <div>Finished</div>
      )}
    </div>
  )
}

export default Planets
