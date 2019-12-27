import React from 'react'
import { connect } from 'react-redux'

const Result = (props) => {
    return <div className="result">A total of {props.books.length} books stored</div>
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}
export default connect(mapStateToProps)(Result)