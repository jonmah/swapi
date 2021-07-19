import { usePlanets } from "@hooks"

const Planets = () => {
  const { data, isError, isFetching } = usePlanets()

  console.log(data)
  console.log(isError)
  console.log(isFetching)
  return (
    <div>
      <h2>Planets</h2>
    </div>
  )
}

export default Planets
