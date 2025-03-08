import Image from "next/image"
import Link from "next/link"


const MenuPosts = ({ withImage }) => {
  return (
    <div className="flex flex-col gap-9">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-[1] aspect-square relative">
            <Image src="/p1.jpeg" alt="" fill className="rounded-full border-2 border-gray-300" />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1.5">
          <span className="px-2 py-0.5 rounded-lg text-xs text-white w-max bg-[#ff7857]">Travel</span>
          <h3 className="text-lg font-medium text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="font-medium">John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuPosts

