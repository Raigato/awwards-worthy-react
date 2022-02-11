import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import variants from "../../../../animations/location"
import { location } from "../../../../types/location"
import { Container, Info } from "./Location.styled"

interface ILocationProps {
  index: number
  location: location
}

const Location: React.FC<ILocationProps> = ({ index, location }) => {
  const animation = useAnimation()

  useEffect(() => {
    animation.start(i => {
      const updatedVariant = { ...variants.to }
      updatedVariant.transition.delay = i * 0.2
      return updatedVariant
    })
  }, [])

  return (
    <Container
      as={motion.div}
      initial="from"
      animate={animation}
      custom={index}
      variants={variants}
    >
      <img src={location.image} alt={location.title} />
      <Info>
        <h2>{location.title}</h2>
        <p>{location.text}</p>
      </Info>
    </Container>
  )
}

export default Location
