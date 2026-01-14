import React from "react";
import { Check, X } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

interface ProblemSolutionProps {
  content?: {
    title: string;
    title_accent: string;
    problem: { title: string; items: string[] };
    solution: { title: string; items: string[] };
  };
}

export const ProblemSolution = ({ content }: ProblemSolutionProps) => {
  const { t } = useLanguage();
  // Fallback to t.safecompute.problem_solution if available, otherwise empty (should be provided)
  // @ts-ignore
  const c = content || t.safecompute?.problem_solution;

  if (!c) return null;

  return (
    <section id="problem" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
          {c.title} <span className="text-primary">{c.title_accent}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem */}
          <div className="p-8 rounded-2xl bg-red-950/20 border border-red-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <X className="w-8 h-8" /> {c.problem.title}
            </h3>
            <ul className="space-y-4">
              {c.problem.items.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <X className="w-5 h-5 text-red-500/50 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-2xl bg-green-950/20 border border-green-500/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500/10 w-32 h-32 rounded-bl-full -mr-8 -mt-8 pointer-events-none" />
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <Check className="w-8 h-8" /> {c.solution.title}
            </h3>
            <ul className="space-y-4">
              {c.solution.items.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
