"use client";

import { Plus } from "lucide-react";
import React from "react";

const Questions = () => {
  const [active, setActive] = React.useState("");

  const questionsAndAnswers = [
    {
      questions: "How do I know the surrogates are genuine",
      answer:
        "All surrogate profiles go through verification to ensure authenticity and safety",
    },
    {
      questions: "Is it free to become a surrogate?",
      answer:
        "Yes, it is absolutely free — no down payments, no upfront fees. Just register, get verified, and get matched.",
    },
    {
      questions: "What support do you provide parents?",
      answer:
        "We offer 24/7 support to guide parents through every step. You’re never alone on this journey.",
    },
    {
      questions: "Can I cancel my membership?",
      answer:
        "You can delete your account anytime if you no longer need our services. You’re always in control.",
    },
    {
      questions:
        "How safe am i on the platform, and how does it affect my privacy?",
      answer:
        "Your privacy comes first. You choose how much of your profile is visible and to whom.",
    },
  ];

  return (
    <div id="faq" className="p-5 lg:p-10 my-8 grid place-items-center">
      {/* Constrained Container */}
      <div className="w-full max-w-4xl">
        <h1 className="text-[#464646] text-[32px] lg:text-[64px] text-center">
          Questions? We’ve Got Answers
        </h1>

        <div className="h-3 lg:h-10" />

        <div className="grid grid-cols-1 gap-5">
          {questionsAndAnswers.map((qna, index) => {
            const isActive = Number(active) === index;

            return (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setActive(isActive ? "" : index.toString())}
              >
                {/* Question */}
                <div className="flex gap-5 bg-[#FBF8FC] rounded-[30px] items-center justify-between px-2.5 py-5 lg:px-5 lg:py-5">
                  <p className="bg-linear-to-r from-[#6C6CD3] to-[#092D7B] bg-clip-text text-transparent text-[20px] lg:text-[32px]">
                    {qna.questions}
                  </p>

                  <div
                    className={`bg-white rounded-full p-[5px] transition-transform duration-300 ${
                      isActive ? "rotate-45" : ""
                    }`}
                  >
                    <Plus color="#6C6CD3" size={30} />
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#737373] text-[16px] lg:text-[24px] my-5 px-2.5 lg:px-5">
                    {qna.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Questions;
