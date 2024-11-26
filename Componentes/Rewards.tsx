import React, { useState } from 'react';

interface Reward {
    id: number;
    image: string;
    title: string;
    description: string;
    points: number;
}

const rewards: Reward[] = [
    {
        id: 1,
        image: '/path/to/image1.png',
        title: 'Recompensa 1',
        description: 'Descrição da Recompensa 1',
        points: 50,
    },
    {
        id: 2,
        image: '/path/to/image2.png',
        title: 'Recompensa 2',
        description: 'Descrição da Recompensa 2',
        points: 500,
    },
    {
        id: 3,
        image: '/path/to/image3.png',
        title: 'Recompensa 3',
        description: 'Descrição da Recompensa 3',
        points: 5000,
    },
];

const Rewards: React.FC = () => {
    const [selectedReward, setSelectedReward] = useState<number | null>(null);

    return (
        <div>
            <h2>Conheça as experiências do Partnership</h2>
            <div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {rewards.map((reward) => (
                        <div
                            key={reward.id}
                            onClick={() => setSelectedReward(reward.id)}
                            style={{
                                width: '100px',
                                height: '20px',
                                backgroundColor: selectedReward === reward.id ? '#4A90E2' : '#ccc',
                                cursor: 'pointer',
                                color: 'transparent',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {reward.id}
                        </div>
                    ))}
                </div>
                {selectedReward !== null && (
                    <div>
                        {rewards
                            .filter((reward) => reward.id === selectedReward)
                            .map((reward) => (
                                <div key={reward.id}>
                                    <img src={reward.image} alt={reward.title} />
                                    <div>
                                        <h3>A partir de {reward.points} pontos</h3>
                                        <h4>{reward.title}</h4>
                                        <p>{reward.description}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Rewards;
