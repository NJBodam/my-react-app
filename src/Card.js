import React from 'react'

function Card(props) {
    return (
        <div>
            <div class="grid-item">
                    <div class="card">
                        <img class="card-img" src={props.image} alt="Rome" />
                        <div class="card-content">
                        <h1 class="card-header">{props.title}</h1>
                        <p class="card-text">
                            {props.content}
                        </p>
                        <button class="card-btn">Visit <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Card
