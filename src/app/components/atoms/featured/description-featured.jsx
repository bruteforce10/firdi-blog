import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import moment from "moment";
import "moment/locale/id";

const DescriptionFeatured = ({
  className,
  title,
  descShort,
  author,
  catSlug,
  createdAt,
  views,
}) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 w-full h-full bg-gradient-to-t  from-black/50 to-transparent",
        className
      )}
    >
      <div className="flex flex-col gap-2 w-full sm:w-2/3 h-full justify-end">
        <Badge variant={"secondary"} className="text-white w-fit">
          {catSlug}
        </Badge>
        <h4 className=" text-white font-medium">
          {moment(createdAt).locale("id").format("DD MMMM YYYY")} - {views}{" "}
          views
        </h4>
        <Link href={"/"}>
          <h2 className=" text-white font-semibold text-4xl">{title}</h2>
        </Link>
        <p className="text-white text-sm ">{descShort.substring(0, 150)}...</p>
      </div>
    </div>
  );
};

export default DescriptionFeatured;
