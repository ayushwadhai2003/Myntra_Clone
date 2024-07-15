import React from 'react'
import Header from '../Components/Header/Header'
import Breadcrumbs from '../Components/Breackcrumbs/Breadcrumbs'
import FilterOptions from '../Components/FilterOptions/FilterOptions'
import AllProducts from '../Components/AllProducts/AllProducts'

function HomePage() {
  return (
    <div className='flex flex-col'>
      {/* header */}
      <Header />

      {/* breadcrumbs */}
      <Breadcrumbs />
      <div className='flex flex-row'>
        {/* filterOptions */}
        <FilterOptions />

        {/* allproducts */}
        <AllProducts />
      </div>

    </div>
  )
}

export default HomePage