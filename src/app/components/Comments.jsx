"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";


const Comments = ({ postSlug }) => {
  const [desc, setDesc] = useState("");
  const { data: session } = useSession();
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, mutate, isLoading } = useSWR(
    `https://firdi-blog-omega.vercel.app/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ postSlug,  desc }),
    });
    mutate();
    setDesc("");
  }; 

  return (
    <div className="mt-12">
      <h1 className="text-2xl font-bold text-muted-foreground mb-8">
        Comments
      </h1>
      {session ? (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <textarea
            placeholder="Write a comment..."
            className="p-5 border rounded-md w-full min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="px-5 py-4 bg-teal-600 text-white font-bold border-none rounded-md cursor-pointer hover:bg-teal-700 transition-colors whitespace-nowrap"
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login" className="text-primary hover:underline">
          Login to write a comment
        </Link>
      )}
      <div className="mt-12">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.comments.map((item) => (
            <div className="mb-12" key={item._id}>
              <div className="flex items-center gap-5 mb-5">
                {item.user.image && (
                  <Image
                    src={item.user.image || "/placeholder.svg"}
                    alt=""
                    width={150}
                    height={150}
                    className="rounded-full object-cover w-12 h-12"
                  />
                )}
                <div className="flex flex-col gap-1 text-muted-foreground">
                  <span className="font-medium">{item.user.name}</span>
                  <span className="text-sm">{item.createdAt}</span>
                </div>
              </div>
              <p className="text-lg font-light">{item.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
