import React, { useState } from 'react'

export default function Flashcard({ flashcard }) {
const [flip, setFlip] = useState(false);

  return (

    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div className="card-body" onClick={() => setFlip(!flip)}>
            {flip ? flashcard.answer : flashcard.question}
          </div>
        </div>
      </div>
    </div>
    
  )
}
