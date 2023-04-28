import React from 'react'

export const MetaPWA = () => {
  return (
    <>
      <link rel={'manifest'} href='/manifest.json' />
      <link rel='apple-touch-icon' href='/icon.png' />
      <meta name='theme-color' content='#fff' />
    </>
  )
}
