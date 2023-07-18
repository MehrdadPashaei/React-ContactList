import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NewContact from "./pages/NewContact.jsx";
import ContactEdit from "./pages/ContactEdit.jsx";
import ContactDetail from "./pages/ContactDetail.jsx";
import NotFound from "./pages/NotFound.jsx";


function App() {

  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new-contact' element={<NewContact/>}/>
        <Route path='/edit/:id' element={<ContactEdit/>}/>
        <Route path='/contact-detail/:id' element={<ContactDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
