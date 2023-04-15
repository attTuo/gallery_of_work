import Image from "next/image";

export default async function AboutPage(){

    return(
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:py-4 ">
            
            <div className="bg-slate-300 rounded-lg">
                <div className="hero-content flex-row">
                        <Image 
                            className="rounded-lg object-cover object-center w-1/2 max-h-96"
                            src="/../public/images/bunny2.jpg" 
                            alt="aboutPicture" 
                            width={1000} height={1000}
                        />
                        <div>
                    <h1 className="text-xl sm:2xl md:text-4xl font-bold">FirstnameLastname</h1>
                    <h1 className="text-md sm:xl md:text-2xl pb-2">Interior architect and furniture designer</h1>
                    <p>email@email.com</p>
                    <p>City, Country</p>
                    <button className="btn bg-blue-400 mt-4">Instagram</button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5 py-2 lg:px-32 text-center pt-4 pb-6">
                <p className="text-4xl my-4">About me</p>
                <p className="text-md pb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> 
            </div>
              
            <div className="container mx-auto px-5 py-2 lg:px-16 bg-slate-300 rounded-lg text-center pt-4 pb-6">
                <p className="text-4xl mt-4 mb-8">Contact</p>
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="hidden lg:flex lg:w-1/2 flex-wrap p-4 pt-6">
                        <Image 
                            className="rounded-lg object-cover object-center w-full"
                            src="/../public/images/cup1.jpg" 
                            alt="aboutPicture" 
                            width={1000} height={1000}
                        />  
                    </div>

                    <div className="flex lg:w-1/2 flex-col mx-auto p-4">
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
                                    <span className="label-text-alt">*</span>
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
                        <button className="btn btn-primary">Send</button>
                    </div>
                    
                </div>
            </div>
        </div>        
    );
}