"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading editor...</p>
})
import "react-quill/dist/quill.bubble.css";
import { app } from "@/utils/firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";




const WritePageSection = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  const { status, data: session } = useSession();

  useEffect(() => {
    if (status !== 'loading') {
      setIsLoading(false);
      if (!session?.user) {
        router.push("/login");
      }
    }
  }, [session, status, router]);

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!session?.user) {
    return null;
  }

  // Simplified file handling
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setMedia("/placeholder.svg");
    }
  };

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");


  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, desc: value, img: media, slug: slugify(catSlug),catSlug: catSlug || "style", }),
    });
    console.log(res);
  };

  return (
    <div className="relative flex flex-col container mx-auto px-4">
      <input
        type="text"
        placeholder="Title"
        className="py-12 px-12 text-5xl md:text-6xl border-none outline-none bg-transparent text-foreground"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select 
        className="mb-12 py-2.5 px-5 ml-12 w-max border border-border rounded-md bg-background"
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className="flex gap-5 h-[700px] relative">
        <button 
          className="w-9 h-9 rounded-full bg-transparent border border-foreground flex items-center justify-center cursor-pointer hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
        >
            <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className="flex gap-5 bg-background absolute z-50 w-full left-12 p-2 rounded-md shadow-md">
            <input
              type="file"
              id="image"
              onChange={handleFileChange}
              className="hidden"
            />
            <button className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer hover:bg-green-50 transition-colors">
              <label htmlFor="image" className="cursor-pointer flex items-center justify-center w-full h-full">
              <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer hover:bg-green-50 transition-colors">
            <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer hover:bg-green-50 transition-colors">
            <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <div className="w-full">
        <ReactQuill
              className="w-full h-full"
              theme="bubble"
              value={value}
              onChange={setValue}
              placeholder="Tell your story..."
            />
        </div>
      </div>
      <button 
        className="absolute top-4 right-0 py-2.5 px-5 border-none bg-[#1a8917] text-white cursor-pointer rounded-full hover:bg-[#146c12] transition-colors"
        onClick = {handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default WritePageSection;
