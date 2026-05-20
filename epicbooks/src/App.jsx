import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Welcome from './components/Welcome/Welcome';
import MyFooter from './components/MyFooter/MyFooter';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './Pages/NotFound';
import BookDetails from './Pages/BookDetails';

function App() {
  
  const [form, setForm] = useState("")
  return (
     <>
     <BrowserRouter>
      <header>
      <MyNavbar 
      form={form}
      setForm={setForm}
      />
    </header>
    <main>
      <div className='container'>
<div className='row'>
<Welcome/>
</div>
<Routes>
  <Route path='/' element={<AllTheBooks
form={form}
/>} />
<Route path='/bookdetails/:asin' element={<BookDetails/>
}/>
<Route path='*' element={<NotFound/>
}/>
</Routes>

      </div>
    </main>
    <footer>
<MyFooter/>

    </footer>
     </BrowserRouter>
   
    </>
    
  )
}

export default App;
