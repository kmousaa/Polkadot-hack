"use client";
import React, { useState } from 'react';
import Card from './card'; // Adjust the path based on your file structure
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/react';

// Updated list of tags
const tags = [
  'MUSIC', 'PROJECT', 'CHARITY', 'EDUCATION', 'TECHNOLOGY', 'ART', 'SPORTS', 
  'FUNDRAISER', 'STARTUP'
];

const users = [
  {
    "title": "Pink Sea - Album Release",
    "userName": "Pink Sea",
    "ranking": 5,
    "profilePicture": "https://avatar.iran.liara.run/public/1",
    "milestones": [
      {
        "id": "1",
        "goal": 3000,
        "current": 1200,
        "notes": "Recording studio costs for initial album tracks. Includes recording 'Sunset Serenade'."
      },
      {
        "id": "2",
        "goal": 5000,
        "current": 1500,
        "notes": "Promotion and marketing expenses. Aims to promote 'Ocean Breeze'."
      },
      {
        "id": "3",
        "goal": 7000,
        "current": 2500,
        "notes": "Cover art design, printing physical copies, and digital distribution for tracks including 'Tropical Nights'."
      },
      {
        "id": "4",
        "goal": 4000,
        "current": 1000,
        "notes": "Travel expenses for band tours and live performances featuring 'Moonlit Waves'."
      },
      {
        "id": "5",
        "goal": 2000,
        "current": 500,
        "notes": "Merchandise production for album promotion, including items related to 'Ocean Drift'."
      }
    ],
    "brief": "Help Pink Sea release their debut album! Your support will cover recording, marketing, and more. Join us on this musical journey!",
    "tags": ["MUSIC", "ALBUM", "FUNDRAISER"]
  },
  {
    "title": "Web3 Platformer Development",
    "userName": "SLACK",
    "Ranking": 1,
    "profilePicture": "https://avatar.iran.liara.run/public/2",
    "milestones": [
      {
        "id": "1",
        "goal": 5000,
        "current": 2000,
        "notes": "Initial development and design of the Web3 platformer. This includes prototyping and planning."
      },
      {
        "id": "2",
        "goal": 10000,
        "current": 3000,
        "notes": "Development of core features, smart contracts, and alpha testing. Key milestones for beta launch."
      },
      {
        "id": "3",
        "goal": 15000,
        "current": 5000,
        "notes": "Community engagement, marketing strategies, and beta testing for broader user feedback."
      },
      {
        "id": "4",
        "goal": 20000,
        "current": 0,
        "notes": "Final adjustments, launch preparation, and post-launch support. Ensuring a smooth launch."
      },
      {
        "id": "5",
        "goal": 25000,
        "current": 0,
        "notes": "Additional features and scaling based on user feedback. Post-launch enhancements and expansions."
      }
    ],
    "brief": "Join us in building an innovative Web3 platformer game. Your support will help us develop and launch this exciting new project!",
    "tags": ["TECHNOLOGY", "GAMING", "WEB3"]
  },
  {
    "title": "Fundraiser for Less Fortunate Children",
    "userName": "Save The World ",
    "Ranking": 4,
    "profilePicture": "https://avatar.iran.liara.run/public/3",
    "milestones": [
      {
        "id": "1",
        "goal": 5000,
        "current": 1200,
        "notes": "Basic necessities like food, clothing, and school supplies for children."
      },
      {
        "id": "2",
        "goal": 8000,
        "current": 2000,
        "notes": "Medical expenses and healthcare for less fortunate children."
      },
      {
        "id": "3",
        "goal": 6000,
        "current": 1000,
        "notes": "Educational support including books, tutoring, and school fees."
      },
      {
        "id": "4",
        "goal": 4000,
        "current": 800,
        "notes": "Recreational activities and special events for children's engagement and enjoyment."
      },
      {
        "id": "5",
        "goal": 2000,
        "current": 500,
        "notes": "Holiday gifts and celebrations for the children to make special occasions memorable."
      }
    ],
    "brief": "Support less fortunate children by contributing to their essential needs, healthcare, education, and recreational activities. Your help makes a difference!",
    "tags": ["CHARITY", "FUNDRAISER", "CHILDREN"]
  },
  {
    "title": "The Weekday - Deluxe Album Fundraiser",
    "userName": "The Weekday",
    "Ranking": 3,
    "profilePicture": "https://avatar.iran.liara.run/public/4",
    "milestones": [
      {
        "id": "1",
        "goal": 2500,
        "current": 1000,
        "notes": "Production costs for deluxe album tracks, including recording and mixing of 'Daylight'."
      },
      {
        "id": "2",
        "goal": 3500,
        "current": 1500,
        "notes": "Music video production for new singles such as 'Nightfall'."
      },
      {
        "id": "3",
        "goal": 3000,
        "current": 1200,
        "notes": "Promotion and marketing for the deluxe album, aiming to highlight 'Midnight'."
      },
      {
        "id": "4",
        "goal": 4000,
        "current": 1800,
        "notes": "Special edition packaging and distribution for the deluxe album featuring 'Sunrise'."
      },
      {
        "id": "5",
        "goal": 2000,
        "current": 500,
        "notes": "Exclusive fan experiences and behind-the-scenes content related to 'Twilight'."
      }
    ],
    "brief": "Help The Weekday release a deluxe version of their album! Your support will cover production, promotion, and special edition content.",
    "tags": ["MUSIC", "ALBUM", "FUNDRAISER"]
  },
  {
    "title": "Blockchain Tech Startup",
    "userName": "Drip & Chain",
    "Ranking": 2,
    "profilePicture": "https://avatar.iran.liara.run/public/5",
    "milestones": [
      {
        "id": "1",
        "goal": 15000,
        "current": 3000,
        "notes": "Initial development, setup, and team hiring for the blockchain tech startup."
      },
      {
        "id": "2",
        "goal": 25000,
        "current": 5000,
        "notes": "Building core blockchain infrastructure and platform features."
      },
      {
        "id": "3",
        "goal": 35000,
        "current": 7000,
        "notes": "Security audits, testing, and beta releases to ensure platform reliability."
      },
      {
        "id": "4",
        "goal": 45000,
        "current": 10000,
        "notes": "Marketing and community building to attract early adopters and partners."
      },
      {
        "id": "5",
        "goal": 60000,
        "current": 15000,
        "notes": "Scaling and additional feature development based on user feedback and market needs."
      }
    ],
    "brief": "Support our blockchain tech startup by contributing to development, infrastructure, and marketing efforts. Help us build the future of decentralized technology!",
    "tags": ["TECHNOLOGY", "BLOCKCHAIN", "STARTUP"]
  },
  {
    "title": "Old Gunners Football Club - Stadium Fundraiser",
    "userName": "Old Gunners",
    "Ranking": 5,
    "profilePicture": "https://avatar.iran.liara.run/public/6",
    "milestones": [
      {
        "id": "1",
        "goal": 10000,
        "current": 2500,
        "notes": "Initial funds for design and planning of the new community football stadium."
      },
      {
        "id": "2",
        "goal": 20000,
        "current": 5000,
        "notes": "Construction costs for the football stadium, including infrastructure and seating."
      },
      {
        "id": "3",
        "goal": 30000,
        "current": 7000,
        "notes": "Additional features such as lighting, scoreboards, and locker rooms."
      },
      {
        "id": "4",
        "goal": 15000,
        "current": 3000,
        "notes": "Landscaping, parking facilities, and community amenities around the stadium."
      },
      {
        "id": "5",
        "goal": 10000,
        "current": 2000,
        "notes": "Final touches and opening events to celebrate the completion of the stadium."
      }
    ],
    "brief": "Help the Old Gunners Football Club build a new community stadium! Your contributions will support the design, construction, and amenities of this much-needed facility.",
    "tags": ["SPORTS", "STADIUM", "FUNDRAISER"]
  },
  {
    "title": "Exotic Birds Conservation Project",
    "userName": "Birds of Paradise",
    "Ranking": 4,
    "profilePicture": "https://avatar.iran.liara.run/public/7",
    "milestones": [
      {
        "id": "1",
        "goal": 5000,
        "current": 1200,
        "notes": "Habitat restoration and protection for exotic bird species in the region."
      },
      {
        "id": "2",
        "goal": 8000,
        "current": 2000,
        "notes": "Research and conservation efforts to monitor and protect bird populations."
      },
      {
        "id": "3",
        "goal": 6000,
        "current": 1000,
        "notes": "Education and awareness programs to engage local communities in conservation."
      },
      {
        "id": "4",
        "goal": 4000,
        "current": 800,
        "notes": "Sustainable development projects to support both birds and local livelihoods."
      },
      {
        "id": "5",
        "goal": 2000,
        "current": 500,
        "notes": "Monitoring and evaluation of conservation efforts to ensure long-term impact."
      }
    ],
    "brief": "Join us in conserving exotic bird species and their habitats. Your support will fund habitat protection, research, and community engagement projects.",
    "tags": ["PROJECT", "ENVIRONMENT"]
  }  
];

