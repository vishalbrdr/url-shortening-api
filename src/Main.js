import Card from "./components/Card"
import Cta from "./components/Cta"
import Urlbox from "./components/Urlbox"
import iconBrandRecogintion from "./icon-brand-recognition.svg"
import iconDetailedRecord from "./icon-detailed-records.svg"
import iconFullyCustomize from "./icon-fully-customizable.svg"

export default function Main() {

    const cards = [
        {
            img: iconBrandRecogintion,
            heading: "Brand Recognition",
            description: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content"
        },
        {
            img: iconDetailedRecord,
            heading: "Detailed Records",
            description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        },
        {
            img: iconFullyCustomize,
            heading: "Fully Customizable",
            description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        }
    ]

    return (
        <main className="main">
            <div className="container">
                <Urlbox />
                <div className="advanced-stats">
                    <div className="heading-container">
                        <h2 className="heading-dark">Advanced Statistics</h2>
                        <p>Track how your links are performing across the web with our
                            advanced statistics dashboard.</p>
                    </div>
                    <div className="cards-container">
                        <div className="ribbon"></div>
                        {cards.map((card, i) => <Card key={i} index={i + 1} heading={card.heading} desc={card.description} img={card.img} />)}
                    </div>
                </div>
            </div>
            <div className="boost-cta">
                <div className="container">
                    <h2 className="heading-light">Boost your links today</h2>
                    <Cta name="Get Started" className="rounded" />
                </div>
            </div>
        </main>
    )
}
