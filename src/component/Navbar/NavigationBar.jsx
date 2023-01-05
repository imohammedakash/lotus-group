import React from 'react'
import NavItems from './NavItems'
const NavigationBar = () => {

    return (
        <div className='w-full py-1 px-56 box-border'>
            <ul className="flex items-center justify-between w-full h-12">
             <NavItems title="Home" link='/' />
             <NavItems title="Latest" link='/latest' />
             <NavItems title="News" link='/news' />
             <NavItems title="Markets" link='/markets' />
             <NavItems title="Premium" link='/premium' />
             <NavItems title="Money" link='/money' />
             <NavItems title="MutualFund" link='/mutual-fund' />
             <NavItems title="Industry" link='/industry' />
             <NavItems title="Companies" link='/company' />
             <NavItems title="Technology" link='/technology' />
             <NavItems title="Opinion" link='/opinion' />
             <NavItems title="Web Stories" link='/web-stories' />
            </ul>
        </div>
    )
}

export default NavigationBar