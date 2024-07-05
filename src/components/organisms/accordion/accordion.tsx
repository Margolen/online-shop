import { useState } from 'react';

import crossIcon from '../../../assets/images/icons/cross.svg';
import plusIcon from '../../../assets/images/icons/plus.svg';

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
      <span className={stylesAccordionQuestion} onClick={toggleAccordion}>
        {question}
        <img
          className={styles.accordion__button}
          src={isOpen ? crossIcon : plusIcon}
          alt={isOpen ? 'close' : 'open'}
        />
      </span>
      {isOpen && <p className={styles.accordion__content}>{answer}</p>}
    </div>
  );
}
