import mainHero from './assets/Images/main.jpg'
import friend1 from './assets/Images/friend1.jpg'
import friend2 from './assets/Images/friend2.jpg'
import friend3 from './assets/Images/friend3.jpg'
import friend4 from './assets/Images/friend4.jpg'
import friend5 from './assets/Images/friend5.jpg'
import friend6 from './assets/Images/friend6.jpg'
import friend7 from './assets/Images/friend7.jpg'
import friend8 from './assets/Images/friend8.jpg'
import friend9 from './assets/Images/friend9.jpg'
import './App.css'

function App() {
  return (
      <div className="container-fluid">
        <header>
          <nav className="fixed-top">
            <ul className="nav mt-1 ms-5">
              <li className="nav-item btn btn-danger mx-1">Home</li>
              <li className="nav-item btn btn-danger mx-1">About me</li>
              <li className="nav-item btn btn-danger mx-1">Star Wars</li>
              <li className="nav-item btn btn-danger mx-1">Contact</li>
            </ul>
          </nav>
          <h1 className="text-center py-4">Luke Skywalker</h1>
        </header>
        <main className="clearfix">
          <section className="float-start w25 me-3">
            <img className="w-100" src={mainHero} alt="Hero" />
          </section>
          <section className="float-end w-50 row border mx-1">
            <h2 className="col-12 text-center">Dream team</h2>
            <img className="col-4 p-1" src={friend1} alt="Friend" />
            <img className="col-4 p-1" src={friend2} alt="Friend" />
            <img className="col-4 p-1" src={friend3} alt="Friend" />
            <img className="col-4 p-1" src={friend4} alt="Friend" />
            <img className="col-4 p-1" src={friend5} alt="Friend" />
            <img className="col-4 p-1" src={friend6} alt="Friend" />
            <img className="bottomLeft col-4 p-1" src={friend7} alt="Friend" />
            <img className="col-4 p-1" src={friend8} alt="Friend" />
            <img className="bottomRight col-4 p-1" src={friend9} alt="Friend" />
          </section>
          <p className="farGalaxy">
            It is a period of civil war.
            Rebel spaceships, striking
            from a hidden base, have won
            their first victory against
            the evil Galactic Empire.

            During the battle, Rebel
            spies managed to steal secret
            plans to the Empire's
            ultimate weapon, the DEATH
            STAR, an armored space
            station with enough power
            to destroy an entire planet.

            Pursued by the Empire's
            sinister agents, Princess
            Leia races home aboard her
            starship, custodian of the
            stolen plans that can save her
            people and restore
            freedom to the galaxy....
          </p>
        </main>
        <footer className="row align-items-center">
          <div className="btn btn-danger col-2 offset-2">
            <p className="text-center m-0">Send me an <span className="email text-uppercase">email</span></p>
          </div>
        </footer>
      </div>
  )
}

export default App
