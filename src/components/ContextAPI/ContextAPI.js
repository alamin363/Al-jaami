import React, { createContext } from 'react';

export const GlobalContextAPI = createContext();

const ContextAPI = ({ children }) => {
    //  Price Table All Data Values
    const PriceTable = [
        {
            no: 1,
            title: "Signature",
            time: "Monthly",
            price: 4999,
            desc: "Fast project turnaround time, substantial cost savings quality Signature",
            list01: "Five Brand Monitors",
            list02: "Five Brand Monitors",
            list03: "Five Brand Monitors",
            list04: "Five Brand Monitors",
            list05: "Five Brand Monitors",
            list06: "Five Brand Monitors",
            list07: "Five Brand Monitors",
            list08: "Five Brand Monitors",
            btn: "Contact Us",

        },
        {
            no: 2,
            title: "Flourish",
            price: 7999,
            time: "Monthly",
            desc: "Fast project turnaround time, substantial cost savings quality Flourish",
            list01: "Five Brand Monitors",
            list02: "Five Brand Monitors",
            list03: "Five Brand Monitors",
            list04: "Five Brand Monitors",
            list05: "Five Brand Monitors",
            list06: "Five Brand Monitors",
            list07: "Five Brand Monitors",
            list08: "Five Brand Monitors",
            list09: "Five Brand Monitors",
            btn: "Contact Us",

        },
        {
            no: 3,
            title: "Prestige",
            price: 9999,
            time: "Monthly",
            desc: "Fast project turnaround time, substantial cost savings quality Prestige",
            list01: "Five Brand Monitors",
            list02: "Five Brand Monitors",
            list03: "Five Brand Monitors",
            list04: "Five Brand Monitors",
            list05: "Five Brand Monitors",
            list06: "Five Brand Monitors",
            list07: "Five Brand Monitors",
            list08: "Five Brand Monitors",
            btn: "Contact Us",

        }
        
    ];

    const values = { PriceTable };
    return (
        <GlobalContextAPI.Provider value={values}>
            {children}
        </GlobalContextAPI.Provider>
    );
};

export default ContextAPI;