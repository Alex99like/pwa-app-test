import React from 'react'

export const MetaPWA = () => {
  return (
    <>
      <link rel={'manifest'} href='/manifest.json' />
      <link rel='apple-touch-icon' href='/icon.png' />
      <meta name='theme-color' content='#fff' />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800;900&display=swap" rel="stylesheet" />
    </>
  )
}
