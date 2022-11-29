import React from 'react';

const Blogs = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <div className='my-10  bg-slate-200 p-20 text-lg rounded-xl'>
                    <p className='font-bold'>Q:What are the different ways to manage a state in a React application?</p>
                    <p>Ans:Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.The Four Kinds of React State to Manage When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:Local state,Global state,Server state,URL state</p>
                </div>



                <div className='my-10  bg-slate-200 p-20 text-lg rounded-xl'>
                    <p className='font-bold'>Q:What are the different ways to manage a state in a React application?</p>
                    <p>Ans:Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.The Four Kinds of React State to Manage When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:Local state,Global state,Server state,URL state</p>
                </div>



                <div className='my-10  bg-slate-200 p-20 text-lg rounded-xl'>
                    <p className='font-bold'>Q:How does prototypical inheritance work?</p>
                    <p>Ans:Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.The Four Kinds of React State to Manage When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:Local state,Global state,Server state,URL state.Prototypal inheritance uses the concept of prototype chaining. Let’s explore that concept. Every object created contains [[Prototype]], which points either to another object or null. Envision an object C with a [[Prototype]] property that points to object B. Object B’s [[Prototype]] property points to prototype object A. This continues onward, forming a kind of chain called the prototype chain.This concept is used when searching our code. When we need to find a property in an object, it is first searched for in the object, and if not found, it is searched for on that object’s prototype, and so on. Thus, the entire prototype chain is traversed until the property is found or null is reached.</p>
                </div>
                <div className='my-10  bg-slate-200 p-20 text-lg rounded-xl'>
                    <p className='font-bold'>Q:What is a unit test? Why should we write unit tests?</p>
                    <p>Ans:Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end. Here, are the key reasons to perform unit testing in software engineering:Unit tests help to fix bugs early in the development cycle and save costs.,
                        It helps the developers to understand the testing code base and enables them to make changes quicklyd
                        Good unit tests serve as project documentation,
                        Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.</p>
                </div>
                <div className='my-10  bg-slate-200 p-20 text-lg rounded-xl'>
                    <p className='font-bold'>Q: React vs. Angular vs. Vue?</p>
                    <p>Ans:Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as: <br /> <br />

                        “The modern web developer’s platform”<br /><br />

                        It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.<br /><br />



                        React is considered a UI library. They define themselves as:<br /><br />

                        “A JavaScript library for building user interfaces”<br /><br />

                        Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.<br /><br />



                        Last but not least, Vue.js is, according to its site:<br /><br />

                        “A progressive JavaScript framework”<br /><br />

                        Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.<br /><br />

                        These three frameworks have several things in common, such as each follows a component-based architecture and allows creating UI features quickly. React and Vue.js are mainly declarative, and while Angular could also be declarative, it’s really more imperative. Nevertheless, they present some more differences according to their structure, architecture and way of working, so let’s dive into all these characteristics.

                    </p>
                </div>
            </div>
        </div >
    );
};

export default Blogs;