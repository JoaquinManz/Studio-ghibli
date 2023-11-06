import React from 'react';
import './Banner.css'

function Banner () {
    return (
        <>
            <div className="banner-container">
                <img className='banner-img' src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/08/ghibli.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" alt="Studio Ghibli banner"/>
                <span className='banner-text'>Ghibli Studios</span>
            </div>
        </>
    )
}

export default Banner;