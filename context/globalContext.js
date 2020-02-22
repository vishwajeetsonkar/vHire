import React, { createContext, Component } from "react";

export const GlobalContext = createContext();

class GlobalContextProvider extends Component {
    state = { 
        isLight: true
    }
    render() {
        return (
            <GlobalContext.Provider value={{...this.state}}>
                {this.props.children}
            </GlobalContext.Provider>
        );
    }
}

export default GlobalContextProvider;