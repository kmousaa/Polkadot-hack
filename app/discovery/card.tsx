"use client";
import React, { useState } from 'react';
import { Button, Slider, Tooltip } from '@nextui-org/react';

// Define a type for Milestone
type Milestone = {
    id: string;
    goal: number;
    current: number;
};

// Define the Card component props
interface CardProps {
    title: string;
    profilePicture: string;
    initialMilestones: Milestone[];
}

export default function Card({ title, profilePicture, initialMilestones }: CardProps) {
    const [milestones, setMilestones] = useState<Milestone[]>(initialMilestones);
    const [selectedMilestoneId, setSelectedMilestoneId] = useState<string | null>(null);
    const [donationAmount, setDonationAmount] = useState<number>(0);

    // Function to handle milestone selection
    const handleMilestoneSelect = (id: string) => {
        setSelectedMilestoneId(id);
    };

    // Function to handle donation
    const handleDonation = () => {
        if (selectedMilestoneId) {
            // Update the selected milestone
            const updatedMilestones = milestones.map(milestone => {
                if (milestone.id === selectedMilestoneId) {
                    return {
                        ...milestone,
                        current: Math.min(milestone.goal, milestone.current + donationAmount)
                    };
                }
                return milestone;
            });

            // Update the local state
            setMilestones(updatedMilestones);

            // Reset donation amount
            setDonationAmount(0);
        }
    };

    // Calculate the overall progress of all milestones
    const totalProgress = milestones.reduce((acc, milestone) => {
        const milestoneProgress = (milestone.current / milestone.goal) * 100;
        return acc + (milestoneProgress / milestones.length);
    }, 0);

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 w-80">
            <div className="flex justify-between items-start">
                <h1 className="text-lg font-semibold">{title}</h1>
                <img 
                    src={profilePicture} 
                    alt="Profile Picture" 
                    className="w-12 h-12 rounded-full border-2 border-gray-300"
                />
            </div>

            <div className="flex-grow">
                <div className="relative w-full h-4 mt-4">
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded" />
                    <div className="absolute top-1/2 left-0 h-1 bg-blue-500 rounded" 
                        style={{ width: `${totalProgress}%` }}
                    />
                    {milestones.map((milestone, index) => {
                        const fillPercentage = (milestone.current / milestone.goal) * 100;
                        return (
                            <Tooltip content={`${Math.min(fillPercentage, 100).toFixed(0)}%`} key={milestone.id}>
                                <div
                                    className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}
                                    onClick={() => handleMilestoneSelect(milestone.id)}
                                >
                                    <div
                                        className="relative w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center"
                                        style={{
                                            background: `conic-gradient(#0072F5 ${fillPercentage}%, #E0E0E0 ${fillPercentage}% 100%)`
                                        }}
                                    >
                                        {milestone.current >= milestone.goal ? '✓' : ''}
                                    </div>
                                </div>
                            </Tooltip>
                        );
                    })}
                </div>
                
                {selectedMilestoneId && (
                    <div className="mt-4">
                        <Slider
                            value={donationAmount}
                            onChange={(value) => setDonationAmount(value)}
                            aria-label="Donation Amount"
                            color="primary"
                            size="lg"
                            className="w-full"
                        />
                    </div>
                )}
            </div>
            
            <Button 
                className="w-full" 
                auto 
                color="primary" 
                shadow 
                size="lg"
                onClick={handleDonation}
                disabled={!selectedMilestoneId}
            >
                Donate
            </Button>
        </div>
    );
}
