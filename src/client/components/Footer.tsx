import React from 'react'

export const Footer = () => {
  return (
    <footer className="justify-center items-center">
      &copy; {new Date().getFullYear()} -{' '}
      <a href={'https://hung.thedev.id'}>Hunghg255</a> -{' '}
      <a
        className={'p-1'}
        href={'https://github.com/hunghg255/vite-reactssr'}
      >
        Repo
      </a>
    </footer>
  )
}
