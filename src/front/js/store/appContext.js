import React, { useState, useEffect, useContext } from "react";
import getState from "./flux.js";

export const Context = React.createContext();

export const useAppContext = () => {
    return useContext(Context);
};

export const useActions = () => {
    const { actions } = useContext(Context);
    return actions;
};

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions }
                    })
            })
        );

        useEffect(() => {
            // Llamar a getMessage solo una vez al cargar la aplicación
            state.actions.syncToken();
        }, []);

        const contextValue = {
            ...state,
            getActions: state.actions
        };

        return (
            <Context.Provider value={contextValue}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };

    return StoreWrapper;
};

export default injectContext;