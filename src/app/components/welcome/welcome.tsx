import styles from "./welcome.module.css"

export default function Welcome() {
  const background = "background.jpg"

  return (
    <div style={{backgroundImage: `url(${background})`, textAlign: 'center', padding: '475px 0px 475px'}}>
      <span style={{color: 'white'}}>
        <span className={styles.welcomebig}>Lorem ipsum</span>
        <br/>
        <span className={styles.welcomesmall}>Ut enim ad minim</span>
      </span>
    </div>
  )
}