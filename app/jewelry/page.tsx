import Image from "next/image";

export default async function JewelryPage(){

    return(
        <div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pb-4">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/necklace.jpg" 
                                alt="necklace" 
                                width={1000} height={1000}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/dragon.jpg"
                                alt="dragon" 
                                width={300} height={250}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/seashells.jpg"
                                alt="seashells"
                                width={1000} height={1000}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/pins.png"
                                alt="pins"
                                width={1000} height={1000}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/bracelet.jpg"
                                alt="bracelet"
                                width={1000} height={1000}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/bunnyPins.jpg"
                                alt="bunnyPins"
                                width={1000} height={1000}
                            />
                        </div>
                    </div>
                </div>
                
                
            </div>

        </div>        
    );
}