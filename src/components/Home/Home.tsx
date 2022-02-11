import { motion } from "framer-motion"
import React, { useState } from "react"
import backgroundAnimation from "../../animations/background"
import useTextAnimation from "../../animations/text"
import Arrow from "./Arrow/Arrow"
import { Background, Container, Content } from "./Home.styled"
import Locations from "./Locations/Locations"

const Home = () => {
  const textAnimation = useTextAnimation(() => setAnimateArrow(true))

  const [animateArrow, setAnimateArrow] = useState(false)
  const [showLocations, setShowLocation] = useState(false)

  return (
    <>
      <Background
        as={motion.div}
        initial="from"
        animate="to"
        variants={backgroundAnimation.variants}
      />
      <Container>
        <Content>
          <div>
            <motion.h1
              initial="from"
              animate={textAnimation.animation}
              variants={textAnimation.variants}
            >
              Find your beach
            </motion.h1>
            <motion.p
              initial="from"
              animate={textAnimation.animation}
              variants={textAnimation.variants}
            >
              Spend 14 nights in the world's most luxurious locations
            </motion.p>
          </div>
          <Arrow
            animate={animateArrow}
            onFinishAnimating={() => setShowLocation(true)}
          />
        </Content>
      </Container>
      {showLocations && <Locations />}
    </>
  )
}

export default Home
