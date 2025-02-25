import blob from '../assets/imgs/blob.png'
import dog from '../assets/imgs/dog.png'

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

            {/* <div className="hero-blob">
                <img src={blob} alt=""/>
            </div> */}

        </div>

        <div className="hero-main">
            <div className="hero-main-texts">

                <div className="hero-main-texts-container">
                    
                        <div className="hero-main-texts-title">
                            <p className='hero-title'>One More Friend</p >
                            <p className='hero-subtitle'>Thousands Moru Fun!</p>
                        </div>

                        <div className="hero-main-texts-subtitle">
                            <div className="hero-container-subtitle">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi magni tempore quidem nesciunt odio, consequatur voluptatum unde.</p>
                            </div>
                        </div>

                        <div className="hero-main-texts-buttons">
                            <button className='hero-button-intro'>View Intro</button>
                            <button className='hero-button-now'>Explore Now</button>
                        </div>
                </div>
                    
            </div>

            <div className="hero-main-imgs">
                <div className="box-blue"></div>
                <div className="box-cream">
                    <div className="box-cream-container">
                        <img className='box-dog' src={dog} alt="dog" />
                    </div>
                </div>
            </div>
        </div>
        



    </section>
  )
}

export default Hero