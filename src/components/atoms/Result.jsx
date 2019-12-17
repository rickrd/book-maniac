import React from 'react'

const Result = (props) => {
    console.log(props)
    return <div className="result">A total of {props.books.length} books stored</div>
}

export default Result