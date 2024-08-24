import React from 'react';

const Video: React.FC = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      <source src="/loop22.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
