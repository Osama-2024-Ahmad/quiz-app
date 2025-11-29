# Web Development Quiz App

A modern, interactive single web application for testing knowledge in web development technologies including HTML, CSS, JavaScript, and React.

## Features

- 📚 Multiple quiz categories (HTML, CSS, JavaScript, React)
- 📊 Real-time quiz results and statistics
- 👥 User dashboard with passed/failed users tracking
- 🎨 Modern, responsive UI with Tailwind CSS
- ⚡ Fast loading and smooth transitions
- 📱 Mobile-friendly design

## Technology Stack

- **Frontend Framework**: Next.js
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: Next.js API Routes
- **Database**: Supabase (for results storage)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Then fill in your environment variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
quiz-app/
├── app/                    # Next.js app directory
│   ├── _components/        # Reusable components
│   │   ├── DashboardView.tsx
│   │   ├── HomeView.tsx
│   │   ├── NameInputView.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── QuestionDisplay.tsx
│   │   ├── QuizCard.tsx
│   │   ├── QuizView.tsx
│   │   ├── ResultDisplay.tsx
│   │   └── UserList.tsx
│   ├── api/                # API routes
│   │   ├── quizzes/
│   │   └── results/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── lib/                    # Utility functions
│   └── supabase.ts         # Supabase client
├── public/                 # Static assets
├── types/                  # TypeScript type definitions
│   └── quiz.ts
└── README.md               # This file
```

## Usage

1. **Home Page**: View available quizzes and select one to start.
2. **Name Input**: Enter your name before starting a quiz.
3. **Quiz**: Answer multiple-choice questions for the selected topic.
4. **Results**: View your score and performance after completing the quiz.
5. **Dashboard**: View statistics and see all users who have taken quizzes.

## API Endpoints

- `GET /api/quizzes` - Get all available quizzes
- `GET /api/quizzes/[id]` - Get a specific quiz with questions
- `GET /api/results` - Get all quiz results
- `POST /api/results` - Submit a new quiz result

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Supabase](https://supabase.com/) - The open source Firebase alternative
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit
