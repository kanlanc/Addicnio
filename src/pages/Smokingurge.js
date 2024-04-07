import React, { useEffect, useState } from 'react';

import { subscribeToNeurosityData } from '@neurosity/sdk';
import axios from 'axios';

const SmokingUrgePage = () => {
  const [memeUrl, setMemeUrl] = useState('');

  useEffect(() => {
    // const subscription = subscribeToNeurosityData((data) => {
    //   // Process the Neurosity data and check for cigarette smoke urge
    //   if (data.cigaretteUrgeDetected) {
    //     // Call the meme API to fetch a relevant meme
    //     fetchMeme();
    //   }
    // });

    // // Clean up the subscription when the component unmounts
    // return () => {
    //   subscription.unsubscribe();
    // };
  }, []);

  const fetchMeme = async () => {
    try {
      const response = await axios.get('https://api.example.com/memes/no-smoking');
      setMemeUrl(response.data.url);
    } catch (error) {
      console.error('Error fetching meme:', error);
    }
  };

  return (
    <div>
      <h1>Smoking Urge Detection</h1>
      {memeUrl && (
        <div>
          <h2>No no no, don't do that!</h2>
          <img src={memeUrl} alt="No Smoking Meme" />
        </div>
      )}
    </div>
  );
};

export default SmokingUrgePage;