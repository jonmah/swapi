import { useQuery } from "react-query"

const fetchPlanets = async () => {
  const data = await fetch("http://swapi.dev/api/planets").then((res) =>
    res.json()
  )
  return data
}

const usePlanets = () => {
  const { data, isFetching, isError } = useQuery("planets", fetchPlanets, {
    staleTime: 5000,
    onSuccess: () => console.log("yeah baby"),
  })

  return { data, isError, isFetching }
}

export default usePlanets
