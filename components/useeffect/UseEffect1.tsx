"use client";

import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    useEffect(()=>{
        setTimeout(() => {
            console.log('i am setTimeOut web API with 10 seconds')
        }, 10000);
    })

  return (
    <div>

    </div>
  )
}

export default UseEffect1;