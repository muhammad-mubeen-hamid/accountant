import React from 'react';

function Index() {
  const link = 'https://h77szjsxx44hjucva5f3qlp6oy0xdquv.lambda-url.us-east-1.on.aws/';
  const getData = async () => {
    const response = await fetch(link, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      },
    });
    console.error(response);
  };
  return (
    <button type="button" onClick={getData}>Get Data</button>
  );
}

export default Index;