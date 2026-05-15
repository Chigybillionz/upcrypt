const questions = [
  "Is Upcrypt available worldwide?",
  "What are the platform fees?",
  "How do disputes get resolved?",
];

export default function CommonQuestions() {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-semibold text-slate-950">Common Questions</h2>
      <div className="space-y-3">
        {questions.map((question) => (
          <button
            key={question}
            className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-5 py-4 text-left text-sm text-slate-950"
          >
            <span>{question}</span>
            <span className="text-lg">v</span>
          </button>
        ))}
      </div>
    </section>
  );
}
