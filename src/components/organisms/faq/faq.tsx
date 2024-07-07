import { AccordionItem } from '../accordion/accordion';
import { Container } from '../../templates/container/container';

import styles from './faq.module.css';

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
    <section className={styles.faq}>
      <Container className={styles.faq__container}>
        <div className={styles.faq__inner}>
          <h1 className={styles.faq__title}>FAQ</h1>
          <div>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
