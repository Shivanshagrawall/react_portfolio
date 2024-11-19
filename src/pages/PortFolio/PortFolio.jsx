import React from 'react'
import Navbar from '../../Components/Navbar'
import './PortFolio.css'
import { PortFolio as portfolioData } from '../../data';
import PortFolioItem from '../../Components/PortFolioItem';
const PortFolio = () => {
  return (
    <div>
      {/* PortFolio Section */}
      <div className="portfolio_section">
        {/* PortFolio Heading */}
        <div className="portfolio_title">
          <h2>My <span>Portfolio</span> </h2>
        </div>
        {/* Portfolio Content */}
        <div className="portfolio_content">
          {portfolioData.map((item) => {
            return (
              <PortFolioItem key={item.id} {...item} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PortFolio