import React from 'react'
import { connect } from 'react-redux'

const Home = ({items, currentItem }) => {
  return (
    <>
      <h1>Esto es una prueba</h1>
    </>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items,
    currentItem: state.currentItem
  }
}

export default connect(mapStateToProps, null)(Home)