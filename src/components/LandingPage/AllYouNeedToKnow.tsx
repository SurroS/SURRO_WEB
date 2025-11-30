"use client";

import { useEffect, useState } from "react";

export default function VideoPlayer() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadVideoUrl = async () => {
      try {
        const res = await fetch("https://dev.surrosantara.space/api/video-url");

        if (!res.ok) {
          setVideoUrl("/videos/video.mp4");
          return;
        }

        const data = await res.json();

        if (!data?.url) {
          setVideoUrl("/videos/video.mp4");
          return;
        }

        setVideoUrl(data.url);
      } catch (err) {
        setVideoUrl("/videos/video.mp4");
      }
    };

    loadVideoUrl();
  }, []);

  if (!videoUrl) return <p>Loading...</p>;

  return (
    <div className="w-full px-5 py-10 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-[28px] sm:text-[36px] lg:text-[64px] font-normal text-[#464646] leading-[120%] w-full 
        text-left lg:text-center mb-6">
        All you need to know
      </h1>

      {/* Video Container */}
      <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-md">
        <video
          src={videoUrl}
          controls
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
}
