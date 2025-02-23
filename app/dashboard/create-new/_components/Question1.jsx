'use client'
import { Textarea } from '@/components/ui/textarea';
import { Wand } from 'lucide-react';
import React from 'react'


function Question1({onUserSelect,onCreateClickHandler}) {
  return (
    // <div className="prompt flex flex-row justify-center items-center gap-10">
    <input className="bg-transparent text-zinc-200" type="search" placeholder="Day rating (1-10)?" onChange={(e)=>onUserSelect('q1',e.target.value)}/>
  // </div>
  )
}

export default Question1
