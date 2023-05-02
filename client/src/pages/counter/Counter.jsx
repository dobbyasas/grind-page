import React from 'react';
import './Counter.css';
import ToDoList from './to_do_list/ToDoList';
import Stopwatch from './stopwatch/Stopwatch';

function Counter() {

    const toggleMenu = () => {
        setShown(!shown);
      };

  return (
    <div className="container">

        <div className="column column-1">
            <h1>LIFE</h1>
            <div className="row-container">
                <div className="row">
                    <div class="countdown-container">
                        <Stopwatch />
                    </div>
                </div>
                <div className="row"> 
                    <ToDoList />
                </div>
            </div>
        </div>

        <div className="column column-2">
            <h1>REACT</h1>
            <div className="row-container">
                <div className="row">
                <div class="countdown-container">
                        <Stopwatch />
                    </div>
                </div>
                <div className="row">
                    <ToDoList />
                </div>
            </div>
        </div>

        <div className="column column-3">
            <h1>UNITY</h1>
            <div className="row-container">
                <div className="row">
                    <div class="countdown-container">
                        <Stopwatch />
                    </div>
                </div>
                <div className="row">
                    <ToDoList />
                </div>
            </div>
        </div>

        <div className="column column-4">
            <h1>GUITAR</h1>
            <div className="row-container">
                <div className="row">
                    <div class="countdown-container">   
                        <Stopwatch />
                    </div>
                </div>
                <div className="row">
                    <ToDoList />
                </div>
            </div>
        </div>

        <div className="column column-5">
            <h1>ABLETON</h1>
            <div className="row-container">
                <div className="row">
                    <div class="countdown-container">
                        <Stopwatch />
                    </div>
                </div>
                <div className="row">
                    <ToDoList />
                </div>
            </div>
        </div>

    </div>
  );
}

export default Counter;