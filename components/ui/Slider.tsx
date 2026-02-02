'use client';

import { InputHTMLAttributes, useId } from 'react';

interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  formatValue?: (value: number) => string;
  helpText?: string;
}

export default function Slider({
  label,
  min,
  max,
  step,
  value,
  onChange,
  formatValue,
  helpText,
  className = '',
  ...props
}: SliderProps) {
  const id = useId();
  const displayValue = formatValue ? formatValue(value) : value;

  // Calculate percentage for gradient fill
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-medium text-mauve">
          {label}
        </label>
        <span className="text-lg font-mono font-semibold text-mauve-dark">
          {displayValue}
        </span>
      </div>

      <div className="relative">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="slider-input w-full h-3 bg-rose rounded-full appearance-none cursor-pointer focus-ring"
          style={{
            background: `linear-gradient(to right, #FFDAB3 0%, #FFDAB3 ${percentage}%, #C8AAAA ${percentage}%, #C8AAAA 100%)`,
          }}
          {...props}
        />
      </div>

      {helpText && (
        <p className="text-xs text-taupe">{helpText}</p>
      )}

      <style jsx>{`
        .slider-input::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #574964;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          transition: all 0.2s;
        }

        .slider-input::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .slider-input::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #574964;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          transition: all 0.2s;
        }

        .slider-input::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
