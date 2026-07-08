import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
    title: string;
    desc: string;
}

export default function SectionHeader({title, desc}: SectionHeaderProps) {
return (
<div className={styles.menuSubHeader}>
            <h3 className={styles.menuSubTitle}>{title}</h3>
            <p className={styles.menuSubDesc}>{desc}</p>
          </div>);}