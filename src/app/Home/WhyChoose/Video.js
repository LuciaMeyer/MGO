"use client";

import { useState } from "react";
import { url } from "../../../../public/js/assets.js"; 

import ModalVideo from "react-modal-video";

export default function Video() {
  const [isOpen, setOpen] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  return (
    <>
      <a onClick={() => setOpen(true)} className="video video-popup mfp-iframe">
        <i className="fa fa-play"></i>
      </a>

      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isOpen}
        videoUrl="https://res.cloudinary.com/dw272kava/video/upload/v1739748771/MGO/video1_icoj5g.mp4"
        onClose={() => setOpen(false)}
      />
        {/* videoId="g-jj4KrmYPI?si=7UN07ey9IAgu2ry5" */}

      {/* <a onClick={() => setOpen(true)} className="video video-popup mfp-iframe">
        <i className="fa fa-play"></i>
      </a> */}

        {/* <video width="380" controls autoPlay>
          <source src={url.video} type="video/mp4" />
        </video> */}
    </>
  );
}
