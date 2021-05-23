import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDelete } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import NotesAppBar from './NotesAppBar'

const Notes = () => {

    const {active:note} = useSelector(state => state.notes)
    const [values, inputChange, reset] = useForm(note)
    const { body, title, id} = values;
    const dispatch = useDispatch()

    const activeID =  useRef(note.id)
    console.log({activeID});

    useEffect(() => {   
        if (note.id !== activeID.current) {
            reset(note)
            activeID.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(values.id, {...values}))
    }, [values,dispatch])


    const handleDelete = () =>{
        dispatch(startDelete(id))
    }


    return (
        <div className='notes__main-content'>
            <NotesAppBar />
            <div className="notes__content">
                <form >
                    <input onChange={inputChange}  value={title} className='notes__title-input' type="text" name="title" id="" autoComplete='off' placeholder='Some awesome something' /><br />
                    <textarea onChange={inputChange} value={body} className='notes__textarea' name="body" id="" placeholder='What happened' ></textarea>
                    {
                        note.url ? <div className="notes__images">
                        <img src={note.url} alt="imagen" />
                    </div> : null
                    }
                </form>
            </div>
            <button onClick={handleDelete} className='btn btn-danger'>Delete</button>
        </div>
    )
}

export default Notes
