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
          src="https://res.cloudinary.com/daykoacnc/video/upload/v1722192048/My_movie_10_2_1_yx0nqt.mp4"
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
