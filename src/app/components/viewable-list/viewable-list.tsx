"use client"

import { useState } from "react"
import styles from "./viewable-list.module.css"

export default function ViewableList() {
  const dateFormat = "fr-BE"
  
  const exampleList = [
    { title: "Exemple 1", date: new Date("2025-12-20"), description: "Description de l'exemple 1" },
    { title: "Exemple 2", date: new Date("2025-12-21"), description: "Description de l'exemple 2" },
    { title: "Exemple 3", date: new Date("2025-12-22"), description: "Description de l'exemple 3" },
    { title: "Exemple 4", date: new Date("2025-12-23"), description: "Description de l'exemple 4" },
    { title: "Exemple 5", date: new Date("2025-12-24"), description: "Description de l'exemple 5" },
    { title: "Exemple 6", date: new Date("2025-12-25"), description: "Description de l'exemple 6" }
  ].sort((a, b) => b.date.getTime() - a.date.getTime())
  
  const [select, setSelect] = useState(exampleList[0])

  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 7fr'}}>
      <div className={styles.menucontainer}>
        <div className={styles.menutitle}>Exemples</div>
        <div className={styles.menuitems}>
          {exampleList.map((value, index) => (
            <div key={index} className={styles.menuitem} onClick={() => setSelect(value)}>
              <div>{value.title}</div>
              <div style={{fontSize: '15px'}}>{value.date.toLocaleDateString(dateFormat)}</div>
            </div>
          ))}
        </div>  
      </div>
      <div className={styles.maincontainer}>
        <div className={styles.maintitle}>
          <div style={{fontSize: '60px', fontWeight: 'bold'}}>{select.title}</div>
          <div style={{fontSize: '30px'}}>{select.date.toLocaleDateString(dateFormat)}</div>
        </div>
        <div className={styles.maincontent}>{select.description}</div>
      </div>
    </div>
  )
}