const sponsorTiers = [
  {
    name: "Page",
    lowRange: 250,
    highRange: 499,
    benefits: [
      "Thank You and Team Photo",
    ],
    sponsors: [
      {
        name: "Idaho Peak Outfitters",
        email: "contact@idahopeakoutfitters.com",
        website: "idahopeakoutfitters.com",
        link: "https://idahopeakoutfitters.com",
        svg: `
          <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 60 L70 15 L120 60" fill="none" stroke="currentColor" stroke-width="8"/>
            <path d="M70 60 L115 25 L180 60" fill="none" stroke="currentColor" stroke-width="8"/>
            <text x="100" y="75" text-anchor="middle" font-size="14">
              IDAHO PEAK
            </text>
          </svg>
        `,
      },
      {
        name: "Snake River Supply",
        email: "hello@snakeriversupply.com",
        website: "snakeriversupply.com",
        link: "https://snakeriversupply.com",
        svg: `
          <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 40 C50 10 80 70 110 40 S170 10 180 40"
              fill="none"
              stroke="currentColor"
              stroke-width="8"/>
            <text x="100" y="70" text-anchor="middle" font-size="13">
              SNAKE RIVER SUPPLY
            </text>
          </svg>
        `,
      },
    ],
  },

  {
    name: "Squire",
    lowRange: 500,
    highRange: 999,
    benefits: [
      "Everything included in Page",
      "Shout out on social media",
    ],
    sponsors: [
      {
        name: "Mountain West Electric",
        email: "info@mountainwestelectric.com",
        website: "mountainwestelectric.com",
        link: "https://mountainwestelectric.com",
        svg: `
          <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 5 L55 45 H90 L75 75 L145 35 H110 Z"
              fill="currentColor"/>
            <text x="100" y="78" text-anchor="middle" font-size="12">
              MOUNTAIN WEST
            </text>
          </svg>
        `,
      },
      {
        name: "Eastern Idaho Auto",
        email: "contact@easternidahoauto.com",
        website: "easternidahoauto.com",
        link: "https://easternidahoauto.com",
        svg: `
          <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            <circle cx="55" cy="35" r="25"
              fill="none"
              stroke="currentColor"
              stroke-width="6"/>
            <path d="M40 35 H70 M55 20 V50"
              stroke="currentColor"
              stroke-width="5"/>
            <text x="130" y="40" text-anchor="middle" font-size="13">
              EASTERN IDAHO
            </text>
            <text x="130" y="58" text-anchor="middle" font-size="13">
              AUTO
            </text>
          </svg>
        `,
      },
    ],
  },

  {
    name: "Knight",
    lowRange: 1000,
    highRange: 1999,
    benefits: [
      "Everything included in Squire",
      "Listed on team T-shirt",
      "Logo on our team website with a link to your business",
      "Invite to team banquet",
    ],
    sponsors: [
      {
        name: "Gem State Fabrication",
        email: "sales@gemstatefab.com",
        website: "gemstatefab.com",
        link: "https://gemstatefab.com",
        svg: `
          <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20 H80 L110 40 L80 60 H20 L50 40 Z"
              fill="none"
              stroke="currentColor"
              stroke-width="7"/>
            <text x="150" y="45" text-anchor="middle" font-size="13">
              GEM STATE
            </text>
          </svg>
        `,
      },
      {
        name: "Teton Technology",
        email: "hello@tetontech.com",
        website: "tetontech.com",
        link: "https://tetontech.com",
        svg: `
          <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 55 L60 15 L100 55"
              fill="none"
              stroke="currentColor"
              stroke-width="7"/>
            <path d="M45 55 L75 25 L105 55"
              fill="none"
              stroke="currentColor"
              stroke-width="5"/>
            <text x="150" y="45" text-anchor="middle" font-size="13">
              TETON TECH
            </text>
          </svg>
        `,
      },
    ],
  },

  {
    name: "Baron",
    lowRange: 2000,
    highRange: 4999,
    benefits: [
      "Everything included in Knight",
      "Logo on team BANNER",
      "Logo ON our ROBOT",
      "Invited to team events",
      "Special recognition at our banquet",
      "\"Proud Supporter of the Ammoknights\" graphic you can use on your website and social media",
    ],
    sponsors: [
      {
        name: "Idaho Engineering Group",
        email: "info@idahoengineeringgroup.com",
        website: "idahoengineeringgroup.com",
        link: "https://idahoengineeringgroup.com",
        svg: `
          <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="15" width="50" height="50"
              fill="none"
              stroke="currentColor"
              stroke-width="6"/>
            <path d="M30 55 L45 35 L60 55"
              fill="none"
              stroke="currentColor"
              stroke-width="5"/>
            <text x="135" y="42" text-anchor="middle" font-size="12">
              IDAHO
            </text>
            <text x="135" y="58" text-anchor="middle" font-size="12">
              ENGINEERING
            </text>
          </svg>
        `,
      },
      {
        name: "Rocky Mountain Manufacturing",
        email: "support@rockymountainmfg.com",
        website: "rockymountainmfg.com",
        link: "https://rockymountainmfg.com",
        svg: `
          <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 60 L50 15 L85 60 Z"
              fill="none"
              stroke="currentColor"
              stroke-width="7"/>
            <rect x="105" y="20" width="70" height="40"
              fill="none"
              stroke="currentColor"
              stroke-width="5"/>
            <text x="140" y="45" text-anchor="middle" font-size="10">
              RMM
            </text>
          </svg>
        `,
      },
    ],
  },

  {
    name: "Royal",
    lowRange: 5000,
    highRange: 19999,
    benefits: [
      "Everything included in Baron",
      "Premium logo placement on robot and banner",
      "Private Knights Robotics Experience at your business",
      "Team brings the competition robot",
      "Live robot demonstration",
      "Sponsor gets to drive the robot",
      "Meet the team in person and learn how your partnership has impacted them",
      "Team photo opportunity",
      "Special recognition as a Royal Sponsor",
      "Personalized team thank-you",
    ],
    sponsors: [
      {
        name: "Frontier Robotics",
        email: "contact@frontierrobotics.com",
        website: "frontierrobotics.com",
        link: "https://frontierrobotics.com",
        svg: `
          <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            <circle cx="45" cy="40" r="28"
              fill="none"
              stroke="currentColor"
              stroke-width="6"/>
            <rect x="32" y="27" width="26" height="26"
              fill="none"
              stroke="currentColor"
              stroke-width="5"/>
            <text x="135" y="45" text-anchor="middle" font-size="14">
              FRONTIER
            </text>
          </svg>
        `,
      },
      {
        name: "Blue Ridge Industries",
        email: "info@blueridgeindustries.com",
        website: "blueridgeindustries.com",
        link: "https://blueridgeindustries.com",
        svg: `
          <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 55 L55 15 L90 55"
              fill="none"
              stroke="currentColor"
              stroke-width="8"/>
            <path d="M40 55 L65 28 L90 55"
              fill="none"
              stroke="currentColor"
              stroke-width="5"/>
            <text x="145" y="45" text-anchor="middle" font-size="13">
              BLUE RIDGE
            </text>
          </svg>
        `,
      },
    ],
  },

  {
    name: "King",
    lowRange: 20000,
    highRange: Infinity,
    benefits: [
      "Everything in the Royal tier",
      "Entire side for the sponsor logo placement on the robot",
      "Largest sponsor logo placement on team shirts and banners",
      "Premium sponsor placement on our website",
      "Multiple featured social media posts throughout the season",
      "Recognition at competitions and major team events",
      "Gamepeice trophy",
      "Only King because we only allow one King per season",
    ],
    sponsors: [
      {
        name: "Apex Industries",
        email: "partnerships@apexindustries.com",
        website: "apexindustries.com",
        link: "https://apexindustries.com",
        svg: `
          <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 60 L60 10 L100 60"
              fill="none"
              stroke="currentColor"
              stroke-width="9"/>
            <path d="M45 60 L60 40 L75 60"
              fill="currentColor"/>
            <text x="150" y="45" text-anchor="middle" font-size="15">
              APEX
            </text>
          </svg>
        `,
      },
    ],
  },
]

export default sponsorTiers