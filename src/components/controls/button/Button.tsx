import React, { useMemo } from "react";

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

const getSizeClasses = (size: "small" | "medium" | "large") => {
    switch (size) {
        case "small": {
            return "px-4 py-2.5";
        }
        case "large": {
            return "px-6 py-3";
        }
        default: {
            return "px-5 py-2.5";
        }
    }
};

const getModeClasses = (isPrimary: boolean) =>
    isPrimary
        ? "text-white bg-green-600 border-green-600 dark:bg-green-700 dark:border-green-700"
        : "text-blue-700 bg-500 border-slate-700 dark:text-white dark:border-white";

const BASE_BUTTON_CLASSES =
    "cursor-pointer rounded-full border-2 font-bold leading-none inline-block";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    primary = false,
    size = "medium",
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {
    const computedClasses = useMemo(() => {
        const modeClass = getModeClasses(primary);
        const sizeClass = getSizeClasses(size);

        return [modeClass, sizeClass].join(" ");
    }, [primary, size]);

    return (
        <button
            type="button"
            className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
            {...props}
        >
            {label}
        </button>
    );
};
