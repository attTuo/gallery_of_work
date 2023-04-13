import Image from "next/image";

export default async function PaintingsPage(){

    return(
        <div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pb-4">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/deer.jpg" 
                                alt="deer" 
                                width={1000} height={1000}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/skull.jpg"
                                alt="skull" 
                                width={1000} height={1000}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/drawing.jpg"
                                alt="drawing"
                                width={1000} height={1000}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/colorfull.jpg"
                                alt="colorfull"
                                width={1000} height={1000}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/drawing2.jpg"
                                alt="drawing2"
                                width={1000} height={1000}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/mountains.jpg"
                                alt="mountains"
                                width={1000} height={1000}
                            />
                        </div>
                    </div>
                </div> 
            </div>
        </div>           
    );
}