import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="logo">

          <div className="logo-heading">
            <h1>Uphotos</h1>
          </div>

          <div className="about">

            <p>explore the world of images and picture to your fullest.
              Always leave a star if you like it
            </p>
          </div>
          <p>since 2023</p>

        </div>
        <div className="footer-links">
          <h1>checkout</h1>
          <p>wallpapers</p>
          <p>abstract</p>
          <p>latest</p>
          <p>technology</p>
          <p>programming</p>
        </div>
      </div>
      <div className="bottom-footer main_padding">
        <p>&copy; copyrights uphotos</p>
        <div className="made">
          <a target='_blank' rel="noreferrer"  href="https://github.com/lyznne">
            <p>made by -</p>
            <span>enos</span>
            <div className="smile">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 14.5C8 14.5 9.5 16.5 12 16.5C14.5 16.5 16 14.5 16 14.5" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 9.5H9.01" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 9.5H15.01" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </a>
        </div>
        <p>privacy</p>

      </div>
    </footer>
  )
}

export default Footer