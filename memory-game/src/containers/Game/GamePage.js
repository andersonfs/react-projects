import React from "react";
import { connect } from "react-redux";

import { Board, Card } from "../../components";
import { selectCard } from "../../store/acions";

const GamePage = ({ cards, onCardClick }) => (
  <Board>
    {cards.map(card => (
      <Card
        key={card.key}
        name={card.name}
        isActive={card.isActive}
        onClick={() => {
          onCardClick(card.key);
        }}
      />
    ))}
  </Board>
);

const mapStateToProps = state => ({
  cards: state.cards
});

// const mapDispatchToPropos = dispatch => ({
//   onCardClick: card => {
//     //dispatch({ type: "SELECT_CARD", key: card.key });
//     dispatch(selectCard(card.key));
//   }
// });

const mapDispatchToPropos = {
  onCardClick: selectCard
};

export default connect(
  mapStateToProps,
  mapDispatchToPropos
)(GamePage);
