import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import SongIndicator from "./SongIndicator";

function GalleryImage({
  src,
  focusText,
  className,
  playlistIndex,
  attachAudioPlayer = false
}) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="image-wrapper">

      <div
        className="image-hover-zone"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={src}
          className="gallery-image"
          onClick={() => setExpanded(true)}
        />

        {hovered && !expanded && attachAudioPlayer && (
          <SongIndicator />
        )}
      </div>

      {hovered && !expanded && (
        <div className="hover-text">
          {focusText}
        </div>
      )}

      {expanded && (
        <div
          className="lightbox"
          onClick={() => {
            setExpanded(false);
            setHovered(false);
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <img src={src} className="lightbox-image" />

            {attachAudioPlayer && (
              <AudioPlayer playlistIndex={playlistIndex} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryImage;