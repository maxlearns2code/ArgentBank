import Banner from "/src/components/Banner";
import Feature from "/src/components/Feature";

import iconChat from "/src/assets/icon-chat.webp";
import iconMoney from "/src/assets/icon-money.webp";
import iconSecurity from "/src/assets/icon-security.webp";

const Home = () => {
  return (
    <main>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          img={iconChat}
          alt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative?
                You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          img={iconMoney}
          alt="Money Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          img={iconSecurity}
          alt="Security Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  );
};

export default Home;
