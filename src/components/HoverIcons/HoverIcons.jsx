export default function HoverIcon({ firstColor, secondColor, alt }) {
  return (
    <div className="hover-icon">
      <img src={firstColor} alt={alt} className="icon icon--grey" />
      <img src={secondColor} alt={alt} className="icon icon--white" />
    </div>
  );
}
