import PropTypes from 'prop-types'


const CounterSecound = ({inc, dec, rest, count}) => {

    return (
        <div>
            {/* <h5 style={{color: count >= 0 ? 'green': 'red'}}>Counter: {count}</h5> */}
             <h5 style={count >= 0 ? {color: 'green'}: {color: 'red'}}>Counter: {count}</h5>

            <button onClick={inc}>+</button>
            <button onClick={dec} disabled={count===0}>-</button>
            <br />
            <button onClick={rest}>Reset</button>
        </div>
    )
}


CounterSecound.propTypes = {
    inc : PropTypes.func,
    dec: PropTypes.func,
    rest: PropTypes.func,
    count: PropTypes.number

}


export default CounterSecound;