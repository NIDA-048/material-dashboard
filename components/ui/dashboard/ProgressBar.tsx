interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 text-[12px] font-medium text-[#57534E]">
        {value}%
      </span>

      <div className="h-[6px] w-[120px] overflow-hidden rounded-full bg-[#E7E5E4]">
        <div
          className="h-full rounded-full bg-[#1C1917]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}