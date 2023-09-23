import "../../style/card.scss";

const Item = ({ index }) => (
  <li>
    <a href="#">Item {index}</a>
  </li>
);

export default function CardSubtitle() {
  const items = [];
  for (let i = 0; i < 6; i++) {
    items.push(<Item index={i} key={i} />);
  }

  return (
    <>
      <h4>Sous-titre</h4>
      <ul className="item-list">{items}</ul>
    </>
  );
}
