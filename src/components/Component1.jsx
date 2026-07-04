



function Component1({ image, title, subtitle, buttonText }) {

    {
        return (
            <div className="  flex flex-col items-center justify-center  max-w-sm  md:rounded-2xl overflow-hidden  " >
                <img src={image} alt={title} className="  object-cover m-4" />
                <div className="p-4 flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-primary mb-2"> {title} </h2>
                    <p className="text-gris3 mb-4"> {subtitle} </p>
                    <button className="px-4 h-[56px] w-11/12 text-primary rounded-[5px] hover:bg-gray-500 transition hover:-translate-y-1  border border-1 border-primary">
                        {buttonText}
                    </button>
                </div>
            </div>);
    }


}
export default Component1;