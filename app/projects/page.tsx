import Image from "next/image";
import Link from "next/link";

export default async function ProjectsPage(){

    return(
       <div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pb-4">

                <div className="bg-gray-200 rounded-lg mb-2">
                    <div className="hero-content flex-row">
                        <Image  
                            className="block w-1/2 rounded-lg shadow-2xl"
                            src="/../public/images/projects/librarySeats.jpg"
                            alt="projectImage"
                            width={400} height={400}
                        />
                        <div className="block w-1/2">
                            <h1 className="text-2xl font-bold mb-1">Library of Perniö</h1>
                            <p className=" text-lg mb-2">Thesis</p>
                            <p className="mb-2">Interior design plan for a library.</p>
                            <p className="mb-4"> &quot;The aim of the thesis was to make a conceptual plan of modifications for the library of Perniö.&quot;</p>
                            <Link href="/projects/library" className="btn btn-primary bg-yellow-200">See project images</Link>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-200 rounded-lg mb-2">
                    <div className="hero-content flex-row-reverse">
                        <Image  
                            className="block w-1/2 rounded-lg shadow-2xl"
                            src="/../public/images/projects/deerPainting.png"
                            alt="projectImage"
                            width={400} height={400}
                        />
                        <div className="block w-1/2">
                            <h1 className="text-2xl font-bold mb-4">Coffee house</h1>
                            <p className="mb-2">Interior design plan for a coffee house.</p>
                            <p className="mb-4">&quot;The goal of the project was to make the space elegant, youthful, relaxing and attractive. The goal was to also have an &quot;eye catcher&quot; -element in the space.&quot;</p>
                            <Link href="/projects/coffee-house" className="btn btn-primary bg-yellow-200">See project images</Link>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-200 rounded-lg mb-2">
                    <div className="hero-content flex-row">
                        <Image  
                            className=" block w-1/2 rounded-lg shadow-2xl"
                            src="/../public/images/projects/outsideNight.png"
                            alt="projectImage2"
                            width={400} height={400}
                        />
                        <div className="block w-1/2">
                            <h1 className="text-2xl font-bold mb-4">Two-story house</h1>
                            <p className="mb-2">Interior design plan for a leisure home.</p>
                            <p className="mb-4"> &quot;An Archicad practice project in which the goal was to make a leisure home.&quot;</p>
                            <Link href="/projects/two-story" className="btn btn-primary bg-yellow-200">See project images</Link>
                        </div>
                    </div>
                </div>
            </div>     
        </div>  
    );
}