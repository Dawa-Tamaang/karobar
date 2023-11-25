import React from "react";
import useOpenController from "../useOpenController";
import { FaChevronRight } from "react-icons/fa";
export const Accordion = ({ section, key }) => {
  const { isOpen, toggle } = useOpenController(false);
  console.log(section);
  return (
    <div className="accordion-container">
      <ExpendableColumn
        question={section.question}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen && <TextSection text={section.answer} />}
      <div className="underline"></div>
    </div>
  );
};

export const ExpendableColumn = ({ question, isOpen, toggle }) => {
  return (
    <div className="w-full py-1 pr-3">
        <div className="flex items-center" onClick={toggle}>
            <div className="w-full">
                {question}
            </div>
            <button className="expendable-button">
                <span
                class="material-symbols-outlined"
                style={{
                    transform: `rotate(${isOpen ? 180 : 0}deg)`,
                    transition: "all 0.25s",
                }}
                >
                <FaChevronRight/>
                </span>
            </button>
        </div>
    </div>
  );
};

export const TextSection = ({ text }) => {
  return (
    <div className=" flex flex-wrap gap-4 px-3">
      {text.map((item, index) => (
        <div className="font-medium text-sm" key={index}>{item}</div>
      ))}
    </div>
  );
};