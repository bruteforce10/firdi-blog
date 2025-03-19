import Comments from "@/app/components/Comments";
import Image from "next/image";
import moment from "moment";
import "moment/locale/id";
import { Badge } from "@/components/ui/badge";
import ShareButton from "@/app/components/atoms/post/share-button";

const getData = async (slug) => {
  const res = await fetch(
    `https://firdi-blog-omega.vercel.app/api/posts/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const { post } = await getData(slug);

  return (
    <article className="max-w-4xl mx-auto px-4 space-y-16 mt-12">
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}

      <div className="space-y-6">
        <div className="flex flex-col gap-3 text-center">
          <div className="flex justify-center items-center gap-3">
            <Badge variant="secondary" className="w-fit">
              {post?.catSlug}
            </Badge>
            <p>{moment(post?.createdAt).locale("id").format("DD MMMM YYYY")}</p>
          </div>
          <h2 className="text-4xl font-semibold ">{post?.title}</h2>
          <p>{post?.descShort}</p>
        </div>
        <Image
          src={post?.img}
          alt=""
          width={1000}
          height={1000}
          className="rounded-lg max-h-[500px] object-cover"
        />
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post?.desc }}
        />
      </div>
      <div className="grid grid-cols-3 divide-x divide-gray-500">
        <div className="flex items-center gap-5">
          {post?.user?.image && (
            <div className="relative w-12 h-12">
              <Image
                src={post?.user?.image || "/placeholder.svg"}
                alt=""
                fill
                className="rounded-full object-cover"
              />
            </div>
          )}
          <div className="flex flex-col gap-1 text-muted-foreground">
            <span className="text-xl font-medium">{post.user.name}</span>
            <span className="text-sm">
              {moment(post.createdAt).locale("id").format("DD MMMM YYYY")}
            </span>
          </div>
        </div>
        <div className="flex items-center pl-6">
          <ShareButton />
        </div>
      </div>

      <Comments postSlug={slug} />
    </article>
  );
};

export default SinglePage;
