import bgImage from '../imgs/bg1.png';

export default function Home() {
  return (
    <div style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1>welcome</h1>
    </div>
  )
}