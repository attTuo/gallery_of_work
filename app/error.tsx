"use client";

interface Props {
    error : Error
    refresh : () => void
}

function Error({error, refresh} : Props) {
    return(
        <div>

            {error.message}

            <button
                onClick={() => refresh()}
            >
                Try again
            </button>
        </div>
    )
}
export default Error;