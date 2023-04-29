import React, { useState, useEffect, useRef } from 'react';

interface Photo {
  id: number;
  url: string;
}

export const Camera: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(error => {
        console.error('Error accessing camera:', error);
      });
  }, []);

  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current, 0, 0);
        const dataUrl = canvas.toDataURL('image/jpeg');
        const newPhoto: Photo = {
          id: Date.now(),
          url: dataUrl
        };
        setPhoto(newPhoto);
      }
    }
  };

  const sendPhoto = () => {
    if (photo) {
      fetch('/api/photos', {
        method: 'POST',
        body: JSON.stringify(photo)
      })
        .then(response => {
          if (response.ok) {
            console.log('Photo sent successfully!');
          } else {
            console.error('Error sending photo:', response.status);
          }
        })
        .catch(error => {
          console.error('Error sending photo:', error);
        });
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay muted playsInline />
      <button onClick={takePhoto}>Take photo</button>
      <button onClick={sendPhoto} disabled={!photo}>Send photo</button>
      {photo && (
        <div>
          <h2>Photo taken:</h2>
          <img src={photo.url} alt="Taken photo" />
        </div>
      )}
    </div>
  );
};
