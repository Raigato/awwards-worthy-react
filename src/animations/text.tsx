import { useAnimation } from "framer-motion"
import { useEffect } from "react"

const variants = {
  from: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    y: "-3rem",
  },
  first: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    y: 0,
    transition: {
      stagger: 0.3,
      duration: 1,
    },
  },
  second: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    y: -200,
    transition: {
      delay: 1.2,
      duration: 0.2,
    },
  },
  final: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    y: -200,
    transition: {
      stagger: 0.3,
      duration: 0.3,
      delay: 0.7,
    },
  },
}

export const useTextAnimation = (onFinish: () => void = () => {}) => {
  const animation = useAnimation()

  useEffect(() => {
    animation
      .start("first")
      .then(() => animation.start("second"))
      .then(() => animation.start("final"))
      .then(() => onFinish())
  }, [])

  return { animation, variants }
}

export default useTextAnimation
