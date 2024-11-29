import React, { useState } from 'react';

interface Reward {
    id: number;
    image: string;
    title: string;
    description: string;
    points: string;
}

const rewards: Reward[] = [
    {
        id: 1,
        image: 'reward1.png',
        title: 'Ilhabela/SP',
        description: 'Hospedagem em hotel 3 estrelas ou superior\nCafé da manhã\n3 dias e 2 noites',
        points: '150.000',
    },
    {
        id: 2,
        image: 'reward2.png',
        title: 'Ushuaia',
        description: 'Passagem área ida e volta\nHospedagem em hotel 3 estrelas ou superior\nCafé da manhã\n5 dias e 4 noites',
        points: '450.000',
    },
    {
        id: 3,
        image: 'reward3.png',
        title: 'Croácia',
        description: 'Passagem área ida e volta\nHospedagem em hotel 3 estrelas ou superior\nCafé da manhã\n3 dias e 2 noites',
        points: '750.000',
    },
    {
        id: 4,
        image: 'reward4.png',
        title: 'Disney',
        description: 'Passagem área ida e volta\nHospedagem em hotel 3 estrelas ou superior\nCafé da manhã\n5 dias e 4 noites\nIngresso Parque',
        points: '900.000',
    },
    
];

const Rewards: React.FC = () => {
    const [selectedReward, setSelectedReward] = useState<number>(rewards[0].id);

    return (
        <div>
            <h2>Conheça as experiências do Partnership</h2>
            <div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {rewards.map((reward) => (
                        <div key={reward.id} style={{ textAlign: 'center' }}>
                            {selectedReward === reward.id && (
                                <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>
                                    {reward.points} pontos
                                </div>
                            )}
                            <div
                                onClick={() => setSelectedReward(reward.id)}
                                style={{
                                    width: '100px',
                                    height: '20px',
                                    backgroundColor:
                                        selectedReward === reward.id ? '#4A90E2' : '#ccc',
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
                        </div>
                    ))}
                </div>
                {selectedReward && (
                    <div>
                        {rewards
                            .filter((reward) => reward.id === selectedReward)
                            .map((reward) => (
                                <div key={reward.id}>
                                    <img src={reward.image} alt={reward.title} />
                                    <div>
                                        <h4>{reward.title}</h4>
                                        <p>
                                            {reward.description.split('\n').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </p>
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
