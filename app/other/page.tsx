import Image from "next/image";

export default async function OtherPage(){

    return(
        <div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pb-4">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/other/ceramics.png" 
                                alt="ceramics" 
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/other/table.png"
                                alt="table" 
                                width={400} height={400}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/other/fabric.png"
                                alt="fabric"
                                width={400} height={400}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image 
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/art/patternBanner.png"
                                alt="pattern"
                                width={400} height={400}
                            />
                        </div>
                        
                    </div>
                </div> 
            </div>
        </div>          
    );
}