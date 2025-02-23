'use client'
import { Textarea } from '@/components/ui/textarea';
import { Wand } from 'lucide-react';
import React from 'react'


function Question2({onUserSelect,onCreateClickHandler}) {
  return (
    // <div className="prompt flex flex-row justify-center items-center gap-10">
    <input className="bg-transparent text-zinc-200" type="search" placeholder="Mood color?" onChange={(e)=>onUserSelect('q2',e.target.value)}/>
  // </div>
  )
}

export default Question2
