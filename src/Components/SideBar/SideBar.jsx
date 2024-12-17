import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/freshcart-logo.svg'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FilterContext } from '../../Context/Filter.context';
export default function SideBar({isOpen}) {
const {expensiveToCheaper,lowToExpensive} =useContext(FilterContext)  
  
  
  
  

   
      useEffect(()=>{
      },[])
  return <>
  <section className={`${isOpen ? 'hidden': 'fixed'} side-bar  left-0 bottom-0 top-0 bg-white z-50  p-6`} >
    <div className="mb-4">
        <img className='w-full' src={logo} alt="" />
    </div>
    <div className="">
        <h4>price</h4>
        <div className="flex flex-col justify-center items-start">
        <label>
            <input
            onClick={expensiveToCheaper}
            type="radio" name='price' />
            higher to lower price
        </label>
        
        <label>
            <input
            onClick={lowToExpensive}
            type="radio" name='price' />
            low to expensive
        </label>
        </div>
    </div>
  </section>
  </>
}
