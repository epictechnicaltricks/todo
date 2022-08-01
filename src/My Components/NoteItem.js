import React from 'react'

export default function NoteItem({note,  onDeleteClick}) {
  return (
    

    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{note.title}</h5>
              </div>
        <div className="modal-body">
          <p>{note.desc}</p>
        </div>
        <div className="modal-footer">
          
          <button type="button" className="btn btn-primary">Edit</button>
          <button type="button" className="btn btn-danger"

          onClick={()=>{onDeleteClick(note)}}>Delete</button>

          
        </div>
      </div>
    </div>
 
   

  )
}

   