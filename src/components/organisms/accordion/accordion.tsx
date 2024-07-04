import { useState } from 'react';
import { Container } from '../../templates/container/container';

import styles from './accordion.module.css';

interface AccordionProps {
  question: string;
  answer: React.ReactNode;
}

export function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const stylesAccordionHeader = isOpen
    ? `${styles.accordion__header} ${styles.open}`
    : `${styles.accordion__header}`;

  return (
    <div className={styles.accordion__item}>
      <Container className={styles.accordion__container}>
        <div className={stylesAccordionHeader} onClick={toggleAccordion}>
          {question}
        </div>
        {isOpen && <div className={styles.accordion__content}>{answer}</div>}
      </Container>
    </div>
  );
}
