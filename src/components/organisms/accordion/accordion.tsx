import { useState } from 'react';

import styles from './accordion.module.css';

interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const stylesAccordionQuestion = isOpen
    ? `${styles.accordion__question} ${styles.open}`
    : `${styles.accordion__question}`;

  return (
    <div className={styles.accordion__item}>
      <p className={stylesAccordionQuestion} onClick={toggleAccordion}>
        {question}
      </p>
      {isOpen && <p className={styles.accordion__content}>{answer}</p>}
    </div>
  );
}
