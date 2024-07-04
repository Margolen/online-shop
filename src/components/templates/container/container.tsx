import styles from './container.module.css';

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  const classNames = className ? `${styles.container} ${className}` : styles.container;
  return <div className={classNames}>{children}</div>;
}
