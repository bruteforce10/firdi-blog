import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

 const DescriptionFeatured = ({className, title, descShort, author, catSlug, createdAt}) => {
    return (
        <div className={cn("absolute bottom-0 w-full h-full bg-gradient-to-t  from-black/50 to-transparent", className)}>
        <div className="flex flex-col gap-2 w-full sm:w-2/3 h-full justify-end">
        <Badge variant={"secondary"} className="text-white w-fit">{catSlug}</Badge>
        <h4 className="font-medium text-white font-medium">{author} - {createdAt.substring(0, 10)}</h4>
        <Link href={"/"}>
        <h2 className="font-medium text-white font-semibold text-4xl">{title}</h2>
        </Link>
        <p className="text-white text-sm font-medium">{descShort.substring(0, 150)}...</p>
        </div>
        </div>
    )
}

export default DescriptionFeatured;