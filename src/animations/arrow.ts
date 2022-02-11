const variants = {
  from: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  },
  to: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    y: -150,
    transition: {
      stagger: 0.3,
      duration: 0.6,
      delay: 0.5,
    },
  },
}

export default variants
