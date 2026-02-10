import React, { useState } from 'react';

function FAQItem({ number, question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="asked_box flex gap-6 bg-black p-4 rounded-xl shadow-md hover:border-1 border-red-600 transition-all">
      <h3 className="text-2xl bg-[#383737] w-12 h-12 flex items-center text-white justify-center rounded-2xl">
        {number}
      </h3>
      <div className="flex-1 bg-black p-2 rounded">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h3 className="text-2xl text-white">{question}</h3>
          <h2 className="text-2xl text-red-500 font-bold">{open ? "-" : "+"}</h2>
        </div>
        {open && (
          <p className="text-gray-400 mt-3">{answer}</p>
        )}
      </div>
    </div>
  );
}

function Questions() {
  const faqData = [
    { number: "01", question: "What is StreamVibe?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
    { number: "05", question: "How much does it cost?", answer: "StreamVibe offers different subscription plans starting from $9.99 per month." },
    { number: "02", question: "Can I watch offline?", answer: "Yes, you can download content to watch offline on supported devices." },
    { number: "06", question: "Is it available worldwide?", answer: "StreamVibe is available in multiple countries. Check our website for your region." },
    { number: "03", question: "Can I share my account?", answer: "You can share your account with up to 3 devices simultaneously." },
    { number: "07", question: "What devices are supported?", answer: "StreamVibe works on phones, tablets, smart TVs, and web browsers." },
    { number: "04", question: "Is there a free trial?", answer: "Yes, we offer a 7-day free trial for new users." },
    { number: "08", question: "How can I cancel?", answer: "You can cancel anytime from your account settings without any extra fees." },
  ];

  return (
   <div className="Container bg-black max-w-[1400px] mx-auto p-4 sm:p-6 md:p-8">

  {/* Hero Section */}
  <div className="hero flex flex-col md:flex-row gap-6 mb-16 items-start md:items-center">

    <div className="hero_text flex-1">
      <h1 className="text-white text-3xl sm:text-4xl mb-4 px-4 sm:px-6 md:px-8">
        Frequently Asked Questions
      </h1>

      <p className="text-gray-400 px-4 sm:px-6 md:px-8">
        Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
      </p>
    </div>

    <div className="hero_btn md:ml-8 mt-4 md:mt-0 px-4 sm:px-6 md:px-0">
      <button className="w-full sm:w-auto px-6 py-3 bg-[#E50000] text-white rounded-lg">
        Ask a Question
      </button>
    </div>
  </div>

  {/* FAQ Section */}
  <div className="asked flex flex-col md:flex-row md:flex-wrap gap-6 px-4 sm:px-6 md:px-8">
    {faqData.map((item) => (
      <div
        key={item.number}
        className="w-full md:w-[48%]"
      >
        <FAQItem
          number={item.number}
          question={item.question}
          answer={item.answer}
        />
      </div>
    ))}
  </div>

</div>

  );
}

export default Questions;
