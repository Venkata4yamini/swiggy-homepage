import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from "./Card";

export default function TopRest() {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchTopRestaurant = async () => {
        try {
            const response = await fetch('https://api-iz01.onrender.com/top-restaurant-chains');
            const apiData = await response.json();
            setData(apiData);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error gracefully, e.g., set error state
        }
    }

    const nextSlide = () => {
        if (data.length - 4 <= slide) return false;
        setSlide(slide + 2);
    }

    const prevSlide = () => {
        if (slide === 0) return false;
        setSlide(slide -2);
    }

    useEffect(() => {
        fetchTopRestaurant();
    }, []);

    return (
        <div className='max-w-[1200px] mx-auto mb-[100px]'>
            <div className='flex my-2 items-center justify-between'>
                <div className='text-[24px] md:font-bold'>Top restaurant chains in Vizag</div>
                <div className="flex">
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
                        <FaArrowLeft />
                    </div>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex gap-5 overflow-hidden">
                {data.slice(slide, slide + 10).map((d, i) => (
                    <Card {...d} key={i} />
                ))}
            </div>
            <hr className='my-12 border-[1px]' />
        </div>
    );
}
