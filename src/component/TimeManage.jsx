import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'

const TimeManage = ({timeStamp }) => {
    let timeAgo = '';
    if(timeStamp){
        const date = parseISO(timeStamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
  return (
 <span className='text-[13px] text-slate-500' title={timeStamp}>
 &nbsp;<i>{timeAgo}</i>
 </span>
  )
}

export default TimeManage