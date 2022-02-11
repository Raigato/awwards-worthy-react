import globalEase from "./ease"

const backgroundAnimation = {
  variants: {
    from: {
      scale: 0.6,
      opacity: 0,
    },
    to: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.2,
        ease: globalEase,
      },
    },
  },
}

export default backgroundAnimation
