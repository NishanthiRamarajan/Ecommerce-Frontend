import React from "react";
import search from "./Search.module.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = ({ value, onChangeData }) => {
  return (
    <div>
        <div className={search['search-bar']}>
            <input type="text" placeholder="Search products..." value={value}
            onChange={onChangeData} className={search['input_home']}/>
            <button className={search['button_home']}><SearchOutlinedIcon/></button>
        </div>
    </div>
  );
};

export default Search;