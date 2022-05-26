import React from 'react';

const Blogs = () => {

    return (
        <div className='grid grid-cols-1 m-12'>
            <h3 className='text-center text-3xl text-neutral-content my-7'>Questions and Answers</h3>
            <div class="card w-full bg-base-300 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application ?</h2>
                    <ul>
                        <li>1. Keeping component state local where necessary</li>
                        <li>2. Memoizing React components to prevent unnecessary re-renders</li>
                        <li>3. Code-splitting in React using dynamic import</li>
                        <li>4. Windowing or list virtualization in React</li>
                        <li>4. Making sure that components receive only necessary props.</li>
                        <li>5. Lazy loading images in React</li>
                    </ul>
                </div>
            </div>
            <div class="card w-full bg-base-300 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">What are the different ways to manage a state in a React application ?</h2>
                    <ul>
                        <li>1. Local state</li>
                        <li>2. Global state</li>
                        <li>3. Server state</li>
                        <li>4. URL state</li>
                    </ul>
                </div>
            </div>
            <div class="card w-full bg-base-300 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work ?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div class="card w-full bg-base-300 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <p>State can be updated in response to event handlers, server responses or prop changes. React provides a method called setState for this purpose. setState enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.</p>
                </div>
            </div>
            <div class="card w-full bg-base-300 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">What is a unit test? Why should write unit tests ?</h2>
                    <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;