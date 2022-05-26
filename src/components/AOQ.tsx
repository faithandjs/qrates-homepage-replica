import React from 'react';

interface props {
  artist: number;
  text: string;
  by: string;
  image: string;
  more?: string;
}
const AOQ = ({ artist, text, by, image, more }: props) => {
  const activeCheck = () => {
    artist === 1 ? 'active' : null;
  };
  return (
    <div className={`artist aoq${artist}`}>
      <div className="texts">
        <div className="uppercase">artists on Qrates</div>
        <div className="quote">
          <q>{text}</q>
          {artist === 1 ? (
            <p>—<span className="underline uppercase">{by}</span></p>
          ) : (
            <p>
              —{`${by} `}
              (<span className="underline capitalize">{more}</span>)
            </p>
          )}
        </div>
        <div className="controls">
          <div>1</div>
          <div>2</div>
        </div>
      </div>
      <div className="img-box">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default AOQ;
