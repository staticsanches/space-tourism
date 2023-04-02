import { useParams } from 'react-router-dom'

import { destinations } from '@/data'

export const DestinationImage = () => {
  const { destinationID } = useParams()
  const destination = destinations[+(destinationID ?? '0')]

  return (
    <div>
      <picture>
        <source srcSet={destination.images.webp} type="image/webp" />
        <source srcSet={destination.images.png} type="image/png" />
        <img src={destination.images.png} alt={destination.name + ' image'} />
      </picture>
    </div>
  )
}
