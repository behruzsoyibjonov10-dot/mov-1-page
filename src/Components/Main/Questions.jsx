import React, { useState } from "react";

function FAQItem({ number, question, answer, isOpen, onClick }) {
  return (
    <div className="mb-5 w-full h-fit px-8">
      <div className="flex items-start gap-4 md:gap-6 bg-black p-4 md:p-5 rounded-xl shadow-md border-b border-red-600 transition-all duration-300">
        
        <h3 className="text-xl md:text-2xl bg-[#1A1A1A] border border-[#262626] w-12 h-12 flex flex-shrink-0 items-center text-white justify-center rounded-lg">
          {number}
        </h3>

        <div className="flex-1">
          <div
            className="flex justify-between items-center cursor-pointer py-1"
            onClick={onClick}
          >
            <h3 className="text-lg md:text-xl text-white font-medium pr-4 leading-snug">
              {question}
            </h3>
            <span className="text-2xl text-red-500 font-bold">
              {isOpen ? "−" : "+"}
            </span>
          </div>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-800 pt-3">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Questions() {
  const faqData = [
    { number: "01", question: "What is StreamVibe?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
    { number: "02", question: "How much does it cost?", answer: "StreamVibe offers different subscription plans starting from $9.99 per month." },
    { number: "03", question: "Can I watch offline?", answer: "Yes, you can download content to watch offline on supported devices." },
    { number: "04", question: "Is it available worldwide?", answer: "StreamVibe is available in multiple countries." },
    { number: "05", question: "Can I share my account?", answer: "You can share your account with up to 3 devices simultaneously." },
    { number: "06", question: "What devices are supported?", answer: "StreamVibe works on phones, tablets, smart TVs, and web browsers." },
    { number: "07", question: "Is there a free trial?", answer: "Yes, we offer a 7-day free trial for new users." },
    { number: "08", question: "How can I cancel?", answer: "You can cancel anytime from your account settings without any extra fees." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  
  const leftColumn = faqData.filter((_, idx) => idx % 2 === 0);
  const rightColumn = faqData.filter((_, idx) => idx % 2 !== 0);

  return (
    <div className="bg-black min-h-screen py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 px-8">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-400 text-base max-w-2xl px-8">
              Got questions? We've got answers!
            </p>
          </div>
          <button className="bg-[#E50000] text-white px-8 py-3 rounded-lg font-semibold">
            Ask a Question
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-x-8 items-start">
          
          <div className="flex-1 w-full">
            {leftColumn.map((item, index) => {
              const realIndex = index * 2; 
              return (
                <FAQItem
                  key={item.number}
                  number={item.number}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === realIndex}
                  onClick={() => setOpenIndex(openIndex === realIndex ? null : realIndex)}
                />
              );
            })}
          </div>

          <div className="flex-1 w-full">
            {rightColumn.map((item, index) => {
              const realIndex = index * 2 + 1; 
              return (
                <FAQItem
                  key={item.number}
                  number={item.number}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === realIndex}
                  onClick={() => setOpenIndex(openIndex === realIndex ? null : realIndex)}
                />
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Questions;