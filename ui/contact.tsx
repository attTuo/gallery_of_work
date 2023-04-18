"use client";

import Image from "next/image";

export default function ContactComponent(){

    return(
        <div>
            <div className="container mx-auto px-5 py-2 lg:px-16 bg-gray-200 rounded-lg text-center pt-4 pb-6">
                <p className="text-4xl mt-4 mb-8">Contact</p>
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="hidden lg:flex lg:w-1/2 flex-wrap p-4 pt-6">
                        <Image 
                            className="rounded-lg object-cover h-96 object-center w-full"
                            src="/../public/images/cups/bunny2.jpg" 
                            alt="bunnyImage" 
                            width={400} height={400}
                        />  
                    </div>

                    <div className="flex lg:w-1/2 flex-col mx-auto p-4">
                        <form action="" method="post">
                            <div className="flex w-full flex-wrap">
                                <div className="flex w-1/2 lg:w-1/2 mx-auto pr-1">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">First name:</span>
                                            <span className="label-text-alt">*</span>
                                        </label>
                                        <input type="text" placeholder="John" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <div className="flex w-1/2 lg:w-1/2 mx-auto pl-1">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Last name:</span>
                                            <span className="label-text-alt">*</span>
                                        </label>
                                        <input type="text" placeholder="Doe" className="input input-bordered w-full" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex w-full">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Email:</span>
                                        <span className="label-text-alt">*</span>
                                    </label>
                                    <input type="text" placeholder="example@gmail.com" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Subject:</span>
                                    </label>
                                    <input type="text" placeholder="Subject of the message" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Message:</span>
                                        <span className="label-text-alt">*</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered w-full p-4 rounded-lg" placeholder="Type here..."></textarea>
                                    <label className="label">
                                        <span className="label-text-alt">Fields with "*" must be filled.</span>
                                    </label>
                                </div>
                            </div>
                            <button className="btn btn-primary bg-yellow-200 w-full">Send</button>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
    );
}