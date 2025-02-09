function FAQItem({ question, answer, isOpen, onClick }: any) {
  return (
    <div className="border border-gray-800 rounded-lg bg-[#1A1D24] overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#0B0E14]/50"
        onClick={onClick}
      >
        <span className="font-semibold">{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-200 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 py-4 text-gray-400 border-t border-gray-800">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
