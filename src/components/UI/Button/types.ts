import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    size: 'md' | 'lg',
    disabled?: boolean,
}