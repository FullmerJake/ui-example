
import * as React from "react";
import { Planet } from 'react-planet';
import AccordionMenu from '../Accordian-Menu';
import MenuTwo from '../Menu2';
import MenuThree from '../Menu3';
 
export function MyPlanet() {
    return (
        <Planet
            centerContent={
                <div
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: '50%',
                        backgroundColor: '#1da8a4',
                    }}
                />
            }
            autoClose
            orbitRadius={300}
            hideOrbit
        >
            <AccordionMenu />
            <MenuTwo />
            <Planet
                centerContent={
                    <div
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: '50%',
                            backgroundColor: '#1da8a4',
                        }}
                    />
                }
                autoClose
                orbitRadius={300}
                hideOrbit
                rotation={50}
            >
                <MenuThree />
            </Planet>
        </Planet>
    );
}


export default MyPlanet;