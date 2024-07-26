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
      question.innerHTML = 'Took You Long Enough ...';
      setTimeout(() => {
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
  }, [router]);

  return (
    <div>
      <Head>
        <title>Million Dolar Question</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper" ref={wrapperRef}>
        <img src="/assets/test2.gif" alt="Question Mark" className="question-image" />
        <h2 className="question" ref={questionRef}>Are We Finally Official?</h2>
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
            background: linear-gradient(135deg, #6226a2 0%, #c325fc 100%);
            color: #fff;
        }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #6226a2 0%, #c325fc 100%);
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
        .question-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 3px solid #c325fc;
            margin-bottom: 20px;
        }
        h2 {
            font-size: 3em;
            color: linear-gradient(135deg, #6226a2 0%, #c325fc 100%);
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
            border: 2px solid #c325fc;
            outline: none;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
        }
        button:nth-child(1) {
            margin-left: -200px;
            background: #c325fc;
        }
        button:nth-child(2) {
            margin-right: -200px;
            color: #c325fc;
        }
      `}</style>
    </div>
  );
}
