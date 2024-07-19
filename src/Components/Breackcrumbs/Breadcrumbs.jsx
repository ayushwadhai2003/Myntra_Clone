import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

function Breadcrumbs() {

  const allFIlteres = ['Add-Ons', 'Bundles', 'Collar', 'Country of Origin', 'Fabric', 'Fabric 2', 'Features']

  return (
    <div className='flex flex-col px-5 py-3 m-auto'>
      <p className='text-sm mb-5 text-slate-900 '>Home / Clothing / Shirts / <span
        className='font-bold'>Men&apos;s Casual Wear</span></p>

      <p className='text-md text-slate-900 mb-5'> <span
        className='font-bold'>Cosual Shirts For Men</span>- 107809 items</p>

      <div className='flex flex-row items-center'>
        <p className='text-[16px] font-bold w-[300px]'>FILTERS</p>

        <div className='flex flex-row items-center justify-between w-[1050px]'>
          {/* options */}
          <div className='flex flex-row items-center'>
            {
              allFIlteres.map((oneFilter, i) => (
                < div key={i} className='flex flex-row items-center px-2 py-1 rounded-full hover:bg-gray-100 hover:cursor-pointer mx-1'>
                  <p className='text-xs text-slate-600'>{oneFilter}</p>
                  <FaChevronDown className='text-[11px] ml-1 text-slate-300 mt-2' />
                </div>
              ))
            }

          </div>

          {/* recomended box */}
          <div>
            <div className='flex flex-row items-center justify-between border-2 border-gray-300 px-4 py-2 rounded-sm w-[300px] hover:cursor-pointer'>
              <p className='text-sm'>Sort By : <span className='font-bold'>Recommended</span></p>
              <FaChevronDown className='text-xs text-gray-600' />
            </div>

            <div className='hidden'>
              <p>Recommended</p>
              <p>What's New</p>
              <p>Popularity</p>
              <p>Better Discount</p>
              <p>Price: High to Low</p>
              <p>Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Breadcrumbs