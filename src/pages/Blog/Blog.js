import React from 'react';

const Blog = () => {
    return (
        <div className='m-8'>
            <div className='border-2 mb-4 rounded-lg  text-green-900 p-6 border-green-900'>
                <h2 className='text-xl font-serif text-center '>What are the different ways to manage a state in a React application?</h2>
                <br />
                <p><strong>Lifted State: </strong>
                The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state. In the below example, we have lifted the state and the handleChange event in the parent component, helping to maintain consistency.</p>
                <br />
                <p><strong>Derived State: </strong>
                The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty.</p>
            </div>
            <div className='border-2 mb-4 rounded-lg text-green-900 p-6 border-green-900'>
                <h2 className='text-xl font-serif text-center '>
                How does prototypical inheritance work?
                </h2>
                <br />
                <p>In programming, we often want to take something and extend it. For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it. Prototypal inheritance is a language feature that helps in that.</p>
            </div>
            <div className='border-2 mb-4 rounded-lg text-green-900 p-6 border-green-900'>
                <h2 className='text-xl font-serif text-center '>What is a unit test? Why should we write unit tests?
                </h2>
                <br />
                <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                <br />
                <p>Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </div>
            <div className='border-2 mb-4 rounded-lg text-green-900 p-6 border-green-900'>
                <h2 className='text-xl font-serif text-center '>React vs. Angular vs. Vue?</h2>
                <br />
                <p><strong>React: </strong>
                React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
                </p>
                <br />
                <p><strong>Vue: </strong>
                also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript. Further reading: Vue.js Tutorial for Beginner Developers</p>
                <br />
                <p><strong>Angular: </strong>
                developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                </p>
            </div>
        </div>
    );
};

export default Blog;