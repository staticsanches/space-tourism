import { LargeButton } from '@/components/LargeButton'
import { LargeLink } from '@/components/LargeLink'
import { NumberedTitle } from '@/Typography'

export const InteractiveElements = () => (
  <section id="interactive-elements" className="flow">
    <NumberedTitle index="03">Interactve Elements</NumberedTitle>

    <div className="flex">
      {/* Explore buttons */}
      <div className="flex" style={{ marginTop: '5rem', '--gap': '5rem' }}>
        <LargeButton onClick={() => alert('Explore button was clicked!')}>
          Explore
        </LargeButton>
        <LargeLink to="/">Explore</LargeLink>
      </div>
    </div>
    <div style={{ marginBottom: '50vh' }}></div>
  </section>
)
