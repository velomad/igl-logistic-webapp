// import React from "react";

// const InputField = () => {
//   return (
//     <div className="space-y-1 w-full">
//       <div>
//         <label className="capitalize">{label}</label>
//       </div>
//       <input
//         className="rounded-lg border-2 w-full p-1.5 capitalize focus:outline-none"
//         type={type}
//         placeholder={placeholder}
//       />
//     </div>
//   );
// };

// export default InputField;


import React from 'react'
import TextField from '@mui/material/TextField';


const InputField = ({ label, type, placeholder }) => {
  return (
    <div>
      <TextField className="w-full" size="small" color="primary" id="outlined-basic" label={label} variant="filled" />
    </div>
  )
}

export default InputField
