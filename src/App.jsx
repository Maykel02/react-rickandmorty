import { Routes, Route } from "react-router-dom";


import LayoutAdmin from "./layout/admin/index"


function App() {

  return (
    <Routes>
      <Route  path="/*" element={<LayoutAdmin/>} />
    </Routes>
  )
}

export default App
