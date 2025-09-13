import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeEditor } from '@/components/CodeEditor';
import { TutorialPanel } from '@/components/TutorialPanel';
import { ExerciseCard } from '@/components/ExerciseCard';
import { Code, BookOpen, Trophy, Zap, Brain, Target } from 'lucide-react';
import { tutorials } from '@/data/tutorials';
import { exercises } from '@/data/exercises';

const Index = () => {
  const [currentCode, setCurrentCode] = useState(`// Welcome to Code Learning Assistant!
// Try writing some JavaScript code here

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World"));
console.log("Let's start coding!");`);
  
  const [selectedTutorial, setSelectedTutorial] = useState(tutorials[0]);
  const [activeExercise, setActiveExercise] = useState<any>(null);

  const handleCodeChange = (code: string) => {
    setCurrentCode(code);
  };

  const handleTutorialCodeLoad = (code: string) => {
    setCurrentCode(code);
  };

  const handleExerciseStart = (exercise: any) => {
    setActiveExercise(exercise);
    setCurrentCode(exercise.startingCode);
  };

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Smart Code Editor",
      description: "Write and run code with real-time error detection and syntax highlighting"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Analysis",
      description: "Get intelligent suggestions and code quality feedback"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Interactive Tutorials",
      description: "Step-by-step lessons with hands-on coding practice"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Coding Challenges",
      description: "Practice with exercises ranging from beginner to advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='hsl(var(--border))' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-2xl">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Code Learning
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}Assistant
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Master programming with AI-powered code analysis, interactive tutorials, 
              and hands-on exercises designed to accelerate your learning journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero"
                size="lg" 
                className="px-8"
              >
                <Code className="w-5 h-5 mr-2" />
                Start Coding
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Tutorials
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the most comprehensive coding education platform with advanced tools and personalized learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border bg-card">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Learning Interface */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Interactive Learning Environment
            </h2>
            <p className="text-lg text-muted-foreground">
              Practice coding with our advanced editor and guided tutorials
            </p>
          </div>

          <Tabs defaultValue="editor" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="editor" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Editor
              </TabsTrigger>
              <TabsTrigger value="tutorials" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Tutorials
              </TabsTrigger>
              <TabsTrigger value="exercises" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Exercises
              </TabsTrigger>
            </TabsList>

            <TabsContent value="editor" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <CodeEditor
                    initialCode={currentCode}
                    onCodeChange={handleCodeChange}
                    title="JavaScript Playground"
                  />
                </div>
                <div className="lg:col-span-1">
                  <Card className="p-6 bg-card border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Quick Start</h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Getting Started</h4>
                        <p className="text-muted-foreground">Write JavaScript code in the editor and click "Run" to execute it.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Error Detection</h4>
                        <p className="text-muted-foreground">The editor will highlight syntax errors and provide suggestions.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Tips</h4>
                        <p className="text-muted-foreground">Use console.log() to see output in the results panel.</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tutorials" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <Card className="p-6 bg-card border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Available Tutorials</h3>
                    <div className="space-y-2">
                      {tutorials.map((tutorial, index) => (
                        <Button
                          key={index}
                          variant={selectedTutorial === tutorial ? "default" : "ghost"}
                          className="w-full justify-start text-left"
                          onClick={() => setSelectedTutorial(tutorial)}
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          {tutorial.title}
                        </Button>
                      ))}
                    </div>
                  </Card>
                </div>
                <div className="lg:col-span-2">
                  <TutorialPanel
                    tutorial={selectedTutorial}
                    onCodeLoad={handleTutorialCodeLoad}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="exercises" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exercises.map((exercise) => (
                  <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    onStart={handleExerciseStart}
                  />
                ))}
              </div>
              
              {activeExercise && (
                <div className="mt-8">
                  <Card className="p-6 bg-primary/5 border-primary/20">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Active Exercise: {activeExercise.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {activeExercise.description}
                    </p>
                    <Button
                      onClick={() => setActiveExercise(null)}
                      variant="outline"
                      size="sm"
                    >
                      Close Exercise
                    </Button>
                  </Card>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Index;