import { useState } from "react";
import "./adult.css"
const Adult = ({handleAdultItemClick}) => {
    const [isClicked,setIsClicked]=useState(false)
    const [selectedValue, setSelectedValue] = useState(null);

    function handleClick()
    {
        setIsClicked(!isClicked)
    }
  return (
    <>
      <div 
      className="adultButton" 
      onClick={handleClick}
      style={{ backgroundColor: selectedValue!==null ? "#D0F5BE" : "" }}
      >
       {selectedValue !== null ? (selectedValue === 1 ? "Adult" : "Not Adult") : "Adult/Not Adult"}
      </div>
      {
        isClicked &&
        <div className="adultList">
          <div className="listItem" 
             onClick={() =>{
                setIsClicked(!isClicked)
                setSelectedValue(1);
                handleAdultItemClick(1)
             } }
          >
            Adult
          </div>
          <div className="listItem"
            onClick={() =>{
                setIsClicked(!isClicked)
                setSelectedValue(0);
                handleAdultItemClick(0)
             } }
          >
            Not Adult
          </div>
       </div>
      }
      
    </>
     
     
       
     
  );
};

export default Adult;