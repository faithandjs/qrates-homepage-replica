import { useEffect } from 'react';
import React from 'react';
import close from '../pages/index';
interface props {
  num: string;
  summary: string;
  text: string;
}

const Details = ({ num, summary, text }: props) => {
  const elements = document.querySelectorAll('details');
  const closeOthers = (id) => {
   /* elements.forEach((det) => {
      if (det.id === id) {
        det.open = true;
        console.log('.id', det.open);
      } else {
        console.log('else');
      //  det.removeAttribute('open');
      }
    });*/
    return null;
  };
  return (
    <details className="details" id={num} onClick={() => closeOthers(num)}>
      <summary className='summary capitalize' onClick={() => closeOthers(num)}>{summary}</summary>
      <div>
        <p>{text}</p>
        <p className="link uppercase underline">
          <a href="#">learn more →</a>
        </p>
      </div>
    </details>
  );
};

export default Details;
