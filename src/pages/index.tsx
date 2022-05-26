import React, { useEffect, useState, useContext } from 'react';
import Section from '@/components/Section';
import Details from '@/components/Details';
import Paragraphs from '@/components/Paragraphs';
import AOQ from '@/components/AOQ';
import '../styles/styles.scss';
import '../styles/index.scss';

export default function Home() {
  const [activeDetail, setActiveDetail] = useState({});

  return (
    <div>
      <nav>
        <div className="logo">
          <img />
        </div>
        <div className="menu">
          <span>records &#38; cassettes</span>
          <span>discover</span>
          <form action="">
            <label htmlFor="forArtists">
              <span className="underline">for artists</span>
            </label>
            <select name="forArtists" id="forArtists">
              <option value="why qrates">why qrates</option>
              <option value="crowdfunding">crowdfunding</option>
              <option value="press &#38; sell">press &#38; sell</option>
              <option value="our services">our services</option>
              <option value="artist toolkit">artist toolkit</option>
              <option value="referral program">referral program</option>
            </select>
          </form>
          <form action="">
            <label htmlFor="ourCompany">our company</label>
            <select name="ourCompany" id="ourCompany">
              <option value="about">about qrates</option>
              <option value="careers">careers</option>
              <option value="partners">partners</option>
              <option value="contacts">contacts</option>
            </select>
          </form>
        </div>
        <div className="icons">
          <div>search icon</div>
          <div>cart icon</div>
        </div>
        <div className="login">
          <span>log in</span>
          <span className="record">make a record</span>
        </div>
        {/*<div>menu icon</div>*/}
      </nav>
      <section className="top">
        <Paragraphs
          motto="why qrates"
          title1="Your music on vinyl."
          title2="Without the "
          text="Full-service pressing, a global retail network, customer support —
            and you keep up to 85% of profits. ↓"
          title3="barriers."
        />
        <div className="imgs">
          <div className="img1">
            <img src="/static/man_bring_records-50b972e75700979a248707b59fe6a4563c5f8fa47514a8a8d03699af03d2c8b6.png" />
          </div>
          <div className="img2">
            <img src="/static/artist_waves_two-e49e13b84ff50f193fd123a9a5a166c0cad766d6095e551d62938f50c5456eda.png" />
          </div>
        </div>
        <div className="icon">
          <div>
            <img src="/static/paid_to_artists-a25863170cd08261fc196eac4ef876dff3d8c1cb9bb06edf23ac27c6f2156a1e.png" />
          </div>
        </div>
      </section>
      <section className="textonly">
        No matter where you're at in your career, we've got a production model
        to suit you.
      </section>
      <section className="sections">
        <Section
          classname="crowdfunding"
          motto="NO RISK, NO WASTE"
          icon="/static/crowdfunding-e47bb83e87eafcc717be7f350fa2950b39e9ae8fce0c3f015d888014e72c3915.png"
          title="crowdfunding"
          text="Rally your fans and gather pledges. Press the exact number of records you need, without having to pay anything upfront."
          alt="image of hands lifting a vinyl with legs in the air"
        />
        <Section
          classname="pressAndSell"
          motto="GET INTO IT"
          icon="/static/press_sell-402fcca35bd2ff6cb6d4fc1f42bbde1f3a3e5fdc996cb9584816109aec366072.png"
          title="press &#38; sell"
          text="Launch your record, sooner. Take pre-orders from fans and we'll take care of the rest."
          alt="image of a vinyl with legs putting its arm aront a pack with a smiling moth and piano on it"
        />
      </section>
      <section className="textonly2">
        <div>
          Just after straight up vinyl pressing? We do that too. Records are
          shipped in bulk to wherever you need.
        </div>
        <div className="underline uppercase">start press only project</div>
      </section>
      <section className="services">
        <div className="first">
          <Paragraphs
            motto="our services"
            title1=" you make music."
            title2="we do the rest."
            text=" We want you to be able to put all your energy into the creative side
          of making music. So we created a one-stop shop for everything else."
          />{' '}
          <button
            className="uppercase"
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            learn more
          </button>
          <div className="img-box">
            <img
              src="/static/our_services-edd921fd693eed70f2cdc2a662f9200d81007c1c5a79c047f61305ea1bf47f87.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="second">
          <div className="inside">
            <div className="head">making records</div>
            <Details
              num="a"
              summary="design &#38; customization"
              text="With over 39 colors and over 120,000 variations, control what your record will look like."
            />
            <Details
              num="b"
              summary="mastering"
              text="Have your music mastered by engineers who specialize in mastering for vinyl."
            />
            <Details
              num="c"
              summary="artwork assistance"
              text="Our team can help you optimize your artwork and packaging so your vinyl looks as good as it sounds."
            />
            <Details
              num="d"
              summary="pressing"
              text="In-built quality control comes from our network of trusted vinyl plants in North America and Europe."
            />

            <div className="head">storage &#38; distribution</div>
            <Details
              num="e"
              summary="free storage"
              text="At our US and UK warehouses, with no minimums or fees."
            />
            <Details
              num="f"
              summary="sell with qrates"
              text="Sell your record in the Qrates shop, directly connecting with an established community of music lovers and stores worldwide."
            />
            <Details
              num="g"
              summary="digital downloads"
              text="Make your music available for digital download in our store too."
            />
            <Details
              num="h"
              summary="retail distribution"
              text="Get into record stores with Qrates' 150+ retail partners including Juno and Japan's legendary Jet Set Records."
            />

            <div className="head">support</div>
            <Details
              num="i"
              summary="customer support"
              text="Our dedicated customer care team is ready to help--from order updates to refunds, returns, or exchanges. We'll handle it."
            />
            <Details
              num="j"
              summary="artist support"
              text="Our Qrates team can guide you through all the technical details, making the production process low stress and hassle-free."
            />
          </div>
        </div>
      </section>
      <section className="iconss">
        <div className="first">
          <div className="img-box">
            <img
              src="/static/store_logo-79e5bd7ae24bdd107046bcc2fb8b8f01c4bd51e2a94c2055d1a5015adc1083b3.png"
              alt=""
            />
          </div>
          <Paragraphs
            motto="retail Network"
            title1="Worldwide distro, "
            title2="demystified."
            text=" Get direct access to over 150 of our retail partners across the
              globe."
          />
        </div>
        <div className="second">
          {' '}
          <div className="img-box">
            <img
              src="/static/support-a5b96656d44e9c3536313223d6095bb76e3698da0b9212e8028f8883490d818a.jpg"
              alt=""
            />
          </div>
          <Paragraphs
            motto="customer support"
            title1="Here to help, "
            title2="whenever you need it."
            text=" Whether you're an artist in the middle of product, or a fan with
        questions about your order; our team is here to help."
          />
        </div>
      </section>
      <section className="textonly3">
        <Paragraphs
          motto="community"
          title1="Join a growing community."
          text="We're building a home for the next generation of vinyl lovers.
            Get in front of fans, connect with artists, labels and stores."
        />
        <button
          className="uppercase"
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          browse artists
        </button>
        <div className="img-box">
          <img
            src="/static/watching-38e588f042be22317c7eb0f886a769c93700fb3cf9fe5e7a0b08f6a865c3f58e.png"
            alt=""
          />
        </div>
      </section>
      <section className="grid">
        <div>
          <a href="https://www.instagram.com/p/CI1nWKvnVYg/?igshid=v6kosquc4c5j">
            <img
              src="/static/d2ec2e4d-31c4-497f-9492-56d50ef9dd9b_Image+from+iOS+(3).jpg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/p/Bj16AfaBHeH/?igshid=pj0zhfow0k4k">
            <img
              src="/static/24b1f20a-dabe-4cae-ad02-86c49706238d_Image+from+iOS+(2).jpg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/p/CKHGxB-lb92/?igshid=1dtca0v7ug6oz">
            <img
              src="/static/dae728b4-2372-4566-b212-bfba64ef7964_Image+from+iOS+(1).jpg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/p/CKZ7ConsRNP/?igshid=qjimk3wvmbqy">
            <img
              src="/static/eed89082-17b9-489c-b540-05bce75b686f_Image+from+iOS.jpg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/p/CIOURdHFdWy/?igshid=6xdmwrl8r0j8">
            <img
              src="/static/b5075c5b-5af9-41e4-b27b-6e97bef5cbf8_60F49C6F-1930-4FBB-B1DB-F158E8C0DFEE.jpg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/p/CHnr67mFV4P/?igshid=1h5fmsigrj919">
            <img
              src="/static/16a3bc7a-aff1-430c-a0b7-4857b8d87347_FE5833D4-9319-448D-AACC-B8FAC638965A+2.jpg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/p/CF2OTpwAg-3/?igshid=105ubccpivc9i">
            <img
              src="/static/bd08fb45-1497-4666-a284-83019e052b84_120650136_889510908248329_1683444011309740770_n.jpg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/qrates/">
            <h4 className="uppercase">don't miss a release</h4>
            <p className="uppercase">follow @qrates on instagram</p>
          </a>
        </div>
      </section>
      <section className="rolling">
        <ul className="uppercase">
          <li>
            <span className="underline">chilled cow</span>
            &nbsp;is on qrates
          </li>
          <li>
            <span className="underline">sol</span>
            &nbsp;is on qrates
          </li>
          <li>
            <span className="underline">vuflpeck</span>
            &nbsp;is on qrates
          </li>
          <li>
            <span className="underline">chillihop</span>
            &nbsp;is on qrates
          </li>

          <li>
            <span className="underline">chilled cow</span>
            &nbsp;is on qrates
          </li>
          <li>
            <span className="underline">sol</span>
            &nbsp;is on qrates
          </li>
          <li>
            <span className="underline">vuflpeck</span>
            &nbsp;is on qrates
          </li>
          <li>
            <span className="underline">chillihop</span>
            &nbsp;is on qrates
          </li>
        </ul>
      </section>
      <section className="AOQ">
        <AOQ
          artist={1}
          text="The response was overwhelming. It made me wonder why I hadnt pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."
          image="/static/artist_sol-9ae389be58d76f19df9af0f3d3a43fd3e9c46c9890a836c4b83c4a31514fea37.jpg"
          by="sol"
        />
        <AOQ 
          artist={2}
          text="We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies."
          by="Mason Lieberman "
          image="/static/artist_mason-c53935b4246e1f34888e3eabc1b80d5d1b45f37b937334fdb1b38617bf6f7280.jpg"
          more="The Real Folk Blues, 2020"
        />
      </section>
      <section>
        <Paragraphs
          motto="vinyl studio"
          title1="Make it real with"
          title2="Qrates"
          title3="vinyl studio"
          text="Design the look and feel of your vinyl and use the profit calculator to immediately see how much your project will cost, and how much you'll earn."
        />
        <div className="img-box">images</div>
        <button
          className="uppercase"
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          try it now
        </button>
      </section>
      <section>
        <ul>
          <div className="uppercase">for artists</div>
          <li>why qrates</li>
          <li>crowdfunding</li>
          <li>press &#38; sell</li>
          <li>our services</li>
          <li>artist toolkit</li>
          <li>referral program</li>
        </ul>
        <ul>
          <div className="uppercase">for fans</div>
          <li>discover</li>
          <li>records</li>
          <li>stories</li>
          <li>lists</li>
          <li>artists &#38; labels</li>
        </ul>
        <ul>
          <div className="uppercase">our company</div>
          <li>about qrates</li>
          <li>careers</li>
          <li>partners</li>
        </ul>
        <ul>
          <div className="uppercase">help</div>
          <li>support center</li>
          <li>contact us</li>
          <li>returns</li>
          <li>shipping</li>
        </ul>
      </section>
      <footer>
        <ul>
          <li>fb logo</li>
          <li>ig logo</li>
          <li>titter logo</li>
        </ul>
        <div>logo</div>
        <ul>
          <li className="">Terms of Service</li>
          <li className="capitalize">privacy policy</li>
          <li className="capitalize">legal information</li>
          <li className="capitalize">© TDMS inc.</li>
        </ul>
      </footer>
    </div>
  );
}
//<Title>Hello TypeScript!</Title>
