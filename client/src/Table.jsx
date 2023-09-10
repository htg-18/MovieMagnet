// import "./table.css"
// const Table = ({ data ,onNameClick}) => {
//   return (
//     <div className="resultList">
//       {data.map((item) => (
//           <div 
//           key={item.id} 
//           className="resultItem"
//           onClick={() => onNameClick(item.first_name)}
//           >
//             {item.first_name}
            
//           </div>
//         ))}
//     </div>
       
     
//   );
// };

// export default Table;

// import React from "react";
// import "./table.css";

// const Table = ({ data, onNameClick }) => {
//   return (
//     <div className="resultList">
//       {data.map((item) => (
//         <div key={item.id}>
          
//           <div className="namesList">
//             {item.names.map((name, index) => (
//               <div
//                 key={index}
//                 className="resultItem"
//                 onClick={() => onNameClick(name)}
//               >
//                 {name}
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Table;

import React from "react";
import "./table.css";

const Table = ({ data, onNameClick }) => {
  return (
    <div className="resultList">
      {data.map((movie) => (
        <div key={movie.id}>
          <div className="namesList">
            {movie.names.map((name, index) => (
              <div
                key={index}
                className="resultItem"
                onClick={() => onNameClick(name)}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Table;

// import React from "react";
// import "./table.css";

// const Table = ({ data, onNameClick }) => {
//   return (
//     <div className="resultList">
//       {data.map((movie) => (
//         <div key={movie.tconst}>
//           <div className="resultItem" onClick={() => onNameClick(movie.names)}>
//             {movie.names}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Table;

