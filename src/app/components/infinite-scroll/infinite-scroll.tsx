import styles from "./infinite-scroll.module.css"

export default function InfiniteScroll() {
  const itemCount = 10
  const text = 'Lorem'

  const textStyle = {
    fontSize: '20px', 
    marginLeft: '100px'
  }

  return (
    <div style={{backgroundColor: 'grey', color: 'white', padding: '20px 0px 20px 0px', whiteSpace: 'nowrap', overflowX: 'hidden'}}>
      <div className={styles.infinitescroll}>
        <div className={styles.textscroll}>
          {[...Array(itemCount)].map((_, i) => (
            <span key={i} style={textStyle}>{text}</span>
          ))}
        </div>
        <div className={styles.textscroll}>
          {[...Array(itemCount)].map((_, i) => (
            <span key={i} style={textStyle}>{text}</span>
          ))}
        </div>
      </div>
    </div>
  )
}