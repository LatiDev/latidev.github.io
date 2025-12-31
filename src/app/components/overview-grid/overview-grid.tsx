import styles from "./overview-grid.module.css"

export default function OverviewGrid() {
  return (
    <div className={styles.gridlayoutcontainer} style={{backgroundColor: 'dimgrey'}}>
      <div className={styles.gridlayoutintroduction} style={{color: 'white', textAlign: 'center'}}>
        Fugiat enim egestas faucibus.
      </div>
      <div style={{transitionDelay: '0.2s', color: 'white', textAlign: 'center', margin: '0px 70px 30px 80px', fontSize: '20px'}}>
        Ornare est proin deserunt convallis irure semper ad dictumst sunt occaecat congue per dis volutpat lobortis nisl primis euismod adipiscing habitasse nostra cupidatat anim nostrud                </div>
      <div className={styles.gridlayout} style={{display: 'grid'}}>
        <div style={{color: 'white', textAlign: 'center', alignItems: 'center'}}>
          <div className={styles.gridlayouttitle} style={{transitionDelay: '0.5s', backgroundColor: 'gray', border: '2px solid white'}}>Tempus fermentum ridiculus esse faucibus.</div>
          <div className={styles.gridlayoutdescription} style={{transitionDelay: '0.8s', backgroundColor: 'gray'}}>
            Inceptos proin dolore consequat integer nostra laborum platea. Turpis ea fames taciti semper ante nisi. Dui dictumst ultrices adipiscing massa dignissim anim ut curae nisi vestibulum dictumst nostrud sem laboris. Aliquip qui euismod blandit in ornare elit urna pharetra exercitation id nisi eget aliqua.
            Dignissim faucibus pharetra nascetur aute in. Dolor habitasse conubia placerat luctus aliqua in vel elit ut habitasse massa nullam morbi. Tempus sagittis ut dolor. Ut velit vulputate proin senectus volutpat id sollicitudin. Habitant enim rhoncus officia laborum aliqua neque vulputate quis nibh. Inceptos class ea eu qui erat turpis quis. Laboris velit nisi pretium non morbi tempus dolore sapien nulla hendrerit donec metus esse erat. Laborum magnis blandis ad lectus.
          </div>
        </div>
        <div style={{color: 'white', textAlign: 'center', alignItems: 'center'}}>
          <div className={styles.gridlayouttitle} style={{transitionDelay: '0.5s', backgroundColor: 'gray', border: '2px solid white'}}>Conubia pharetra adipiscing.</div>
          <div className={styles.gridlayoutdescription} style={{transitionDelay: '0.8s', backgroundColor: 'gray'}}>
            Anim laboris semper montes nunc dictum pharetra. Accumsan senectus id ligula magnis mus montes nullam sint varius velit. Proin montes adipiscing nisl eros pharetra eget placerat semper. Libero curae minim ut aliqua lorem. Senectus habitant placerat curae habitasse etiam. Vulputate erat etiam massa gravida pretium ultrices magnis veniam sem velit pretium feugiat laboris. Viverra nisl tellus libero. Dapibus proin officia sapien ridiculus pharetra dictums nisi ut primis.
            Gravida dictumst vehicula neque ad reprehenderit ante tempor nisl semper deserunt. Pretium placerat fusce dignissim malesuada commodo. Ex molestie consectetur parturient duis sollicitudin occaecat dis. Condimentum elementum in sed semper amet dapibus ut interdum. Arcu turpis dolore incididunt qui penatibus porta dapibus senectus magnis. Massa ad sapien felis praesent vehicula dictum sed lectus consequat curae dolor integer.
          </div>
        </div>
        <div style={{color: 'white', textAlign: 'center', alignItems: 'center'}}>
          <div className={styles.gridlayouttitle} style={{transitionDelay: '0.5s', backgroundColor: 'gray', border: '2px solid white'}}>Montes tempus convallis semper.</div>
          <div className={styles.gridlayoutdescription} style={{transitionDelay: '0.8s', backgroundColor: 'gray'}}>
            Sagittis faucibus malesuada culpa lectus penatibus eiusmod ex placerat maecenas nostrud. Cillum culpa condimentum rhoncus senectus amet cubilia. Scelerisque malesuada vehicula reprehenderit. Dictumst porttitor dis irure himenaeos in parturient lorem praesent. Eu convallis sunt occaecat condimentum id senectus pharetra nullam elementum cras. Molestie sagittis tempus duis iaculis tellus dapibus gravida in fermentum aliquip laborum elit senectus.
            Laboris tempor suscipit vehicula adipiscing nascetur ex. Proident primis eiusmod cubilia fames pellentesque habitasse commodo. Non est sint et viverra aliquip molestie maecenas semper varius nullam pariatur semper ornare sociosqu. Luctus incididunt dignissim faucibus mi faucibus scelerisque blandis nisl facilisi volutpat tempus labore.
          </div>
        </div>
      </div>
    </div>
  )
}