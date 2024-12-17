import Link from "next/link";

export default function ReviewsPage(){
    return(
        <>
            <nav>
                <ul>
                    <Link href="/reviews/diablo">Diablo</Link>
                </ul>
                <ul>
                    <Link href="/reviews/spiderman">Spider-Man</Link>
                </ul>
            </nav>
            <h1>reviews</h1>
            <p>here we'll list all the reviews</p>
        </>
    )
}