import { useState, useRef } from 'react';
import styles from './accordion.module.css';

interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion__item}>
      <span className={styles.accordion__question} onClick={toggleAccordion}>
        {question}
        <div
          className={
            isOpen
              ? `${styles.accordion__button} ${styles['accordion__button--open']}`
              : `${styles.accordion__button}`
          }
        />
      </span>
      <span
        ref={contentRef}
        className={styles.accordion__content}
        style={{
          marginTop: isOpen ? '25px' : 0,
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : 0,
        }}
      >
        {answer}
      </span>
    </div>
  );
}
