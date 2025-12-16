import wellnessPDF from '../assets/wellness_portfolio_with_vision_board.pdf';

export default function Wellness() {
  return (
    <div>
      <h2>Wellness</h2>
      <a href={wellnessPDF} download>Download Wellness Portfolio PDF</a>
      <iframe
        src={wellnessPDF}
        width="100%"
        height="800px"
        title="Wellness Portfolio"
        style={{ marginTop: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}
      ></iframe>
    </div>
  );
}
