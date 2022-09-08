export default function ListingCard(props) {
  return (
    <div className="listingCard">
      <div className="listingCardImgDiv">
        <img
          className="listingCardImg"
          src={"images/" + props.image}
          alt={props.image}
        />
      </div>
      <div className="listingCardText">
        <div className="listingCardTextDiv1">
          <p className="listingCardTitle">{props.title}</p>
          <p className="listingCardRating">
            Rating: <span className="ratingNumberSpan">{props.rating}</span>
          </p>
        </div>
        <div className="listingCardTextDiv2">
          <p className="listingCardLocation">{props.location}</p>
        </div>
      </div>
    </div>
  );
}
