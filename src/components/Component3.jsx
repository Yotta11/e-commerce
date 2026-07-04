



function Component3({ icon, image, title, subtitle, buttonText }) {

    {
        return (
            <div className="h-84">
            <div className="flex justify-end ">
                    <img src={icon} alt={title} className="  object-cover m-4" />
                </div>
            <div className="  flex flex-col items-center justify-center  max-w-sm  md:rounded-2xl overflow-hidden  " >
                
                <img src={image} alt={title} className=" w-18 h-18 object-cover m-4" />
                <div className="p-4 flex flex-col items-center">
                    <h2 className="text-sm  text-primary mb-2"> {title} </h2>
                    <p className="text-primary  text-2xl font-bold mb-4"> {subtitle} </p>
                    <button className="px-4 h-[44px] font-semibold w-11/12 bg-primary text-blanc rounded-[5px] hover:bg-gray-500 transition hover:-translate-y-1  border border-1 border-primary">
                        {buttonText}
                    </button>
                </div>
            </div>
            </div>);
    }


}
export default Component3;