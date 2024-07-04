import { Accordion } from '../accordion/accordion';
import { Container } from '../../templates/container/container';

export function FAQ() {
  const faqData = [
    {
      question: 'How can I track the status of my order?',
      answer:
        'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept any payment.',
    },
    {
      question: 'How can I return or exchange an item?',
      answer: 'You can return or exchange an item very easy.',
    },
  ];
  return (
    <section>
      <Container>
        <h1>FAQ</h1>
        <div>
          {faqData.map((faq, index) => (
            <Accordion key={index} {...faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}
