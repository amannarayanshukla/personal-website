// export const Badge = ({ children, variant = "default" }) => {
//     const styles = variant === "accent"
//         ? "bg-orange-100 text-orange-700 border-orange-200"
//         : "bg-zinc-100 text-zinc-600 border-zinc-200";
//
//     return (
//         <span className={`px-2 py-1 text-[10px] font-mono font-bold uppercase border border-zinc-900 ${styles}`}>
//       {children}
//     </span>
//     );
// };

export const Badge = ({ children, variant = "default" }) => {
    const variants = {
        default: "bg-light text-light-foreground border-light-border",
        accent: "bg-accent text-accent-foreground border-accent-border",
    };

    return (
        <span className={`px-2 py-1 text-[10px] font-mono font-bold uppercase border ${variants[variant]}`}>
      {children}
    </span>
    );
};
