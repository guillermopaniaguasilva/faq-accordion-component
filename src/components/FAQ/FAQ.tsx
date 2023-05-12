import './FAQ.scss';
import { useState } from 'react';

export type FAQType = {
  id: number;
  question: string;
  answer: string;
};

type FAQProps = {
  faq: FAQType;
};

const FAQ = ({ faq }: FAQProps) => {
  const [active, setactive] = useState(false);

  return (
    <div className="faq-container" onClick={() => setactive(!active)}>
      <div className="question-container">
        <p className={`question ${active ? 'active' : ''}`}>{faq.question}</p>
        <img
          className={`arrow-icon ${active ? 'turn' : ''}`}
          src="images/icon-arrow-down.svg"
          alt="arrow icon"
        />
      </div>
      <div>{active && <p className={`answer`}>{faq.answer}</p>}</div>
    </div>
  );
};

export default FAQ;
