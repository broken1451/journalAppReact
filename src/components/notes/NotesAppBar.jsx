import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'

const NotesAppBar = () => {
    // react-journal
    const dispatch = useDispatch()
    const {active:note} = useSelector(state => state.notes)

    const save = () =>{
        // console.log({note});
        dispatch(startSaveNote(note))
    }

    const pictureUpload = () =>{
        document.querySelector('#fileUpload').click()
    }

    const handlefilechange = (e) =>{
       const file =  e.target.files[0];
       if (file) {
        dispatch(startUploading(file))
       }
    }



    return (
        <div className='notes__appbar'>
            <span>28 de agosto 2020</span>
            <input style={{display:'none'}} onChange={handlefilechange} type="file" name="file" id="fileUpload" />
            <div>
                <button onClick={pictureUpload} className='btn'>Picture</button>
                <button onClick={save} className='btn'>Save</button>
            </div>
        </div>
    )
}

export default NotesAppBar
