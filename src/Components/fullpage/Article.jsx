import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const Article = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Container>
        <div className='bg-light p-5 position-relative'>
          <Button onClick={goBack} variant='button-primary' className='position-absolute top-0 start-0 m-2 button-primary-outline'>
            Back
          </Button>
          <h1 className='text-center font-weight-bold mb-4'>
            Article Heading from API
          </h1>

          <div className='text-center mb-4'>
            <p className='text-lg text-secondary'>
              Date Published: <span className='text-dark'>2023-9-2</span>
            </p>
            <p className='text-lg text-secondary'>
              Category: <span className='text-primary'>Politics</span>
            </p>
          </div>

          <div className='mt-6'>
            <h3 className='text-2xl font-weight-bold'>Topic: Google Trends</h3>

            <p className='text-lg text-dark'>
              Description: Sand is a granular material composed of finely divided mineral particles. Sand has various compositions but is defined by its grain size. Sand grains are smaller than gravel and coarser than silt. Sand can also refer to a textural class of soil or soil type; i.e., a soil containing more than 85 percent sand-sized particles by mass.

              The composition of sand varies, depending on the local rock sources and conditions, but the most common constituent of sand in inland continental settings and non-tropical coastal settings is silica (silicon dioxide, or SiO2), usually in the form of quartz. Highlight: Silica

              {showFullContent && (
                <>
                  Calcium carbonate is the second most common type of sand, for example, aragonite, which has mostly been created, over the past 500 million years, by various forms of life, like coral and shellfish. For example, it is the primary form of sand apparent in areas where reefs have dominated the ecosystem for millions of years, as in the Caribbean. Somewhat more rarely, sand may be composed of calcium sulfate, such as gypsum and selenite, as is found in places such as White Sands National Park and Salt Plains National Wildlife Refuge in the U.S.

                  Sand is a non-renewable resource over human timescales, and sand suitable for making concrete is in high demand. Desert sand, although plentiful, is not suitable for concrete. 50 billion tons of beach sand and fossil sand are used each year for construction.
                </>
              )}
            </p>
            {!showFullContent && (
              <Button onClick={toggleContent} variant='outline-primary' className='mt-4 button-primary-outline'>
                Read More
              </Button>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Article;
