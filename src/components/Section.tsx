import React from 'react';
import Paragraphs from './Paragraphs';

interface props {
  classname: string;
  icon: string;
  motto: string;
  title: string;
  text: string;
  alt: string;
}

const Section = ({ classname, icon, motto, title, text, alt }: props) => {
  return (
    <div className={`${classname} section`}>
      <Paragraphs motto={motto} title1={title} text={text} />
      <div className="img-box">
        <img src={icon} alt={alt} />
      </div>
      <button className='uppercase' type="submit" onClick={(e) => e.preventDefault()}>
        learn more
      </button>
    </div>
  );
};

export default Section;
