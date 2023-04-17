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
                                src="/../public/images/jewelry/necklace.jpg" 
                                alt="necklace" 
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/seashell2.jpg"
                                alt="dragon" 
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/seashells.jpg"
                                alt="seashells"
                                width={400} height={400}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/pins.png"
                                alt="pins"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/bracelet.jpg"
                                alt="bracelet"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/bunnyPins.jpg"
                                alt="bunnyPins"
                                width={400} height={400}
                            />
                        </div>
                    </div>

                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/dragon.jpg" 
                                alt="necklace" 
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/butterflies.png"
                                alt="dragon" 
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/planeEarrings.jpg"
                                alt="seashells"
                                width={400} height={400}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/necklace2.jpg"
                                alt="seashells"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/bunnyEarrings.jpg" 
                                alt="necklace" 
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/planes.png"
                                alt="dragon" 
                                width={400} height={400}
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>        
    );
}