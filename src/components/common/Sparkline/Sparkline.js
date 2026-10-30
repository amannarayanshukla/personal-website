export const Sparkline = ({ data, color = "#ea580c", height = 40 }) => {
        const max = Math.max(...data);
        const min = Math.min(...data);
        const range = max - min;
        const width = 100;

        const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - ((d - min) / range) * height;
        return `${x},${y}`;
        }).join(" ");

        return (
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
         <polyline points={points} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
         <circle cx="100" cy={height - ((data[data.length-1] - min) / range) * height} r="3" fill={color} />
        </svg>
    );
};
