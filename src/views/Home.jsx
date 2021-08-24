import Form from '../components/Form'
const Home = () => {
  return (
    <>
      <section className="hero-section">
        <header className="header">
          <h1 className="title -bold">Learn to code by watching others</h1>
          <p className="lead -semiBold">See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
            but understanding how developers think is invaluable. </p>
        </header>
        <div className="promo">
          <div className="highlight-card">
            <h2 className="title -regular"><b className="-bold">Try it free 7 days</b> then $20/mo. thereafter</h2>
          </div>
          <Form />
        </div>
      </section>
    </>
  )
}

export default Home