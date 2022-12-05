import React from 'react'
import { FiBell, FiSearch} from 'react-icons/fi'
import { BsSquare} from 'react-icons/bs'
import { BiPaperPlane} from 'react-icons/bi'



const NavBar = () => {
  return (
    <div className='navBar'>
        <div className='navInput'>
            <FiSearch/>
            <input className='navInputField' type="text" />
        </div>
        <div className='navRight'>
      
        <div className="navIcon offset5px"><FiBell/> </div>
        <div className="navIcon offset5px"><BsSquare/> </div>
        <div className="navIcon"><BiPaperPlane/></div>
           
            <div className="navAvatar"></div>
        </div>
    </div>
  )
}

export default NavBar