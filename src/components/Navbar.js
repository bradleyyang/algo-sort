import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/InsertionSort">Insertion Sort</Link>
            </li>
            <li>
                <Link to="/SelectionSort">Selection Sort</Link>
            </li>
            <li>
                <Link to="/MergeSort">Merge Sort</Link>
            </li>
            <li>
                <Link to="/QuickSort">Quick Sort</Link>
            </li>
        </div>
    )
}

export default Navbar;
