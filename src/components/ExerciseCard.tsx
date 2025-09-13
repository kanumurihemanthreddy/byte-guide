import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Star, Code, Target } from 'lucide-react';

interface Exercise {
  id: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  estimatedTime: string;
  points: number;
  startingCode: string;
  testCases: Array<{
    input: string;
    expected: string;
  }>;
  completed?: boolean;
}

interface ExerciseCardProps {
  exercise: Exercise;
  onStart: (exercise: Exercise) => void;
}

export const ExerciseCard = ({ exercise, onStart }: ExerciseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-accent text-accent-foreground';
      case 'Medium': return 'bg-syntax-warning text-background';
      case 'Hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <Card 
      className={`relative overflow-hidden transition-all duration-300 cursor-pointer ${
        isHovered ? 'shadow-lg border-primary/50' : 'shadow-sm'
      } ${exercise.completed ? 'bg-accent/5 border-accent/30' : 'bg-card'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Completion Badge */}
      {exercise.completed && (
        <div className="absolute top-2 right-2 z-10">
          <CheckCircle className="w-6 h-6 text-accent" />
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4 text-primary" />
              <Badge variant="outline" className="text-xs">
                {exercise.category}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {exercise.title}
            </h3>
          </div>
          <Badge className={getDifficultyColor(exercise.difficulty)}>
            {exercise.difficulty}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {exercise.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{exercise.estimatedTime}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Star className="w-4 h-4" />
              <span>{exercise.points} pts</span>
            </div>
          </div>
        </div>

        {/* Test Cases Preview */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              Test Cases ({exercise.testCases.length})
            </span>
          </div>
          <div className="bg-muted/30 rounded-lg p-3">
            <div className="text-xs text-muted-foreground">
              Example: Input: "{exercise.testCases[0]?.input}" → Expected: "{exercise.testCases[0]?.expected}"
              {exercise.testCases.length > 1 && (
                <span className="ml-2">+{exercise.testCases.length - 1} more</span>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => onStart(exercise)}
          className={`w-full transition-all duration-300 ${
            exercise.completed 
              ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
              : 'bg-primary hover:bg-primary/90'
          }`}
        >
          {exercise.completed ? 'Review Solution' : 'Start Exercise'}
        </Button>
      </div>

      {/* Hover Effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </Card>
  );
};