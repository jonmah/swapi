import { useQuery } from "react-query"

const usePlanets = () => {
  const { data, isFetching, isError } = useQuery("planets", async () => {
    const data = await fetch("http://swapi.dev/api/planets/").then((res) =>
      res.json()
    )
    return data
  })

  return { data, isError, isFetching }
}

export default usePlanets
