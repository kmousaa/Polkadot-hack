"use client";
import React, { useState } from 'react';
import { Button, Tooltip, Input } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDollarToSlot, faStar, faArrowRight, faFlag } from '@fortawesome/free-solid-svg-icons';
import { Divider } from '@nextui-org/react';

type Milestone = {
    id: string;
    goal: number;
    current: number;
    notes: string;
};

interface CardProps {
    title: string;
    profilePicture: string;
    initialMilestones: Milestone[];
    brief: string;
    tags: string[];
    ranking: number; // 1 to 5 stars
    userName: string;
}

export default function Card({
    title,
    profilePicture,
    initialMilestones,
    brief,
    tags,
    userName,
    ranking

}: CardProps) {
    const [milestones, setMilestones] = useState<Milestone[]>(initialMilestones);
    const [selectedMilestoneId, setSelectedMilestoneId] = useState<string | null>(null);
    const [donationAmount, setDonationAmount] = useState<number>(0);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const handleMilestoneSelect = (id: string) => {
        setSelectedMilestoneId(id);
        setErrorMessage(null);
    };

    const handleDonation = () => {
        if (!selectedMilestoneId) {
            setErrorMessage('Please select a milestone to donate.');
            return;
        }

        const updatedMilestones = milestones.map(milestone => {
            if (milestone.id === selectedMilestoneId) {
                const updatedCurrent = Math.min(milestone.goal, milestone.current + donationAmount);
                console.log(`Donated ${donationAmount} DOT to milestone ${milestone.id}. Current: ${updatedCurrent}, Goal: ${milestone.goal}`);
                return { ...milestone, current: updatedCurrent };
            }
            return milestone;
        });

        setMilestones(updatedMilestones);
        setDonationAmount(0);
        setErrorMessage(null);
    };

    const totalProgress = milestones.reduce((acc, milestone) => {
        const milestoneProgress = (milestone.current / milestone.goal) * 100;
        return acc + (milestoneProgress / milestones.length);
    }, 0);

    const handleProfileClick = () => {
        setIsExpanded(!isExpanded);
    };

    const renderRating = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={`text-yellow-500 ${index < ranking ? 'opacity-100' : 'opacity-50'}`}
            />
        ));
    };

    return (
        <div className="bg-light-background shadow-lg rounded-lg p-4 flex flex-col space-y-4 w-[40rem] max-h-[500px] pr-10 mb-6">
            <div className="flex justify-between items-start">
                <h1 className="text-lg font-semibold font-bold text-white">{title}</h1>
                <div className="relative">
                    <img
                        src={profilePicture}
                        alt="Profile Picture"
                        className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
                        onClick={handleProfileClick}
                    />
                    {isExpanded && (
                        <div className="absolute top-full mt-2 bg-white text-black shadow-lg rounded-lg p-4 w-60 z-10">
                            <h3 className="text-lg font-semibold">{userName}</h3>
                            <div className="flex items-center space-x-1 mt-1">
                                {renderRating()}
                            </div>
                          
                    
                            <a href="/purchase-history" className="text-blue-500 mt-2 block">View Purchase History</a>
                            <div className="flex justify-between mt-2">
                                <Button auto color="error" variant="flat" size="sm" onClick={() => console.log('Report')}>
                                    <FontAwesomeIcon icon={faFlag} className="mr-2" /> Report
                                </Button>
                                <Button auto color="primary" variant="flat" size="sm" onClick={() => console.log('Rate')}>
                                    <FontAwesomeIcon icon={faStar} className="mr-2" /> Rate
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex-grow">
                <div className="relative w-full h-4 mt-4">
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded" />
                    <div className="absolute top-1/2 left-0 h-1 bg-primary rounded"
                        style={{ width: `${totalProgress}%` }}
                    />
                    {milestones.map((milestone, index) => {
                        const fillPercentage = (milestone.current / milestone.goal) * 100;
                        const isSelected = milestone.id === selectedMilestoneId;
                        return (
                            <Tooltip
                                content={
                                    <div className="p-2 bg-gray-800 text-white rounded">
                                        <p className="font-semibold">{milestone.current.toFixed(2)} DOT out of {milestone.goal.toFixed(2)} DOT</p>
                                        <p className="mt-1 text-sm">{milestone.notes}</p>
                                    </div>
                                }
                                key={milestone.id}
                            >
                                <div
                                    className={`absolute top-1/2 transform -translate-y-1/2 cursor-pointer ${isSelected ? 'ring-2 ring-primary-500' : ''}`}
                                    style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}
                                    onClick={() => handleMilestoneSelect(milestone.id)}
                                >
                                    <div
                                        className="relative w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center"
                                        style={{
                                            background: `conic-gradient(#9d7cf9 ${fillPercentage}%, #E0E0E0 ${fillPercentage}% 100%)`,
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
                
                <div className="mt-4 flex items-center space-x-2 foreground">
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
                        variant="flat"
                        shadow
                        size="lg"
                        onClick={handleDonation}
                        disabled={!selectedMilestoneId || donationAmount <= 0}
                    >
                        Donate
                        <FontAwesomeIcon icon={faCircleDollarToSlot} className="ml-2" />
                    </Button>
                </div>
                {errorMessage && (
                    <div className="text-red-500 mt-2">
                        {errorMessage}
                    </div>
                )}
            </div>
        
            <Divider />
            <div className="mt-4 text-small text-default-500 max-h-20 overflow-y-auto">
                <p>{brief}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags?.map((tag, index) => (
                        <Button
                            key={index}
                            color="primary"
                            variant="flat"
                            size="sm"
                        >
                            #{tag}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}
