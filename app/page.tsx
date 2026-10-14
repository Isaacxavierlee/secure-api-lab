export default function Home(){
  const projectName = "Secure API Lab";
  const currentPhase = "Web Fundementals";
  const completedLessons = 1;


  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="text-3xl font-bold">
        {projectName}
      </h1>

      <p className ="mt-4 text-slate-300">
        Current Phase: {currentPhase}
      </p>

      <p className ="mt-2 text-slate-300">
        Completed Lessons: {completedLessons}
      </p>

    </main>
  )

}