import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="navbar">
                <li className="block">
                    <Link to="/">Home</Link>
                </li>
                <li className="block">
                    <Link to="/InsertionSort">Insertion Sort</Link>
                </li>
                <li className="block">
                    <Link to="/SelectionSort">Selection Sort</Link>
                </li>
                <li className="block">
                    <Link to="/MergeSort">Merge Sort</Link>
                </li>
                <li className="block">
                    <Link to="/QuickSort">Quick Sort</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default Navbar;
