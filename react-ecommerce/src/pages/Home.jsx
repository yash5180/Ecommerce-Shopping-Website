import "./Home.css";
import ServiceCard from "../components/ServiceCard";
import pharmacy from "../images/pharmacy.png";
import pets from "../images/pets.png";
import child from "../images/child.png";
import ItemsCard from "../components/ItemsCard";
import Paan from "../images/Paan.png";
import Men from "../images/Men.png"
import Breakfast from "../images/Breakfast.png";
import Watch from "../images/Watch.png";
import Women from "../images/Women.png";
import Personal from "../images/Personal.png";
import kid from "../images/kids.png";
import Office from "../images/office.png";
import Pet from "../images/pet.png";
import Bake from "../images/Bakery.png";
import Baby from "../images/Baby.png";

const Home = () => {
return (
    <div>
        <div className="coupon-nav">
        <div>
        <h1 id="h1">Get 25% Off</h1>
        <h2 id="h2">Up To <sup>₹</sup>200 Off*</h2>
        </div>
        <div className="coupon-section">
        <div className="coupon">
            <h3>COUPON<br/>CODE</h3>
            <h1>MYSTORESAVE</h1>
        </div>
        <p id="para">On Your First Order | T&amp;C Apply</p>
        </div>
        <div id="percentage">
            %
        </div>
        </div>

        <div className="Services">
            <ServiceCard title = {<>
                Pharmacy at <br />
                your doorstep!</>
            }
            description ={
                <>
                Cough Syrups,Pain <br />
                relief sprays & more
                </>
            }
            buttonText="Order Now"
            image={pharmacy}
            className="pharmacy"
            />

            <ServiceCard
            title={
            <>Pet care supplies<br />
            at your door
            </>
            }
            description = {
            <>Food,Treats,Toys & More
            </>
            }
            buttonText="Order Now"
            image={pets}
            className="pets"
            />
            <ServiceCard
            title={<>
            No Time for <br />
            a diaper run?</>}
            description = {
                <>Get baby care essentials</>
            }
            buttonText="Order Now"
            image={child}
            className="baby"
            />
        </div>
        <div  className="Items">
            <ItemsCard
            title="Paan Corner"
            image={Paan}/>
            <ItemsCard
            title="Personal Care"
            image= {Personal}
            />
            <ItemsCard
            title={<>Breakfast & <br />Instant Food</>}
            image={Breakfast}/>
            <ItemsCard
            title="Pet Care"
            image= {Pet}
            />
            <ItemsCard
            title="Bakery & Biscuits"
            image= {Bake}
            />
            <ItemsCard
            title="Watches"
            image={Watch}/>
            <ItemsCard
            title="Women ActiveWear"
            image= {Women}
            />
            <ItemsCard
            title="Casual Wear"
            image= {Men}
            />
            <ItemsCard
            title="Kids Wear"
            image= {kid}
            />
            <ItemsCard
            title="Office Wear"
            image= {Office}
            />
            <ItemsCard
            title="Baby Care"
            image= {Baby}
            />
        </div>
    </div>
  )
}

export default Home