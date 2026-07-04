import { useState } from 'react'
import logo from "./assets/Logo.svg"
import burger from './assets/Burger.svg'
import iphone1 from './assets/Iphone1.svg'
import casque from './assets/casque.svg'
import macbook from './assets/Screen.svg'
import vision from './assets/vision.svg'
import playstation from './assets/play.svg'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import fleche1 from './assets/Arrow.svg'
import fleche2 from './assets/Icon.svg'
import phone from "./assets/Phones.svg"
import watches from './assets/Smart.svg'
import cameras from "./assets/Cameras.png"
import headphones from './assets/Headphones.png'
import computers from './assets/Computers.png'
import gaming from './assets/Gaming.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section class=" flex flex-col   h-full w-full  pt-2  ">

        <header className='flex justify-between m-4'>
          <div>
            <img src={logo} alt="" />

          </div>
          <div>
            <img src={burger} alt="" />

          </div>
        </header>
        {/* section1 */}
        <section className='bg-noir1  w-full h-auto p-6 flex flex-col gap-12'>
          <div className=' flex flex-col justify-center items-center gap-8'>
            <div className='flex flex-col items-center gap-6'>
              <h1 className='font-titre2   text-blanc font-bold text-2xl '>Pro.Beyond.</h1>
              <p className='flex  flex-col   items-center  gap-1'>
                <h1 className='font-titre   text-blanc  text-5xl '>Iphone 14</h1>
                <h1 className='font-titre   text-blanc font-bold text-6xl '>Pro</h1>
              </p>
              <p className='flex  flex-col  items-center'>
                <h1 className=' font-titre text-blanc'> Created to change everything for the</h1>
                <h1 className='font-titre text-blanc'>better. For everyone</h1>
              </p>

            </div>

            <button className='flex justify-center items-center w-5/12  border border-1 border-blanc rounded-lg  h-12 text-blanc font-titre text-sm hover:bg-gray-700 transition hover:-translate-y-1 ">
                        {buttonText}'>
              <a href="#" >Shop now</a>
            </button>

          </div>

          <div className='-mb-6'>
            <img src={iphone1} alt="" />
          </div>
        </section>

{/* section2 */}
        <section className='flex flex-col  '>

          <div className="min-h-[300px] flex justify-center items-center bg-gris">
            <Component1
              image={casque}
              title="Apple  AirPods Max"
              subtitle="Computational audio. Listen, it's powerful"
              buttonText="Shop now"
            />
          </div>

          <div className=" flex flex-col items-center justify-center  max-w-sm   md:rounded-2xl overflow-hidden  bg-noir2 " >
            <img src={vision} className="  object-cover m-4 mt-10" />
            <div className="p-6 flex flex-col items-center -mt-6">
              <h2 className="text-2xl font-bold text-blanc mb-2">
                Apple Vision Pro </h2>
              <p className="text-gris3 mb-4 text-sm"> An immersive way to experience entertainment  </p>
              <button className="px-4 h-[56px] w-11/12 text-blanc rounded-[5px] hover:bg-gray-500 transition hover:-translate-y-1 border border-1 border-blanc">
                Shop now
              </button>
            </div>
          </div>




          <div className=" flex justify-center items-center bg-blanc">
            <Component1
              image={playstation}
              title="Playstation 5"
              subtitle="Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience."
              buttonText="Shop now"
            />
          </div>
          <div className=" flex justify-center items-center bg-gris">

            <Component1
              image={macbook}
              title="Macbook Air"
              subtitle="The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."
              buttonText="Shop now"
            />
          </div>

        </section>


{/* section3 */}
        <section className='mt-10 p-4  w-full h-96 h-screen'>
          <div className='flex justify-between'>
            <h1 className=' font-medium font-titre text-[24px] text-primary'> Browse By Category</h1>
            <div className=' flex gap-2 mt-1'>
              <img src={fleche2} className=' w-7 h-7' />
              <img src={fleche1} className=' w-7 h-7  ' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 pt-6 '>

            <Component2
              image={phone}
              title="Phones"
            />

            <Component2
              image={phone}
              title="Smart Watches"
            />
            <Component2
              image={cameras}
              title="Cameras"
            />
            <Component2
              image={headphones}
              title="Headphones"
            />
            <Component2
              image={computers}
              title="Computers"
            />
            <Component2
              image={gaming}
              title="Gaming"
            />

          </div>

        </section>
        
         {/* section4 */}
        
        <section>

        </section>





      </section>



    </>
  )
}

export default App
