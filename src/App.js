import './App.css';
import {useState} from "react";
import {Users} from "./components/Users";

function App() {
    //
    // let [frstCounter, setFrstCounter] = useState(0)
    // let [scndCounter, setScndCounter] = useState(0)
    //
    // let frstCounterIncrease = () => {
    //     setFrstCounter((actual) => actual + 1)
    // }
    //
    // let scndCounterIncrease = () => {
    //     setScndCounter((actual) => actual + 1)
    // }
    //
    // let allCountersDecrease = () => {
    //     setFrstCounter((actual) => actual - 1)
    //     setScndCounter((actual) => actual - 1)
    // }

    return (
        <div className={'body'}>
            {/*<div className={'parent'}>*/}
            {/*    <div className={'box'}>*/}
            {/*        <h3>Player 1</h3>*/}
            {/*        <hr/>*/}
            {/*        <p>{frstCounter}</p>*/}
            {/*        <button onClick={frstCounterIncrease}>+</button>*/}
            {/*    </div>*/}
            {/*    <div className={'box'}>*/}
            {/*        <h3>Player 2</h3>*/}
            {/*        <hr/>*/}
            {/*        <p>{scndCounter}</p>*/}
            {/*        <button onClick={scndCounterIncrease}>+</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<button onClick={allCountersDecrease} className={'decreaseBtn'}>-</button>*/}
            <Users />
        </div>
    );
}

export default App;
