import React from 'react'

const Description = () => {
  return (
    <div className="description">
      You can add books to your library by visiting
      <a href="https://openlibrary.org" target="_blank">
        {' '}
        openlibrary.org{' '}
      </a>
      and searching for your book. Once you find it, you can copy the key of the book from the URL.
      You can follow the example above:
      <br />
      <b>URL:</b> https://openlibrary.org<b>/books/OL26631800M</b>/The_Body_Keeps_the_Score
      <br />
      <b>KEY:</b> <b>/books/OL26631800M</b>
    </div>
  )
}

export default Description
