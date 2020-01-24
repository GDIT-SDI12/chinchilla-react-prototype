import React from "react";
import { Button } from "react-bootstrap";

export default function LoaderButton({
    isLoading,
    className = "",
    disabled = false,
    ...props
}) {
    return(
        <Button
            className={`LoaderBUtton ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            { isLoading }
            {props.children}
        </Button>
    );
}