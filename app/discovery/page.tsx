import React from 'react';
import Card from './card'; // Adjust the path based on your file structure

const milestones = [
    { id: '1', goal: 500, current: 0 },
    { id: '2', goal: 700, current: 0 },
    { id: '3', goal: 1000, current: 0 }
];

export default function Page() {
    return (
        <div className="p-4">
            <Card 
                title="John Doe's Fundraiser" 
                profilePicture="https://via.placeholder.com/150"
                initialMilestones={milestones}
            />
        </div>
    );
}
