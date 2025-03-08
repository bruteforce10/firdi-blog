import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="mt-12 py-5 flex flex-col md:flex-row items-center justify-between text-muted-foreground gap-12 md:gap-0 container mx-auto px-4">
      <div className="flex-1 flex flex-col gap-3.5">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="lama blog" width={50} height={50} className="rounded-full" />
          <h1 className="text-2xl font-bold">Lamablog</h1>
        </div>
        <p className="font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus similique aspernatur obcaecati
          veritatis. Aperiam cum porro sequi, totam minima consequuntur, aspernatur deleniti vero repellendus dorales.
        </p>
        <div className="mt-2.5 flex gap-2.5">
          <Link href="/" className="hover:text-primary">
            <Facebook size={18} />
          </Link>
          <Link href="/" className="hover:text-primary">
            <Instagram size={18} />
          </Link>
          <Link href="/" className="hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-tiktok"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </Link>
          <Link href="/" className="hover:text-primary">
            <Youtube size={18} />
          </Link>
        </div>
      </div>
      <div className="flex-1 flex md:justify-end gap-[100px] lg:gap-[100px] md:gap-[50px] w-full md:w-auto">
        <div className="flex flex-col gap-2.5 font-light">
          <span className="font-bold">Links</span>
          <Link href="/" className="hover:text-primary">
            Homepage
          </Link>
          <Link href="/" className="hover:text-primary">
            Blog
          </Link>
          <Link href="/" className="hover:text-primary">
            About
          </Link>
          <Link href="/" className="hover:text-primary">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-2.5 font-light">
          <span className="font-bold">Tags</span>
          <Link href="/" className="hover:text-primary">
            Style
          </Link>
          <Link href="/" className="hover:text-primary">
            Fashion
          </Link>
          <Link href="/" className="hover:text-primary">
            Coding
          </Link>
          <Link href="/" className="hover:text-primary">
            Travel
          </Link>
        </div>
        <div className="flex flex-col gap-2.5 font-light">
          <span className="font-bold">Social</span>
          <Link href="/" className="hover:text-primary">
            Facebook
          </Link>
          <Link href="/" className="hover:text-primary">
            Instagram
          </Link>
          <Link href="/" className="hover:text-primary">
            Tiktok
          </Link>
          <Link href="/" className="hover:text-primary">
            Youtube
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

