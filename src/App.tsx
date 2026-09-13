import Nav from "./component/nav"
import Banner from "./component/banner"
import Technologies from "./component/technologies/Technologies"
import { Suspense } from "react"
import type { Itechnologies } from "./types/technologies"
import Footer from "./component/footer";

const technologiesFetch = async(): Promise<Itechnologies[]>=> {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data

}


function App() {
  const technologiesPromise = technologiesFetch()



  return (
    <>
     <Nav />
     <Banner/>
     <Suspense fallback= {<h2>Loading...</h2>}>
      <Technologies technologiesPromise= {technologiesPromise} />
     </Suspense>
     <Footer/>
     
    </>
  )
}

export default App
