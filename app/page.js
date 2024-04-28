import Image from "next/image";
import styles from "./main.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import BlogSection from "@/components/blog/BlogSection";
import FAQs from "@/components/faqs/faqs";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="main">
        <div className="container">
          {/* <!-- Intro Section --> */}
          <div className="row">
            <div className="col-sm-12 intro-section">
              <div className="row">
                <div className="col-sm-6 intro-wrapper">
                  <div className="welcome">Welcome</div>
                  <h1 className="poppins-extrabold intro-text">
                    Securing the future, one step at a time.
                  </h1>

                  <div className="actions">
                    <button className="my-btn custom-btn-outline">
                      Learn More
                    </button>
                    <button className="my-btn custom-btn-fill">
                      Contact Us
                    </button>
                  </div>
                </div>
                <div className="col-sm-6 intro-wrapper intro-image">
                  <Image
                    src="/img/gallery/1.JPG"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Intro section -->
    <!-- About the project --> */}
          <div className="row about-wrapper" id="about">
            <div className="col-sm-6">
              <div className="main-image-wrapper">
                <Image
                  src="/img/gallery/2.JPG"
                  alt="Picture of the author"
                  width={400}
                  height={400}
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="my-about-text">
                <h4 className="poppins-extrabold section-title">About</h4>
                <h1 className="poppins-extrabold about-intro">What's Our</h1>
                <h1 className="poppins-extrabold about-intro">
                  Empowering Story
                </h1>
              </div>

              <p className="normap-text poppins-regular">
                We provide social and economic empowerment services to people at
                the local community. We are a non-profit organization whose
                activities are based primarily on sponsorship, donor funding and
                volunteer efforts. Ours is to build dreams and create
                possibility in every impossibility.
              </p>
            </div>
          </div>
          {/* <!-- End about the project --> */}

          <div className="row features-section" id="activities">
            <div className="section-header">
              <h4 className="poppins-extrabold section-title">Activities</h4>
              <h3 className="poppins-extrabold about-intro">What we do</h3>
            </div>
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon">
                      <img src="../assets/images/site/feature-1.png" alt="" />
                    </div>
                    <h4 className="poppins-bold feature-title">
                      Poverty Eradication
                    </h4>
                    <p className="poppins-regular feature-text">
                      Improve the quality of life and poverty alleviation within
                      the Community through direct assistance
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon">
                      <img src="../assets/images/site/feature-2.png" alt="" />
                    </div>
                    <h4 className="poppins-bold feature-title">Health Care</h4>
                    <p className="poppins-regular feature-text">
                      Increase the communities access to basic and primary
                      health care services and health education programs
                    </p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon">
                      <img src="../assets/images/site/feature-3.png" alt="" />
                    </div>
                    <h4 className="poppins-bold feature-title">PwD</h4>
                    <p className="poppins-regular feature-text">
                      Promote the social and economic welfare of persons with
                      disability (PWD)
                    </p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon">
                      <img src="../assets/images/site/feature-4.png" alt="" />
                    </div>
                    <h4 className="poppins-bold feature-title">Empowerment</h4>
                    <p className="poppins-regular feature-text">
                      Create opportunities for youth empowerment, leadership
                      development, and civic engagement through youth clubs,
                      mentorship programs, and youth-led initiatives.
                    </p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon">
                      <img src="../assets/images/site/feature-5.png" alt="" />
                    </div>
                    <h4 className="poppins-bold feature-title">Stability</h4>
                    <p className="poppins-regular feature-text">
                      Promote peace, reconciliation, and conflict resolution
                      within the community through dialogue, mediation, and
                      peacebuilding initiatives.
                    </p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon">
                      <img src="../assets/images/site/feature-6.png" alt="" />
                    </div>
                    <h4 className="poppins-bold feature-title">
                      Gender Equality
                    </h4>
                    <p className="poppins-regular feature-text">
                      Reduce Gender inequality in the community
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fun-fact-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="section-title">
                  <h5>COUNTER</h5>
                  <h2>Fun Facts</h2>
                </div>
              </div>
              <div class="col-lg-8 col-md-12 col-sm-12">
                <div class="row text-center">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div
                      class="single-counter wow fadeInUp animated"
                      data-animation="fadeInDown animated"
                      data-delay=".2s"
                    >
                      <div class="icon">
                        <img src="img/icon/cn-iocn01.png" alt="img" />
                      </div>

                      <div class="counter p-relative">
                        <span class="count">784</span>
                        <p>Happy Clients</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div
                      class="single-counter wow fadeInUp animated"
                      data-animation="fadeInDown animated"
                      data-delay=".2s"
                    >
                      <div class="icon">
                        <img src="img/icon/cn-iocn02.png" alt="img" />
                      </div>
                      <div class="counter p-relative">
                        <span class="count">987</span>
                        <p>Happy Clients</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div
                      class="single-counter wow fadeInUp animated"
                      data-animation="fadeInDown animated"
                      data-delay=".2s"
                    >
                      <div class="icon">
                        <img src="img/icon/cn-iocn03.png" alt="img" />
                      </div>

                      <div class="counter p-relative">
                        <span class="count">974</span>
                        <p>Employees</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div
                      class="single-counter wow fadeInUp animated"
                      data-animation="fadeInDown animated"
                      data-delay=".2s"
                    >
                      <div class="icon">
                        <img src="img/icon/cn-iocn04.png" alt="img" />
                      </div>

                      <div class="counter p-relative">
                        <span class="count">687</span>
                        <p>Annual Turnover</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row contactus-section">
            <div className="section-header">
              <h4 className="poppins-extrabold section-title">
                Past Activities
              </h4>
              <h3 className="poppins-extrabold about-intro">Our Gallery</h3>
            </div>

            <div className="col-sm-12 conct-wrapper">
              <div className="row">
                <div className="col-sm-4">
                  <div className="gallery-image">
                    <Image
                      src="/img/gallery/3.JPG"
                      alt="Picture of the author"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="gallery-image">
                    <Image
                      src="/img/gallery/4.JPG"
                      alt="Picture of the author"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="gallery-image">
                    <Image
                      src="/img/gallery/5.JPG"
                      alt="Picture of the author"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="gallery-image">
                    <Image
                      src="/img/gallery/6.JPG"
                      alt="Picture of the author"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="gallery-image">
                    <Image
                      src="/img/gallery/7.JPG"
                      alt="Picture of the author"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="gallery-image">
                    <Image
                      src="/img/gallery/2.JPG"
                      alt="Picture of the author"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row contactus-section">
            <div className="section-header">
              <h4 className="poppins-extrabold section-title">Our team</h4>
              <h3 className="poppins-extrabold about-intro">Meet the team</h3>
              <p className="poppins-regular">
                We are a group of innovative, experienced, and proficient teams.
                You will love to collaborate with us
              </p>
            </div>

            <div className="row team-row">
              <div className="col-sm-10">
                <div className="row team-row">
                  <div className="col-sm-4">
                    <div className="member-card">
                      <div className="member-image">
                        <Image
                          src="/img/team/NathanielOdongo.jpg"
                          alt="Picture of the author"
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="member-info">
                        <h5 className="poppins-bold">Nathaniel Odongo</h5>
                        <h6 className="poppins-regular role">Founder</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="member-card">
                      <div className="member-image">
                        <Image
                          src="/img/team/HillaryOchieng .jpg"
                          alt="Picture of the author"
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="member-info">
                        <h5 className="poppins-bold">Hillary Ochieng</h5>
                        <h6 className="poppins-regular role">
                          Operations Director
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="member-card">
                      <div className="member-image">
                        <Image
                          src="/img/team/JaneAchieng.jpg"
                          alt="Picture of the author"
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="member-info">
                        <h5 className="poppins-bold">Jane Achieng</h5>
                        <h6 className="poppins-regular role">
                          Finance Manager
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="member-card">
                      <div className="member-image">
                        <Image
                          src="/img/team/AlphonceAriwi.jpg"
                          alt="Picture of the author"
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="member-info">
                        <h5 className="poppins-bold">Alphonce Ariwi</h5>
                        <h6 className="poppins-regular role">
                          Chief coordinator{" "}
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="member-card">
                      <div className="member-image">
                        <Image
                          src="/img/team/NaomiAdhiambo.jpg"
                          alt="Picture of the author"
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="member-info">
                        <h5 className="poppins-bold">Naomi Adhiambo</h5>
                        <h6 className="poppins-regular role">
                          Administrative assistant
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="call-to-action">
          <h1 className="call-to-action-text poppins-extrabold">
            We're crafting a pathway <br /> for prosperity.
          </h1>
        </div>
        <div className="container">
          <BlogSection />

          <FAQs />
        </div>
        {/* <!-- <app-contact-page /> --> */}
      </main>
      <Footer />
    </div>
  );
}
