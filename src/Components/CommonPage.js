import React from 'react';
import CommonSection from './CommonSection';

const CommonPage = ({ title, subTitle, backgroundImage, highlightWord }) => {
  return (
    <CommonSection
      title={title}
      subTitle={subTitle}
      backgroundImage={backgroundImage}
      highlightWord={highlightWord}
    />
  );
};

export default CommonPage;