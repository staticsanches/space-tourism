import { ColorsSection } from './ColorsSection'
import { InteractiveElements } from './InteractiveElements'
import { TypographySection } from './TypographySection'

export const DesignSystem = () => (
  <div className="container flow">
    <h1>Design System</h1>

    <ColorsSection />
    <TypographySection />
    <InteractiveElements />
  </div>
)
