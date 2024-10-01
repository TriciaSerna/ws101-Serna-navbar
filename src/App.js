import Navbar from "./Navbar"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"

function App () {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = <Home/>
      case "/home":
        Component = <Home/>
        break
        case "/about":
          Component = <About/>
          break
          case "/contact":
            Component = <Contact/>
            break
  }
  return ( 
  <>
  <Navbar/>
  <div className="container">{Component}</div>
  </>
  )
}

export default App