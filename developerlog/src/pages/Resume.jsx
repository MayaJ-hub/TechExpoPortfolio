import pdfFile from '../assets/MayaResume.pdf';

export default function Resume() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
      <h2>Resume</h2>
      <a href={pdfFile} download>Download Resume PDF</a>
      <iframe
        src={pdfFile}
        width="100%"
        height="800px"
        title="Maya Resume"
        style={{ marginTop: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}
      ></iframe>
    </div>
  );
}
