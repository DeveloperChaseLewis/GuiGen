import React from 'react'
import { Button as MaterialButton } from '@material-ui/core';
import { Button as BootstrapButton } from 'react-bootstrap';
import { useThemeContext, UIFramework, ThemeState } from '../../contexts/theme-context';

export enum ButtonVariantTypes {
    PRIMARY = "primary",
    DEFAULT = "default"
}

export interface ButtonProps {
    variant?: ButtonVariantTypes
    children?: React.ReactNode
}

const calculateVariant = (theme: ThemeState,props: ButtonProps) => {
    if(!props.variant) {
        props = { ...props, variant: ButtonVariantTypes.PRIMARY };
    }

    return props;
}

const ThemedButton = (props: ButtonProps) => {
    const theme = useThemeContext()
    
    props = calculateVariant(theme,props);
    console.log(theme);
    switch(theme.framework) {
        case UIFramework.Bootstrap:
            return (<BootstrapButton variant={props.variant} >{props.children}</BootstrapButton>)
        case UIFramework.MaterialUI:
            return (<MaterialButton variant="contained" color={props.variant}>{props.children}</MaterialButton>)
        default:
            return (<div>Button-Unsupported Type</div>)
    }
}

export default ThemedButton;