export default function Page() {
  const [selectedTag, setSelectedTag] = useState('ALL');

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const filteredUsers = selectedTag === 'ALL'
    ? users
    : users.filter(user => user.tags.includes(selectedTag));

  return (
    <div className="flex min-h-screen">
      {/* Left column with app name, logo, and hashtags */}
      <div className="w-1/5 h-screen sticky top-0 p-4 bg-light-background shadow-lg space-y-6 py-5">
        {/* App name and logo */}
        <div className="flex items-center space-x-2">
          <Image
            alt="logo"
            radius="sm"
            src="/logo_bg.svg"
            height={40}
            width={40}
          />
          <h1 className="text-2xl font-bold text-primary-foreground">MyApp</h1>
        </div>
        <Divider />
        {/* Hashtags */}
        <h2 className="text-xl font-semibold mb-4 text-primary-foreground pt-4"># Hashtags</h2>
        <div className="flex flex-col space-y-3">
          <Button 
            color="primary" 
            variant="flat" 
            size="sm"
            onClick={() => handleTagClick('ALL')}
          >
            All
          </Button>
          {tags.map((tag, index) => (
            <Button 
              key={index} 
              color="primary" 
              variant="flat" 
              size="sm"
              onClick={() => handleTagClick(tag)}
            >
              #{tag}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Right column with scrollable cards */}
      <div className="flex-1 ml-4 space-y-4 overflow-y-auto p-4 items-center px-32 py-5">
        {/* Discover section */}
        <div className="bg-light-background p-8 rounded-lg text-zinc-50 text-center w-[40rem] mb-16">
          <h2 className="text-4xl font-extrabold">DISCOVER</h2>
          <p className="mt-2 text-lg">Explore tickets and crowdfunding opportunities.</p>
        </div>

        {/* Scrollable feed */}
        {filteredUsers.map((user, index) => (
          <div className="mb-10" key={index}>
            <Card 
              title={user.title}
              profilePicture={user.profilePicture}
              initialMilestones={user.milestones}
              brief={user.brief}
              tags={user.tags}
              userName={user.userName}
              ranking={user.ranking}

            />
          </div>
        ))}
      </div>
    </div>
  );
}
