// 'use client'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { Textarea } from '@/components/ui/textarea';
// import { SparklesIcon } from 'lucide-react';
// import React, { useState } from 'react'


// function SelectTopic({ onUserSelect }) {
//   // const options = ['Custom Prompt', 'Sports', 'News', 'learning']
//   //   const options = [
//   //     'Custom Prom pt',
//   //     'Students: Create engaging content that simplifies complex subjects for easier understanding.',
//   //     'Teachers: Create interactive videos to explain lessons and difficult concepts effectively.',
//   //     'YouTubers: Create engaging and entertaining videos based on trending topics or facts.',
//   //     'Social Media: Create engaging and suspenseful videos to keep viewers watching until the end.',
//   //     'Journalists: Create informative summaries that visually present breaking news articles.',
//   //     'Bloggers: Create quick and digestible video summaries of blog posts to attract views.',
//   //     'Digital Marketers: Create compelling promotional content from brand websites or campaigns.',
//   //     'Advertisers: Create attention-grabbing visual ads based on factual data and reports.',
//   //     'Casual Users: Create fun and entertaining videos from favorite websites or articles.',
//   //     'NGOs: Create informative videos that raise awareness on social, environmental, or human rights issues.',
//   //     'Manga Readers: Create dynamic animated formats from favorite manga scenes for a fresh experience.',
//   //     "Parents: Create interactive videos that bring children's stories to life during storytime.",
//   //     'HR Departments: Create engaging training content to simplify onboarding and policy understanding.',
//   //     'Authors: Create dynamic trailers to promote books using novel excerpts or highlights.',
//   //     'Motivational Speakers: Create impactful highlight videos that share powerful messages effectively.',
//   //     'Real Estate Agents: Create engaging animated tours that showcase properties visually.',
//   //     'Healthcare Providers: Create educational videos to inform patients about health conditions.',
//   //     'E-commerce Stores: Create visually appealing videos to showcase product offerings effectively.',
//   //     'Event Planners: Create promotional videos that increase visibility and engagement for events.',
//   //     'Coding Bootcamps: Create animated lessons that simplify technical skills through visual learning.',
//   //     'Law Firms: Create easy-to-understand videos that simplify complex legal concepts for clients.',
//   //     'Podcasters: Create visual content summarizing podcast episodes to enhance audience engagement.'
//   // ];
//   const options = [
//     'Custom Prompt',
//     'Emotional: Deep & heartfelt',
//     'Uplifting: Positive & warm',
//     'Fantasy: Magical & dreamy',
//     'Romance: Love & tsundere',
//     'Comedy: Funny & witty',
//     'Dark: Twisted & eerie',
//     'Horror: Scary & gruesome',
//     'Fate: Life-changing moments',
//     'Resilience: Struggles & growth'
//   ];

//   const [selectedOption, setSelectedOption] = useState();
//   return (
//     <div className='className="text-black sample flex justify-center items-center gap-2 cursor-pointer"'>
//       {/* <h2 className='font-bold text-2xl text-primary'>Content</h2>
//       <p className='text-gray-500'>What is the topic of your video?</p> */}
//       <Select onValueChange={(value) => {
//         setSelectedOption(value);
//         value != 'Custom Prompt' && onUserSelect('topic', value)
//       }}

//       >
//         <SelectTrigger className="bg-transparent text-black">
//           <SparklesIcon />
//           <SelectValue placeholder="Content Type" />
//         </SelectTrigger>
//         <SelectContent className="bg-black text-white">
//           {/* {options.map((item,index)=>(
//             <SelectItem value={item}>{item}</SelectItem>
//           ))} */}
//           {options.map((item, index) => (
//             <SelectItem key={index} value={item}>{item}</SelectItem>
//           ))}

//         </SelectContent>
//       </Select>

//       {selectedOption == 'Custom Prompt' &&
//         <Textarea className="mt-5"
//           onChange={(e) => onUserSelect('topic', e.target.value)}
//           placeholder="Write prompt about the type of video you want to generate" />
//       }

//     </div>
//   )
// }

// export default SelectTopic4




'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea';
import { SparklesIcon } from 'lucide-react';
import React, { useState } from 'react'


function SelectTopic({ onUserSelect }) {
  const options = {
    'Custom Prompt': 'Custom Prompt',
    'Emotional: Deep & heartfelt': 'Personalized Stories: Create immersive, emotion-driven stories based on user feelings and mood.',
    'Uplifting: Positive & warm': 'Uplifting Tales: Craft a heartwarming story that boosts the reader\'s mood and motivation.',
    'Fantasy: Magical & dreamy': 'Dreamlike Adventures: Build a fantasy or mystical journey based on the user’s imagination.',
    'Romance: Love & tsundere': 'Love & Connection: Develop a touching romance or friendship-based story with emotional depth.',
    'Comedy: Funny & witty': 'Comedy & Lighthearted: Write a funny, feel-good story filled with humor and playful situations.',
    'Dark: Twisted & eerie': 'Dark & Twisted: Craft a suspenseful, eerie, or psychological horror story with unsettling twists.',
    'Horror: Scary & gruesome': 'Gore & Horror: Create a gruesome and intense horror story filled with shocking and terrifying details.',
    'Fate: Life-changing moments': 'Unexpected Encounters: Craft a story about serendipity—an unexpected meeting that changes everything.',
    'Resilience: Struggles & growth': 'Overcoming Challenges: Create a narrative about perseverance and triumph over adversity.'
  };

  const [selectedOption, setSelectedOption] = useState();
  return (
    <div className='className="text-black sample flex justify-center items-center gap-2 cursor-pointer"'>
      {/* <h2 className='font-bold text-2xl text-primary'>Content</h2>
      <p className='text-gray-500'>What is the topic of your video?</p> */}
      <Select onValueChange={(value) => {
        setSelectedOption(value);
        value != 'Custom Prompt' && onUserSelect('topic', options[value])
      }}

      >
        <SelectTrigger className="bg-transparent text-black">
          <SparklesIcon />
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent className="bg-black text-white">
          {/* {options.map((item,index)=>(
            <SelectItem value={item}>{item}</SelectItem>
          ))} */}
          {Object.keys(options).map((key, index) => (
  <SelectItem key={index} value={key}>{key}</SelectItem>
))}



        </SelectContent>
      </Select>

      {selectedOption == 'Custom Prompt' &&
        <Textarea className="mt-5"
          onChange={(e) => onUserSelect('topic', e.target.value)}
          placeholder="Write prompt about the type of video you want to generate" />
      }

    </div>
  )
}

export default SelectTopic

