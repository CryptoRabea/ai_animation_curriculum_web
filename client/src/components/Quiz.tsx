import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import { QuizQuestion } from "@/lib/quiz-data";

interface QuizProps {
  questions: QuizQuestion[];
  lessonTitle: string;
}

interface QuizState {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  showResults: boolean;
  completed: boolean;
}

export function Quiz({ questions, lessonTitle }: QuizProps) {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    showResults: false,
    completed: false
  });

  if (questions.length === 0) {
    return (
      <Card className="card-elevated p-8 text-center">
        <p className="text-muted-foreground">No quiz available for this lesson yet.</p>
      </Card>
    );
  }

  const currentQuestion = questions[state.currentQuestionIndex];
  const currentAnswer = state.answers[currentQuestion.id];
  const selectedOption = currentQuestion.options.find(opt => opt.id === currentAnswer);

  const handleAnswerSelect = (optionId: string) => {
    if (!state.showResults) {
      setState(prev => ({
        ...prev,
        answers: { ...prev.answers, [currentQuestion.id]: optionId }
      }));
    }
  };

  const handleSubmitAnswer = () => {
    setState(prev => ({
      ...prev,
      showResults: true
    }));
  };

  const handleNextQuestion = () => {
    if (state.currentQuestionIndex < questions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        showResults: false
      }));
    } else {
      setState(prev => ({
        ...prev,
        completed: true
      }));
    }
  };

  const handleRestart = () => {
    setState({
      currentQuestionIndex: 0,
      answers: {},
      showResults: false,
      completed: false
    });
  };

  // Calculate score
  const correctAnswers = Object.entries(state.answers).filter(([questionId, answerId]) => {
    const question = questions.find(q => q.id === questionId);
    const selectedOpt = question?.options.find(opt => opt.id === answerId);
    return selectedOpt?.isCorrect;
  }).length;

  const score = Math.round((correctAnswers / questions.length) * 100);

  if (state.completed) {
    return (
      <Card className="card-elevated p-8">
        <div className="text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 mb-4">
              <span className="font-display text-3xl text-blue-600">{score}%</span>
            </div>
            <h2 className="font-display text-2xl text-foreground mb-2">Quiz Complete!</h2>
            <p className="text-muted-foreground mb-4">
              You got {correctAnswers} out of {questions.length} questions correct.
            </p>
          </div>

          {score >= 80 ? (
            <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200">
              <p className="text-green-700 font-heading">
                ✓ Excellent work! You've mastered this lesson content.
              </p>
            </div>
          ) : score >= 60 ? (
            <div className="mb-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
              <p className="text-blue-700 font-heading">
                Good effort! Review the material and try again to improve your score.
              </p>
            </div>
          ) : (
            <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-amber-200">
              <p className="text-amber-700 font-heading">
                Keep learning! Review the lesson content and try again.
              </p>
            </div>
          )}

          <Button
            onClick={handleRestart}
            className="gradient-accent text-white"
          >
            Retake Quiz
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="card-elevated p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading text-lg text-foreground">
            Question {state.currentQuestionIndex + 1} of {questions.length}
          </h2>
          <span className="text-sm text-muted-foreground font-mono">
            {Math.round(((state.currentQuestionIndex + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300"
            style={{ width: `${((state.currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="font-heading text-xl text-foreground mb-6">
          {currentQuestion.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = currentAnswer === option.id;
            const isCorrect = option.isCorrect;
            const showCorrect = state.showResults && isCorrect;
            const showIncorrect = state.showResults && isSelected && !isCorrect;

            return (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(option.id)}
                disabled={state.showResults}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  showCorrect
                    ? "border-green-500 bg-green-50"
                    : showIncorrect
                    ? "border-red-500 bg-red-50"
                    : isSelected && !state.showResults
                    ? "border-blue-500 bg-blue-50"
                    : "border-border hover:border-blue-300 hover:bg-slate-50"
                } ${state.showResults ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      showCorrect
                        ? "border-green-500 bg-green-500"
                        : showIncorrect
                        ? "border-red-500 bg-red-500"
                        : isSelected && !state.showResults
                        ? "border-blue-500 bg-blue-500"
                        : "border-border"
                    }`}
                  >
                    {showCorrect && <CheckCircle2 className="w-4 h-4 text-white" />}
                    {showIncorrect && <XCircle className="w-4 h-4 text-white" />}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`font-heading ${
                        showCorrect
                          ? "text-green-700"
                          : showIncorrect
                          ? "text-red-700"
                          : "text-foreground"
                      }`}
                    >
                      {option.text}
                    </p>
                    {state.showResults && option.explanation && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {option.explanation}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation (shown after answering) */}
      {state.showResults && (
        <div className="mb-8 p-4 rounded-lg bg-blue-50 border border-blue-200">
          <h4 className="font-heading text-sm text-blue-900 mb-2">Explanation</h4>
          <p className="text-sm text-blue-800">
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        {!state.showResults ? (
          <Button
            onClick={handleSubmitAnswer}
            disabled={!currentAnswer}
            className="gradient-accent text-white flex-1"
          >
            Submit Answer
          </Button>
        ) : (
          <Button
            onClick={handleNextQuestion}
            className="gradient-accent text-white flex-1 group"
          >
            <span>
              {state.currentQuestionIndex < questions.length - 1
                ? "Next Question"
                : "View Results"}
            </span>
            <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        )}
      </div>
    </Card>
  );
}
