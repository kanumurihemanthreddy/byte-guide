import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, RotateCcw, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface ErrorMessage {
  line: number;
  message: string;
  type: 'error' | 'warning' | 'info';
}

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  onCodeChange?: (code: string) => void;
  expectedOutput?: string;
  title?: string;
}

export const CodeEditor = ({ 
  initialCode = '', 
  language = 'javascript',
  onCodeChange,
  expectedOutput,
  title = 'Code Editor'
}: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [errors, setErrors] = useState<ErrorMessage[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleCodeChange = (value: string) => {
    setCode(value);
    onCodeChange?.(value);
    analyzeCode(value);
  };

  const analyzeCode = (codeText: string) => {
    const newErrors: ErrorMessage[] = [];
    const lines = codeText.split('\n');

    lines.forEach((line, index) => {
      // Basic syntax analysis
      if (line.includes('console.log') && !line.includes(';') && line.trim().endsWith(')')) {
        newErrors.push({
          line: index + 1,
          message: 'Missing semicolon',
          type: 'warning'
        });
      }
      
      if (line.includes('function') && !line.includes('{')) {
        newErrors.push({
          line: index + 1,
          message: 'Function declaration missing opening brace',
          type: 'error'
        });
      }

      if (line.includes('var ') && !line.includes('let ') && !line.includes('const ')) {
        newErrors.push({
          line: index + 1,
          message: 'Consider using let or const instead of var',
          type: 'info'
        });
      }
    });

    setErrors(newErrors);
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('');

    try {
      // Simulate code execution
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Basic JavaScript evaluation (in real app, use proper sandboxing)
      if (language === 'javascript') {
        let result = '';
        const originalLog = console.log;
        console.log = (...args) => {
          result += args.join(' ') + '\n';
        };

        try {
          // Simple evaluation for demonstration
          eval(code);
          setOutput(result || 'Code executed successfully');
        } catch (error) {
          setOutput(`Error: ${error}`);
        } finally {
          console.log = originalLog;
        }
      }
    } catch (error) {
      setOutput(`Execution error: ${error}`);
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    setErrors([]);
  };

  const getErrorIcon = (type: string) => {
    switch (type) {
      case 'error': return <AlertCircle className="w-4 h-4 text-syntax-error" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-syntax-warning" />;
      case 'info': return <Info className="w-4 h-4 text-primary" />;
      default: return null;
    }
  };

  useEffect(() => {
    analyzeCode(code);
  }, []);

  return (
    <Card className="bg-card border-border overflow-hidden">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <div className="flex gap-2">
            <Button
              onClick={runCode}
              disabled={isRunning}
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              <Play className="w-4 h-4 mr-2" />
              {isRunning ? 'Running...' : 'Run'}
            </Button>
            <Button
              onClick={resetCode}
              variant="outline"
              size="sm"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Code Editor */}
        <div className="relative">
          <div className="absolute top-2 left-2 z-10">
            <Badge variant="secondary" className="text-xs">
              {language}
            </Badge>
          </div>
          <textarea
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
            className="w-full h-96 p-4 pt-12 bg-code-bg text-foreground font-mono text-sm border-0 border-r border-border resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Write your code here..."
            spellCheck={false}
          />
        </div>

        {/* Output Panel */}
        <div className="bg-muted/30">
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Output</span>
            </div>
          </div>
          <div className="p-4">
            <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-mono">
              {output || 'Click "Run" to execute your code'}
            </pre>
            {expectedOutput && (
              <div className="mt-4 p-3 bg-accent/10 rounded border border-accent/20">
                <div className="text-xs text-accent font-medium mb-1">Expected Output:</div>
                <pre className="text-sm text-foreground font-mono">{expectedOutput}</pre>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Error Panel */}
      {errors.length > 0 && (
        <div className="border-t border-border bg-destructive/5">
          <div className="p-4">
            <h4 className="text-sm font-medium text-foreground mb-2">Issues Found:</h4>
            <div className="space-y-2">
              {errors.map((error, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  {getErrorIcon(error.type)}
                  <span className="text-muted-foreground">
                    Line {error.line}: {error.message}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};