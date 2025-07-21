import { Outlet } from "react-router"
import { Nav } from "./components/Nav.jsx"
import './App.css'

function App() {

return (
  <>
  <Nav />
    <main className="content">
      <Outlet />

    </main>

  </>
)

}

export default App
