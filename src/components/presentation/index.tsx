import React, { useEffect, useRef, useState } from "react";
import "../../assets/styles/presentation.css";


const PresentationSection: React.FC = () => {
    const [visibleSections, setVisibleSections] = useState<boolean[]>(Array(4).fill(false));
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleScroll = () => {
        sectionRefs.current.forEach((ref, index) => {
            if (ref) {
                const rect = ref.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top >= 0 && rect.bottom <= windowHeight) {
                    setVisibleSections((prev) => {
                        const updated = [...prev];
                        updated[index] = true;
                        return updated;
                    });
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="presentation">
            <h2 className="title-presentation">Conheça a VG Tech Solutions</h2>
            
            <section 
                className={`who-we-are section ${visibleSections[0] ? "visible" : ""}`} 
                ref={(el) => (sectionRefs.current[0] = el as HTMLDivElement | null)}
            >
               <h3 className="title-who-we-are">Quem somos?</h3>
               <p>Somos a VG Tech Solutions, uma empresa fundada por <strong>Vinicius Soares</strong>, desenvolvedor full stack com mais de 3 anos de experiência em soluções digitais. Desde o início, nossa missão tem sido criar experiências online inovadoras e eficazes que ajudem nossos clientes a prosperar no mundo digital.</p>
            </section>
            
            <section 
                className={`our-mission section ${visibleSections[1] ? "visible" : ""}`} 
                ref={(el) => (sectionRefs.current[1] = el as HTMLDivElement | null)}
            >
               <h3>Nossa Missão</h3>
               <p>Nossa missão é clara: ser a porta de entrada para o sucesso online dos nossos clientes. Acreditamos que cada projeto é único e, por isso, trabalhamos com soluções personalizadas, unindo criatividade e tecnologia para maximizar resultados. Nosso compromisso é criar sites, sistemas e plataformas que não apenas atendam às expectativas, mas que superem-nas em funcionalidade e design.</p>
            </section>
            
            <section 
                className={`our-difference section ${visibleSections[2] ? "visible" : ""}`} 
                ref={(el) => (sectionRefs.current[2] = el as HTMLDivElement | null)}
            >
                <h3>Nosso Diferencial</h3>
                <p>O que nos diferencia é a nossa abordagem sob medida para cada cliente. Não oferecemos soluções prontas, criamos experiências digitais que atendem às necessidades específicas de cada negócio. Combinamos tecnologia de ponta com design funcional para garantir resultados que impactam.</p>
            </section>
            
            <section 
                className={`why-choose-us section ${visibleSections[3] ? "visible" : ""}`} 
                ref={(el) => (sectionRefs.current[3] = el as HTMLDivElement | null)}
            >
                <h3>Por Que Nos Escolher</h3>
                <p>Estamos prontos para transformar o seu negócio e levá-lo a outro nível no mundo digital. Conheça agora os serviços que oferecemos e descubra como podemos ajudar você a alcançar seus objetivos.</p>
            </section>
            
        </section>
    );
};

export default PresentationSection;
