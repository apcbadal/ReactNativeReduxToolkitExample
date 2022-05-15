import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
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
                    Increment
                </Button>
                <Text>{count}</Text>
                <Button title={"Decrement"}
                    onPress={()=>handleDecrement()}
                >
                    Decrement
                </Button>
            </View>
        </View>
    )
}

export default Counter
