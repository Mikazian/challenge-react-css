import "../../style/card.scss";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardNote from "./CardNote";
import CardDescription from "./CardDescription";
import CardSubtitle from "./CardSubtitle";
import CardAction from "./CardAction";

export default function Card() {
  return (
    <div class="card">
      <div className="card-header">
        {/* Image */}
        <CardImage />
      </div>

      <div className="card-body">
        <div className="card-content">
          {/* Titre */}
          <CardTitle />

          {/* Notes */}
          <CardNote />

          {/* Description */}
          <CardDescription />
        </div>
        <div className="card-footer">
          {/* Sous-titre */}
          <CardSubtitle />

          {/* Action */}
          <CardAction />
        </div>
      </div>
    </div>
  );
}
