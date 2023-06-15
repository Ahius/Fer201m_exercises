import React from "react";


export default function Navigation() {

    return (
        <div>
            <nav>
                <ul>
                    <li><a className="active" href="/">Home</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}