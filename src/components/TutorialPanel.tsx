import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, BookOpen, Target, Lightbulb } from 'lucide-react';

interface TutorialStep {
  id: number;
  title: string;
  content: string;
  code?: string;
  hint?: string;
  objective?: string;
}

interface TutorialPanelProps {
  tutorial: {
    title: string;
    description: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    steps: TutorialStep[];
  };
  onCodeLoad?: (code: string) => void;
}

export const TutorialPanel = ({ tutorial, onCodeLoad }: TutorialPanelProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const progress = ((currentStep + 1) / tutorial.steps.length) * 100;
  const step = tutorial.steps[currentStep];

  const nextStep = () => {
    if (currentStep < tutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowHint(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowHint(false);
    }
  };

  const loadStepCode = () => {
    if (step.code && onCodeLoad) {
      onCodeLoad(step.code);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-accent text-accent-foreground';
      case 'Intermediate': return 'bg-syntax-warning text-background';
      case 'Advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <Card className="bg-card border-border h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-border">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">{tutorial.title}</h2>
            <p className="text-muted-foreground text-sm">{tutorial.description}</p>
          </div>
          <Badge className={getDifficultyColor(tutorial.difficulty)}>
            {tutorial.difficulty}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-foreground font-medium">
              {currentStep + 1} of {tutorial.steps.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* Step Header */}
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              Step {step.id}: {step.title}
            </h3>
          </div>

          {/* Objective */}
          {step.objective && (
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Objective</h4>
                  <p className="text-sm text-muted-foreground">{step.objective}</p>
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-sm max-w-none">
            <div className="text-foreground leading-relaxed whitespace-pre-line">
              {step.content}
            </div>
          </div>

          {/* Code Example */}
          {step.code && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-foreground">Example Code</h4>
                <Button
                  onClick={loadStepCode}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Load in Editor
                </Button>
              </div>
              <div className="bg-code-bg border border-code-border rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-foreground font-mono">
                  <code>{step.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Hint */}
          {step.hint && (
            <div className="space-y-2">
              <Button
                onClick={() => setShowHint(!showHint)}
                variant="ghost"
                size="sm"
                className="text-accent hover:text-accent"
              >
                <Lightbulb className="w-4 h-4 mr-2" />
                {showHint ? 'Hide Hint' : 'Show Hint'}
              </Button>
              
              {showHint && (
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-accent mt-0.5" />
                    <p className="text-sm text-muted-foreground">{step.hint}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-border p-4">
        <div className="flex items-center justify-between">
          <Button
            onClick={prevStep}
            disabled={currentStep === 0}
            variant="outline"
            size="sm"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <span className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {tutorial.steps.length}
          </span>
          
          <Button
            onClick={nextStep}
            disabled={currentStep === tutorial.steps.length - 1}
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Card>
  );
};