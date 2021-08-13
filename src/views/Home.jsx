
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
          <form action="" className="form">
            <input className="input" type="text" name="name" id="" placeholder="First Name" />
            <input className="input" type="text" name="lastname" id="" placeholder="Last Name" />
            <input className="input" type="email" name="" id="" placeholder="Email Address" />
            <input className="input" type="password" name="" id="" placeholder="Password" />
            <button type="submit" className="button -submit -bold -uppercase">Claim your free trial</button>
            <small className="small -semiBold">By clicking the button, you are agreeing to our <a href="" className="link -bold">Terms and Services</a></small>
          </form>
        </div>
      </section>
    </>
  )
}

export default Home