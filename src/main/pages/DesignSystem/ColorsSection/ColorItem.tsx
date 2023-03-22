export type ColorItemProps = {
  className: string
  hexValue: string
  rgbValue: string
  hslValue: string
}

export const ColorItem = ({
  className,
  hexValue,
  rgbValue,
  hslValue,
}: ColorItemProps) => (
  <div className="flow" style={{ flexGrow: 1 }}>
    <div
      className={className}
      style={{
        padding: '3rem 1rem 1rem',
        border: '1px solid white',
      }}
    >
      {hexValue}
    </div>
    <p>
      <span className="text-accent">RGB</span> {rgbValue}
    </p>
    <p>
      <span className="text-accent">HSL</span> {hslValue}
    </p>
  </div>
)
