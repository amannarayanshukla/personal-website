export const Card = ({ children, className = "", ...props }) => {
    const baseStyles = "bg-white border border-light-border rounded-lg shadow-sm";

    return (
        <div className={`${baseStyles} ${className}`} {...props}>
            {children}
        </div>
    );
};
