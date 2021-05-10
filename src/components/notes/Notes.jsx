import React from 'react'
import NotesAppBar from './NotesAppBar'

const Notes = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />
            <div className="notes__content">
                <form >
                    <input className='notes__title-input' type="text" name="" id="" autoComplete='off' placeholder='Some awesome something' /><br />
                    <textarea className='notes__textarea' name="" id="" placeholder='What happened' ></textarea>
                    <div className="notes__images">
                        <img src="https://t2.ea.ltmcdn.com/es/images/8/6/7/img_la_alimentacion_del_pinguino_20768_600.jpg" alt="imagen" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Notes
