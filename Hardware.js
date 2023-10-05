import React,{useState} from 'react';
import HardwareMenu from './HardwareMenuApi.js';
import HardwareCard from './HardwareCard.js';
import HardwareNavbar from './HardwareNavbar.js';
import './style.css';
const uniqueList = [
      ...new Set (
          HardwareMenu.map((curElem) => {
          return curElem.category;
          }))
          ,"All";
];
const filterItem = (category) => {
          if(curElem === "All") {
            setMenuData(HardwareMenu);
            return;
          }
      const updatedList = HardwareMenu.filter ((curElem) => {
        return curElem.category === category;
      });
      setmenuData(updatedList);
};
const Hardware = () => {
  const [menuData,setMenuData] = useState(HardwareMenu); 
  const [HardwareMenuData,setHardwareMenuData] = useState(uniqueList);
  return(
    <>
    <HardwareNavbar HardwareMenuData = {HardwareMenuData} filterItem = {filterItem}/>
    <HardwareCard menuData = {menuData}/>
    </>
  )
    }
export default Hardware;
