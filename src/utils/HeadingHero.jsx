import React, { useEffect } from "react";

export const HeadingHero = () => {
    const roles = [
        {title: "Developer"}, 
        {title: "Crammer"}, 
        {title: "Gamer"},
        {title: "Robert"},

    ];

    const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);
    const [currText, setCurrText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [typingSpeed, setTypingSpeed] = React.useState(150);
    
    useEffect(() => {
        const handleTyping = () => {
            const current = roles[currentRoleIndex].title;
            if(!isDeleting) {
                if(currText === current){
                    // pause before deleting
                    setTimeout(() => setIsDeleting(true), 1000);
                    setTypingSpeed(250);
                }else{
                    setCurrText(current.substring(0, currText.length + 1));
                    setTypingSpeed(150);
                }
            }else{
                if(currText === ''){
                    setIsDeleting(false);
                    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                    setTypingSpeed(250);
                }else{
                    setCurrText(current.substring(0, currText.length - 1));
                    setTypingSpeed(25);
                }
            }
        };
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currText, isDeleting, currentRoleIndex, typingSpeed]);

    return (
        <div className="text-center md:text-start">
            <h1 className="text-3xl md:text-5xl font-bold text-pink-600">
                <span className="">{currText}</span>
                <span className="inline-block h-7 md:h-14 w-0.5 bg-pink-400 ml-1"></span>
            </h1>
        </div>
    )
};
