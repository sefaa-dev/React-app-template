import React from 'react'
import Aboutt from './Aboutt'
import Contactt from './Contactt'
import Project from './Project'
import Res from './Res'

function PageContentt() {
  return (
   <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
       
       
       <Project></Project>
       <Aboutt></Aboutt>
       <Contactt></Contactt>
       <Res></Res>

       
       </div>

  )
}

export default PageContentt