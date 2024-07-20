"use client";
import React, { useState } from 'react';
import { Button, Tooltip, Input } from '@nextui-org/react';

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
    brief: string; // Added brief prop
}

export default function Card({ title, profilePicture, initialMilestones, brief }: CardProps) {
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
            const updatedMilestones = milestones.map(milestone => {
                if (milestone.id === selectedMilestoneId) {
                    const updatedCurrent = Math.min(milestone.goal, milestone.current + donationAmount);
                    if (updatedCurrent === milestone.goal) {
                        console.log(`Milestone ${milestone.id} is fully funded.`);
                    }
                    console.log(`Donated ${donationAmount} DOT to milestone ${milestone.id}. Current: ${updatedCurrent}, Goal: ${milestone.goal}`);
                    return { ...milestone, current: updatedCurrent };
                }
                return milestone;
            });

            setMilestones(updatedMilestones);
            setDonationAmount(0);
        }
    };

    // Calculate the overall progress of all milestones
    const totalProgress = milestones.reduce((acc, milestone) => {
        const milestoneProgress = (milestone.current / milestone.goal) * 100;
        return acc + (milestoneProgress / milestones.length);
    }, 0);

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 w-[30rem] max-h-[500px] pr-10">
            <div className="flex justify-between items-start">
                <h1 className="text-lg font-semibold text-black">{title}</h1>
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
                        const isSelected = milestone.id === selectedMilestoneId;
                        return (
                            <Tooltip content={`${milestone.current.toFixed(2)} DOT out of ${milestone.goal.toFixed(2)} DOT`} key={milestone.id}>
                                <div
                                    className={`absolute top-1/2 transform -translate-y-1/2 cursor-pointer ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
                                    style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}
                                    onClick={() => handleMilestoneSelect(milestone.id)}
                                >
                                    <div
                                        className="relative w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center"
                                        style={{
                                            background: `conic-gradient(#0072F5 ${fillPercentage}%, #E0E0E0 ${fillPercentage}% 100%)`,
                                            transition: 'background 0.3s'
                                        }}
                                    >
                                        {milestone.current >= milestone.goal ? '✓' : ''}
                                    </div>
                                </div>
                            </Tooltip>
                        );
                    })}
                </div>
                
                <div className="mt-4 flex items-center space-x-2">
                    <Input
                        type="number"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(Number(e.target.value))}
                        placeholder="Enter DOT amount"
                        min={0}
                        step={0.1}
                        className="flex-1"
                        disabled={!selectedMilestoneId}
                    />
                    <Button 
                        auto 
                        color="primary" 
                        shadow 
                        size="lg"
                        onClick={handleDonation}
                        disabled={!selectedMilestoneId || donationAmount <= 0}
                    >
                        Donate
                    </Button>
                </div>
            </div>

            <div className="mt-4 text-sm text-gray-600 max-h-20 overflow-y-auto">
                <p>{brief}</p>
            </div>
        </div>
    );
}