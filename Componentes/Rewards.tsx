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
        description: 'Passagem aérea ida e volta\nHospedagem em hotel 3 estrelas ou superior\nCafé da manhã\n5 dias e 4 noites',
        points: '450.000',
    },
    {
        id: 3,
        image: 'reward3.png',
        title: 'Croácia',
        description: 'Passagem aérea ida e volta\nHospedagem em hotel 3 estrelas ou superior\nCafé da manhã\n3 dias e 2 noites',
        points: '750.000',
    },
    {
        id: 4,
        image: 'reward4.png',
        title: 'Disney',
        description: 'Passagem aérea ida e volta\nHospedagem em hotel 3 estrelas ou superior\nCafé da manhã\n5 dias e 4 noites\nIngresso Parque',
        points: '900.000',
    },
];

const Rewards: React.FC = () => {
    const [selectedReward, setSelectedReward] = useState<number>(rewards[0].id);

    return (
        <div className="w-screen flex flex-col gap-5 font-quantico p-9 bg-cover bg-center rounded-[60px] border-4 border-[#FE8C19]" style={{ backgroundImage: "url('rewardBG.svg')" }}>
            <h2 className="text-center text-4xl font-bold mb-12">
                Conheça as experiências do Partnership
            </h2>
            <div className="w-[90vw] mx-auto max-w-[1200px]">
                {rewards
                    .filter((reward) => reward.id === selectedReward)
                    .map((reward) => (
                        <div key={reward.id} className="flex flex-col lg:flex-row gap-16 text-sm">
                            <img src={reward.image} alt={reward.title} className="w-full lg:w-[405px] h-auto lg:h-[576px]" />

                            <div className="w-full lg:w-[650px]">
                                <p className="text-2xl font-bold mb-12">A partir de</p>

                                {/* Navegação por retangulos */}
                                <div className="flex gap-2.5 mt-12">
                                    {rewards.map((reward) => (
                                        <div key={reward.id} className="text-center">
                                            <div className={`mb-1 font-bold ${selectedReward === reward.id ? "visible" : "invisible"}`}>
                                                {reward.points} pontos
                                            </div>
                                            <div
                                                onClick={() => setSelectedReward(reward.id)}
                                                className={`w-38 h-[7px] ${selectedReward === reward.id ? "bg-[#4A90E2]" : "bg-gray-300"} cursor-pointer rounded-md mb-12`}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Informações adicionais */}
                                <div className="flex flex-col justify-around">
                                    <h5 className="w-full lg:w-[567px] bg-[#FE8C1950] rounded-md p-4 text-lg font-medium">
                                        *Os valores no site estão sujeitos à cotação do dólar e a quantidade de pontos
                                        necessários pode variar sem aviso prévio. Solicite o catálogo para conferir a quantidade de pontos
                                        necessários para a viagem na data desejada.
                                    </h5>
                                    <div>
                                        <div className="flex justify-between text-lg font-medium items-center mt-12">
                                            <p>*baixa temporada</p>
                                            <h4 className="text-4xl font-bold">{reward.title}</h4>
                                        </div>
                                        <p className="text-xl font-medium mt-12">
                                            {reward.description.split('\n').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Rewards;
