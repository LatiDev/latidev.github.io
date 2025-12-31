import styles from "./simple-grid.module.css"

export default function SimpleGrid() {
  const exampleList = [
    { title: "Exemple 1"},
    { title: "Exemple 2"},
    { title: "Exemple 3"},
    { title: "Exemple 4"},
    { title: "Exemple 5"},
    { title: "Exemple 6"},
    { title: "Exemple 7"},
    { title: "Exemple 8"},
    { title: "Exemple 9"},
  ]

  return (
    <div className={styles.gridportfoliospacer} style={{background: "repeating-linear-gradient(45deg, maroon 0 40px, darkred 40px 80px)"}}>
      <div className={styles.gridportfoliotitle}>Exemples</div>
      <div className={styles.gridportfoliocontainer}>
          {exampleList.map((value, index) => (
            <div key={index} className={styles.gridportfolioitem}>
                <div className={styles.gridportfoliodescription}>{value.title}</div>
            </div>
          ))}
      </div>
    </div>
  )
}