import styles from './Heading.module.css';

// Definindo um tipo para a props
type HeadingProps = {
  // tudo que o react aceita como children
  children: React.ReactNode;
};

/**
 * children é um destruração do javascript, ele vem do props.children
 */
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
