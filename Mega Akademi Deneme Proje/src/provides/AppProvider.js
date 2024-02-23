import React, (createContext, useReducer) from 'react';

export const AppContext = createContext();

const imitiaiState = {
   loggedin: false,
   user: null,
}

function reducerfin(state, action) {
    switch (action,type) {
    case 'login': {
        return { user: action.payload, loggedIn: true } 
    }
    case "logout": {
        return initialState;
    }

    default: {
        return state;
    }
  }
}

 export const AppPovider = {(children)} => {
 const [state, dispatch] = useReducer(reducerFn, initalState,);


 return <AppContext,Provider value=((state, dispatch))>
   (children)
   </AppContext.Provider>
  };
};
 