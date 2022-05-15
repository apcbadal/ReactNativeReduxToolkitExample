import React from 'react'

import {store} from "./src/app/store";
import { Provider } from 'react-redux';
import Counter from "./src/features/counter/counter";

const App=()=>
{
    return(
        <Provider store={store}>
            <Counter/>
        </Provider>
        )

}

export default App;
