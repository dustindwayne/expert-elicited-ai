/**
 * AI Knowledge Interviewer
 *
 * Purpose:
 * - Conduct guided interviews with domain experts.
 * - Capture structured statements about concepts, relationships, rules, and examples.
 * - Emit normalized elicitation artifacts for downstream storage.
 */

export interface ElicitationPrompt {
  id: string;
  question: string;
  context?: string;
}

export interface ExpertResponse {
  promptId: string;
  answer: string;
  confidence?: number;
}

export function runInterviewSession(prompts: ElicitationPrompt[]): ElicitationPrompt[] {
  // Placeholder scaffold: a future implementation will orchestrate
  // adaptive questioning, follow-ups, and transcript parsing.
  return prompts;
}
