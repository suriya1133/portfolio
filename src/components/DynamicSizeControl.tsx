import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Settings, Maximize2, Minimize2 } from 'lucide-react';

interface DynamicSizeControlProps {
  onScaleChange: (scale: number) => void;
  currentScale: number;
}

const DynamicSizeControl: React.FC<DynamicSizeControlProps> = ({
  onScaleChange,
  currentScale
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const presetScales = [
    { label: 'XS', value: 0.75 },
    { label: 'SM', value: 0.875 },
    { label: 'MD', value: 1 },
    { label: 'LG', value: 1.125 },
    { label: 'XL', value: 1.25 },
    { label: '2XL', value: 1.5 },
  ];

  return (
    <div className="fixed top-20 right-4 z-50">
      <Button
        variant="glass"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="mb-2"
      >
        <Settings className="h-4 w-4" />
      </Button>

      {isOpen && (
        <Card className="portfolio-card p-4 w-64 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-foreground">Dynamic Sizing</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              <Minimize2 className="h-3 w-3" />
            </Button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground mb-2 block">
                Scale: {(currentScale * 100).toFixed(0)}%
              </label>
              <Slider
                value={[currentScale]}
                onValueChange={([value]) => onScaleChange(value)}
                min={0.5}
                max={2}
                step={0.05}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-3 gap-1">
              {presetScales.map((preset) => (
                <Button
                  key={preset.label}
                  variant={currentScale === preset.value ? "hero" : "ghost"}
                  size="sm"
                  onClick={() => onScaleChange(preset.value)}
                  className="text-xs h-8"
                >
                  {preset.label}
                </Button>
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant="glow"
                size="sm"
                onClick={() => onScaleChange(1)}
                className="flex-1 text-xs"
              >
                Reset
              </Button>
              <Button
                variant="glass"
                size="sm"
                onClick={() => onScaleChange(Math.min(currentScale + 0.125, 2))}
                className="flex-1 text-xs"
              >
                <Maximize2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default DynamicSizeControl;