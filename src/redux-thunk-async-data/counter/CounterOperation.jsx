import { useDispatch } from "react-redux";
import { decreaseCount, increaseCount } from "./counterRedux";

const CounterOperation = () => {

    const dispatcher = useDispatch();

    return (
        <div className="flex gap-6 text-black text-4xl">
            <button
                onClick = {()=>dispatcher(decreaseCount())}
                className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 "
            >
                -
            </button>
            <button
                onClick = {()=>dispatcher(increaseCount())}
                className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 "
            >
                +
            </button>
        </div>
    );
};

export default CounterOperation;
