import React from 'react';
import Card from './card'; // Adjust the path based on your file structure

const users = [
    {
        title: "John Doe's Fundraiser",
        profilePicture: "https://avatar.iran.liara.run/public/1",
        milestones: [
            { id: '1', goal: 10, current: 2 },
            { id: '2', goal: 20, current: 5 },
            { id: '11', goal: 30, current: 5 },
        ],
        brief: "Help John Doe raise funds for his new project."
    },
    {
        title: "Jane Smith's Charity",
        profilePicture: "https://avatar.iran.liara.run/public/2",
        milestones: [
            { id: '3', goal: 30, current: 10 },
            { id: '4', goal: 40, current: 20 },
        ],
        brief: "Support Jane Smith in her charity work."
    },
    {
        title: "Alice Johnson's Music Project",
        profilePicture: "https://avatar.iran.liara.run/public/3",
        milestones: [
            { id: '5', goal: 50, current: 25 },
            { id: '6', goal: 60, current: 30 },
        ],
        brief: "Fund Alice Johnson's music album."
    },
    {
        title: "Bob Brown's Tech Startup",
        profilePicture: "https://avatar.iran.liara.run/public/4",
        milestones: [
            { id: '7', goal: 70, current: 35 },
            { id: '8', goal: 80, current: 40 },
        ],
        brief: "Invest in Bob Brown's innovative tech startup."
    }
];

export default function Page() {
    return (
        <div className="flex p-4 space-x-4">
            {/* Left column with scrollable cards */}
            <div className="w-3/4 overflow-y-scroll h-screen pr-4 space-y-4">
                {users.map((user, index) => (
                    <Card 
                        key={index}
                        title={user.title}
                        profilePicture={user.profilePicture}
                        initialMilestones={user.milestones}
                        brief={user.brief}
                    />
                ))}
            </div>
            {/* Right column with hashtags */}
            <div className="w-1/4 h-screen sticky top-0 p-4 bg-white shadow-lg rounded-lg space-y-2">
                <h2 className="text-xl font-semibold">Hashtags</h2>
                {['MUSIC', 'PROJECT', 'CHARITY', 'EDUCATION', 'TECHNOLOGY', 'ART', 'SPORTS'].map((tag, index) => (
                    <div key={index} className="text-blue-500 cursor-pointer hover:underline">
                        #{tag}
                    </div>
                ))}
            </div>
        </div>
    );
}
