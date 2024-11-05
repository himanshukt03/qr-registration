import { Link } from "lucide-react";
import Image from "next/image"; 
import React from "react";

export default function Events() {
  interface CardData {
    id: number;
    title: string;
    date: string;
    time: string;
    caption: string;
    description: string;
    organizer: string;
    imageSrc: string;
  }

  const cardData: CardData[] = [
    {
      id: 1,
      title: "CSS Action",
      caption: "Put your web design skills to the test!",
      description:
        "Join a dynamic web-based competition showcasing stunning UI using HTML and CSS.",
      organizer: "Koshin Hegde - 7899715941",
      date: "8th Nov",
      time: "9:00am - 10:45pm",
      imageSrc: "/events/CSS_Action.png",
    },
    {
      id: 2,
      title: "Code Forge",
      caption: "Unleash Your Coding Prowess",
      description:
        "Take on the ultimate coding challenge and prove your skills against top minds in the field.",
      organizer: "Nithesh Alva - 7483775694",
      date: "8th Nov",
      time: "9:00am - 11:00am",
      imageSrc: "/events/CodeForge.png",
    },
    {
      id: 3,
      title: "Bit Breaker",
      caption: "Ready for a mind-bending challenge?",
      description:
        "Test your problem-solving skills and capture flags to claim victory in this exciting competition.",
      organizer: "Yash Laxman - 6362072050",
      date: "8th Nov",
      time: "10:30am - 12:00pm",
      imageSrc: "/events/ctf.jpg",
    },
    // {
    //   id: 4,
    //   title: "Sightless Syntax",
    //   caption: "Are you a coding mastermind?",
    //   description:
    //     "Solve complex problems without tools and prove your mental acuity in this thrilling challenge.",
    //   organizer: "Rithuparna K.S - 7019821295",
    //   date: "8th Nov",
    //   time: "12:00pm - 1:30pm",
    //   imageSrc: "/events/SightlessSyntax.png",
    // },
    {
      id: 5,
      title: "PitchX",
      caption: "Spark Innovation and Inspire Change!",
      description:
        "Bring your ideas to life and compete for roles in the future of technology and entrepreneurship.",
      organizer: "Apeksha L Naik - 8904315769",
      date: "8th Nov",
      time: "10:30am - 1:30pm",
      imageSrc: "/events/PitchX.png",
    },
    {
      id: 6,
      title: "Battleground Brawl: BGMI",
      caption: "Dominate the battlefield in our tournament!",
      description:
        "Showcase your skills and emerge victorious in this exciting BGMI competition.",
      organizer: "Advaith S Shetty - 9902698070",
      date: "8th Nov",
      time: "2:00pm - 4:00pm",
      imageSrc: "/events/BGMI.png",
    },
    {
      id: 7,
      title: "Speed Cuber",
      caption: "Are you a Rubik's Cube prodigy?",
      description:
        "Race against top competitors and push your limits in this exhilarating speedcubing contest.",
      organizer: "Manushree P B - 6363316781",
      date: "All Three Days",
      time: "",
      imageSrc: "/events/Speedcuber.png",
    },
    {
      id: 8,
      title: "Blazzing Fingers",
      caption: "Are you a typing speed demon?",
      description:
        "Demonstrate your skills in our typing competition and compete for the title of fastest typist!",
      organizer: "Kshama S - 9741433993",
      date: "All three days",
      time: "",
      imageSrc: "/events/BlazzingFingers.jpg",
    },
    {
      id: 9,
      title: "The Surge",
      caption: "Become the ultimate agent in our competition!",
      description:
        "Master your skills and outsmart opponents to achieve victory in thrilling Valorant matches.",
      organizer: "Megarth - 9845153931",
      date: "7th Nov",
      time: "11:00am onwards",
      imageSrc: "/events/surge.jpg",
    },
    {
      id: 10,
      title: "RoboSoccer",
      caption: "Join the future of football with robots as the stars!",
      description: "Control your robot to score goals in this tech-meets-tactics football match.",
      organizer: "Gurudeep - 9606408688",
      date: "8th Nov",
      time: "1:30am onwards",
      imageSrc: "/events/RoboSoccer.png"
    },
    {
      id: 11,
      title: "Line Follower",
      caption: "Can your bot stay on track and lead the pack?",
      description: "Test your bot's precision and speed. Navigate obstacles to reach victory!",
      organizer: "Gurudeep - 9606408688",
      date: "9th Nov",
      time: "8:00am onwards",
      imageSrc: "/events/Linefollower.jpg"
    }  
  ];
  
  const devHostEvents = cardData.filter(card => card.id <= 9);
  const srcEvents = cardData.filter(card => card.id > 9);

  const EventSection = ({ title, events, isSRC = false }: { title: string, events: CardData[], isSRC?: boolean }) => (
    <div>
      <h2 className="select-none text-center text-3xl md:text-4xl font-semibold md:pb-16 pb-10">
        {title}
      </h2>
      <div className={`grid md:grid-cols-2 ${isSRC ? 'max-w-3xl mx-auto gap-10' : ' max-w-6xl mx-auto gap-12'} grid-cols-1`}>
        {events.map((card) => (
          <div
            key={card.id}
            className="relative flex flex-col transition-shadow duration-300 hover:shadow-[0_0_5px_2px_rgba(180,255,57,0.4)] rounded-xl h-full"
          >
            <div className="event_card border-white/10 border rounded-xl p-6 bg-background h-full">
            <a href="/events">
              <div className="flex flex-col h-full">
                <div className="relative w-full h-0 pb-[52.25%] mb-4">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="rounded-xl object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h2 className="leading-6 mb-1 font-semibold text-xl tracking-wider text-white">
                  {card.title}
                </h2>
                <p className="block mb-2 font-semibold leading-none text-white/80 pt-2">
                  {card.date}
                </p>
                <time className="block mb-2 font-normal leading-none text-white/60">
                  {card.time}
                </time>
                <h3 className="leading-6 mb-1 pt-2 font-semibold text-base text-primary tracking-wider">
                  {card.caption}
                </h3>
                <p className="text-sm tracking-wider py-2 flex-grow">
                  {card.description}
                </p>
                <div className="mt-auto">
                  <p className="block font-semibold leading-none text-white mt-2 text-sm">
                    Organizer:
                  </p>
                  <p className="block font-normal leading-none text-white/90 mt-1 text-sm">
                    {card.organizer}
                  </p>
                </div>
              </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center pb-10 items-center w-full">
      <div className="max-w-6xl mb-20 w-full">
        <EventSection title="DevHost Events" events={devHostEvents} />
        <div className="mt-20">
          <EventSection title="SRC Events" events={srcEvents} isSRC={true} />
        </div>
      </div>
    </div>
  );
}