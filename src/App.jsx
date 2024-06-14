import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Feature from './component/Feature'
import AboutPage from './component/AboutPage'
import Pricing from './component/Pricing'
import Banner from './component/Banner'
import Footer from './component/Footer'

function App() {

  const navItem = [
    {link : "Overview", path : "home"},
    {link : "Feature", path : "feature"},
    {link : "About", path : "about"},
    {link : "Pricing", path : "pricing"}
]

  return (
    <>
      <Header navItem={navItem} />
      <Home />
      <Feature />
      <AboutPage/>
      <Pricing/>
      <Banner/>
      <Footer navItem={navItem}/>
    </>

  )
}

export default App
