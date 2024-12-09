---
title: Project Mercury
publishDate: 2020-03-04 00:00:00
img: /assets/project-mercury/splash.png
img_alt: The rooftop of a parking garage in a futuristic cyberpunk city
description: |
  A movement-based first-person shooter that places in the shoes of a lone operative fighting hordes of robots in an urban cyberpunk future
tags:
  - First Person Shooter
  - Unreal Engine

---
### Overview
Project Mercury was developed by a team of 14 people over the course of one college semester. The goal of the game was to create a fast-paced first person shooter game that would allow us to gain experience working with Unreal Engine 5. We were inspired by games like Titanfall 2, Mirror's Edge, and Ghostrunner, and decided to create a game particulary inspired by the technical movement mechanics present in those titles. Project Mercury is an adreneline-inducing mix of run and gun action against the backdrop of the rainy neo-futuristic late 21st century Detroit skyline. 

### Technical Contributions
I worked as a general programmer for Project Mecury, but mainly worked on systems programming or lower level components written in C++. My contributions include:
 - A robust, complete, and polished character controller. Since a main focus of our game's identity and feel was the presence of an intuitive and polished movement system, I was entrusted to develop, implement, and iterate on our first person character controller. Over the development cycle, this was my most important task.

    &nbsp; 
    &nbsp; 
 - A reusable and extensible throwable items system, used for the 4 different types of grenades in Project Mercury; two for the player's use, and two for the enemies'.

    &nbsp; 
    &nbsp; 
 - A complete and polished special skill, inspired by the Deadeye ability from Read Dead Redemption 2 and Cassidy's High Noon Ultimate from Overwatch. This is accompanied by a reactive points system that tracks and charges up based on the player's ability to maintain their momentum through the level.

And several other miscellaneous tasks.


#### Advanced Movement
In a first person game, the character controller is an oft overlooked factor in the overall feeling of fun and polish apparent to players. It affects nearly every single interaction they have whilst playing, yet a good first-person controller should be as intuitive as possible, and far from the front of the player's mind. If the player notices the controller, it's likely because it behaved in way that was not intended by their inputs. This only serves to interrupt their immersion and flow, and is a trademark of poorly programmed games.

##### Reverse Engineering
In order to develop an excellent movement component, we looked towards a game with one of the most loved movements systems - Titanfall 2
My work on the character controller for this game could be summarized as trying to reverse engineer what made Titanfall's movement so fluid and addicting.

This was an ongoing process, but I learned so much about how the creators of that game implemented their iconic parkour system, and I took what I learned to create a stripped-down and simplified, but still fun, version into our game.

##### Designer Friendly Programming
All of the low-level physics code I created for the movement component is endlessly tweakable and modifiable via UPROPERTYs, so that designer can independently tune in the feel of the component based on player feedback for tight iteration cycles.

##### 







