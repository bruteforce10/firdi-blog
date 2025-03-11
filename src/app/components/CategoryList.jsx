import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("https://firdi-blog-omega.vercel.app/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const CategoryList = async () => {
  const categories = await getData();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-12">Popular Categories</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {categories.length > 0 &&
          categories.map((item) => (
            <Link
              href={`/blog?cat=${item?.slug}`}
              className={`flex items-center justify-center gap-2.5 capitalize rounded-lg h-20 } 
                w-full sm:w-[45%] md:w-[30%] lg:w-[23%] xl:w-[15%] transition-transform hover:scale-105`}
              key={item?._id}
            >
              {item?.img && (
                <Image
                  src={item?.img || "/placeholder.svg"}
                  alt={item?.title}
                  width={32}
                  height={32}
                  className="rounded-full w-10 h-10 object-cover"
                />
              )}
              {item?.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
