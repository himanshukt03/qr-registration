"use client";
import React, { useEffect, useState } from "react";
import NoUserFound from "@/components/NoUserFound";
import QRCode from 'qrcode';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Users, Calendar, MapPin, Linkedin, Clock } from "lucide-react";
import dynamic from "next/dynamic";
import SkeletonLoader from "@/app/viewspeaker/loading";

const CursorTrailCanvas = dynamic(() => import('@/components/CursorTrailCanvas'), { ssr: false });

interface SpeakerData {
  id: string;
  name: string;
  position: string;
  talkTitle: string;
  talkType: string;
  description: string;
  linkedinUrl: string;
  imagePath: string;
  venue: string;
  time: string;
}

const speakers: SpeakerData[] = [
    {
      id: "001",
      name: "Bheema Prakash Adkasthala",
      position: "Head of Service Delivery, Ericsson India",
      talkTitle: "Building a Thriving Career in a VUCA World",
      talkType: "Talk",
      description: "How to navigate and grow in a volatile, uncertain, complex, and ambiguous world.",
      linkedinUrl: "https://www.linkedin.com/in/bheemaprakash?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imagePath: "/speakers/Bheema.png",
      venue: "Ground Floor Seminar Hall",
      time: "11:00 am - 11:45 am"
    },
    {
      id: "002",
      name: "Srikanth Shenoy",
      position: "Co-Founder, Coachbuddy.AI",
      talkTitle: "Will the real AI job please stand up?",
      talkType: "Talk",
      description: "Exploring the evolving landscape of AI jobs and future opportunities.",
      linkedinUrl: "https://www.linkedin.com/in/srikanthshenoy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imagePath: "/speakers/Srikanth.png",
      venue: "Ground Floor Seminar Hall",
      time: "12:00 pm - 12:45 pm"
    },
    {
      id: "003",
      name: "Pranav Durai",
      position: "Research Scholar, Stanford School of Medicine",
      talkTitle: "Fundamentals of Image Processing and Computer Vision",
      talkType: "Workshop",
      description: "Introduction to key techniques in image processing and computer vision.",
      linkedinUrl: "https://www.linkedin.com/in/pranav-durai?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imagePath: "/speakers/PranavDurai.png",
      venue: "First Floor Seminar Hall",
      time: "11:30 am - 1:00 pm"
    },
    {
      id: "004",
      name: "Suhas Kudlur Viswanath",
      position: "Hardware Engineer, Arithmetic Labs",
      talkTitle: "The Future of Computation",
      talkType: "Talk",
      description: "How RISC-V is shaping the future of computational systems and innovation.",
      linkedinUrl: "https://www.linkedin.com/in/suhas-kudlur-viswanath-33aa971ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imagePath: "/speakers/SuhasViswanath.png",
      venue: "Ground Floor Seminar Hall",
      time: "2:00 pm - 2:30 pm"
    },
    {
      id: "005",
      name: "Ester Raina Monterio",
      position: "Data Scientist, Codecraft",
      talkTitle: "Data Science: The Magic Behind the Metrics",
      talkType: "Talk",
      description: "Discover how data science is transforming industries by turning raw data into actionable insights.",
      linkedinUrl: "https://www.linkedin.com/in/esther-raina-monteiro-4342161b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imagePath: "/speakers/EsterMonterio.png",
      venue: "Ground Floor Seminar Hall",
      time: "03:00 pm - 03:45 pm"
    },
    {
      id: "006",
      name: "Samrath Sudesh Acharya",
      position: "Cyber Security Analyst, KPMG India",
      talkTitle: "Ethical Hacking 101: Unleash Your Inner Hacker",
      talkType: "Workshop",
      description: "A hands-on session on ethical hacking and cybersecurity fundamentals.",
      linkedinUrl: "https://www.linkedin.com/in/samrath-sudesh-acharya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imagePath: "/speakers/SamrathAcharya.png",
      venue: "First Floor Seminar Hall",
      time: "2:00 pm - 4:00 pm"
    }
  ];  

  const SpeakerProfile = ({ speaker, qrUrl }: { speaker: SpeakerData; qrUrl: string }) => (
    <div className="p-4 sm:p-6 relative">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1 sm:flex sm:items-start sm:space-x-6">
          <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
            <Image
              src={speaker.imagePath}
              alt={speaker.name}
              width={120}
              height={120}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-2xl font-bold text-[#b4ff39]">{speaker.name}</h1>
            <p className="text-sm sm:text-lg text-gray-300 mt-1">{speaker.position}</p>
            <p className="text-sm sm:text-lg text-gray-300 mt-1">Venue: {speaker.venue}</p>
            <Link href={speaker.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white border border-[#b4ff39] hover:border-[#98d930] w-full sm:w-auto mt-4">
                <Linkedin className="h-5 w-5 mr-2" /> Connect on LinkedIn
              </Button>
            </Link>
          </div>
        </div>
  
        <div className="absolute right-4 sm:right-6 top-7 sm:top-4 flex-shrink-0 mt-6 sm:mt-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white p-1 sm:p-2 rounded-lg shadow-lg overflow-hidden">
              {qrUrl && (
                <img
                  src={qrUrl}
                  alt="QR Code"
                  className="w-full h-full object-cover transform scale-125 sm:scale-125"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
export default function ProfilePage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<SpeakerData | null>(null);
  const [qrUrl, setQrUrl] = useState<string>('');
  const [userExists, setUserExists] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const speakerId = urlParams.get('id');
    const speaker = speakers.find(s => s.id === speakerId);

    if (speaker) {
      setSelectedSpeaker(speaker);
      setUserExists(true);
      QRCode.toDataURL(`${process.env.NEXT_PUBLIC_FRONTHOST}/viewspeaker?id=${speaker.id}`)
        .then(url => setQrUrl(url));
    } else {
      setUserExists(false);
    }
  }, []);

  if (!userExists) return <NoUserFound />;
  if (!selectedSpeaker) return <SkeletonLoader />;

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white relative">
      <CursorTrailCanvas className="pointer-events-none z-50 md:flex hidden fixed inset-0 h-full w-full" />
      <header className="bg-[#2A2A2A] shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-[#b4ff39] hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" /> <span>Back to Speakers</span>
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2A2A2A] shadow rounded-lg overflow-hidden">
          <SpeakerProfile speaker={selectedSpeaker} qrUrl={qrUrl} />
          {/* Session Details Section */}
          <div className="border-t border-gray-700">
            <div className="p-6 sm:p-8 space-y-6">
              <h2 className="text-lg sm:text-2xl font-semibold text-[#b4ff39]"> Session Details </h2>
              <div className="bg-[#232323] rounded-lg p-4 sm:p-6 space-y-6">
                <div className="space-y-2 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#b4ff39]"> {selectedSpeaker.talkTitle} </h3>
                  <p className="text-sm sm:text-base text-gray-300"> {selectedSpeaker.description} </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                  <div className="flex items-center space-x-3 bg-[#2A2A2A] p-2 sm:p-3 rounded-lg">
                    <Users className="h-5 w-5 text-[#b4ff39]" />
                    <div>
                      <div className="text-xs sm:text-sm text-gray-400">Type</div>
                      <div className="text-white">{selectedSpeaker.talkType}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-[#2A2A2A] p-2 sm:p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-[#b4ff39]" />
                    <div>
                      <div className="text-xs sm:text-sm text-gray-400">Time</div>
                      <div className="text-white">{selectedSpeaker.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-[#2A2A2A] p-2 sm:p-3 rounded-lg">
                    <Calendar className="h-5 w-5 text-[#b4ff39]" />
                    <div>
                      <div className="text-xs sm:text-sm text-gray-400">Date</div>
                      <div className="text-white">Nov 7, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-[#2A2A2A] p-2 sm:p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-[#b4ff39]" />
                    <div>
                      <div className="text-xs sm:text-sm text-gray-400">Venue</div>
                      <div className="text-white">{selectedSpeaker.venue}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
