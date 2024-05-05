import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function Category() {
    const [slide, setSlide] = useState(0);
    const [category, setCategory] = useState([]);

    const nextSlide = () => {
        if (category.length - 8 === slide) return false;
        setSlide(slide + 3);
    };

    const prevSlide = () => {
        setSlide(slide - 3);
    };

    const fetchCategory = async () => {
        const response = await fetch('https://api-iz01.onrender.com/categories');
        const data = await response.json();
        setCategory(data);
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="flex my-3 item-center justify-between">
                <div className="text-[24px] md:font-bold">What's on your Mind?</div>
                <div className="flex">
                    <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" onClick={prevSlide}>
                        <FaArrowLeft />
                    </div>
                    <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" onClick={nextSlide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden">
                {category.map((cat, index) => (
                    <div
                        style={{
                            transform: `translateX(-${slide * 100}%)`
                        }}
                        key={index}
                        className="w-[150px] shrink-0 duration-500"
                    >
                        <img src={'https://api-iz01.onrender.com/images/' + cat.image} alt="" className="group-hover:scale-110" />
                    </div>
                ))}
            </div>
            <hr className="my-6 border-[1px]" />
        </div>
    );
}
