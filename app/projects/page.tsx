import Image from "next/image";

export default async function ProjectsPage(){

    return(
       <div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pb-4">
                <div className="bg-slate-300 rounded-lg mb-2">
                    <div className="hero-content flex-row">
                        <Image  
                            className="block w-1/2 rounded-lg shadow-2xl"
                            src="/../public/images/drawing2.jpg"
                            alt="projectImage"
                            width={400} height={400}
                        />
                        <div className="block w-1/2">
                            <h1 className="text-2xl font-bold mb-4">Project 1</h1>
                            <p className="mb-2">Interior design plan for ExampleCompany.</p>
                            <p className="mb-4"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                            <button className="btn btn-primary">See project</button>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-300 rounded-lg mb-2">
                    <div className="hero-content flex-row-reverse">
                        <Image  
                            className=" block w-1/2 rounded-lg shadow-2xl"
                            src="/../public/images/drawing.jpg"
                            alt="projectImage"
                            width={400} height={400}
                        />
                        <div className="block w-1/2">
                            <h1 className="text-2xl font-bold mb-4">Project 2</h1>
                            <p className="mb-2">Interior design plan for ExampleCompany.</p>
                            <p className="mb-4"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                            <button className="btn btn-primary">See project</button>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-300 rounded-lg mb-2">
                    <div className="hero-content flex-row">
                        <Image  
                            className=" block w-1/2 rounded-lg shadow-2xl"
                            src="/../public/images/cupsPair.jpg"
                            alt="projectImage"
                            width={400} height={400}
                        />
                        <div className="block w-1/2">
                            <h1 className="text-2xl font-bold mb-4">Project 3</h1>
                            <p className="mb-2">Interior design plan for ExampleCompany.</p>
                            <p className="mb-4"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                            <button className="btn btn-primary">See project</button>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-300 rounded-lg mb-2">
                    <div className="hero-content flex-row-reverse">
                        <Image  
                            className=" block w-1/2 rounded-lg shadow-2xl"
                            src="/../public/images/drawing.jpg"
                            alt="projectImage"
                            width={400} height={400}
                        />
                        <div className="block w-1/2">
                            <h1 className="text-2xl font-bold mb-4">Project 4</h1>
                            <p className="mb-2">Interior design plan for ExampleCompany.</p>
                            <p className="mb-4"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                            <button className="btn btn-primary">See project</button>
                        </div>
                    </div>
                </div>
            </div>     
        </div>  
    );
}