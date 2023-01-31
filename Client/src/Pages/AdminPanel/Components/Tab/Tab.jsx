import React from 'react';
import './Tab.css'
import {Link} from "react-router-dom";

const Tab = (props) => {
    const isInteractive = props.isInteractive;

    return (
        <div className="Tab">
            <h3>{props.title}</h3>
            {isInteractive ?
                <>
                    <p>
                        Последнее изменение:
                        <br/>
                        <span>{props.changeDate}</span> в <span>{props.changeTime}</span>
                        <br/>
                        {props.changedUser ?
                            <>
                                От пользователя:
                                <br/>
                                <span>{props.changedUser}</span>
                            </>
                            :
                            ""
                        }
                    </p>

                    <Link to={props.link}>
                        <button>
                            {props.buttonContent}
                        </button>
                    </Link>
                </>
                :
                <h2>
                    {props.count}
                </h2>
            }
        </div>
    );
};

export default Tab;