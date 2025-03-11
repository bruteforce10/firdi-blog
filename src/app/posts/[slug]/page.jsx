import Comments from "@/app/components/Comments";
import Menu from "@/app/components/Menu";
import Image from "next/image";

const generateDummyPost = (slug) => {
  return {
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    user: {
      name: "John Doe",
      image: "/p1.jpeg",
    },
    img: "/p1.jpeg",
    desc: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    `,
  };
};

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const { post } = await getData(slug);

  return (
    <div className="container mx-auto px-4 mt-12">
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 font-bold">
            {post.title}
          </h1>
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
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
        </div>
        {post?.img && (
          <div className="flex-1 relative h-[350px] w-full hidden md:block">
            <Image
              src={post?.img || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-12 mt-16">
        <div className="flex-[5]">
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          />
          <div className="mt-16">
            <Comments postSlug={slug} />
          </div>
        </div>
        <div className="flex-[2]">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
