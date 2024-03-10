// NotFound.tsx

import React from 'react';

const NotFound: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '36px',
    color: '#FF5733',
  };

  const messageStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#333',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404 Not Found</h1>
      <p style={messageStyle}>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
