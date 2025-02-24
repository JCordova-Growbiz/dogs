import blob from '../assets/imgs/blob.png'

function Hero() {
  return (
    <section className='section-hero'>

        <div className="hero-nav">

            <div className="hero-nav-logo">
                <h1>Monito</h1>
                <p>Lorem ipsum dolor.</p>
            </div>

            <nav className='hero-nav-items'>
                <ul>
                    <li>Homee</li>
                    <li>Category</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div className="hero-nav-search">
                <form>
                    <input type="text" placeholder="Search..."/>
                    <button>Login</button>
                </form>
            </div>

            <div className="hero-blob">
                <img src={blob} alt=""/>
            </div>

        </div>

        <div className="hero-main">
            <div className="hero-main-texts">

            </div>

            <div className="hero-main-imgs">
                <div className="box-blue"></div>
                <div className="box-cream"></div>
            </div>
        </div>
        



    </section>
  )
}

export default Hero