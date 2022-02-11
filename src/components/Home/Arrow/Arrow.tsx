import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import variants from "../../../animations/arrow"

interface IArrowProps {
  animate: boolean
  onFinishAnimating: () => void
}

const Arrow: React.FC<IArrowProps> = ({
  animate,
  onFinishAnimating = () => {},
}) => {
  const animation = useAnimation()

  useEffect(() => {
    console.log("animate", animate)
    if (animate) {
      animation.start("to").then(() => onFinishAnimating())
    }
  }, [animate])

  return (
    <motion.svg
      initial="from"
      animate={animation}
      variants={variants}
      viewBox="0 0 24 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9393 121.061C11.5251 121.646 12.4749 121.646 13.0607 121.061L22.6066 111.515C23.1924 110.929 23.1924 109.979 22.6066 109.393C22.0208 108.808 21.0711 108.808 20.4853 109.393L12 117.879L3.51471 109.393C2.92893 108.808 1.97918 108.808 1.39339 109.393C0.807607 109.979 0.807607 110.929 1.39339 111.515L10.9393 121.061ZM10.5 -6.55671e-08L10.5 120L13.5 120L13.5 6.55671e-08L10.5 -6.55671e-08Z"
        fill="white"
      />
    </motion.svg>
  )
}

export default Arrow
