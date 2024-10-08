'use client'

import React, { useEffect } from 'react'


const Navbar = () => {
   
    return (
        <header className="py-4 border-b md:border-none fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto px-4 ">
                <div className="flex justify-between items-center md:border md:p-2.5 rounded-xl max-w-2xl lg:max-w-4xl mx-auto backdrop-blur-0blur-sm">
                    <div>
                        <div className="font-bold px-2">
                            BlockCash
                        </div>
                    </div>
                    
                    <div className="flex gap-4 items-center">
                        <a href='https://transaction-cash-app.vercel.app/' className='bg-black rounded-xl px-4 py-2.5'>
                            <button className="rounded-xl font-semibold items-center bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff)] bg-clip-text text-transparent [background-size:200%]"> Send Solana </button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
