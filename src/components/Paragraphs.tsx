import React from 'react';

interface props {
  motto: string;
  title1: string;
  title2?: string;
  title3?: string;
  text: string;
}

const Paragraphs = ({ motto, title1, title2, title3 = '', text }: props) => {
  return (
    <div className="paragraphs">
      <p className="uppercase">{motto}</p>
      <h3 >
        {title1}
        {title2 ? (
          <>
            <br />
            {title2}
          </>
        ) : (
          ''
        )}{' '}
        <span>{title3}</span>
      </h3>
      <p className='text'>{text}</p>
    </div>
  );
};

export default Paragraphs;
