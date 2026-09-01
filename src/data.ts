export const siteData = {
  name: "Shaheen Ahmed",
  title: "Developer Relations Engineer",
  //tagline: "Building thoughtful software that solves real problems.",
  email: "riseandshaheen@gmail.com",

  about:
    "I work as a DevRel Engineer focused on developer experience, ecosystem growth, and technical education.\n\nCurrently, a Developer Advocate at Cartesi (4 years), helping developers build with Cartesi through documentation, developer tooling, workshops, and hackathons. Helped grow a 5k+ developer community, mentored grant-funded projects, and supported builders across events and hackathons including ETHGlobal.\n\nPreviously, started my career as a Software Engineer at Amdocs, building APIs for telecommunication giants like AT&T and T-mobile.",

  social: {
    twitter: "https://twitter.com/riseandshaheen",
    github: "https://github.com/riseandshaheen",
    linkedin: "https://linkedin.com/in/shaheenahmd",
  },

  projects: [
    {
      name: "Scribbl",
      description:
        "A fun application where AI judges your hand-drawn doodles",
      tech: ["Python", "TensorFlow", "React"],
      link: "https://github.com/experimentationlab/art-judge",
      thumbnail: new URL("./assets/thumbnails/scribbl-project.png", import.meta.url).href,
    },
  ],

  events: [
    {
      name: "ETH Global Bangkok",
      image: new URL("./assets/events/eth-global-bangkok.jpeg", import.meta.url).href,
    },
    {
      name: "ETH Global Istanbul",
      image: new URL("./assets/events/eth-global-istanbul.jpg", import.meta.url).href,
    },
    {
      name: "ETH Global NYC",
      image: new URL("./assets/events/eth-global-nyc.jpg", import.meta.url).href,
    },
    {
      name: "Meetup Chennai",
      image: new URL("./assets/events/kalakendra-chennai.jpeg", import.meta.url).href,
    },
    {
      name: "Web3Bridge Nigeria",
      image: new URL("./assets/events/web3bridge-nigeria.jpeg", import.meta.url).href,
    },
  ],

  content: {
    courses: [
      {
        title: "Cartesi Masterclass",
        summary:
          "Udemy course where I teach Module 3 and 4, covering core Cartesi development concepts.",
        link: "https://www.udemy.com/course/cartesi-masterclass/",
        thumbnail: new URL("./assets/thumbnails/udemy-masterclass.webp", import.meta.url).href,
      },
    ],
    tutorials: [
      {
        title: "Vibe Coding a Voting App",
        summary:
          "A tutorial and demo video walking through building a decentralized voting app.",
        link: "https://x.com/riseandshaheen/status/1986313297755578424",
        thumbnail: new URL("./assets/thumbnails/vibe-coding.png", import.meta.url).href,
      },
      {
        title: "Cartesi Hands-on Workshop @ ETHGlobal Bangkok 2025",
        summary:
          "Live workshop on building with Cartesi at ETH Global Bangkok 2025.",
        link: "https://youtu.be/1Q4Mhze9c98?t=635",
        thumbnail: "https://img.youtube.com/vi/1Q4Mhze9c98/hqdefault.jpg",
        type: "Workshop",
      },
    ],
    jsSeries: [
      {
        title: "Cartesi App with JavaScript - Episode 1",
        summary:
          "A 4 part series dedicated for JavaScript developers to build apps on the Cartesi stack.",
        link: "https://x.com/riseandshaheen/status/1844075945722073472/video/1",
        thumbnail: new URL("./assets/thumbnails/build-in-js.png", import.meta.url).href,
      },
      {
        title: "JS on Cartesi — Episode 2: Building Your First dApp",
        summary:
          "Setting up your first JavaScript dApp on Cartesi with a step-by-step walkthrough.",
        link: "https://x.com/riseandshaheen/status/1846627152348815551",
        thumbnail: "",
      },
      {
        title: "JS on Cartesi — Episode 3: State Management",
        summary:
          "Handling application state inside the Cartesi Machine using JavaScript.",
        link: "https://x.com/riseandshaheen/status/1852321642648916252",
        thumbnail: "",
      },
      {
        title: "JS on Cartesi — Episode 4: Advanced Patterns",
        summary:
          "Advanced patterns and best practices for production-ready JS apps on Cartesi.",
        link: "https://x.com/riseandshaheen/status/1862491662309892215",
        thumbnail: "",
      },
    ],
    videos: [],
    podcasts: [
      {
        title: "I Build, Therefore I Am",
        summary:
          "A podcast for Cartesi builders exploring what it means to build in the web3 ecosystem.",
        link: "https://www.youtube.com/live/9pvkv-uhg20",
        thumbnail: "https://img.youtube.com/vi/9pvkv-uhg20/hqdefault.jpg",
      },
    ],
    workshops: [],
    articles: [
      {
        title: "Build Farcaster Frames for Cartesi Rollups: A Simple Guide",
        summary:
          "A step-by-step guide to building Farcaster Frames for Cartesi rollups.",
        link: "https://medium.com/@riseandshaheen/build-farcaster-frames-for-cartesi-rollups-a-simple-guide-f72ce6627522",
        thumbnail: new URL("./assets/thumbnails/farcaster-cartesi.webp", import.meta.url).href,
      },
      {
        title: "DeFi Appchains",
        summary:
          "An exploration of DeFi application-specific chains and their architecture.",
        link: "https://x.com/riseandshaheen/status/1971186359542087813",
        thumbnail: new URL("./assets/thumbnails/defi-article.webp", import.meta.url).href,
      },
    ],
  },
};
