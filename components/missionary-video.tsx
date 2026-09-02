"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import type { MissionaryVideo } from "@/content/missionaries";

/* Click-to-load: the page ships a thumbnail, and YouTube's player only loads
   when someone actually wants to watch. A missionary page with four videos
   would otherwise pull four players on arrival.

   The thumbnail falls back to a plain tile — a placeholder code, a deleted
   video, or a video with no maxres still has to look deliberate. */
export function MissionaryVideoCard({ video }: { video: MissionaryVideo }) {
  const [playing, setPlaying] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  if (video.url) {
    return (
      <div className="video-card uploaded-video-card">
        <video className="uploaded-video" controls preload="metadata" poster={video.poster}>
          <source src={video.url} />
          Your browser does not support this video.
        </video>
        <span className="video-title">{video.title}</span>
      </div>
    );
  }

  const youtubeId = video.id;
  if (!youtubeId) return null;
  const poster = video.poster ?? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

  if (playing) {
    return (
      <div className="video-card is-playing">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      className="video-card"
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play: ${video.title}`}
    >
      <span className="video-thumb">
        {posterFailed ? null : (
          // Not next/image: YouTube's thumbnail host is outside the app's
          // image config, and this one has to be allowed to fail.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt="" loading="lazy" onError={() => setPosterFailed(true)} />
        )}
        <span className="video-play" aria-hidden>
          <Play size={22} fill="currentColor" />
        </span>
      </span>
      <span className="video-title">{video.title}</span>
    </button>
  );
}
