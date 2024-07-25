import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const wrapperRef = useRef(null);
  const questionRef = useRef(null);
  const yesBtnRef = useRef(null);
  const noBtnRef = useRef(null);
  const router = useRouter();
  
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const question = questionRef.current;
    const yesBtn = yesBtnRef.current;
    const noBtn = noBtnRef.current;
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const handleClick = () => {
      question.innerHTML = 'Took you long enough ...';setTimeout(() => {
        router.push('/video'); 
      }, 3000);
    };

    const handleMouseOver = () => {
      const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
      const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
      noBtn.style.left = i + 'px';
      noBtn.style.top = j + 'px';
    };

    yesBtn.addEventListener('click', handleClick);
    noBtn.addEventListener('mouseover', handleMouseOver);

    return () => {
      yesBtn.removeEventListener('click', handleClick);
      noBtn.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper" ref={wrapperRef}>
        <i className="fa fa-question-circle"></i>
        <h2 className="question" ref={questionRef}>Be My Girlfriend?</h2>
        <div className="btn-group">
          <button className="yes-btn" ref={yesBtnRef}>Yes</button>
          <button className="no-btn" ref={noBtnRef}>No</button>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        *::selection {
            background: #7d2ae8;
            color: #fff;
        }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: #7d2ae8;
        }
        .wrapper {
            position: relative;
            width: 800px;
            height: 600px;
            background: #fff;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        i {
            font-size: 7.5em;
            color: #7d2ae8;
            border: 5px solid transparent;
            outline: 3px solid #7d2ae8;
            border-radius: 50%;
        }
        h2 {
            font-size: 3em;
            color: #7d2ae8;
            margin: 15px 0;
        }
        .btn-group {
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: center;
            margin-top: 15px;
        }
        button {
            position: absolute;
            width: 150px;
            height: inherit;
            font-size: 1.2em;
            color: #fff;
            font-weight: 600;
            border-radius: 30px;
            border: 2px solid #7d2ae8;
            outline: none;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
        }
        button:nth-child(1) {
            margin-left: -200px;
            background: #7d2ae8;
        }
        button:nth-child(2) {
            margin-right: -200px;
            color: #7d2ae8;
        }
      `}</style>
    </div>
  );
}
