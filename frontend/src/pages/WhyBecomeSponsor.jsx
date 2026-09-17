import { Link } from "react-router"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SponsorCarousel from "../components/SponsorCarousel"

function WhyBecomeSponsor() {
  return (
    <div className="whyBecomeSponsor">
      <Header headerIsShown={false} />

      {/* HERO */}
      <section className="whyBecomeSponsorHero">
        <img
          src="/teamphotos/thank-you.jpg"
          alt="Ammoknights robotics team"
          className="heroBackground"
        />

        <div className="heroOverlay" />

        <div className="heroContent">
          <span className="heroEyebrow">AMMOKNIGHTS FRC TEAM #1566</span>

          <h1>
            Build the Next
            <span> Generation.</span>
          </h1>

          <p>
            Your support gives Idaho Falls students the opportunity to build,
            compete, lead, and create.
          </p>

          <Link to="/sponsors/become" className="sponsorButton">
            Become a Sponsor
            <span>→</span>
          </Link>
        </div>

        <div className="heroCorner heroCornerTop" />
        <div className="heroCorner heroCornerBottom" />
      </section>

      {/* WHAT IS FIRST */}
      <section className="sponsorSection firstSection">
        <div className="sectionContainer">
          <div className="sectionIntro">
            <span className="sectionEyebrow">01 / THE PROGRAM</span>

            <h2>
              What is <span>FIRST?</span>
            </h2>

            <p className="sectionLead">
              FIRST — For Inspiration and Recognition of Science and
              Technology — is a global robotics program that uses competition
              to teach students STEM, teamwork, creativity, leadership, and
              problem solving.
            </p>

            <p>
              Students work together to solve a new robotics challenge every
              year while developing technical and professional skills that
              extend far beyond the competition field.
            </p>
          </div>

          <div className="firstVideo videoFrame">
            <iframe
              src="https://www.youtube.com/embed/ed4YCIQfMHc"
              title="Ammoknights FIRST Robotics Video"
              allow="encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="firstFeatures">
            <div className="featureCard">
              <span className="featureNumber">01</span>
              <h3>Robotics</h3>
              <p>Designing and building real competition robots.</p>
            </div>

            <div className="featureCard">
              <span className="featureNumber">02</span>
              <h3>STEM</h3>
              <p>Applying science, technology, engineering, and math.</p>
            </div>

            <div className="featureCard">
              <span className="featureNumber">03</span>
              <h3>Teamwork</h3>
              <p>Learning to solve difficult problems together.</p>
            </div>

            <div className="featureCard">
              <span className="featureNumber">04</span>
              <h3>Leadership</h3>
              <p>Giving students opportunities to lead real projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE AMMOKNIGHTS */}
      <section className="sponsorSection aboutSection">
        <div className="sectionContainer">
          <div className="sectionHeaderCenter">
            <span className="sectionEyebrow">02 / THE AMMOKNIGHTS</span>

            <h2>
              More Than <span>a Robot.</span>
            </h2>

            <p>
              Since 2005, the Ammoknights have been giving Idaho students the
              opportunity to experience engineering, competition, leadership,
              and community service.
            </p>
          </div>

          <div className="statGrid">
            <div className="statCard">
              <strong>2005</strong>
              <span>Founded</span>
              <p>Idaho's original FRC team.</p>
            </div>

            <div className="statCard">
              <strong>#1566</strong>
              <span>FRC Team</span>
              <p>1,566th Team to Join First.</p>
            </div>

            <div className="statCard">
              <strong>2019</strong>
              <span>Worlds</span>
              <p>Competed at the FIRST World Championship.</p>
            </div>

            <div className="statCard">
              <strong>501(c)(3)</strong>
              <span>Nonprofit</span>
              <p>Rocky Mountain Robotics Coalition.</p>
            </div>

            <div className="statCard">
              <strong>25+</strong>
              <p>Students</p>
            </div>


            <div className="statCard">
              <strong>8+</strong>
              <p>Mentors</p>
            </div>
          </div>

          <div className="aboutTextGrid">
            <div>
              <h3>Who We Are</h3>
              <p>
                We are a youth-led, mentor-supported robotics team made up of
                high-school-aged students from around Idaho Falls.
              </p>
            </div>

            <div>
              <h3>Where We Work</h3>
              <p>
                We are based out of the Community Youth in Action Center of
                Idaho Falls.
              </p>
            </div>

            <div>
              <h3>What We Believe</h3>
              <p>
                Students should have access to hands-on STEM opportunities
                regardless of their financial situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="sponsorSection whatWeDoSection">
        <div className="sectionContainer">
          <div className="splitHeading">
            <div>
              <span className="sectionEyebrow">03 / WHAT WE DO</span>
              <h2>
                Students <span>Build.</span>
              </h2>
            </div>

            <p>
              The robot is only one part of the experience. Students are
              involved in nearly every aspect of running a competitive
              robotics team.
            </p>
          </div>

          <div className="skillsGrid">
            <div className="skillItem">Engineering</div>
            <div className="skillItem">Programming</div>
            <div className="skillItem">Design</div>
            <div className="skillItem">Laser Cutting</div>
            <div className="skillItem">Problem Solving</div>
            <div className="skillItem">Business</div>
            <div className="skillItem">Marketing</div>
            <div className="skillItem">Graphic Design</div>
            <div className="skillItem">Communication</div>
            <div className="skillItem">Networking</div>
            <div className="skillItem">Teamwork</div>
            <div className="skillItem">Leadership</div>
          </div>

          <div className="competitionCallout">
            <div>
              <span>EVERY SEASON</span>
              <strong>ONE NEW CHALLENGE.</strong>
            </div>

            <p>
              We design and build a new robot each year to compete in the
              current FIRST Robotics Competition challenge, with the goal of
              advancing through regional competition toward the World
              Championship.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="sponsorSection videosSection">
        <div className="sectionContainer">
          <div className="sectionHeaderCenter">
            <span className="sectionEyebrow">04 / SEE IT IN ACTION</span>

            <h2>
              This Is <span>What We Build.</span>
            </h2>
          </div>

          <div className="videoGrid">
            <div className="videoCard">
              <div className="videoFrame">
                <iframe
                  src="https://www.youtube.com/embed/ed4YCIQfMHc"
                  title="Ammoknights FIRST Robotics Video"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="videoCardContent">
                <span>FIRST ROBOTICS</span>
                <h3>Inspiring the Next Generation</h3>
              </div>
            </div>

            <div className="videoCard">
              <div className="videoFrame">
                <iframe
                  src="https://www.youtube.com/embed/Jd29kzjclV0"
                  title="Ammoknights Team Video"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="videoCardContent">
                <span>FIRST ROBOTICS</span>
                <h3>About First</h3>
              </div>
            </div>
          </div>

          <div className="notesWithLink">
            <span>Want to see more? check out our</span>

            <a
              className="textLink"
              href="https://www.youtube.com/@firstteamammoknights7094"
            >
              YouTube channel
            </a>
            <span>for more videos of our team in action.</span>
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="sponsorSection impactSection">
        <div className="sectionContainer">
          <div className="impactHeader">
            <span className="sectionEyebrow">05 / COMMUNITY IMPACT</span>

            <h2>
              We Don't Just <span>Compete.</span>
            </h2>

            <p>
              We take what we learn on the competition field and bring STEM
              opportunities back into our community.
            </p>
          </div>

          <div className="impactGrid">
            <div className="impactCard">
              <span>01</span>
              <h3>STEM Days</h3>
              <p>
                We participate in STEM days at local schools and community
                events.
              </p>
            </div>

            <div className="impactCard">
              <span>02</span>
              <h3>Youth Programs</h3>
              <p>
                We support STEM activities at the Community Youth in Action
                Center.
              </p>
            </div>

            <div className="impactCard">
              <span>03</span>
              <h3>FIRST Outreach</h3>
              <p>
                We help FIRST LEGO League teams and support FIRST events in
                our community.
              </p>
            </div>

            <div className="impactCard">
              <span>04</span>
              <h3>Women in STEM</h3>
              <p>
                We support opportunities that encourage women to participate
                in STEM.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="alumniImpactSection">
        <div className="sectionContainer">
          <div className="alumniImpactGrid">
            <div className="alumniImpactContent">
              <span className="sectionEyebrow">07 / BEYOND THE COMPETITION</span>

              <h2>
                The Impact Doesn't
                <span> End at Graduation.</span>
              </h2>

              <p className="sectionLead">
                The robot may only compete for one season, but the skills students
                develop with the Ammoknights can follow them for a lifetime.
              </p>

              <p>
                Through hands-on engineering, programming, design, leadership,
                communication, and problem solving, students gain experience that
                extends far beyond the competition field.
              </p>

              <p>
                Many of our alumni go on to pursue engineering, technology, and
                other STEM-related education and careers, carrying the experience
                they gained on the team into college and beyond.
              </p>
            </div>

            <div className="alumniPath">
              <div className="alumniPathItem">
                <span className="alumniPathNumber">01</span>
                <div>
                  <strong>Join the Team</strong>
                  <span>Students discover hands-on STEM.</span>
                </div>
              </div>

              <div className="alumniPathLine" />

              <div className="alumniPathItem">
                <span className="alumniPathNumber">02</span>
                <div>
                  <strong>Learn & Build</strong>
                  <span>Students gain real technical experience.</span>
                </div>
              </div>

              <div className="alumniPathLine" />

              <div className="alumniPathItem">
                <span className="alumniPathNumber">03</span>
                <div>
                  <strong>Lead & Compete</strong>
                  <span>Students learn teamwork and leadership.</span>
                </div>
              </div>

              <div className="alumniPathLine" />

              <div className="alumniPathItem">
                <span className="alumniPathNumber">04</span>
                <div>
                  <strong>Take It Further</strong>
                  <span>Those skills continue into college and careers.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* SUPPORT */}
      <section className="sponsorSection supportSection">
        <div className="sectionContainer">
          <div className="sectionHeaderCenter">
            <span className="sectionEyebrow">06 / YOUR SUPPORT</span>

            <h2>
              Where Does the Money <span>Go?</span>
            </h2>

            <p>
              Running a competitive robotics team takes more than a robot.
              Sponsorship helps us keep the program accessible while giving
              students better opportunities to build, compete, and grow.
            </p>
          </div>

          <div className="costGrid">
            <div className="costCard">
              <strong>$6,300+</strong>
              <span>Annual Registration</span>
              <p>Minimum FIRST registration costs each season.</p>
            </div>

            <div className="costCard">
              <strong>$3,000+</strong>
              <span>Additional Regional</span>
              <p>Approximate additional cost for another regional event.</p>
            </div>

            <div className="costCard">
              <strong>~$5,000</strong>
              <span>Robot & Materials</span>
              <p>Components, motors, controls, drive systems, and materials.</p>
            </div>

            <div className="costCard">
              <strong>$0</strong>
              <span>Student Cost</span>
              <p>
                Our goal is to keep participation free and accessible to
                students.
              </p>
            </div>
          </div>

          <div className="supportUses">
            <h3>Your Support Helps Us</h3>

            <div className="supportUsesGrid">
              <div>
                <span>01</span>
                <h4>BUILD</h4>
                <p>Improve our robots, tools, and technical capabilities.</p>
              </div>

              <div>
                <span>02</span>
                <h4>COMPETE</h4>
                <p>Attend competitions and pursue another trip to Worlds.</p>
              </div>

              <div>
                <span>03</span>
                <h4>TEACH</h4>
                <p>Expand STEM outreach and community programming.</p>
              </div>

              <div>
                <span>04</span>
                <h4>GROW</h4>
                <p>Give students experiences that can shape their futures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="currentSponsorsSection">
        <div className="sectionContainer">
          <div className="sectionHeaderCenter">
            <span className="sectionEyebrow">09 / OUR SUPPORTERS</span>

            <h2>
              Built With
              <span> Support.</span>
            </h2>

            <p>
              Our sponsors help make competitive robotics, hands-on STEM education,
              and opportunities for students in our community possible.
            </p>
          </div>

          <div className="currentSponsorsDisplay">
            <SponsorCarousel />
          </div>

          <div className="notesWithLink">
            <span>Want to see your organization here?</span>

            <Link to="/sponsors/become" className="textLink">
              Become a Sponsor <span>→</span>
            </Link>
          </div>

        </div>
      </section>


      <Footer />
    </div>
  )
}

export default WhyBecomeSponsor