import Image from 'next/image';

import valid32 from "@/public/valid-32.png"
import background from "@/public/background.jpg"
import styles from "./bullet-point.module.css";

export default function BulletPoint() {
    return (
      <div className={styles.bulletpointlayout} style={{backgroundColor: 'grey', padding: '50px 200px 50px 200px'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <div style={{fontSize: '50px', color: 'white', marginBottom: '20px', fontWeight: 'bold'}}>Dis hendrerit</div>
          <span style={{marginLeft: '20px', marginBottom: '50px'}}>
            <div style={{display: 'flex'}}>
              <Image src={valid32} alt="valid-icon-32" style={{transitionDelay: '0.4s', width: '32px', height: '32px'}}/>
              <div style={{alignItems: 'center', marginLeft: '20px', marginBottom: '20px'}}>
                <div style={{transitionDelay: '0.2s', color: 'white', fontWeight: 'bold'}}>Pariatur donec</div>
                <div style={{transitionDelay: '0.2s', color: 'wheat'}}>Ante pharetra ad</div>
              </div>
            </div>
            <div style={{display: 'flex'}}>
              <Image src={valid32} alt="valid-icon-32" style={{transitionDelay: '0.4s', width: '32px', height: '32px'}}/>
              <div style={{alignItems: 'center', marginLeft: '20px', marginBottom: '20px'}}>
                <div style={{transitionDelay: '0.4s', color: 'white', fontWeight: 'bold'}}>Incididunt urna</div>
                <div style={{transitionDelay: '0.4s', color: 'wheat'}}>Faucibus fringilla adipiscing</div>
              </div>
            </div>
            <div style={{display: 'flex'}}>
              <Image src={valid32} alt="valid-icon-32" style={{transitionDelay: '0.4s', width: '32px', height: '32px'}}/>
              <div style={{alignItems: 'center', marginLeft: '20px', marginBottom: '20px'}}>
                <div style={{transitionDelay: '0.6s', color: 'white', fontWeight: 'bold'}}>Ea lobortis</div>
                <div style={{transitionDelay: '0.6s', color: 'wheat'}}>Urna gravida auctor</div>
              </div>
            </div>
          </span>
          <div>
            <button className={styles.bulletpointbuy} style={{transitionDelay: '0.9s', padding: '20px 50px 20px 50px', fontSize: '20px'}}>
              Anim pellentesque.
            </button>
          </div>
        </div>
        <div style={{margin: '40px'}}>
          <Image src={background} alt="background" style={{height: '100%', width: '100%', objectFit: 'cover'}}/>
        </div>
      </div>
    )
}