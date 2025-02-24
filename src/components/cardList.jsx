import React from "react";
import Card from "./card.jsx";

class CardList extends React.Component {
  render() {
  const { robots } = this.props;
    return (
      <>
        {robots.map((robot) => (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        ))}
      </>
    );
  }
}

export default CardList;
