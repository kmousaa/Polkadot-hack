


"use client";
import React, { useState, useEffect } from 'react';
import Card from './card'; // Adjust the path based on your file structure
import Image from 'next/image';
import { Button, Input, Textarea, Checkbox, Divider } from '@nextui-org/react';

// Updated list of tags
const tags = [
  'MUSIC', 'PROJECT', 'CHARITY', 'EDUCATION', 'TECHNOLOGY', 'ART', 'SPORTS', 
  'FUNDRAISER', 'STARTUP'
];

// Initial state for users and milestones
const initialUsers = [
    {
      "title": "Pink Sea - Album Release",
      "userName": "Pink Sea",
      "ranking": 5,
      "profilePicture": "https://avatar.iran.liara.run/public/1",
      "milestones": [
        {
          "id": "1",
          "goal": 3000,
          "current": 3000,
          "notes": "Recording studio costs for initial album tracks. Includes recording 'Sunset Serenade'."
        },
        {
          "id": "2",
          "goal": 5000,
          "current": 5000,
          "notes": "Promotion and marketing expenses. Aims to promote 'Ocean Breeze'."
        },
        {
          "id": "3",
          "goal": 7000,
          "current": 7000,
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
          "current": 0,
          "notes": "Merchandise production for album promotion, including items related to 'Ocean Drift'."
        },
          {
              "id": "6",
              "goal": 9000,
              "current": 2000,
              "notes": "Release the Deluxe Edition of the album with bonus tracks."
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
          "current": 5000,
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
          "current": 2000,
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
              "goal": 100,
              "current": 100,
              "notes": "Release of the song Daylight."
          },
          {
              "id": "2",
              "goal": 200,
              "current": 150,
              "notes": "Release of the song Nightfall."
          },
          {
              "id": "3",
              "goal": 300,
              "current": 0,
              "notes": "Release of the song Sunrise."
          },
          {
              "id": "4",
              "goal": 400,
              "current": 0,
              "notes": "Release of the song Sunset."
          },
          {
              "id": "5",
              "goal": 500,
              "current": 0,
              "notes": "Release of the song Twilight."
          },
          {
              "id": "6",
              "goal": 600,
              "current": 0,
              "notes": "Release of the song Dusk."
          },
          {
              "id": "7",
              "goal": 700,
              "current": 0,
              "notes": "Release of the song Dawn."
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
          "current": 15000,
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
          "current": 2000,
          "notes": "Initial funds for design and planning of the new community football stadium."
        },
        {
          "id": "2",
          "goal": 20000,
          "current": 15000,
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
          "current": 7000,
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
  const [newPool, setNewPool] = useState(null);
  const [poolName, setPoolName] = useState('');
  const [poolDescription, setPoolDescription] = useState('');
  const [milestones, setMilestones] = useState([{ id: '', goal: 0, notes: '' }]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility

  useEffect(() => {
    // Retrieve pools from local storage when the component mounts
    const savedPools = JSON.parse(localStorage.getItem('pools') || '[]');
    setNewPool(savedPools[savedPools.length - 1] || null);
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create a new pool
    const newPool = {
      title: poolName,
      userName: 'You',
      profilePicture: 'https://avatar.iran.liara.run/public/8',
      milestones: milestones.map((m, index) => ({
        id: index.toString(),
        goal: m.goal,
        current: 0,
        notes: m.notes,
      })),
      brief: poolDescription,
      tags: selectedTags,
      ranking: 1,
    };

    // Save to local storage
    const existingPools = JSON.parse(localStorage.getItem('pools') || '[]');
    existingPools.push(newPool);
    localStorage.setItem('pools', JSON.stringify(existingPools));

    setNewPool(newPool);
    setPoolName('');
    setPoolDescription('');
    setMilestones([{ id: '', goal: 0, notes: '' }]);
    setSelectedTags([]);
    setIsFormVisible(false); // Hide the form after submission
  };

  const filteredUsers = selectedTag === 'ALL'
    ? [...initialUsers, newPool].filter(Boolean)
    : [...initialUsers, newPool].filter(user => user?.tags.includes(selectedTag) || !newPool);

  return (
    <div className="flex min-h-screen">
      {/* Left column with app name, logo, and hashtags */}
      <div className="w-1/5 h-screen sticky top-0 p-4 bg-light-background shadow-lg space-y-6 py-5">
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
        <h2 className="text-xl font-semibold mb-4 text-primary-foreground"># Hashtags</h2>
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
        <div className="bg-light-background p-8 rounded-lg text-zinc-50 text-center w-[40rem] mb-16">
          <h2 className="text-4xl font-extrabold">DISCOVER</h2>
          <p className="mt-2 text-lg">Explore tickets and crowdfunding opportunities.</p>
        </div>

        {/* Toggle New Pool Form Button */}
        <Button 
          auto 
          color="primary" 
          variant="flat"
          onClick={() => setIsFormVisible(prev => !prev)} // Toggle form visibility
          className="mb-16"
        >
          {isFormVisible ? 'Close Pool Form' : 'Add New Story'}
        </Button>

        {/* New Pool Form */}
        {isFormVisible && (
          <form onSubmit={handleFormSubmit} className="bg-light-background p-8 rounded-lg mb-16 w-[40rem]">
            <h2 className="text-3xl font-bold mb-4">Create a New Pool</h2>
            <Input
              clearable
              underlined
              label="Pool Name"
              placeholder="Enter the name of your pool"
              value={poolName}
              onChange={(e) => setPoolName(e.target.value)}
              className="mb-4"
            />
            <Textarea
              underlined
              label="Description"
              placeholder="Enter a brief description of your pool"
              value={poolDescription}
              onChange={(e) => setPoolDescription(e.target.value)}
              className="mb-4"
            />
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Milestones</h3>
              {milestones.map((milestone, index) => (
                <div key={index} className="mb-4">
                  <Input
                    underlined
                    label={`Milestone ${index + 1} Goal`}
                    type="number"
                    value={milestone.goal}
                    onChange={(e) => {
                      const updatedMilestones = [...milestones];
                      updatedMilestones[index].goal = parseFloat(e.target.value);
                      setMilestones(updatedMilestones);
                    }}
                    className="mb-2"
                  />
                  <Textarea
                    underlined
                    label={`Milestone ${index + 1} Notes`}
                    value={milestone.notes}
                    onChange={(e) => {
                      const updatedMilestones = [...milestones];
                      updatedMilestones[index].notes = e.target.value;
                      setMilestones(updatedMilestones);
                    }}
                    className="mb-2"
                  />
                </div>
              ))}
              <Button 
                auto 
                color="primary" 
                variant="flat"
                onClick={() => setMilestones([...milestones, { id: '', goal: 0, notes: '' }])}
              >
                Add Milestone
              </Button>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Checkbox 
                    key={index} 
                    isChecked={selectedTags.includes(tag)}
                    onChange={() => {
                      setSelectedTags(prevTags => 
                        prevTags.includes(tag)
                          ? prevTags.filter(t => t !== tag)
                          : [...prevTags, tag]
                      );
                    }}
                  >
                    {tag}
                  </Checkbox>
                ))}
              </div>
            </div>
            <Button 
              auto 
              color="primary" 
              variant="flat"
              type="submit"
            >
              Create Pool
            </Button>
          </form>
        )}

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
