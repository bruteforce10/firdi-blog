import { auth } from "@/utils/auth";
import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const cat = searchParams.get("cat");
  const sort = searchParams.get("sort") || "desc";
  const POST_PER_PAGE = 6;
  const getData = searchParams.get("getData");

  const query = {
    skip: (page - 1) * POST_PER_PAGE,
    take: POST_PER_PAGE,
    where: {
      ...(cat && { catSlug: cat }),
    },
    orderBy: {
      createdAt: sort,
    },
  };

  try {
    if (getData === "data-pagination") {
      const [posts, count] = await prisma.$transaction([
        prisma.post.findMany(query),
        prisma.post.count({ where: query.where }),
      ]);
      return new NextResponse(
        JSON.stringify({ posts, count }, { status: 200 })
      );
    } else {
      const posts = await prisma.post.findMany({
        orderBy: {
          createdAt: "desc",
        },
        include: {
          user: true,
        },
      });
      console.log(posts);
      return new NextResponse(JSON.stringify({ posts }, { status: 200 }));
    }
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const POST = async (req) => {
  const session = await auth();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Unauthorized" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();

    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify({ post }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
