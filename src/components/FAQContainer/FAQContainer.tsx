import './FAQContainer.scss';
import { FAQType } from '../FAQ/FAQ';
import FAQ from '../FAQ/FAQ';

type FAQContainerProps = {
  questions: FAQType[];
};

const FAQContainer = ({ questions }: FAQContainerProps) => {
  return (
    <div className="container">
      <div className="image-container">
        <div className="image"></div>
      </div>
      <div className="faqs-container">
        <h1 className="heading">FAQ</h1>
        {questions.map((question) => (
          <FAQ key={question.id} faq={question} />
        ))}
      </div>
    </div>
  );
};

export default FAQContainer;
