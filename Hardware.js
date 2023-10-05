import React,{useState} from 'react';
import HardwareMenu from './hardwareMenuApi.js';
import HardwareCard from './hardwareCard.js';
import HardwareNavbar from './hardwareNavbar.js';
import './style.css';
const uniqueList = [
      ...new Set (
          HardwareMenu.map((curElem) => {
          return curElem.category;
          }))
          ,"All"
];

const Hardware = () => {
  const [menuData,setMenuData] = useState(HardwareMenu);
  const [HardwareMenuData,setHardwareMenuData] = useState(uniqueList);
  const filterItem = (category) => {
    if(category === "All") {
      setMenuData(HardwareMenu);
      return;
    }
const updatedList = HardwareMenu.filter ((curElem) => {
  return curElem.category === category;
});
setMenuData(updatedList);
};
  return(
    <>
    <HardwareNavbar HardwareMenuData = {HardwareMenuData} filterItem = {filterItem}/>
    <HardwareCard menuData = {menuData}/>
    </>
  )
    }
export default Hardware;
