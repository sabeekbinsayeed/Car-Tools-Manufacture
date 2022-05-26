import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='items-center my-12'>
            <h1 className='font-bold text-2xl text-blue-600 text-center'>Sabeek Bin Sayeed</h1>
            <h3><span className='font-bold'>email</span> : sayeed.sabeek@gmail.com</h3>
            <h3><span className='font-bold'>Phone</span>: 01738223118</h3>

            <img className='mx-auto' src='data:image/jpeg;base64,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'></img>

            <h4><span className='font-bold'>Education</span>: BSc in CSE, AUST</h4>

            <h4 className='text-2xl my-5 text-blue-600 font-bold'>Skills</h4>
            <ul class='list-disc'>
                <li>Java Script</li>
                <li>ES6</li>
                <li>React</li>
                <li>React Router DOM</li>
                <li>React Query</li>
                <li>firebase</li>
                <li>Node</li>
                <li>Express</li>
            </ul>




            <h4 className='text-2xl my-5 text-blue-600 font-bold'>Projects</h4>

            <table class="items-center mx-auto">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Live Site</th>
                        <th>Git Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rainikas Store</td>
                        <td><Link className='text-blue-500 underline' to='https://stellar-parfait-cabc4b.netlify.app'>Live site </Link></td>
                        <td><Link className='text-blue-500 underline' to='https://github.com/sabeekbinsayeed/Rainikas-Kitchen'>Git Link </Link></td>
                    </tr>
                    <tr>
                        <td>To Do</td>
                        <td><Link className='text-blue-500 underline' to='https://todo-cb771.web.app/'>Live site </Link></td>
                        <td><Link className='text-blue-500 underline' to='https://github.com/sabeekbinsayeed/to-do'>Git Link </Link></td>
                    </tr>
                    <tr>
                        <td>Portfolio</td>

                        <td><Link className='text-blue-500 underline' to='   https://sabeekbinsayeed.github.io/my-portfolio/index.html'>Live site </Link></td>
                        <td><Link className='text-blue-500 underline' to='https://github.com/sabeekbinsayeed/my-portfolio'>Git Link  </Link></td>



                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default Portfolio;