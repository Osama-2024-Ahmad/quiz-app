import { quizData } from "@/data/quizzes";
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Check if Supabase client is properly initialized
    if (!supabase) {
      console.error("Supabase client not initialized");
      return NextResponse.json(
        { error: "Database connection error" },
        { status: 500 }
      );
    }
    
    const { fullName, topic, answers } = await request.json();

    // Validate input

    if (!fullName || !topic || !answers || !Array.isArray(answers)) {
      return NextResponse.json(
        { error: "Invalid input data" },
        { status: 500 }
      );
    }

    const quiz = quizData[topic];
    
    // Check if quiz exists
    if (!quiz) {
      console.error("Quiz not found for topic:", topic);
      return NextResponse.json(
        { error: "Quiz not found" },
        { status: 404 }
      );
    }
    
    let score = 0;
    answers.forEach((answer, index) => {
      // Check if question exists and has correct answer
      if (quiz.questions[index] && typeof quiz.questions[index].correct === "number") {
        if (answer === quiz.questions[index].correct) {
          score++;
        }
      } else {
        console.error(`Invalid question at index ${index}`);
      }
    });

    const totalQuestions = quiz.questions.length;

    const passed = score / totalQuestions >= 0.6; // 60% pass rate

    // Save to Supabase
    
    const quizResult = {
      full_name: fullName,
      topic: quiz.name,
      score: score,
      passed: passed,
      total_questions: totalQuestions,
    };
    
    console.log("Attempting to save quiz result:", quizResult);

    const { data, error } = await supabase
      .from("quiz_results")
      .insert([quizResult])
      .select();

    if (error) {
      console.error("Supabase error details:", error);
      console.error("Error message:", error.message);
      console.error("Error details:", error.details);
      console.error("Error hint:", error.hint);
      
      // Return results even if saving to Supabase failed
      console.log("Returning results without saving to database");
      return NextResponse.json({
        score,
        totalQuestions,
        passed,
        percentage: Math.round((score / totalQuestions) * 100),
        id: `local-${Date.now()}`,
        warning: "Results could not be saved to database",
      });
    }

    return NextResponse.json({
      score,
      totalQuestions,
      passed,
      percentage: Math.round((score / totalQuestions) * 100),
      id: data[0].id,
    });
  } catch (error) {
    console.error("Submit error", error);
    return NextResponse.json(
      { error: "Failed to submit quiz" },
      { status: 500 }
    );
  }
}
