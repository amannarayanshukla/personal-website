// export const Button = ({ children, variant = "primary", className = "", onClick, ...props }) => {
//     const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-150 active:translate-y-[2px] active:shadow-none";
//     const variants = {
//         primary: "bg-zinc-900 text-white border-2 border-zinc-900 hover:bg-orange-600 hover:border-orange-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]",
//         outline: "bg-transparent text-zinc-900 border-2 border-zinc-900 hover:bg-zinc-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]",
//         ghost: "text-zinc-600 hover:text-orange-600 hover:bg-zinc-100",
//         link: "text-orange-600 hover:text-orange-700 underline underline-offset-4 px-0 py-0 h-auto"
//     };
//
//     return (
//         <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
//             {children}
//         </button>
//     );
// };

export const Button = ({ children, variant = "primary", className = "", onClick, ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-150 active:translate-y-[2px] active:shadow-none";
    const variants = {
        primary: "bg-dark text-dark-foreground border-2 border-dark hover:bg-primary hover:border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]",
        outline: "bg-transparent text-dark border-2 border-dark hover:bg-light shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]",
        ghost: "text-light-foreground hover:text-primary hover:bg-light",
        link: "text-primary hover:text-primary-hover underline underline-offset-4 px-0 py-0 h-auto"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
            {children}
        </button>
    );
}

export default Button;
