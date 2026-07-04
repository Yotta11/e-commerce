



function Component2({ image, title}) {

    {
        return (
            <div className="h-32 w-full  flex flex-col items-center justify-center  max-w-sm  rounded-2xl overflow-hidden  bg-gris  " >
                <img src={image} alt={title} className="  object-cover m-2" />
                <div className=" flex flex-col items-center">
                    <h2 className="text-lg  text-primary mb-2"> {title} </h2>
            
                </div>
            </div>);
    }


}
export default Component2;