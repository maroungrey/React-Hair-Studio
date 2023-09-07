import Hero from "../assets/Hero.jpg"


export default function AppHero() {
    return(
        <section className='hero-block'>         
            <img
                className="d-block w-100"
                src={Hero}
                alt='Hero Image'
            />
        </section>
    )
}