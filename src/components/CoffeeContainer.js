import React from 'react'
import { connect } from 'react-redux'
import { buyCoffee } from '../redux/index'

function CoffeeContainer(props) {
    return (
        <div>
            <h2>Number of coffee cups - {props.numOfCoffees}</h2>
            <button onClick={props.buyCoffee}>Buy Coffee</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCoffees: state.coffee.numOfCoffees
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCoffee: () => dispatch(buyCoffee())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (CoffeeContainer);