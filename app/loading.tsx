export default function Loading() {
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:py-4 grid">
            <div className="-m-1 flex flex-wrap md:-m-2 bg-black opacity-60 rounded-lg h-screen">
                <button className="btn loading m-auto">loading</button>
            </div>
        </div>
    )
}