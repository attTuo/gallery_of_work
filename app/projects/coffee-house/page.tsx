import Image from "next/image";
import Link from "next/link";

export default async function CoffeePage(){

    return(
        <div>
            
            <div className="flex-none fixed t-10 r-10">
                <Link href="/projects" className="btn btn-primary bg-yellow-200">Back to projects</Link>
            </div>
          
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:py-4">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-full flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/deerPainting.png"
                                alt="coffeeImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/coffee-house/coffee1.png"
                                alt="coffeeImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/coffee-house/coffee2.png"
                                alt="coffeeImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/coffee-house/coffee3.png"
                                alt="coffeeImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/coffee-house/coffee4.png"
                                alt="coffeeImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/coffee-house/coffee5.png"
                                alt="coffeeImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/coffee-house/coffee6.png"
                                alt="coffeeImage"
                                width={800} height={800}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/coffee-house/coffee7.png"
                                alt="coffeeImage"
                                width={800} height={800}
                            />
                        </div>

                    </div>
                    
                </div>
            </div>     
        </div>  
    );
}