// pages/video.js
import Head from 'next/head';

const VideoPage = () => {
  return (
    <div>
      <Head>
        <title>Video Page</title>
      </Head>
      <div className="video-container">
        <h1>Enjoy the Video ❤️</h1>
        <video
          controls
          width="1000"
          height="650"
          src="https://res.cloudinary.com/daykoacnc/video/upload/v1721897593/My_movie_10_1_nqvzix.mp4"
        ></video>
      </div>
      <style jsx>{`
        .video-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #000;
          color: #fff;
        }
        h1 {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default VideoPage;
