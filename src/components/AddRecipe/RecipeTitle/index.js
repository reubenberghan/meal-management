import * as React from 'react'

export default function RecipeTitle ({ handleTitleChange, title, titleInput }) {
  return (
    <label htmlFor='title'>
      Title:
      <input
        type='text'
        name='title'
        onChange={handleTitleChange}
        value={title}
        ref={titleInput}
      />
    </label>
  )
}
