import React, {useState, useEffect} from 'react'

const NotesListPage = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {

    }, [])

    let getNotes = async () => {
        let response = await fetch('http://localhost:8000/api/notes/')
        let data = await response.json()
        setNotes(data)
    }

    getNotes()

  return (
      <div className="">
          notes
      </div>
  )
}

export default NotesListPage