import { Badge } from "@/components/ui/badge";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <div className="mb-12 grow">
      {item?.img && (
        <div className="relative w-full h-[240px]">
          <Badge
            variant={"secondary"}
            className="text-white w-fit text-md bg-black/50 absolute z-[2] top-4 left-4"
          >
            {item?.catSlug}
          </Badge>
          <Image
            src={item?.img}
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div className="w-full space-y-2 mt-4 ">
        <span className="text-gray-500 text-md">
          {moment(item?.createdAt).format("DD MMMM YYYY")} - {item?.views} views
        </span>
        <Link href={`/posts/${item.slug}`} className="block">
          <h2 className="text-2xl font-bold ">{item?.title}</h2>
        </Link>
        <p className="text-primary/80 text-md line-clamp-2">
          {item?.descShort}
        </p>
      </div>
    </div>
  );
};

export default Card;
