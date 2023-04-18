import Image from "next/image";

export default async function HomePage(){

    return(
        <div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:py-4">
                <div className="hero h-30 lg:h-72 bg-[url('../public/images/art/patternBanner.png')]">
                    <div className="hero-overlay bg-opacity-30 rounded-lg"></div>
                    <div className="hero-content text-center ">
                        <div className="max-w-md">
                        <h1 className="mb-2 lg:mb-5 text-4xl lg:text-5xl font-bold">Gallery of work</h1>
                        <p className="mb-5 text-lg lg:text-2xl">Elisa Tiikasalo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pb-4 pt-0">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/other/ceramics.png" 
                                alt="ceramicsImage" 
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/bunnyPins.jpg"
                                alt="bunnyPinsImage" 
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/necklace2.jpg"
                                alt="necklaceImage"
                                width={400} height={400}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/cups/doubleCup2.png"
                                alt="doubleCupImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/other/fabric.png"
                                alt="fabricImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/cups/cupsStack.jpg"
                                alt="cupsStackImage"
                                width={400} height={400}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/cups/cups4.jpg"
                                alt="cups4Image"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/cups/cups2.jpg"
                                alt="cups2Image"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/seashells.jpg"
                                alt="seashellsImage" 
                                width={400} height={400}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/art/mountains.jpg"
                                alt="mountainsImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/planes.png"
                                alt="planesImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/jewelry/butterflies.png"
                                alt="butterfliesImage"
                                width={400} height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}