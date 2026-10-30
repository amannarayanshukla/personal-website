import { Card } from '@components/common/Card/Card';

export const WeightDelta = ({ title, period, value }) => {
    // Determine color based on whether the value is positive or negative
    const valueColor = parseFloat(value) < 0 ? 'text-orange-600' : 'text-green-600';

    return (
        <Card className="bg-white" hoverEffect={false}>
            <div className="flex justify-between items-center mb-2">
                <p className="text-zinc-500 text-xs font-mono uppercase">{title}</p>
                <span className="text-[10px] font-bold text-zinc-400 border border-zinc-200 px-2 py-1">
                    {period}
                </span>
            </div>
            <div className="flex items-baseline gap-2">
                <span className={`text-4xl font-bold ${valueColor}`}>{value}</span>
                <span className="text-sm text-zinc-400 font-mono">KG</span>
            </div>
        </Card>
    );
};
