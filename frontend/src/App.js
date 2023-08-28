import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./AppRoutes"

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  )
}

export default App
