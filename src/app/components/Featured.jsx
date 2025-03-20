import Image from "next/image";
import DescriptionFeatured from "./atoms/featured/description-featured";
import { revalidatePath } from "next/cache";
const getData = async () => {
  const res = await fetch(
    `http://localhost:3000/api/posts?getData=data-featured`
  );
  revalidatePath("/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Featured = async () => {
  const { posts } = await getData();
  console.log(posts);
  // const post = posts[0];

  return (
    <>
      <div className="container mx-auto mt-8 px-4 max-sm:hidden">
        <h1 className=" max-sm:hidden text-6xl/[1.2] lg:text-8xl/[1.2] font-light">
          Craft narratives ✍️ <br className="sm:hidden" /> that ignite{" "}
          <strong className="font-medium">inspiration 💡</strong>,{" "}
          <strong className="font-medium">knowledge 📕</strong>, and{" "}
          <strong className="font-medium">entertainment 🎬</strong>
        </h1>

        {/* <div className="relative w-full h-[500px] mt-8 overflow-hidden rounded-lg">
          <Image
            src={post.img}
            alt="Featured post"
            fill
            className="object-cover object-center rounded-lg"
          />
          <DescriptionFeatured
            className="pl-12 pb-12"
            {...post}
            author={post.user.name}
          />
        </div> */}
      </div>
      {/* <div className="max-sm:block hidden relative -mt-24 w-full h-[600px]">
        <Image
          src={post.img}
          alt="Featured post"
          fill
          className="object-cover"
        />
        <DescriptionFeatured
          className="px-6 pb-12"
          {...post}
          author={post.user.name}
        />
      </div> */}
    </>
  );
};

export default Featured;
