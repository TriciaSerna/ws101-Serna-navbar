import bg3Image from '../imgs/bg3.png';

export default function Contact() {
  return (
    <div style={{
      backgroundImage: `url(${bg3Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h2>"NO CONTACT"</h2>
    </div>
  )
}