import { useState } from 'react'
import logo from "./assets/Logo.svg"
import burger from './assets/Burger.svg'
import iphone1 from './assets/Iphone1.svg'
import casque from './assets/casque.svg'
import macbook from './assets/Screen.svg'
import vision from './assets/vision.svg'
import playstation from './assets/play.svg'
import Component1 from './components/Component1'
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



<section>


</section>





      </section>



    </>
  )
}

export default App
