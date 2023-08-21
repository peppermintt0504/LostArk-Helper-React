import React from 'react';
import "./Header.style.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/reducer/index'

const Header = () =>{
    const dispatch = useDispatch();
    const temp = useSelector((state:RootState)=> state.generalState.temp);

    console.log(temp);

    return (
        <div className='headerLayout'>

        </div>
    )
}

export default Header;

