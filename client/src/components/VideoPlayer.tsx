import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  duration: string;
}

export function VideoPlayer({ videoUrl, title, duration }: VideoPlayerProps) {
  return (
    <Card className="card-elevated overflow-hidden bg-black">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {/* YouTube/Vimeo Embed */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4 bg-slate-900">
        <h3 className="font-heading text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-300 font-mono">{duration}</p>
      </div>
    </Card>
  );
}

interface VideoThumbnailProps {
  thumbnail: string;
  title: string;
  duration: string;
  onClick: () => void;
}

export function VideoThumbnail({ thumbnail, title, duration, onClick }: VideoThumbnailProps) {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer group overflow-hidden rounded-lg"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white transition-colors flex items-center justify-center">
          <Play className="w-8 h-8 text-blue-600 ml-1" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
        <p className="text-white text-sm font-heading line-clamp-2">{title}</p>
        <p className="text-gray-300 text-xs font-mono mt-1">{duration}</p>
      </div>
    </div>
  );
}
