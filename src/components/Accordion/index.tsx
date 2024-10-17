import { useState, useRef, useEffect } from 'react';
import styles from './Accordion.module.css';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);  //to measure content height

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionHeader} onClick={toggleOpen}>
        <div className={`${styles.icon} ${isOpen ?  '' : styles.open}`}>
          <div className={styles.horizontal}></div>
          <div className={styles.vertical}></div>
        </div>
        <span style={{fontWeight: 'bold'}}>{title}</span>
      </button>
      <div
        className={styles.accordionContent}
        ref={contentRef}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div className={styles.contentInner}>{content}</div>
      </div>
    </div>
  );
};

const Accordion: React.FC<{ items: AccordionItemProps[] }> = ({ items }) => {
  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
