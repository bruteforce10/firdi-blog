import Image from "next/image";
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <div className="mb-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      {item.img && (
        <div className="hidden lg:block relative w-full lg:w-1/2 h-[350px]">
          <Image
            src={item.img}
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2">
        <div>
          <span className="text-gray-500 mr-2">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-rose-600 font-medium">{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h2 className="text-2xl font-bold hover:text-primary transition-colors">
            {item.title}
          </h2>
        </Link>
        <div
          className="text-lg font-light text-muted-foreground"
          dangerouslySetInnerHTML={{
            __html: item?.desc.substring(0, 60) + "...",
          }}
        />
        <Link
          href={`/posts/${item.slug}`}
          className="border-b border-rose-600 w-max pb-0.5 hover:text-rose-600 transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
