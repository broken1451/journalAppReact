import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { startNewNote } from '../../actions/notes'
import JournalEntries from './JournalEntries'

const Sidebar = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.auth)

    const logout = () =>{
        dispatch(startLogout())
    }
    const addNew = () =>{
        dispatch(startNewNote())
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-nabvar">
                <h3 className='mt-5'>
                    <i className='far fa-moon'></i>
                    <span> {state.name}</span>
                </h3>
                <button onClick={logout} className='btn'>Logout</button>
            </div>
            <div onClick={addNew} className="journal__new-entry">
                <i className='far fa-calendar-plus fa-5x'></i>
                <p className='mt-5'>New Entry</p>
            </div>
            <JournalEntries />
        </aside>
    )
}

export default Sidebar
