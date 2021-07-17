import { useState } from "react"
import { NavBar, People, Planets } from "@components"

function App() {
  const [page, setPage] = useState("planets")

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <NavBar setPage={setPage} />
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  )
}

export default App
