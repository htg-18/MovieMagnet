import { useState } from "react";
import "./year.css";

const Year = ({ handleYearItemClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  function handleClick() {
    setIsClicked(!isClicked);
  }

  const years = Array.from({ length: 2023 - 1911 + 1 }, (_, index) => 1911 + index);

  return (
    <>
      <div 
      className="yearButton" 
      onClick={handleClick}
      style={{ backgroundColor: selectedYear ? "#D0F5BE" : "" }}
      >
      {selectedYear !== null ? selectedYear : "Choose Year"}
      </div>
      {isClicked && (
        <div className="yearList">
          {years.map((year) => (
            <div
              key={year}
              className="listItem"
              onClick={() => {
                setIsClicked(false);
                setSelectedYear(year); 
                handleYearItemClick(year);
              }}
            >
              {year}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Year;
