import React, { useContext, useReducer } from 'react';

export enum UIFramework {
    Bootstrap = "BOOTSTRAP",
    MaterialUI = "MATERIALUI"
}

export interface ThemeState {
    framework: UIFramework;
}

export const defaultThemeContext = {
    framework: UIFramework.Bootstrap
} as ThemeState;

export enum ThemeReducerActionType {
    Bootstrap = UIFramework.Bootstrap,
    MaterialUI = UIFramework.MaterialUI
}

interface ThemeReducerAction {
    type: ThemeReducerActionType;
}

export const ThemeReducer = (state: ThemeState,action: ThemeReducerAction) => {
    const { type } = action;
    switch(type) {
        case ThemeReducerActionType.Bootstrap:
            return { ...state, framework: UIFramework.Bootstrap };
        case ThemeReducerActionType.MaterialUI:
            return { ...state, framework: UIFramework.MaterialUI };
        default:
            return state;
    }
}

export const ThemeContext = React.createContext(defaultThemeContext);
export const ThemeDispatchContext = React.createContext<React.Dispatch<ThemeReducerAction>>(() => {})

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

export const useThemeReducer = () => {
    return useContext(ThemeDispatchContext);
}



