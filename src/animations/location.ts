const variants = {
  from: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    y: "100%",
    opacity: 1,
  },
  to: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    y: 0,
    opacity: 1,
    transition: {
      stagger: 0.3,
      duration: 1,
      delay: 0,
    },
  },
}

export default variants
