import { useState } from "react";
import "./rating.css";

const RatingRange = ({ handleRatingRangeClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  const ratingRanges = [
    { start: 5, end: 6 },
    { start: 6, end: 7 },
    { start: 7, end: 8 },
    { start: 8, end: 9 },
    { start: 9, end: 10 },
  ];

  return (
    <>
      <div 
      className="ratingButton" 
      onClick={handleClick}
      style={{ backgroundColor: selectedRange ? "#D0F5BE" : "" }}
      >
        {selectedRange !== null
          ? `${selectedRange.start} - ${selectedRange.end}`
          : "Choose Rating Range"}
      </div>
      {isClicked && (
        <div className="ratingList">
          {ratingRanges.map((range, index) => (
            <div
              key={index}
              className="listItem"
              onClick={() => {
                setIsClicked(false);
                setSelectedRange(range);
                handleRatingRangeClick(range.start, range.end);
              }}
            >
              {range.start} - {range.end}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default RatingRange;
