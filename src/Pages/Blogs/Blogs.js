import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-2xl text-blue-700'> How will you improve the performance of a React Application?</h1>
            <p>
                1. Using Immutable Data Structures
                <br>
                </br>
                2. Using function components
                <br></br>
                3. Optimization of Dependency

                <br></br>
                4.Avoiding using Index as Key for map
                <br></br>
                5.  Avoiding Props in Initial States

                <br></br>
                6.  CSS Animations Instead of JS Animations


            </p>


            <h1 className='text-2xl text-blue-700'> 2. What are the different ways to manage a state in a React application?</h1>
            <p>

                <br></br>
                1. React Hooks
                <br></br>
                2. REDUX
                <br></br>
                3. Recoil
                <br></br>
                4. Jotai
            </p>
            <h1 className='text-2xl text-blue-700'>14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>

            <p>
                It can be done using filter and find.
                <br></br>
                const searchName='hazzaz'
                <br></br>
const info=products.filer(product=> product.name==searchName)
                <br></br>
                console.log(info)
            </p>
            <h1 className='text-2xl text-blue-700'>
                How does prototypical inheritance work?
            </h1>

            <p>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
            </p>


            <h1 className='text-2xl text-blue-700'>
                What is a unit test? Why should write unit tests?
            </h1>
            <p>Unit testing is testing each parts of the application. The main reasonto check that all the individual parts are working as required or not. A unit is known as the smallest possible component of software that can be tested. Generally, it has a few inputs and a single output.</p>

            <h1 className='text-xl text-blue-500'>Why should write unit tests?</h1>
            <br></br>
            - Quality of Code

            <br></br>
            - Find Software Bugs Easily

            <br></br>
            - It helps to make the future changes smooth
            <br></br>
            - Provides Documentation
            <br></br>

            - It makes the debugging process more simple

            <br></br>
            - It  allows software developers to actually think through the design of the software
            <br></br>
            - Reduce Costs
        </div>
    );
};

export default Blogs;