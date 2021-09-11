import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import Picture from './Picture';

const Pictures: React.FC = () => {
  const [data, setData] = useState<object[]>([]);

  useEffect(() => {
    const data = require('../data.json');
    setData(data);
  }, []);

  return (
    <Fragment>
      <div id='pictures-container'>
        {data?.map((pictureObject, i) =>
          // <Picture pictureItem={pictureObject} />
          console.log(pictureObject)
        )}
      </div>
    </Fragment>
  );
};

export default Pictures;
