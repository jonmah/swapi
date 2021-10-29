import { usePlanets } from "@hooks"

const Planets = () => {
  const { data, isError, isFetching } = usePlanets()

  return (
    <div>
      <h2>Planets</h2>
      {isFetching ? (
        <div>Loading</div>
      ) : isError ? (
        <div>Error fetching data</div>
      ) : (
        <div>
          {data.results.map(({ name, url }) => (
            <div key={url}>{name}</div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Planets
