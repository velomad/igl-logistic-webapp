// import React from "react";

// const Dropdown = ({ label, options }) => {
//   return (
//     <div className="space-y-1">
//       <div>
//         <label>{label}</label>
//       </div>
//       <select className="rounded-lg focus:outline-none border-2 h-10 w-full p-1.5">
//         {options.map((el, index) => (
//           <option className="p-2" key={index}>
//             {el}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Dropdown;






import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'
import { FormControl, InputLabel } from '@mui/material';

const DropDown = ({ label }) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl fullWidth>

      <InputLabel id="demo-simple-select-label">Age</InputLabel>

      <Select
        className="w-full"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        size="small"
        label="Age"
        variant="filled"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}

export default DropDown

