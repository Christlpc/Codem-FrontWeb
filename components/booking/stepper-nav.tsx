'use client';

import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface StepperNavProps {
  activeStep: number;
  steps: string[];
}

export default function StepperNav({ activeStep, steps }: StepperNavProps) {
  return (
    <div className="px-6 py-8 border-b border-border bg-background rounded-t-lg">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center flex-1">
            {/* Circle */}
            <div
              className={cn(
                'flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all',
                index < activeStep
                  ? 'bg-primary text-white'
                  : index === activeStep
                  ? 'bg-primary text-white ring-4 ring-primary/20'
                  : 'bg-secondary text-muted-foreground'
              )}
            >
              {index < activeStep ? (
                <Check className="w-5 h-5" />
              ) : (
                index + 1
              )}
            </div>

            {/* Label */}
            <div className="ml-3 hidden sm:block">
              <p
                className={cn(
                  'text-sm font-medium transition-colors',
                  index <= activeStep ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {step}
              </p>
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'flex-1 h-1 mx-4 rounded-full transition-all',
                  index < activeStep ? 'bg-primary' : 'bg-secondary'
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

