import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us <a href="/">@studioblue</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Designed
          by <a href="https://talentsmedia.netlify.app">talesmedia</a>.
        </span>
      </div>
    </footer>
  </div>
)
