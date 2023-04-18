import Image from "next/image";
import Link from "next/link";

export default async function LibraryPage(){

    return(
        <div>
            
            <div className="flex-none fixed t-10 r-10">
                <Link href="/projects" className="btn btn-primary">Back to projects</Link>
            </div>
          
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:py-4">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-full flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/librarySeats.jpg"
                                alt="libraryImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/library/library1.jpg"
                                alt="libraryImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/library/library2.jpg"
                                alt="libraryImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/library/library3.jpg"
                                alt="libraryImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/library/library4.jpg"
                                alt="libraryImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/library/library5.png"
                                alt="libraryImage"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/library/library6.png"
                                alt="libraryImage"
                                width={800} height={800}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/../public/images/projects/library/library7.png"
                                alt="libraryImage"
                                width={800} height={800}
                            />
                        </div>

                    </div>
                    
                </div>
            </div>     
        </div>  
    );
}