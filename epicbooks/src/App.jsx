import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Welcome from './components/Welcome/Welcome';
import MyFooter from './components/MyFooter/MyFooter';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
function App() {
  

  return (
     <>
    <header>
      <MyNavbar/>
    </header>
    <main>
      <div className='container'>
<div className='row'>
<Welcome/>
</div>
<AllTheBooks/>
      </div>
    </main>
    <footer>
<MyFooter/>

    </footer>
    </>
    
  )
}

export default App;
