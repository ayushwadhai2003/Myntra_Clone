import React from 'react'
import { CiSearch } from 'react-icons/ci';
function FilterOptions() {

  const allFilters = [
    {
      filterBy: 'BRAND',
      search: true,
      inputType: 'checkbox',
      color: false,
      filters: [
        { filterName: 'HIGHLANDER', filteredProducts: 12345 },
        { filterName: 'Snitch', filteredProducts: 5235 },
        { filterName: 'Roadster', filteredProducts: 213 },
        { filterName: 'Parx', filteredProducts: 7890 },
        { filterName: 'Indian Terrain', filteredProducts: 24537 },
        { filterName: 'M & H', filteredProducts: 10000 },
        { filterName: 'ShowOff', filteredProducts: 100 },
        { filterName: 'Luis Phillipe', filteredProducts: 1 },
      ],
      more: '+139'
    },
    {
      filterBy: 'PRICES',
      search: false,
      inputType: 'checkbox',
      color: false,
      filters: [
        { filterName: 'Rs. 249 to 1000', filteredProducts: 12345 },
        { filterName: 'Rs. 1000 to 2000', filteredProducts: 5235 },
        { filterName: 'Rs. 2000 to 3000', filteredProducts: 213 },
        { filterName: 'Rs. 3000 to 4000', filteredProducts: 213 },
        { filterName: 'Rs. 4000 to 5000', filteredProducts: 213 },
      ],
    },

    {
      filterBy: 'COLOR',
      search: true,
      inputType: 'checkbox',
      color: true,
      filters: [
        { filterName: 'white', filteredProducts: 12345 },
        { filterName: 'blue', filteredProducts: 5235 },
        { filterName: 'red', filteredProducts: 213 },
        { filterName: 'purple', filteredProducts: 213 },
        { filterName: 'black', filteredProducts: 213 },
        { filterName: 'yellow', filteredProducts: 213 },
        { filterName: 'orange', filteredProducts: 213 },
        { filterName: 'green', filteredProducts: 213 },
      ],
      more: '+30'
    },

    {
      filterBy: 'Discount Range',
      search: false,
      inputType: 'radio',
      color: false,
      filters: [
        { filterName: '10% and About', filteredProducts: 12345 },
        { filterName: '20% and About', filteredProducts: 5235 },
        { filterName: '30% and About', filteredProducts: 213 },
        { filterName: '40% and About', filteredProducts: 213 },
        { filterName: '50% and About', filteredProducts: 213 },
        { filterName: '60% and About', filteredProducts: 213 },
        { filterName: '70% and About', filteredProducts: 213 },
        { filterName: '80% and About', filteredProducts: 213 },
      ],
    },

  ];

  // const brands = [
  //   { brandName: 'HIGHLANDER', totalProducts: 123 },
  //   { brandName: 'Snitch', totalProducts: 1544 },
  //   { brandName: 'Roadster', totalProducts: 254 },
  //   { brandName: 'Parx', totalProducts: 1246 },
  //   { brandName: 'Indian Terrain', totalProducts: 124 },
  //   { brandName: 'M & H', totalProducts: 788 },
  //   { brandName: 'ShowOff', totalProducts: 36 },
  //   { brandName: 'Luis Phillipe', totalProducts: 1 },
  // ]

  // const price = [
  //   { priceValue: 'Rs.249 to Rs.10312', totalContent: 108020 },
  //   { priceValue: 'Rs.10312 to Rs.20375', totalContent: 211 },
  //   { priceValue: 'Rs.20375 to Rs.30438', totalContent: 17 },
  //   { priceValue: 'Rs.30438 to Rs.40501', totalContent: 8 },
  // ]

  return (
    <div className='w-[280px] border-r-2 border-t-2 border-slate-300 rounded-sm'>

      {
        allFilters.map((oneFilter, i) => (

          < div key={i} className='border-b-2 border-slate-200 pb-5 p-4' >
            <div className='flex flex-row items-center justify-between mb-2'>
              <p className='text-sm font-bold'>{oneFilter.filterBy}</p>
              {
                oneFilter.search &&
                <CiSearch className='text-md bg-slate-100 p-1.5 rounded-full box-content' />
              }
            </div>
            <div className='flex flex-col'>
              {
                oneFilter.filters.map((oneBrand, i) => (
                  <div key={i} className='flex flex-row items-center mb-2'>
                    <input
                      name={oneFilter.filterBy}
                      type={oneFilter.inputType}
                      className='mr-2'
                    />
                    {
                      oneFilter.color && <div
                        style={{
                          backgroundColor: oneBrand.filterName,
                          border: oneBrand.filterName === 'white' ? '1px solid lightgray' : 'none'
                        }}
                        className='w-3 h-3  rounded-full mr-2'>
                      </div>
                    }

                    <p className='text-sm font-normal mr-1'>{oneBrand.filterName}</p>
                    <p className='text-[10px] text-slate-500'>({oneBrand.filteredProducts})</p>
                  </div>
                ))
              }
              {
                oneFilter.more &&
                <p className='text-[17px] font-semibold text-red-500 ml-7 mt-2'>{oneFilter.more} more</p>
              }
            </div>
          </div>
        ))
      }



      {/* price */}
      {/* <div className='border-b-2 border-slate-200 pb-5 p-4'>
        <div className='flex flex-row items-center justify-between mb-2'>
          <p className='text-sm font-bold'>PRICE</p>

        </div>
        <div className='flex flex-col'>
          {
            price.map((onePrice, i) => (
              <div key={i} className='flex flex-row items-center mb-2'>
                <input
                  type="checkbox"
                  className='mr-2'
                />
                <p className='text-sm font-normal mr-1'>{onePrice.priceValue}</p>
                <p className='text-[10px] text-slate-500'>({onePrice.totalContent})</p>
              </div>
            ))
          }
        </div>
      </div> */}

      {/* color */}
      <div>

      </div>

      {/* discount range */}
      <div>

      </div>


    </div >
  )
}

export default FilterOptions