# SpIRiT

![SpIRiT Wordmark](https://i.imgur.com/EwHyJMs.png)

## Overview 

The SpIRiT© of Occupational Therapy, a process developed by Stackhouse & Graf,  was set up as a clinical reasoning tool to help pediatric therapists 'connect the dots' between how the brain is working or not working in the ways that kids learn, play and develop. The application of the process itself originally involved connecting attributes on multiple pieces of paper using thread, establishing how different parts of the brain were connected. SpIRiT© has been taught to several occupational therapists all over the world, allowing them to establish a clearer picture of where a child may need help. Unfortunately, the way it was constructed forced therapists to rely on paper charts and tangled thread, all while observing children.

Hugh Hartigan and Rob Morgan saw this as an opportunity to take this incredibly valuable technique and modernize it, allowing therapists to have quicker access to the process itself, as well as making it more organized and easier to learn. Because of the immense amount of data, the process already involves, we opted to use Redux on the frontend and a Node.js server on the backend. The UI/UX is as clean and intuitive as possible, allowing the therapist to easily navigate through the treatment process, while still providing them help along the way. Definitions are provided for unfamiliar terms, printouts are available for completed sessions, graphs show progress from one session to the next, and the app conditionally highlights particular areas to simulate the 'thread connections' of the original process.

## Area of Focus

Our area of focus was to make this app as accessible as possible, while still maintaining the integrity of the process itself. Our client's, Tracy Stackhouse and Angela Graf, put an immense amount of time and effort into developing SpIRiT© in order to help children and we wanted to make sure that dedication wasn't lost in our application. Prior to and during development, we met with them several times to make sure each and every feature they wanted was accounted for and implemented accordingly.

Management of state and data was also crucial, which is where keen attention toward the structure of our Redux store and Node.js schemas came into play. With over 150+ pieces of data to potentially account for in a single session, a consistent and predictable flow of data was incredibly important. We spent a large portion of our time making sure that every possible piece of data was trackable and had its place in our Redux store and back-end database.

## Screenshots

#### Clinic Info Page

![SpIRiT](https://i.imgur.com/1WWRRsr.png)

#### User Dashboard

![SpIRiT](https://i.imgur.com/kvzdMPc.png)

#### Patient Dashboard

![SpIRiT](https://i.imgur.com/QDEr7vU.png)

#### Therapy Sessions Page

![SpIRiT](https://i.imgur.com/LqejYsk.png)

#### Therapy Session SAM Page with Conditional Highlighting

![SpIRiT](https://i.imgur.com/0bz9kzS.png)

#### Therapy Session Posturl Page with Conditional Highlighting

![SpIRiT](https://i.imgur.com/GQOfpTp.png)

#### Therapy Session Posturl Page with Ratings

![SpIRiT](https://i.imgur.com/cki98S0.png)

#### Treatment Plans Page

![SpIRiT](https://i.imgur.com/khlG9CW.png)

#### Therapy Goals

![SpIRiT](https://i.imgur.com/7RYuTBH.png)

#### Session Results / Printout

![SpIRiT](https://i.imgur.com/B4eq3L7.png)
