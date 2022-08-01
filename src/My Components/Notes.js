import React from 'react'
import NoteItem from './NoteItem';

export default function notes(props) {
  return (
   <div className='container'>
<h2 className="text-center">Notes</h2>

{props.notes.map((notes)=>{

return <NoteItem note={notes} key={notes.slno} onDeleteClick={props.onDelete}/>
})}


                                                                

   </div>
  )
}
