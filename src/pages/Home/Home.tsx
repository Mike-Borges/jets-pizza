import './Home.module.css'

export default function Home () {
    return (
        <div className="home">
            <div className="home__title-bx">
            <h1 className="home__title">Order</h1>
            <h2 className="home__subtitle">Fresh Pizza</h2>
            <h2 className="home__subtitle">Near You!</h2>
            <label className="home__location-title">Find Your Nearest Location:</label>
            <input type="text" className="home__location-text" placeholder="Enter city, state, or ZIP"/>
            </div>

        </div>
    )
}