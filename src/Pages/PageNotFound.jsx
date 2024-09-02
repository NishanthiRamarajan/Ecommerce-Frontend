import React from 'react'
import page from './PageNotFound.module.css'
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className={page['Error']}>

      <div className={page['image']}>
        <img src="./images/page_not_found.png" alt=""/>
      </div>

      <div className={page['main_p']}>
         <p><em>Oops!</em></p>
      </div>

      <div className={page['highlight']}>
        <span><em>You've ended up in the wrong place. Let's find where you need to be! <br/>
        <Link to='/'><a style={{fontSize:'15px',color:'blue',textDecoration:'underline'}}>find home page?</a></Link></em></span>
      </div>

    </div>
  )
}

export default PageNotFound;