import { useState } from 'react'
import logo from "./assets/Logo.svg"
import burger from './assets/Burger.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section class=" flex flex-col gap-2  h-full w-full  pt-2  ">

        <header className='flex justify-between m-4'>
          <div>
            <img src={logo} alt="" />

          </div>
          <div>
            <img src={burger} alt="" />

          </div>
        </header>
        <section className='bg-noir1  w-full h-screen p-6 '>
          <div className=' flex flex-col items-center gap-6'>
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

            <button className='width-11/12 p-2  border border-1 border-blanc  h-12 text-blanc font-titre'>
              <a href="#">Shop now</a>
            </button>

          </div>
        </section>





        {/* <div className=" w-full h-screen flex-2 bg-noir1 p-44">
          <div className=' flex justify-center items-center w-32 h-8 bg-[#ffffff] font-titre'>logo</div>

        </div>
        <div className="flex-6 h-screen  bg-green-100"> asddsfsd</div> */}


      </section>



    </>
  )
}

export default App
