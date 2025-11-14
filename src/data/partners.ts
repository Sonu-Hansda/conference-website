// Partner logo images - add actual images to src/assets/partners/ directory
// To add images:
// 1. Add partner logo images to src/assets/partners/ (e.g., partner-1.jpg, partner-2.jpg, etc.)
// 2. Import them at the top: import partner1 from "@/assets/partners/partner-1.jpg";
// 3. Replace the empty string "" with the imported image variable

export interface Partner {
  name: string;
  image: string;
  url?: string;
}

// TODO: Import partner logo images here when available
// Example:
// import partner1 from "@/assets/partners/partner-1.jpg";
// import partner2 from "@/assets/partners/partner-2.jpg";
// etc.

export const partners: Partner[] = [
  {
    name: "allevents",
    image: "", // Replace with: partner1
    url: "https://allevents.in"
  },
  {
    name: "conference alerts.in",
    image: "", // Replace with: partner2
    url: "https://conferencealerts.in"
  },
  {
    name: "IE Industry Events",
    image: "", // Replace with: partner3
    url: "https://industryevents.com"
  },
  {
    name: "NC SUSTAINABLE ENERGY ASSOCIATION",
    image: "", // Replace with: partner4
    url: "https://energync.org"
  },
  {
    name: "Conference Alert",
    image: "", // Replace with: partner5
    url: "https://conferencealerts.com"
  },
  {
    name: "CAN Conference Alerts NETWORK",
    image: "", // Replace with: partner6
    url: "https://conferencealerts.net"
  },
  {
    name: "ExpoTobi",
    image: "", // Replace with: partner7
    url: "https://expotobi.com"
  },
  {
    name: "WikiCFP A Wiki for Calls For Papers",
    image: "", // Replace with: partner8
    url: "https://wikicfp.com"
  },
  {
    name: "Academic Resource Index ResearchBib",
    image: "", // Replace with: partner9
    url: "https://researchbib.com"
  },
  {
    name: "CONFERENCE2GO",
    image: "", // Replace with: partner10
    url: "https://conference2go.com"
  },
  {
    name: "CONFERENCEXT",
    image: "", // Replace with: partner11
    url: "https://conferencext.com"
  },
  {
    name: "International Conference Lists conferencelists.org",
    image: "", // Replace with: partner12
    url: "https://conferencelists.org"
  }
];

