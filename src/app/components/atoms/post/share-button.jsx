"use client";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { usePathname, useSearchParams } from "next/navigation";

const ShareButton = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const shareUrl = `https://firdi-blog-omega.vercel.app${pathname}${
    searchParams.toString() ? `?${searchParams.toString()}` : ""
  }`;

  const title = "Nulis Blog";

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-muted-foreground">Bagikan</p>
      <div className="flex items-center gap-8">
        <FacebookShareButton
          url={shareUrl}
          className="Demo__some-network__share-button"
        >
          <FaFacebookF size={28} className="text-gray-400 hover:text-primary" />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <FaTwitter size={28} className="text-gray-400 hover:text-primary" />
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className="Demo__some-network__share-button"
        >
          <FaWhatsapp size={28} className="text-gray-400 hover:text-primary" />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ShareButton;
