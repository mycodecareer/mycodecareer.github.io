import Layout from "../components/common/Layout/Layout";
import H1 from "../components/common/Text/H1";
import H2 from "../components/common/Text/H2";

const Refer = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-24 px-4 py-8">
        <div className="flex justify-center">
          <H1>Refer a Friend</H1>
        </div>
        <div className="flex justify-center">
          <H2>With 2 simple steps get $200 for every friend you refer!</H2>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-4">Step 1</h2>
          <h3 className="text-xl font-semibold mb-2">
            INTRODUCE US! Send a 3-way intro email
          </h3>
          <p className="mb-4">
            3-way means send the message to Matt AND your friend... don't forget
            to include Matt!
          </p>

          {/* <pre className="bg-gray-200 p-4 rounded-lg mb-4"> */}
          <pre className="bg-gray-200 p-4 rounded-lg mb-4 overflow-auto whitespace-pre-wrap">
            {`to: matt @ mycodecareer.com.com, <yourfriend @ needhelp.com>
subject: Software career coach introduction

Hi <First Name>,

Please meet Matt Sevey...

Matt runs coaching programs exclusively to help make career changes in software at his company, My Code Career, 
and has a unique way of helping make this career change faster. He is amazing and has really helped me 
with <insert your big breakthrough or result>!

Matt, meet <First Name>. <He's/She's> is looking to make <their change> and is ready for breakthrough to the next level. 
You are the perfect fit to help <him/her>!

Can't wait to see what happens with this connection.

Success to you both!

<Your Name>`}
          </pre>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-4">Step 2</h2>
          <p className="mb-4">
            Encourage your friend and enjoy the $200 thank you bonus!
          </p>
          <p className="mb-4">
            Give your friend the encouragement they might need to be decisive,
            invest in themselves, and take action on a long-term solution. Once
            they enroll, our team will reach out for your PayPal or Venmo info
            to pay out your $200 referral bonus.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-4">BONUS Step 3: Repeat!</h2>
          <p>
            ...with every high potential engineer you know ;) There is no limit
            to how much you can get paid in gratitude (and cash).
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Refer;
