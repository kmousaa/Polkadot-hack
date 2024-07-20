import React from 'react';
import Card from './card'; // Adjust the path based on your file structure

const milestones = [
    { id: '1', goal: 10, current: 0 },
    { id: '2', goal: 20, current: 0 },
    { id: '3', goal: 30, current: 0 },
    { id: '4', goal: 40, current: 0 },
    { id: '5', goal: 50, current: 0 },
    { id: '6', goal: 60, current: 0 },
    { id: '7', goal: 70, current: 0 },
    { id: '8', goal: 80, current: 0 }
];

export default function Page() {
    return (
        <div className="p-4">
            <Card 
                title="John Doe's Fundraiser" 
                profilePicture="https://avatar.iran.liara.run/public/1"
                initialMilestones={milestones}
                brief="Help John Doe raise funds for his new project."
            />
        </div>
    );
}
