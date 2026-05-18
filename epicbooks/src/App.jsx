import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Welcome from './components/Welcome/Welcome';
import MyFooter from './components/MyFooter/MyFooter';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import { useState } from 'react';

function App() {
  
  const [form, setForm] = useState("")
  return (
     <>
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
<AllTheBooks
form={form}
/>
      </div>
    </main>
    <footer>
<MyFooter/>

    </footer>
    </>
    
  )
}

export default App;
