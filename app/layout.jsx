import Link from "next/link";
import './globals.css'

export default function RootLayout({children}){
    return(
        <html lang="fr">
            <body>
                <header>
                    <nav>
                        <ul>
                            <Link href="/">Home</Link>
                        </ul>
                        <ul>
                            <Link href="/reviews">Reviews</Link>
                        </ul>
                        <ul>
                            <Link href="/about" prefetch={false}>About</Link>
                        </ul>
                    </nav>
                </header>
                <main>
                    {children}
                </main>
                <footer>footer</footer>
            </body>
        </html>
    )
}