import { Link } from "react-router"
import Header from "../components/Header"
import { useEffect } from "react"

export default function About() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <main className="aboutPage">
      <Header position="fixed" />

      {/* HERO */}
      <section className="aboutHero">
        <div className="aboutHeroContent">
          <span className="aboutEyebrow">FIRST Robotics Competition Team 1566</span>
          <h1>The AMMOKNIGHTS</h1>
          <p>
            Idaho's first FRC team.
            Building robots, developing leaders, and spreading STEM since 2005.
          </p>

          <div className="aboutHeroButtons">
            <Link to="/contact">Join the Team</Link>
            <Link to="/sponsors/become">Support Us</Link>
          </div>
        </div>
      </section>


      {/* WHO WE ARE */}
      <section className="aboutSection aboutLight">
        <div className="aboutSectionHeader">
          <h2>Meet the Ammoknights</h2>
        </div>

        <div className="aboutContent">
          <div className="aboutText">
            <p>
              We are the <strong>Ammoknights, FIRST Robotics Competition Team
                1566</strong>, based in Idaho Falls, Idaho.
            </p>

            <p>
              We started in <strong>2005</strong> as Idaho's original
              high-school-level robotics team competing in FIRST FRC. That
              makes us the <strong>oldest FIRST robotics team in Idaho.</strong>
            </p>

            <p>
              Since our founding, we have competed every year. In 2019, we
              won our regional competition and earned the opportunity to
              compete at the <strong>FIRST World Championship.</strong>
            </p>

            <p>
              Every year our goal is to build a competition robot, compete at
              the highest level we can, and make it back to Worlds. But
              competition is only part of what we do.
            </p>

            <p>
              We are a <strong>youth-led, mentor-supported</strong> team.
              Students do the work, make decisions, build the robot, and lead
              the team while adult mentors provide guidance, experience, and
              support.
            </p>
          </div>

          <div className="aboutImageGrid">
            <img
              src="https://static.wixstatic.com/media/99ff43_f5ac494e4e7d4fc2921d93e59b775690~mv2.png/v1/crop/x_44,y_38,w_1103,h_816/fill/w_377,h_273,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/99ff43_f5ac494e4e7d4fc2921d93e59b775690~mv2.png"
              alt="Ammoknights robotics team"
            />

            <img
              src="https://static.wixstatic.com/media/99ff43_16d0c549857144378facfb318eecd952~mv2.jpg/v1/crop/x_0,y_560,w_3000,h_2727/fill/w_318,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/99ff43_16d0c549857144378facfb318eecd952~mv2.jpg"
              alt="Ammoknights students working on a robot"
            />

            <img
              src="https://static.wixstatic.com/media/99ff43_aa47de5ffe7044c69817df46fc922232~mv2.jpg/v1/fill/w_425,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/99ff43_aa47de5ffe7044c69817df46fc922232~mv2.jpg"
              alt="Ammoknights robotics competition"
            />

            <img
              src="https://static.wixstatic.com/media/99ff43_31c2356a942f4518bd18559c9ae76538~mv2.png/v1/crop/x_100,y_607,w_3180,h_2327/fill/w_340,h_244,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/99ff43_31c2356a942f4518bd18559c9ae76538~mv2.png"
              alt="Ammoknights team members"
            />
          </div>
        </div>
      </section>


      {/* HISTORY */}
      <section className="aboutSection aboutDark">
        <div className="aboutSectionHeader">
          <span>OUR HISTORY</span>
          <h2>Built Since 2005</h2>
        </div>

        <div className="aboutHistory">
          <div className="historyItem">
            <div className="historyYear">2005</div>
            <div>
              <h3>The Ammoknights Begin</h3>
              <p>
                Curtis Thomas and Richard Anderson founded Team 1566 at
                Hillcrest High School, creating Idaho's first FIRST FRC team.
              </p>
            </div>
          </div>

          <div className="historyItem">
            <div className="historyYear">Every Year</div>
            <div>
              <h3>Competing in FRC</h3>
              <p>
                The team has continued competing in FIRST competitions,
                designing and building a new robot for each year's challenge.
              </p>
            </div>
          </div>

          <div className="historyItem">
            <div className="historyYear">2019</div>
            <div>
              <h3>Regional Champions</h3>
              <p>
                The Ammoknights won their regional competition and earned a
                place at the FIRST World Championship.
              </p>
            </div>
          </div>

          <div className="historyItem">
            <div className="historyYear">Today</div>
            <div>
              <h3>A Community Team</h3>
              <p>
                The Ammoknights are now a community-based team serving
                high-school students from across the Idaho Falls area.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* WHAT WE DO */}
      <section className="aboutSection aboutLight">
        <div className="aboutSectionHeader">
          <span>WHAT WE DO</span>
          <h2>More Than Just a Robot</h2>
        </div>

        <div className="aboutCards">

          <article className="aboutCard">
            <div className="aboutCardIcon">01</div>
            <h3>Build & Compete</h3>
            <p>
              Each year we build a new competition robot based on that year's
              FIRST FRC challenge. We take our robot to compete against teams
              from around the United States and other countries.
            </p>
          </article>

          <article className="aboutCard">
            <div className="aboutCardIcon">02</div>
            <h3>Learn STEM</h3>
            <p>
              Students learn programming, engineering, design, electronics,
              fabrication, business, marketing, graphic design, media,
              networking, and problem solving.
            </p>
          </article>

          <article className="aboutCard">
            <div className="aboutCardIcon">03</div>
            <h3>Give Back</h3>
            <p>
              We work to spread STEM throughout our community through
              outreach programs, camps, FIRST LEGO League events, and
              educational opportunities for younger students.
            </p>
          </article>

          <article className="aboutCard">
            <div className="aboutCardIcon">04</div>
            <h3>Empower Students</h3>
            <p>
              Our students get real-world experience solving problems,
              working as a team, managing projects, and taking responsibility
              for their own work.
            </p>
          </article>

        </div>
      </section>


      {/* COMMUNITY */}
      <section className="aboutSection aboutBlue">
        <div className="aboutSectionHeader">
          <span>COMMUNITY OUTREACH</span>
          <h2>Spreading STEM</h2>
        </div>

        <div className="aboutOutreach">

          <div className="outreachItem">
            <h3>Women in STEM</h3>
            <p>
              We promote Women in STEM by hosting summer outreach camps for
              community members and Girl Scouts.
            </p>
          </div>

          <div className="outreachItem">
            <h3>Elementary STEM</h3>
            <p>
              We support STEM education in elementary schools by helping with
              FIRST LEGO League competitions and hosting outreach camps for
              students in grades 4–8.
            </p>
          </div>

          <div className="outreachItem">
            <h3>Community Youth in Action</h3>
            <p>
              We partner with Community Youth in Action to provide STEM
              classes for students in their programs.
            </p>
          </div>

        </div>
      </section>


      {/* FIRST */}
      <section className="aboutSection aboutDark">
        <div className="aboutFirstContent">
          <div>
            <span className="aboutEyebrow">WHAT IS FIRST?</span>
            <h2>More Than Robotics</h2>
          </div>

          <div>
            <p>
              We are <strong>FIRST Robotics Team 1566, the Ammoknights.</strong>
            </p>

            <p>
              FIRST is a worldwide robotics program that encourages young
              people to reach their full potential in science, technology,
              engineering, and mathematics through hands-on robotics
              challenges and competitions.
            </p>

            <p>
              FIRST gives students the opportunity to experience engineering
              and teamwork in a real-world environment while building
              confidence, leadership, and problem-solving skills.
            </p>
          </div>
        </div>
      </section>


      {/* TEAM TODAY */}
      <section className="aboutSection aboutLight">
        <div className="aboutSectionHeader">
          <span>OUR TEAM TODAY</span>
          <h2>A Community Built Around Students</h2>
        </div>

        <div className="aboutContent aboutContentReverse">
          <div className="aboutText">
            <p>
              The Ammoknights have grown from a high school team into a
              community team supported by parents, mentors, volunteers, and
              community organizations.
            </p>

            <p>
              We currently partner with <strong>Community Youth in Action</strong>,
              serving high-school-aged students from throughout the Idaho Falls
              area.
            </p>

            <p>
              Many of our former team members have gone on to pursue
              <strong> engineering degrees and careers</strong>, carrying the
              skills and experiences they gained through FIRST with them.
            </p>

            <p>
              We are proud to be a <strong>501(c)(3) nonprofit organization,
                the Rocky Mountain Robotics Coalition.</strong>
            </p>
          </div>

          <div className="aboutMissionBox">
            <span>OUR GOAL</span>
            <h3>Build. Compete. Inspire.</h3>
            <p>
              Build a great robot. Compete at the highest level.
              Inspire the next generation of STEM leaders.
            </p>
          </div>
        </div>
      </section>


      {/* JOIN */}
      <section className="aboutJoin">
        <div>
          <span className="aboutEyebrow">READY TO GET INVOLVED?</span>
          <h2>Want to Join the Ammoknights?</h2>
          <p>
            If you are 14–18 years old and enjoy programming, engineering,
            building, problem solving, competing, social media, planning
            events, community outreach, graphic design, or media, come join us.
          </p>

          <div className="aboutJoinButtons">
            <Link to="/contact">Contact Us</Link>
            <a href="mailto:first1566ammoknights@gmail.com">
              Email the Team
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}