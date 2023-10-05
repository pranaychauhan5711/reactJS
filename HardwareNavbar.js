import React from 'react' 

const HardwareNavbar = () => {
  
    return (
            <>
              <nav className="navbar">
                <div className="btn-group">
                  {
                    HardwareMenuData.map((curElem) =>{
                      return(
                        <button className="btn-group__item" onClick={() => filterItem(curElem)}>
                          {curElem}
                        </button>
                      )
                    })
                  }
                </div>
              </nav>
              </>
        )
}
export default HardwareNavbar;
