// GET all available quizzes

import { quizData } from "@/data/quizzes";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Return quiz metadata without answers

    const quizzes = Object.keys(quizData).map((key) => ({
      id: key,
      name: quizData[key].name,
      icon: quizData[key].icon,
      questionCount: quizData[key].questions.length,
    }));

    return NextResponse.json({ quizzes });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch quizzes" },
      { status: 500 }
    );
  }
}
