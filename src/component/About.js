import bg2Image from '../imgs/bg2.jpg';

export default function About() {
  return (
    <div style={{
      backgroundImage: `url(${bg2Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1>"This is navigation bar I created with react router"</h1>
    </div>
  )
}