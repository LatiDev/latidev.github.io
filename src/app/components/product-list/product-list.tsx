import styles from "./product-list.module.css"

export default function ProductList() {
  const background = "background.jpg"

  return (
    <div className={styles.productlistcontainer} style={{backgroundColor: 'dimgray'}}>
      <div style={{transitionDelay: '0.1s', color: 'white', fontSize: '50px', fontWeight: 'bold', marginBottom: '20px'}}>
          Commodo nulla
      </div>
      <div className={styles.cardcontainer} style={{display: 'flex', gap: '20px', overflow: 'hidden'}}>
        <div className={styles.card} style={{transitionDelay: '0.3s', display: 'flex', flexDirection: 'column', backgroundImage: `url(${background})`, objectFit: 'cover', minHeight: '300px'}}>
          <div style={{fontSize: '30px', fontWeight: 'bold', color: 'white'}}>Nisi in</div>
          <div style={{color: 'white'}}>Senectus phasellus in</div>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: 'auto', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{color: 'white'}}>
              <span style={{fontSize: '30px'}}>XX</span>
              <span>$</span>
            </div>
            <button className={styles.cardbuy} style={{padding: '10px', border: '2px white solid'}}>Ut enim</button>
          </div>
        </div>
        <div className={styles.card} style={{transitionDelay: '0.4s', display: 'flex', flexDirection: 'column', backgroundImage: `url(${background})`, objectFit: 'cover', minHeight: '300px'}}>
          <div style={{fontSize: '30px', fontWeight: 'bold', color: 'white'}}>Metus sint mi</div>
          <div style={{color: 'white'}}>Varius consequat magna</div>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: 'auto', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{color: 'white'}}>
              <span style={{fontSize: '30px'}}>XX</span>
              <span>$</span>
            </div>
            <button className={styles.cardbuy} style={{padding: '10px', border: '2px white solid'}}>Ut enim</button>
          </div>
        </div>
        <div className={styles.card} style={{transitionDelay: '0.5s', display: 'flex', flexDirection: 'column', backgroundImage: `url(${background})`, objectFit: 'cover', minHeight: '300px'}}>
          <div style={{fontSize: '30px', fontWeight: 'bold', color: 'white'}}>Mi dolor</div>
          <div style={{color: 'white'}}>Turpis massa torquent</div>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: 'auto', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{color: 'white'}}>
              <span style={{fontSize: '30px'}}>XX</span>
              <span>$</span>
            </div>
            <button className={styles.cardbuy} style={{padding: '10px', border: '2px white solid'}}>Ut enim</button>
          </div>
        </div>
        <div className={styles.card} style={{transitionDelay: '0.6s', display: 'flex', flexDirection: 'column', backgroundImage: `url(${background})`, objectFit: 'cover', minHeight: '300px'}}>
          <div style={{fontSize: '30px', fontWeight: 'bold', color: 'white'}}>In deserunt</div>
          <div style={{color: 'white'}}>Sem tempor sagittis</div>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: 'auto', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{color: 'white'}}>
              <span style={{fontSize: '30px'}}>XX</span>
              <span>$</span>
            </div>
            <button className={styles.cardbuy} style={{padding: '10px', border: '2px white solid'}}>Ut enim</button>
          </div>
        </div>
        <div className={styles.card} style={{transitionDelay: '0.7s', display: 'flex', flexDirection: 'column', backgroundImage: `url(${background})`, objectFit: 'cover', minHeight: '300px'}}>
          <div style={{fontSize: '30px', fontWeight: 'bold', color: 'white'}}>Eros ultrices</div>
          <div style={{color: 'white'}}>Volutpat auctor primis</div>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: 'auto', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{color: 'white'}}>
              <span style={{fontSize: '30px'}}>XX</span>
              <span>$</span>
            </div>
            <button className={styles.cardbuy} style={{padding: '10px', border: '2px white solid'}}>Ut enim</button>
          </div>
          </div>
      </div>
    </div>
  )
}