// projectsData.js

const myProjects = [
    {
        title: "Vision-Guided Autonomous Chess Playing Robot",
        description: "Designed and developed a 4-DOF vision-guided robotic chess-playing system by integrating SOLIDWORKS, Python, Arduino UNO, OpenCV and the Stockfish chess engine.",
        category: "automation python robotics arduino cad",
        image: "Assets/projects/project1 chessBot.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "OpenCV", "SOLIDWORKS","Stockfish", "Arduino"],
        githubLink: "",
        liveDemoLink: "https://youtu.be/6m0tZR3g31o?si=PL5EUi6NGrUioIFc", // লাইভ ডেমো না থাকলে ফাঁকা রাখুন
        youtubeLink: "https://youtu.be/eAOGQqrYVFA?si=MCU7jLVmmnYr2WCg" // ইউটিউব ভিডিও লিঙ্ক
    },
    {
        title: "Parametric Piston Generator",
        description: "The SolidWorks Piston Macro Generator is a lightweight, web-based automation tool designed to bridge the gap between parametric web interfaces and the SolidWorks API. It translates user-defined geometric parameters into ready-to-execute Visual Basic for Applications (VBA) macro code.",
        category: "automation cad",
        image: "Assets/projects/project2 piston.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["JavaScript", "VBA", "SOLIDWORKS", "SOLIDWORKS API"],
        githubLink: "https://github.com/Arafat178/SolidWorks-Piston-Macro-Generator",
        liveDemoLink: "https://arafat178.github.io/SolidWorks-Piston-Macro-Generator", // লাইভ ডেমো থাকলে দিন
        youtubeLink: "https://youtu.be/JDd0tzg5XtU" // ইউটিউব ভিডিও না থাকলে এভাবে ফাঁকা রাখুন
    },
    {
        title: "Dual-Robot Chess Playing System Developed Using RoboDK and Stockfish AI",
        description: "Developed an autonomous robotic chess-playing system by integrating the Stockfish AI chess engine with RoboDK robot simulation. Custom chess pieces were designed in SOLIDWORKS and imported into RoboDK. Python was used to generate chess moves, control robot motion, and automate piece pick-and-place operations for complete gameplay.",
        category: "automation cad python robotics",
        image: "Assets/projects/project3 chessRobodk.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "RoboDK", "SOLIDWORKS", "Stockfish"],
        githubLink: "https://github.com/Arafat178/Dual-Robot-Autonomous-Chess-Player-",
        liveDemoLink: "", // লাইভ ডেমো থাকলে দিন
        youtubeLink: "https://youtu.be/VXk2BCppK2I?si=TGPKfPs0awtiVv1N" // ইউটিউব ভিডিও না থাকলে এভাবে ফাঁকা রাখুন
    },
    {
        title: "Algorithmic Truncated Icosahedron (Football) CAD  Generator",
        description: "Developed a Python-based CAD automation system that generates a mathematically accurate football (truncated icosahedron) directly in SOLIDWORKS using the COM API. The project combines computational geometry, vector mathematics, and CAD automation to eliminate manual modeling.",
        category: "automation cad python",
        image: "Assets/projects/project4 football.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "SOLIDWORKS API", "SOLIDWORKS"],
        githubLink: "",
        liveDemoLink: "", // লাইভ ডেমো থাকলে দিন
        youtubeLink: "https://youtu.be/DPhJNYx9pNw?si=3RqyDpuejFAeNMkV" // ইউটিউব ভিডিও না থাকলে এভাবে ফাঁকা রাখুন
    },
    {
        title: "Automated Cyclone Separator Design & Flow Simulation",
        description: "Developed a fully parametric cyclone separator using Python and the SOLIDWORKS API for automated CAD generation. Validated the design with SOLIDWORKS Flow Simulation by analyzing airflow, pressure drop, velocity, and particle separation, demonstrating an integrated CAD automation and CFD workflow.",
        category: "automation cad python simulation", // cad automation python simulation robotics pygame arduino
        image: "Assets/projects/project5 cycloneSep.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "SOLIDWORKS Flow Simulation", "SOLIDWORKS"],
        githubLink: "",
        liveDemoLink: "https://youtu.be/HDk7nTqEfEo?si=FClAEh0uJ5phasoR", // লাইভ ডেমো থাকলে দিন
        youtubeLink: "https://youtu.be/yALmTDRdjso?si=nt3cuTO1QG7D3QFe" // ইউটিউব ভিডিও না থাকলে এভাবে ফাঁকা রাখুন
    },
    {
        title: "Parametric Bolt Design SolidWorks Automation System",
        description: "A web-based engineering tool for ISO-standard hex bolt design integrated with automated SolidWorks macro generation. Built for engineers who prefer precision over guesswork.",
        category: "automation cad", // cad automation python simulation robotics pygame arduino
        image: "Assets/projects/project6 bolt.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["JavaScript", "SOLIDWORKS"],
        githubLink: "https://github.com/Arafat178/Parametric-Bolt-Design-SolidWorks-Automation-System",
        liveDemoLink: "https://arafat178.github.io/Parametric-Bolt-Design-SolidWorks-Automation-System/",
        youtubeLink: "https://youtu.be/lVleHnYiIYI?si=zBBDWTZXo3kS6o0H"
    },
    {
        title: "Chess-Playing Robotic Arm Simulation",
        description: "Built a chess-playing robotic arm simulation using Python and the SOLIDWORKS API. Integrated inverse kinematics and mate-based grasping for automated pick-and-place operations in a parametric CAD environment.",
        category: "automation cad rpbotics simulation", // cad automation python simulation robotics pygame arduino
        image: "Assets/projects/project7 robotSW.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "SOLIDWORKS", "SOLIDWORKS API"],
        githubLink: "https://github.com/Arafat178/Robotic-Arm-Simulator",
        liveDemoLink: "",
        youtubeLink: "https://youtu.be/hoecS7WEGOE?si=y4aqax7Nx5dkTxUP"
    },
    {
        title: "Advanced Helical Spring Engineering Suite",
        description: "This professional engineering tool is designed to optimize helical compression springs using established mechanical principles. It bridges the gap between theoretical calculations and practical CAD automation.",
        category: "automation cad simulation", // cad automation python simulation robotics pygame arduino
        image: "Assets/projects/project8 spring.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["SOLIDWORKS API", "SOLIDWORKS", "JavaScript"],
        githubLink: "https://github.com/Arafat178/Advanced-Helical-Spring-Engineering-Suite",
        liveDemoLink: "https://arafat178.github.io/Advanced-Helical-Spring-Engineering-Suite/",
        youtubeLink: "https://youtu.be/-jtaVDy294o"
    },
    {
        title: "Supersonic Nozzle CAD Generator",
        description: "A fully integrated engineering + CAD automation tool that bridges compressible flow theory with real-world SolidWorks geometry generation.",
        category: "automation cad simulation", // cad automation python simulation robotics pygame arduino
        image: "Assets/projects/project9 nozzle.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["SOLIDWORKS API", "SOLIDWORKS", "JavaScript"],
        githubLink: "https://github.com/Arafat178/Supersonic-Nozzle-CAD-Generator",
        liveDemoLink: "https://arafat178.github.io/Supersonic-Nozzle-CAD-Generator/",
        youtubeLink: ""
    },
    {
        title: "SolidWorks Gear Macro Generator",
        description: "A web tool for generating SolidWorks VBA macros to create parametric spur gears safely and efficiently. It validates gear parameters in real-time, warns about potential undercutting, teeth overlap, or critical geometry issues, and outputs ready-to-run VBA code for SolidWorks.",
        category: "automation cad", // cad automation python simulation robotics pygame arduino
        image: "Assets/projects/project10 gear.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["SOLIDWORKS API", "SOLIDWORKS", "JavaScript"],
        githubLink: "https://github.com/Arafat178/SolidWorks-Gear-Macro-Generator",
        liveDemoLink: "https://arafat178.github.io/SolidWorks-Gear-Macro-Generator/",
        youtubeLink: ""
    },
    {
        title: "Nozzle Flow Simulator (Quasi-1D Isentropic)",
        description: "A browser-based nozzle flow simulator for visualizing compressible gas dynamics in converging and converging–diverging nozzles. The project combines fundamental gas-dynamics theory with real-time visualization, inspired by CFD post-processing.",
        category: "simulation", // cad automation python simulation robotics pygame arduino
        image: "Assets/projects/project11 nozzle.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Arafat178/Nozzle-Flow-Simulator",
        liveDemoLink: "https://arafat178.github.io/Nozzle-Flow-Simulator/",
        youtubeLink: ""
    },
    {
        title: "Stealth Chess Automation System",
        description: "Stealth Chess Automation System is a real-time computer vision–driven chess agent that silently observes the board, detects opponent moves, and responds instantly with engine-calculated optimal moves. It doesn’t play like a human. It watches, understands, and executes — without hesitation.",
        category: "python games automation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project12 chess.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "Stockfish", "OpenCV", "PyAutoGUI"],
        githubLink: "https://github.com/Arafat178/Stealth-Chess-Automation-System",
        liveDemoLink: "",
        youtubeLink: "https://youtu.be/fAuu70ryaLM"
    },
    {
        title: "Neon Hill Climb Racing 2",
        description: "Neon Hill Climb Racing 2 is a 2D browser-based physics racing game built with HTML5 Canvas, JavaScript, CSS, and Firebase. It features vehicle upgrades, online leaderboards, procedural terrain, mobile support, and persistent game progress.",
        category: "games", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project13 hillCar.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
        githubLink: "",
        liveDemoLink: "https://arafat178.github.io/Neon-Hill-Climb-Racing-2/",
        youtubeLink: ""
    },
    {
        title: "Air Strike",
        description: "A fast-paced 2D side-scrolling air combat game where you pilot a strike fighter across a hostile desert battlefield. Destroy enemy convoys, evade guided missiles, manage fuel reserves, and unleash devastating nuclear strikes to survive as long as possible.",
        category: "games", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project14 airStrike.jpg", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
        githubLink: "",
        liveDemoLink: "https://arafat178.github.io/Air-Strike/",
        youtubeLink: ""
    },
    {
        title: "Boxer Infinite Fight",
        description: "Boxer: Infinite Fight - RPG Web Edition A lightweight, 2D browser-based RPG fighting game. Battle endless waves of enemies, manage your stats, and survive boss encounters using strategic upgrades.",
        category: "games", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project15 boxer.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript"],
        githubLink: "",
        liveDemoLink: "https://arafat178.github.io/Boxer-Infinite-Fight/",
        youtubeLink: ""
    },
    {
        title: "4-DOF Robotic Arm Inverse Kinematics (IK) Solver",
        description: "This project is a web-based simulation tool designed to solve and visualize the Inverse Kinematics (IK) of a 4-DOF robotic arm. This system calculates the required joint angles (θ1,θ2,θ3,θ4) to reach a specific target coordinate (X,Y,Z) with a specific wrist orientation (α).",
        category: "simuation robotics", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project16 4dofRobot.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript", "Kinematics"],
        githubLink: "https://github.com/Arafat178/4-DOF-Robotic-Arm-Inverse-Kinematics-Solver",
        liveDemoLink: "https://arafat178.github.io/4-DOF-Robotic-Arm-Inverse-Kinematics-Solver/",
        youtubeLink: "https://youtu.be/0Hil_699Lj0"
    },
    {
        title: "3D Kinematics Frame Simulator",
        description: "An interactive 3D simulator for learning robot kinematics and homogeneous transformations",
        category: "simuation robotics", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project17 3Drobot.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript", "Kinematics"],
        githubLink: "https://github.com/Arafat178/robot-kinematics-visualizer",
        liveDemoLink: "https://arafat178.github.io/robot-kinematics-visualizer/",
        youtubeLink: ""
    },
    {
        title: "Jacobian Kinematics Solver",
        description: "A web-based step-by-step solver for robotic manipulator kinematics using Denavit-Hartenberg (D-H) parameters. It computes:Forward Kinematics, Jacobian Matrix, Inverse Jacobian / Pseudoinverse, Joint Velocities for a desired end-effector differential motion, Singularity Detection, PDF Export of the full solution",
        category: "simuation robotics", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project18 jacob.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript", "Kinematics"],
        githubLink: "https://github.com/Arafat178/Jacobian-Kinematics-Solver",
        liveDemoLink: "https://arafat178.github.io/Jacobian-Kinematics-Solver/",
        youtubeLink: ""
    },
    {
        title: "Numerical Inverse Kinematics Solver for 6-DOF Serial Manipulators",
        description: "The system allows for dynamic configuration of Denavit-Hartenberg (DH) parameters, supports real-time matrix verification, and implements Automatic Random Restart logic to mitigate local minima convergence issues.",
        category: "simuation robotics", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project19 6dof.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript", "Kinematics"],
        githubLink: "https://github.com/Arafat178/6-DOF-Robot-Inverse-Kinematics-IK-Solver",
        liveDemoLink: "https://arafat178.github.io/6-DOF-Robot-Inverse-Kinematics-IK-Solver/",
        youtubeLink: ""
    },
    {
        title: "Autonomous Color-Based Sorting Robot",
        description: "This project simulates an industrial robotic sorting cell where a 6-DOF robotic arm autonomously picks randomly distributed objects and sorts them into organized locations based on color.",
        category: "simuation robotics automation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project20 sortingRobot.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "RoboDK", "Kinematics"],
        githubLink: "https://github.com/Arafat178/Autonomous-Color-Based-Sorting-Robot",
        liveDemoLink: "",
        youtubeLink: "https://youtu.be/_ClDFjRHCIg"
    },
    {
        title: "Hormuz Strait: Tactical Sonar Sweep V3",
        description: "The Strait of Hormuz is a critical maritime chokepoint. This project transforms its complex topography into a tactical sonar sweep simulation.",
        category: "games", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project21 hormuz.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Arafat178/Hormuz-Strait-Tactical-Sweep",
        liveDemoLink: "https://arafat178.github.io/Hormuz-Strait-Tactical-Sweep/",
        youtubeLink: ""
    },
    {
        title: "Professional Cooling Load Estimator",
        description: "A precise, web-based engineering tool for calculating building cooling loads. This application utilizes the ASHRAE Heat Balance / TETD Method, focusing on direct temperature differences (ΔT) for transmission and specific solar gain equations for fenestration.",
        category: "simulation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project22 coolingLoad.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Arafat178/Professional-Cooling-Load-Calculator",
        liveDemoLink: "https://arafat178.github.io/Professional-Cooling-Load-Calculator/",
        youtubeLink: ""
    },
    {
        title: "HVAC Duct Design Calculator (Equal Friction Method)",
        description: "The application bridges the gap between theoretical mechanical engineering principles and practical application by providing instant calculations for duct sizing, pressure loss, and system balancing, complete with a dynamically generated, interactive Ductulator chart.",
        category: "simulation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project23 HVAC.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Arafat178/Equal-Friction-Duct-Calculator",
        liveDemoLink: "https://arafat178.github.io/Equal-Friction-Duct-Calculator/",
        youtubeLink: ""
    },
    {
        title: "Fuel HHV Calculator",
        description: "calculates the Higher Heating Value (HHV) of custom fuel mixtures. It automatically balances the combustion reaction, determines reaction enthalpy, calculates the average molecular weight of the fuel, and displays the complete combustion equation with thermodynamic properties.",
        category: "simulation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project24 HHV.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript"],
        githubLink: "",
        liveDemoLink: "https://arafat178.github.io/Fuel-HHV-Calculator/",
        youtubeLink: ""
    },
    {
        title: "Interactive Psychrometric Analysis Tool",
        description: "It allows for the quick and accurate calculation of seven key psychrometric properties from any two known inputs. More importantly, it dynamically visualizes the state point on a standard psychrometric chart, bridging the gap between theoretical calculations and practical visualization.",
        category: "simulation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project25 psychrometric.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript","PsychroLib.js"],
        githubLink: "https://github.com/Arafat178/Interactive-Psychrometric-Analysis-Tool",
        liveDemoLink: "https://arafat178.github.io/Interactive-Psychrometric-Analysis-Tool/",
        youtubeLink: ""
    },
    {
        title: "Parametric Pump Impeller Generator",
        description: "A Python-driven automation pipeline that generates a full 3D pump impeller inside SolidWorks from a few user-defined parameters.",
        category: "cad python automation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project26 impeller.gif", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "SOLIDWORKS", "SOLIDWORKS API"],
        githubLink: "https://github.com/Arafat178/Auto-Impeller",
        liveDemoLink: "",
        youtubeLink: ""
    },
    {
        title: "Pelton Wheel Automation",
        description: "This project automates the 3D modeling of a Pelton Wheel in SolidWorks using Python and COM automation. By entering a few dimensional parameters (like wheel diameter, bucket width, etc.), the script dynamically builds the full Pelton wheel model",
        category: "cad python automation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project27 pelton.gif", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "SOLIDWORKS", "SOLIDWORKS API"],
        githubLink: "https://github.com/Arafat178/Pelton-Wheel-Automation",
        liveDemoLink: "",
        youtubeLink: ""
    },
    {
        title: "Helical Screw Conveyor Design Automation",
        description: "This Python script(private) automates the design of a helical screw conveyor in SolidWorks using the COM API. By providing key input parameters, users can automatically generate a 3D conveyor model with helical flights, customizable length, pitch, and flight thickness.",
        category: "cad python automation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project28 conveyor.gif", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "SOLIDWORKS", "SOLIDWORKS API"],
        githubLink: "https://github.com/Arafat178/Conveyor-Automation",
        liveDemoLink: "",
        youtubeLink: ""
    },
    {
        title: "Parametric CD Nozzle Generator",
        description: "A Python-powered automation script to generate 3D convergent-divergent (CD) nozzle models in SolidWorks based on user-defined dimensions.",
        category: "cad python automation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project29 auto_nozzle.gif", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "SOLIDWORKS", "SOLIDWORKS API"],
        githubLink: "https://github.com/Arafat178/Nozzle-Automation",
        liveDemoLink: "",
        youtubeLink: ""
    },
    {
        title: "Dinosaur Game Auto Player",
        description: "This project plays the Google Chrome Dino Game automatically. It uses screenshots, OpenCV image processing, and PyAutoGUI to detect obstacles in the game and jump over them without any manual input.",
        category: "python automation games", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project30 dino.gif", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "OpenCV"],
        githubLink: "https://github.com/Arafat178/Dinosaur_Game_Bot",
        liveDemoLink: "",
        youtubeLink: "https://youtu.be/nfr6zyaQe4c?si=HnqGp7aekEdBjHAj"
    },
    {
        title: "Aerial-Fury",
        description: "A fast-paced 2D airstrike shooter game built with Python & Pygame. Control your fighter jet, dodge enemies, and survive the endless sky battles.",
        category: "python games", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project31 jet.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "JavaScript"],
        githubLink: "https://github.com/Arafat178/Aerial-Fury",
        liveDemoLink: "https://arafat178.github.io/Aerial-Fury/",
        youtubeLink: ""
    },
    {
        title: "Compound Microscope Simulator",
        description: "A physics-accurate interactive simulation of a compound microscope built using HTML, CSS, and JavaScript (Canvas API).",
        category: "simulation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project32 lens.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Physics", "JavaScript"],
        githubLink: "https://github.com/Arafat178/Compound-Microscope-Simulator",
        liveDemoLink: "https://arafat178.github.io/Compound-Microscope-Simulator/",
        youtubeLink: ""
    },
    {
        title: "Young's Double Slit Experiment Simulator",
        description: "Quantum Optics Lab is an interactive web-based simulator that demonstrates Young's Double-Slit Experiment to visualize wave-particle duality.",
        category: "simulation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project33 double.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Physics", "JavaScript"],
        githubLink: "https://github.com/Arafat178/Young-s-Double-Slit-Experiment-Simulator",
        liveDemoLink: "https://arafat178.github.io/Young-s-Double-Slit-Experiment-Simulator/",
        youtubeLink: ""
    },
    {
        title: "Advanced Dual-Medium Thin Lens Simulator",
        description: "A JavaScript-powered optical playground where physics breathes and light bends. A thin lens standing between two different media — this simulator shows how the rays twist, where the image forms, how focal lengths shift, and how geometry and physics dance together.",
        category: "simulation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project34 lens2.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Physics", "JavaScript"],
        githubLink: "https://github.com/Arafat178/Advanced-Thin-Lens-Simulator",
        liveDemoLink: "https://arafat178.github.io/Advanced-Thin-Lens-Simulator/",
        youtubeLink: ""
    },
    {
        title: "Advanced Dual-Medium Thin Lens Simulator",
        description: "Single Slit Diffraction is an interactive web-based simulator that demonstrates the diffraction of light through a narrow slit using the Fraunhofer diffraction model.",
        category: "simulation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project35 slit.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Physics", "JavaScript"],
        githubLink: "https://github.com/Arafat178/Single-Slit-Diffraction",
        liveDemoLink: "https://arafat178.github.io/Single-Slit-Diffraction/",
        youtubeLink: ""
    },
    {
        title: "NACA Airfoil Generator",
        description: "NACA Airfoil Generator is a Python automation tool that takes a NACA 4-digit code (like 2412, 0012, etc.) and automatically:Generates airfoil coordinates mathematically, Launches SolidWorks, Draws the airfoil spline on the Front Plane automatically using the SolidWorks API",
        category: "cad python automation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project36 nacaAirfoils.gif", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "SOLIDWORKS", "SOLIDWORKS API"],
        githubLink: "https://github.com/Arafat178/NACA-Airfoil-Generator",
        liveDemoLink: "",
        youtubeLink: ""
    },
    {
        title: "Parametric Piston Generator (Python + SolidWorks API)",
        description: "A Python-powered automation script to generate 3D piston models in SolidWorks based on user-defined dimensions.",
        category: "cad python automation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project37 Piston_3D.gif", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["Python", "SOLIDWORKS", "SOLIDWORKS API"],
        githubLink: "https://github.com/Arafat178/Parametric-Piston-Generator-Python-SolidWorks-API-",
        liveDemoLink: "",
        youtubeLink: ""
    },
    {
        title: "River-Rush",
        description: "River Boat Game is a responsive HTML5 Canvas game where players navigate a boat through a river while avoiding floating obstacles.",
        category: "games", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project38 riverRush.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Arafat178/River-Rush",
        liveDemoLink: "https://arafat178.github.io/River-Rush/",
        youtubeLink: ""
    },
    {
        title: "Tic Tac Toe Multiplayer",
        description: "This is a real-time online multiplayer game built with HTML, JavaScript, and Firebase Realtime Database. Players can create or join game rooms, compete with friends, and enjoy synchronized gameplay with live move updates.",
        category: "games", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project39 tictactoe.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Arafat178/TicTacToe-Online-Multiplayer",
        liveDemoLink: "https://arafat178.github.io/TicTacToe-Online-Multiplayer/",
        youtubeLink: ""
    },
    {
        title: "2-Axis Cartesian Sorting Gantry",
        description: "Designed a practical 2-axis Cartesian gantry system for automated package handling and sorting. The system enables horizontal (X-axis) and vertical (Z-axis) motion to transfer packages from a staging area to a scanning station while emphasizing modularity, manufacturability, and future scalability.",
        category: "cad", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project40 gantry.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["SOLIDWORKS"],
        githubLink: "",
        liveDemoLink: "",
        youtubeLink: "https://youtu.be/XoXBduShKYA"
    },
    {
        title: "Steel Chair Design using SOLIDWORKS Weldments",
        description: "Designed a manufacturable steel chair frame using the SOLIDWORKS Weldments environment. The chair frame was created using a 3D Sketch and Structural Members, following standard fabrication practices for welded square tube structures.",
        category: "cad", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project41 chair.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["SOLIDWORKS"],
        githubLink: "",
        liveDemoLink: "",
        youtubeLink: ""
    },
    {
        title: "Circular Table Design Using Custom HFS8-4040 Weldment Profile",
        description: "Designed a decorative circular table base using custom HFS8 aluminum extrusion profiles in SOLIDWORKS Weldments. The frame was created using a parametric 3D sketch, structural members, circular patterns, and weldment trimming tools to produce a fabrication-ready table base.",
        category: "cad", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project42 table.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["SOLIDWORKS"],
        githubLink: "",
        liveDemoLink: "",
        youtubeLink: ""
    },
    {
        title: "Radial Type Engine Assembly Design",
        description: "This project involved the modeling and assembly of multiple engine components, including pistons, connecting rods, crankshaft, cylinder block, manifolds, and supporting parts. Proper assembly relationships and constraints were applied to ensure accurate positioning and interaction between components.",
        category: "cad", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project43 radial.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["SOLIDWORKS"],
        githubLink: "",
        liveDemoLink: "",
        youtubeLink: "https://youtube.com/shorts/j9bfjsZ2NbE?si=EkALWH1G2mAq5xVF"
    },
    {
        title: "V-type IC Engine Part Design and Assembly",
        description: "The project includes detailed components such as the engine block, crankshaft, pistons, and connecting rods, along with motion simulation to demonstrate the engine's mechanical operation.",
        category: "cad", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project44 v8.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["SOLIDWORKS"],
        githubLink: "",
        liveDemoLink: "",
        youtubeLink: "https://youtube.com/shorts/VRy6g84thms?si=3jhVi2-XVKU_qiEc"
    },
    {
        title: "Pattern-Based Decorative Vase Design",
        description: "To develop a complex patterned 3D model using advanced SOLIDWORKS features including pattern generation, surface manipulation, and feature-driven modeling techniques.",
        category: "cad", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project45 vase.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["SOLIDWORKS"],
        githubLink: "",
        liveDemoLink: "",
        youtubeLink: "https://youtube.com/shorts/grZeZ8cJnKA?si=5KUDNupsWCQXuOIh"
    },
    {
        title: "Bearing Design & Selection System",
        description: "A browser-based engineering tool for bearing selection, equivalent load calculation, bearing life estimation, and dynamic load rating evaluation based on the methodology presented in Shigley's Mechanical Engineering Design.",
        category: "automation simulation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project46 bearingDesign.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Arafat178/Bearing-Design-Selection-System",
        liveDemoLink: "https://arafat178.github.io/Bearing-Design-Selection-System/",
        youtubeLink: "https://youtu.be/sqPa-vsFFak?si=1Y6UQC8hwJr15rR0"
    },
    {
        title: "AI Vocabulary Tutor",
        description: "It is a modern web-based English learning application that helps users understand, pronounce, remember, and practice English vocabulary using Google Gemini AI.",
        category: "automation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project47 vocab.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript", "Firebase", "Firestore", "Gemini AI", "Web Speech API"],
        githubLink: "https://github.com/Arafat178/AI-Vocabulary-Tutor",
        liveDemoLink: "https://gemini-vocabulary-tutor.vercel.app/",
        youtubeLink: ""
    },
    {
        title: "ShikkhaAI",
        description: "A bilingual AI tutor for learning Science through clear, structured explanations in Bangla and English",
        category: "automation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project48 shikkhaAI.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript", "Gemini AI"],
        githubLink: "",
        liveDemoLink: "https://shikkha-eight.vercel.app/",
        youtubeLink: ""
    },
    {
        title: "Duck Hunt – 2D Action Shooting Game",
        description: "Duck Hunt is a fast-paced 2D arcade shooting game where players hunt moving ducks, build combos, and aim for the highest score.",
        category: "games", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project49 duckHunt.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript"],
        githubLink: "",
        liveDemoLink: "https://arafat178.github.io/Duck-Hunt-Web/",
        youtubeLink: "https://youtu.be/Y6SzfmMgRC8"
    },
    {
        title: "QR Studio — Custom QR Code Maker",
        description: "Create QR codes for URLs, text, email, phone numbers, Wi-Fi, SMS, vCard, and locations — then customize the design, add your own logo, preview it instantly, and download it in high quality.",
        category: "simulation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project50 QRcode.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Arafat178/QR-Studio",
        liveDemoLink: "https://arafat178.github.io/QR-Studio/",
        youtubeLink: ""
    },
    {
        title: "Gyroid Design Automation Tool",
        description: "An engineering tool for generating parametric SolidWorks VBA macros for Gyroid structures while simultaneously estimating porosity from an empirical correlation.",
        category: "simulation cad automation", // cad automation python simulation robotics games arduino
        image: "Assets/projects/project51 gyroid.png", // আপনার প্রজেক্টের ছবির লোকেশন
        techStack: ["HTML", "CSS", "JavaScript", "SOLIDWORKS", "VBA", "SOLIDWORKS API"],
        githubLink: "https://github.com/Arafat178/Gyroid-Design-Automation-Tool",
        liveDemoLink: "https://arafat178.github.io/Gyroid-Design-Automation-Tool/",
        youtubeLink: "https://youtu.be/HzK5nAKYHjg?si=hMPK-TEKlMSovigC"
    }
];
