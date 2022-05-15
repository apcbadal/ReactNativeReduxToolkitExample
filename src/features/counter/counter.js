import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {changeName, decrement, decrementByAmount, increment, incrementByAmount} from './counterSlice'
import {Button, Text, View} from "react-native";

const Counter=()=> {
    const count = useSelector((state) => state.counter.value)

    const dispatch = useDispatch()
    const handleIncrement=()=>{
        dispatch(increment())
    }
    const handleDecrement=()=>{
        dispatch(decrement())
    }

    return (
        <View>
            <View>
                <Button title={"Increment"}
                    onPress={()=>handleIncrement()}
                >
                </Button>
                <Text>{""}</Text>
                <Button title={"Decrement"}
                    onPress={()=>handleDecrement()}
                >
                </Button>
                <Text>{""}</Text>
                <Button title={"Increment by 5"}
                        onPress={()=>dispatch(incrementByAmount(5))}
                >
                </Button>
                <Text>{""}</Text>
                <Button title={"Decrement by 5"}
                        onPress={()=>dispatch(decrementByAmount(5))}
                >
                </Button>

                <Text style={{alignSelf:'center'}}>{count}</Text>

            </View>
        </View>
    )
}

export default Counter
