import React, {useState} from "react"
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"

type SearchBarProps ={ value: string; onSearch: (val:string) => void}
export const SearchBar: React.FC<SearchBarProps> = ({value, onSearch}) => {

    return (
        <div className="inp ut-wrapper">
            <FaSearch id="search-icon"></FaSearch>
            <input placeholder="Search exercise" value={value} onChange={(e) => onSearch(e.target.value)}/>
        </div>
    )
    
}