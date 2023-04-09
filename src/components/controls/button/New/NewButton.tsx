import React, { useMemo } from "react";
import { cva, VariantProps } from 'class-variance-authority'

const buttonStyle = cva("cursor-pointer rounded-full border-2 font-bold leading-none inline-block", {
    variants: {
        size: {
            "small": "px-4 py-2.5",
            "medium": "px-5 py-2.5",
            "large": "px-6 py-3",
        },
        intent: {
            "primary": "text-white bg-green-600 border-green-600 dark:bg-green-700 dark:border-green-700",
            "secondary": "text-blue-700 bg-500 border-slate-700 dark:text-white dark:border-white",
        }
    },
    defaultVariants: {
        intent: "primary",
        size: "medium"
    }
});

export interface NewButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {
    label: string;
    onClick?: () => void;
}

export const NewButton: React.FC<NewButtonProps> = ({
    intent,
    label,
    size,
    ...props
}) => {


    return (
        <button
            type="button"
            className={buttonStyle({ intent, size })}
            {...props}
        >
            {label}
        </button>
    );
};
