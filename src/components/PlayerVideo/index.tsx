import { useEffect, useState } from "react";
import "./style.css";

type videoItem = {
  id: string;
  title: string;
  path: string;
};

function PlayerVideo() {
  console.log("Renderizando Player");

  const [videos, setVideos] = useState<videoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(1);

  useEffect(() => {
    async function loadVideos(): Promise<void> {
      await fetch("http://127.0.0.1:3000/videos")
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setVideos(data);
        });
    }

    console.log("Disparando useEffect");

    loadVideos();
  }, []);

  const nextVideo = () => {
    const { id } = videos.filter(
      (video) => Number(video.id) !== currentVideo
    )[0];
    setCurrentVideo(Number(id));
  };

  const renderVideo = () => {
    if (videos.length > 0) {
      const { path } = videos.filter(
        (video) => Number(video.id) === currentVideo
      )[0];

      return (
        <video muted autoPlay preload={"auto"} src={path} onEnded={nextVideo} />
      );
    }
  };

  return loading ? (
    <div>Carregando...</div>
  ) : (
    <div className="playerVideo">{renderVideo()}</div>
  );
}

export default PlayerVideo;
