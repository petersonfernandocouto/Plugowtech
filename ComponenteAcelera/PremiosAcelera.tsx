import React from 'react';
import Image from 'next/image';
import BGPremiosAce from '../IMG/CarouselAcelera/BGAceleraaCarousel.png';
import IMG1 from '../IMG/CarouselAcelera/IMG1.png';
import IMG2 from '../IMG/CarouselAcelera/IMG2.png';
import IMG3 from '../IMG/CarouselAcelera/Jet.jpg';
import IMG4 from '../IMG/CarouselAcelera/IMG4.png';
import IMG5 from '../IMG/CarouselAcelera/IMG5.png';

const PremiosAcelera = () => {
  const images = [IMG1, IMG2, IMG3, IMG4, IMG5];

  return (
    <div 
      style={{
        backgroundImage: `url(${BGPremiosAce.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 0',
      }}
      className="flex flex-col items-center overflow-hidden"
    >
      <h1 className="text-[30px] text-center lg:text-[45px] 2xl:text-[60px] font-semibold font-[Quantico] mb-[80px]">
        Descubra as experiências incríveis do <span className="text-[#4A90E2]">Acelera</span>
      </h1>

      {/* Contêiner do carrossel */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee">
          {/* Duplicamos as imagens para criar o efeito de loop contínuo */}
          {[...images, ...images].map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                className=" h-[140px] w-[400px] lg:w-[200px]  lg:h-[250px] lg:rounded-[40px] lg:mb-[200px] 2xl:w-[350px] 2xl:h-[350px] "
                src={image}
                width={0}
                height={0}
                alt={`Prize ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="font-semibold font-[Quantico] text-center max-w-[600px] mx-auto  mb-[40px] lg:mb-0 leading-relaxed">
        Fique atento às próximas campanhas. As campanhas do Acelera Partnership são por tempo limitado. 
        Não perca a chance de participar da próxima experiência exclusiva.
      </p>
    </div>
  );
};

export default PremiosAcelera;
