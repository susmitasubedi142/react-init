import React, { useEffect } from 'react'
import { useState } from 'react';

const axios = require('axios');

export default function GoogleTranslate() {
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [input, setinput] = useState("");
    const[ouput, setOuput] = useState("");

    useEffect(() =>{
        axios.get('https://libretranslate.com/languages',
            {headers:{'accept': 'application/json'}})
            .then(res=>{
                console.log(res.data);
            })

    })

    
    // curl -X 'GET' \
    // 'https://libretranslate.com/languages' \       //LibreTranslate yo api key ko lagi
    // -H 'accept: application/json'



  return (
    <div>
    <div className='text-center gap-4 '>
        From:
        <select className='border border-black '>
            <option value="1">English</option>
            <option value="2">Nepali</option>
        </select>
        To:
        <select className='border border-black'>
            <option value="1">English</option>
            <option value="2">Nepali</option>
        </select>

       <div className='flex gap-8 px-6 py-6 justify-center'>
           <textarea className='border border-black w-1/3 h-1/3'></textarea>
           <textarea className='border border-black w-1/3 h-1/3'></textarea>           
       </div>
       <div>
        <button>Translate</button>
       </div>
    </div>
</div>
  )
}
