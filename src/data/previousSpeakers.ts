import committee1 from "@/assets/committee-1.jpg";
import committee2 from "@/assets/committee-2.jpg";
import committee3 from "@/assets/committee-3.jpg";
import committee4 from "@/assets/committee-4.jpg";

export interface PreviousSpeaker {
  name: string;
  affiliation: string;
  country: string;
  image: string;
  biography?: string;
}

export const previousSpeakers: PreviousSpeaker[] = [
  {
    name: "Le Wen",
    affiliation: "The University of Auckland",
    country: "New Zealand",
    image: committee1
  },
  {
    name: "Edson Bazzo",
    affiliation: "Federal University of Santa Catarina",
    country: "Brazil",
    image: committee2
  },
  {
    name: "Stephen J. Wilkinson",
    affiliation: "Avioxx Advanced Fuels Laboratory",
    country: "United Kingdom",
    image: committee3
  },
  {
    name: "Virinder Parmar",
    affiliation: "The City University of New York",
    country: "USA",
    image: committee4
  },
  // Additional speakers based on the images
  {
    name: "Rolando Pedicini",
    affiliation: "CNR-ITAE",
    country: "Italy",
    image: committee1 // Placeholder - you can add actual images later
  },
  {
    name: "Mira Chitt",
    affiliation: "Global College of Engineering and Technology",
    country: "Oman",
    image: committee2 // Placeholder
  },
  {
    name: "Shahabaldin Rezania",
    affiliation: "Sejong University",
    country: "South Korea",
    image: committee3 // Placeholder
  },
  {
    name: "Jinsong Wu",
    affiliation: "University of Chile",
    country: "Chile",
    image: committee4 // Placeholder
  },
  {
    name: "Libor Pekař",
    affiliation: "Tomas Bata University in Zlín",
    country: "Czech Republic",
    image: committee1 // Placeholder
  },
  {
    name: "Murat Yilmaz",
    affiliation: "Osmaniye Korkut Ata Üniversitesi",
    country: "Turkey",
    image: committee2 // Placeholder
  },
  {
    name: "Monish Ahuja",
    affiliation: "Punjab Renewable Energy Systems Private Limited",
    country: "India",
    image: committee3 // Placeholder
  },
  {
    name: "Sushant B. Wath",
    affiliation: "National Environmental Engineering Research Institute (NEERI)",
    country: "India",
    image: committee4 // Placeholder
  }
];

