// ./components/BackgroundImage.js

// Include this line at the top of the file
/** @jsxImportSource theme-ui */

// Mark the component as a Client Component
// by adding the following comment above the component declaration
// use client;
import { useEffect,useState} from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import config from '@/config';
const transition = {
	duration: 4,
	ease: "easeOut",
	repeat: Infinity,
    repeatDelay: 0
};
const transition2 = {
	duration: 7,
	ease: "easeOut",
	repeat: Infinity,
    repeatDelay: 0
};

const BackgroundImage = () => {
	return (
		<div className="background-image">
			<svg height="200vh" width="100vw">
				<motion.line className="absolute" stroke="rgba(0,0,0,0.16)" strokeWidth="0.67px" x1="700" x2="630" y1="0" y2='100' animate = {config.line1style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(239, 90, 60, 0)" strokeWidth="1px" x1="200px" x2="0px" y1="0px" y2="1100px" animate = {config.line2style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(239, 90, 60, 0.1111111111111111)" strokeWidth="1px" x1="200" x2="0" y1="0" y2="1100" animate = {config.line2style}transition={transition}/>
				<motion.line className="absolute" stroke="rgba(239, 90, 60, 0.2222222222222222)" strokeWidth="1px" x1="200" x2="0" y1="0" y2="1100" transition={transition}/>
				<motion.line className="absolute" stroke="rgba(239, 90, 60, 0.8888888888888888)" strokeWidth="1px" x1="170" x2="150" y1="200" y2="300" animate = {config.line2style} transition={transition}/>
				<line className="absolute" stroke="rgba(0,0,0,0.16)" strokeDasharray="5 5" strokeWidth="0.67px" x1="700" x2="0" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.16)" strokeWidth="0.67px" x1="2000" x2="0" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.16)" strokeDasharray="5 5" strokeWidth="0.67px" x1="6000" x2="0" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.16)" strokeDasharray="5 5" strokeWidth="0.67px" x1="0" x2="2000" y1="0" y2="600"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.16)" strokeDasharray="5 5" strokeWidth="0.67px" x1="300" x2="2000" y1="0" y2="470"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="20" x2="20" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="40" x2="40" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="60" x2="60" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="80" x2="80" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="100" x2="100" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="120" x2="120" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="140" x2="140" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="160" x2="160" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="180" x2="180" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="200" x2="200" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="220" x2="220" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="240" x2="240" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="260" x2="260" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="280" x2="280" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="300" x2="300" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="320" x2="320" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="340" x2="340" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="360" x2="360" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="380" x2="380" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="400" x2="400" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="420" x2="420" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="440" x2="440" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="460" x2="460" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="480" x2="480" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="500" x2="500" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="520" x2="520" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="540" x2="540" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="560" x2="560" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="580" x2="580" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="600" x2="600" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="620" x2="620" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="640" x2="640" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="660" x2="660" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="680" x2="680" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="700" x2="700" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="720" x2="720" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="740" x2="740" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="760" x2="760" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="780" x2="780" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="800" x2="800" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="820" x2="820" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="840" x2="840" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="860" x2="860" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="880" x2="880" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="900" x2="900" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="920" x2="920" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="940" x2="940" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="960" x2="960" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="980" x2="980" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1000" x2="1000" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1020" x2="1020" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1040" x2="1040" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1060" x2="1060" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1080" x2="1080" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1100" x2="1100" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1120" x2="1120" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1140" x2="1140" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1160" x2="1160" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1180" x2="1180" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1200" x2="1200" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1220" x2="1220" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1240" x2="1240" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1260" x2="1260" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1280" x2="1280" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1300" x2="1300" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1320" x2="1320" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1340" x2="1340" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1360" x2="1360" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1380" x2="1380" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1400" x2="1400" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1420" x2="1420" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1440" x2="1440" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1460" x2="1460" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1480" x2="1480" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1500" x2="1500" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1520" x2="1520" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1540" x2="1540" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1560" x2="1560" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1580" x2="1580" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1600" x2="1600" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1620" x2="1620" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1640" x2="1640" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1660" x2="1660" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1680" x2="1680" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1700" x2="1700" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1720" x2="1720" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1740" x2="1740" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1760" x2="1760" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1780" x2="1780" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1800" x2="1800" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1820" x2="1820" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1840" x2="1840" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1860" x2="1860" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1880" x2="1880" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1900" x2="1900" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1920" x2="1920" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1940" x2="1940" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1960" x2="1960" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="1980" x2="1980" y1="0" y2="1100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="2000" x2="2000" y1="0" y2="1100"></line>
				<motion.line className="absolute" stroke="rgba(207, 116, 162, 0)" strokeWidth="1px" x1="1420" x2="1420" y1="0" y2="100" animate = {config.line3style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(207, 116, 162, 0.1111111111111111)" strokeWidth="1px" x1="1420" x2="1420" y1="0" y2="100" animate = {config.line3style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(207, 116, 162, 0.2222222222222222)" strokeWidth="1px" x1="1420" x2="1420" y1="0" y2="100" animate = {config.line3style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(207, 116, 162, 0.3333333333333333)" strokeWidth="1px" x1="1420" x2="1420" y1="0" y2="100"animate = {config.line3style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(207, 116, 162, 0.4444444444444444)" strokeWidth="1px" x1="1420" x2="1420" y1="0" y2="100"animate = {config.line3style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(207, 116, 162, 0.5555555555555555)" strokeWidth="1px" x1="1420" x2="1420" y1="0" y2="100"animate = {config.line3style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(207, 116, 162, 0.6666666666666666)" strokeWidth="1px" x1="1420" x2="1420" y1="0" y2="100"animate = {config.line3style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(207, 116, 162, 0.3333333333333333)" strokeWidth="1px" x1="1420" x2="1420" y1="0" y2="1100" />
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="20" y2="20"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="40" y2="40"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="60" y2="60"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="80" y2="80"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="100" y2="100"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="120" y2="120"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="140" y2="140"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="160" y2="160"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="180" y2="180"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="200" y2="200"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="220" y2="220"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="240" y2="240"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="260" y2="260"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="280" y2="280"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="300" y2="300"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="320" y2="320"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="340" y2="340"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="360" y2="360"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="380" y2="380"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="400" y2="400"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="420" y2="420"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="440" y2="440"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="460" y2="460"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="480" y2="480"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="500" y2="500"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="520" y2="520"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="540" y2="540"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="560" y2="560"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="580" y2="580"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="600" y2="600"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="620" y2="620"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="640" y2="640"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="660" y2="660"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="680" y2="680"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="700" y2="700"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="720" y2="720"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="740" y2="740"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="760" y2="760"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="780" y2="780"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="800" y2="800"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="820" y2="820"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="840" y2="840"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="860" y2="860"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="880" y2="880"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="900" y2="900"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="920" y2="920"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="940" y2="940"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="960" y2="960"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="980" y2="980"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="1000" y2="1000"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="1020" y2="1020"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="1040" y2="1040"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="1060" y2="1060"></line>
				<line className="absolute" stroke="rgba(0,0,0,0.06)" strokeWidth="0.67px" x1="0" x2="2000" y1="1080" y2="1080"></line>
				<motion.line className="absolute" stroke="rgba(12, 160, 99, 1)" strokeWidth="1px" x1="1000" x2="1100" y1="100" y2="100" pathLength="1" animate = {config.line4style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(12, 160, 99, 0.8888888888888888)" strokeWidth="1px" x1="1000" x2="1100" y1="100" y2="100" pathLength="1" animate = {config.line4style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(12, 160, 99, 0.7777777777777778)" strokeWidth="1px" x1="1000" x2="1100" y1="100" y2="100" pathLength="1" animate = {config.line4style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(12, 160, 99, 0.22222222222222232)" strokeWidth="1px" x1="0" x2="2000" y1="100" y2="100" pathLength="1"/>
				<motion.line className="absolute" stroke="rgba(12, 160, 99, 0.11111111111111116)" strokeWidth="1px" x1="0" x2="2000" y1="100" y2="100" pathLength="1"/>
				<motion.line className="absolute" stroke="rgba(39, 151, 207, 0)" strokeWidth="1px" x1="800" x2="900" y1="400" y2="400" pathLength="1" animate = {config.line5style} transition={transition2}/>
				{/* <motion.line className="absolute" stroke="rgba(39, 151, 207, 0.1111111111111111)" strokeWidth="1px" x1="1000" x2="1100" y1="400" y2="400" pathLength="1" animate = {config.line5style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(39, 151, 207, 0.2222222222222222)" strokeWidth="1px" x1="1000" x2="1100" y1="400" y2="400" pathLength="1" animate = {config.line5style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(39, 151, 207, 0.3333333333333333)" strokeWidth="1px" x1="1000" x2="1100" y1="400" y2="400" pathLength="1" animate = {config.line5style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(39, 151, 207, 0.4444444444444444)" strokeWidth="1px" x1="0" x2="2000" y1="400" y2="400" pathLength="1" animate = {config.line5style} transition={transition}/>
				<motion.line className="absolute" stroke="rgba(39, 151, 207, 0.5555555555555556)" strokeWidth="1px" x1="0" x2="2000" y1="400" y2="400" pathLength="1" animate = {config.line5style} transition={transition}/> */}
				<motion.line className="absolute" stroke="rgba(39, 151, 207, 0.6666666666666666)" strokeWidth="1px" x1="800" x2="900" y1="400" y2="400" pathLength="1" animate = {config.line5style} transition={transition2}/>
				<motion.line className="absolute" stroke="rgba(39, 151, 207, 0.7777777777777777)" strokeWidth="1px" x1="800" x2="900" y1="400" y2="400" pathLength="1" animate = {config.line5style} transition={transition2}/>
				<motion.line className="absolute" stroke="rgba(39, 151, 207, 0.3333333333333333)" strokeWidth="1px" x1="0" x2="2000" y1="400" y2="400" pathLength="1"/>
			</svg>


			<style jsx>{`
		  .background-image {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			z-index: -1;
		  }
  
		  .svg-background {
			width: 100%;
			height: 100%;
		  }
		`}</style>
		</div>
	);
};

export default BackgroundImage;
