import { quizData } from "@/data/quizzes";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // IMPORTANT: Await the params!
    const { id } = await params;

    const quiz = quizData[id];

    if (!quiz) {
      return NextResponse.json({ error: "Quiz not found" }, { status: 404 });
    }

    // Return the full quiz data including correct answers
    return NextResponse.json({
      id,
      name: quiz.name,
      icon: quiz.icon,
      questions: quiz.questions,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch quiz" },
      { status: 500 }
    );
  }
}