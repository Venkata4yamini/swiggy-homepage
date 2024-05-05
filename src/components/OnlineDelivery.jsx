import React,{useState,useEffect} from "react";
import Card from "./Card";

export default function OnlineDelivery() {
    const [data, setData] = useState([]);

    const fetchTopRestaurant = async () => {
        try {
            const response = await fetch('https://api-iz01.onrender.com/top-restaurant-chains');
            const apiData = await response.json();
            setData(apiData);
        } catch (error) {
            console.error('Error fetching data:', error);
            
        }
    }

    useEffect(() => {
        fetchTopRestaurant();
    }, []);

    return(
    
            
    <div className='max-w-[1200px] mx-auto mb-[100px]'>
            <div className='flex -my-10 items-center justify-between'>
                <div className='text-[24px] md:font-bold'> Restaurant with online food delivery in Vizag</div>
            </div>  
            <div>
                <div className="max-w-[1200px] mx-auto flex  my-14">
                    <div className="pl-4 pr-4 pt-2 pb-2 mr-4 rounded-3xl shadow-md bg-slate-100 "
                    >filter</div>
                     <div className="pl-4 pr-4 pt-2 pb-2  mr-4 rounded-3xl shadow-md bg-slate-100 "
                    >sort by</div>
                     <div className="pl-4 pr-4 pt-2 pb-2 mr-4 rounded-3xl shadow-md bg-slate-100 "
                    >fast delivery</div>
                     <div className="pl-4 pr-4 pt-2 pb-2  mr-4 rounded-3xl shadow-md bg-slate-100 "
                    >New on swiggy</div>
                     <div className="pl-4 pr-4 pt-2 pb-2 mr-4 rounded-3xl shadow-md bg-slate-100 "
                    >Ratings 4.0+</div>
                     <div className="pl-4 pr-4 pt-2 pb-2 mr-4 rounded-3xl shadow-md bg-slate-100 "
                    >Pure veg</div>
                     <div className="pl-4 pr-4 pt-2 pb-2 mr-4 rounded-3xl shadow-md bg-slate-100 "
                    >offers</div>
                     <div className="pl-4 pr-4 pt-2 pb-2 mr-4 rounded-3xl shadow-md bg-slate-100 "
                    >Rs.300-Rs.600</div>
                     <div className="pl-4 pr-4 pt-2 pb-2 mr-4 rounded-3xl shadow-md bg-slate-100 "
                    >Less than Rs.300</div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-3 -my-4  mb-1" >
            {
                data.map(
                    (d,i)=>{
                                return <Card {...d}/>
                    }
                )
            }

            </div>  
    </div>
            
       
    )
    
}
