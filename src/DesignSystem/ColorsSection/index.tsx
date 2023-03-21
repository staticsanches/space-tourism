import { IndexedTitle } from '@/Typography'
import { ColorItem } from './ColorItem'

export const ColorsSection = () => (
  <section id="colors" className="flow" style={{ margin: '4rem 0' }}>
    <IndexedTitle index="01">Colors</IndexedTitle>

    <div className="flex">
      <ColorItem
        className="bg-dark text-white"
        hexValue="#0B0D17"
        rgbValue="11, 13, 23"
        hslValue="230°, 35%, 7%"
      />
      <ColorItem
        className="bg-accent text-dark"
        hexValue="#D0D6F9"
        rgbValue="208, 214, 249"
        hslValue="231°, 77%, 90%"
      />
      <ColorItem
        className="bg-white text-dark"
        hexValue="#FFFFFF"
        rgbValue="255, 255, 255"
        hslValue="0°, 0%, 100%"
      />
    </div>
  </section>
)
