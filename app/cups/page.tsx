import Image from "next/image";

export default async function CupsPage(){

    return(
        <div>

            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pb-4">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/cups/cups2.jpg" 
                                alt="cups2" 
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/cups/cups1.jpg"
                                alt="cups1" 
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/cups/doubleCup.png"
                                alt="cup1"
                                width={400} height={400}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/cups/cup1.JPG"
                                alt="cup1"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/cups/cups3.jpg"
                                alt="cups3"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/cups/cups4.jpg"
                                alt="cups4"
                                width={400} height={400}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/cups/cups5.jpg"
                                alt="cups5"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/cups/cups6.jpg"
                                alt="cups6"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/cups/bunny1.jpg"
                                alt="bunny1Image" 
                                width={400} height={400}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/cups/blueCup.jpg"
                                alt="blueCup"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/cups/dripCup.jpg"
                                alt="dripCup"
                                width={400} height={400}
                            />
                        </div>
                    </div>
                    <div className="flex w-3/5 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/cups/cup2.JPG"
                                alt="cup2"
                                width={400} height={400}
                            />
                        </div>
                    </div>
                    <div className="flex w-2/5 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/cups/handCup.png"
                                alt="handCup"
                                width={400} height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}