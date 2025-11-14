import React from 'react';
import CloudUpload from './Cloud-upload.png';

export default function Card({ children, title, icon }) {
  const {
    src = CloudUpload,
    size = 24,
    backgroundColor = '#3F75FE',
  } = icon || {};

  return (
    <div className="card">
      <div className="cardIcon" style={{ backgroundColor }}>
        <img src={src} alt="Icon" style={{ width: size, height: size }} />
      </div>
      <div className="cardBody">
        <h2>{title || 'Easy Deployment'}</h2>
        <p>
          {children ||
            'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'}
        </p>
      </div>
    </div>
  );
}
