import Image from "next/image"

const Featured = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-6xl font-light md:text-7xl lg:text-8xl xl:text-9xl">
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="mt-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="hidden md:block relative w-full md:w-1/2 h-[500px]">
          <Image src="/p1.jpeg" alt="Featured post" fill className="object-cover rounded-lg" />
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-lg sm:text-xl font-light text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore
            voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa
            debitis.
          </p>
          <button className="bg-primary text-primary-foreground px-5 py-4 rounded-md w-max hover:bg-primary/90 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured

