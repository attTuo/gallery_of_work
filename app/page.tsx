import Image from "next/image";

export default async function HomePage(){

    return(
        <div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:py-4">
                <Image 
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/../public/images/patternBanner.png" 
                    alt="cupBanner" 
                    width={1000} height={1000}
                />
            </div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pb-4 pt-0">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/cups1.jpg" 
                                alt="cups1" 
                                width={1000} height={1000}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/cups2.jpg"
                                alt="cups2" 
                                width={300} height={250}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/cup1.jpg"
                                alt="cup1"
                                width={1000} height={1000}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/cup2.jpg"
                                alt="cup2"
                                width={1000} height={1000}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/cups3.jpg"
                                alt="cup3"
                                width={1000} height={1000}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/cups4.jpg"
                                alt="cups4"
                                width={1000} height={1000}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/cups5.jpg"
                                alt="cups5"
                                width={1000} height={1000}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/cups6.jpg"
                                alt="cups6"
                                width={1000} height={1000}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/bunny2.jpg"
                                alt="bunny2" 
                                width={1000} height={1000}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/cupsStack.jpg"
                                alt="cupsStack"
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
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/dog.jpg"
                                alt="dog"
                                width={1000} height={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}