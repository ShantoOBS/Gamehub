import React, { useEffect } from 'react'
import logo from '../../assets/download (1).png';

export default function Loading() {
    useEffect(()=>{
        document.title="Loading | GameHub"
    },[])
   return (
        <div className="text-black bg-gray-900" >

    

            <div className="flex flex-col justify-center items-center h-[60vh]">
                <p className="flex text-4xl font-bold items-center gap-2 text-gray-400">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>


                    <img
                        src={logo}
                        alt="loading"
                        className="w-20 h-20"
                        style={{ animation: "spin 0.6s linear infinite" }}
                    />

                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                </p>
            </div>



        <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        `}</style>
        </div>
    );
}
