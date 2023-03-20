import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  NavText,
  NumberedTitle,
} from '@/Typography'
import { TypographyItem } from './TypographyItem'

export const TypographySection = () => (
  <section id="typography" className="flow" style={{ margin: '4rem 0' }}>
    <NumberedTitle number="02">Typography</NumberedTitle>

    <div className="flex">
      <div
        className="flow"
        style={{ flexBasis: '100%', '--flow-space': '4rem' }}
      >
        <TypographyItem type="Heading 1 - Bellefair Regular - 150px">
          <Heading1>Earth</Heading1>
        </TypographyItem>

        <TypographyItem type="Heading 2 - Bellefair Regular - 100px">
          <Heading2>Venus</Heading2>
        </TypographyItem>

        <TypographyItem type="Heading 3 - Bellefair Regular - 56px">
          <Heading3>Jupiter & Saturn</Heading3>
        </TypographyItem>

        <TypographyItem type="Heading 4 - Bellefair Regular - 32px">
          <Heading4>Uranus, Neptune, & Pluto</Heading4>
        </TypographyItem>

        <TypographyItem type="Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space">
          <Heading5>So, you want to travel to space</Heading5>
        </TypographyItem>
      </div>

      <div
        className="flow"
        style={{ flexBasis: '100%', '--flow-space': '4rem' }}
      >
        <TypographyItem type="Subheading 1 - Bellefair Regular - 28px">
          <Heading1 sub>384,400 km</Heading1>
        </TypographyItem>

        <TypographyItem type="Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space">
          <Heading2 sub>Avg. Distance</Heading2>
        </TypographyItem>

        <TypographyItem type="Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space">
          <NavText>Europa</NavText>
        </TypographyItem>

        <TypographyItem type="Body Text">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi.
          </p>
        </TypographyItem>
      </div>
    </div>
  </section>
)
