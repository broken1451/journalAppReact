import React from 'react'

const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div className="journal__entry-picture" style={{backgroundSize:'cover',backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKpr1HnvgHrMmlxx9Ns816hy47sLIu9TjCg&usqp=CAU")'}}>
            </div>
            <div className="journal__entry-body">
                <p className='journal__entry-title'>un nuevo dia</p>
                <p className='journal__entry-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laudantium eos placeat quas? Officiis error quae inventore corrupti fugit exercitationem tempora dolorem ipsa iusto! Ullam quibusdam maiores perferendis laboriosam facilis.</p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

export default JournalEntry
