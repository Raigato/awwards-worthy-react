import React from "react"
import { location } from "../../../types/location"
import Location from "./Location/Location"
import { Container } from "./Locations.styled"

const data: location[] = [
  {
    title: "Los Alacos1",
    text: "Pellentesque aliquam et fermentum odio ultricies nibh dolor massa. Malesuada magna amet suscipit netus nisl ullamcorper.",
    image:
      "https://images.unsplash.com/photo-1474433188271-d3f339f41911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "Los Alacos2",
    text: "Pellentesque aliquam et fermentum odio ultricies nibh dolor massa. Malesuada magna amet suscipit netus nisl ullamcorper.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "Los Alacos3",
    text: "Pellentesque aliquam et fermentum odio ultricies nibh dolor massa. Malesuada magna amet suscipit netus nisl ullamcorper.",
    image:
      "https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80",
  },
]

const Locations = () => {
  return (
    <Container>
      {data.map((location, i) => (
        <Location key={location.title} index={i} location={location} />
      ))}
    </Container>
  )
}

export default Locations
