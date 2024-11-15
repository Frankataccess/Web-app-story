import React from 'react';
import { Link } from 'react-router-dom';

const Endings = () => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    return (
        <div
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'url("https://i.imgur.com/GuVp0O6.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    position: 'relative',
                    width: '70vw',
                    height: '95vh',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '25px',
                    alignItems: 'center',
                    justifyContent: 'space-evenly', // Ensures button is not stuck at the bottom
                }}
            >
                <div
                    style={{
                        padding: '1vh',
                        display: 'flex',
                        flexDirection: 'column',
                        width: '60vw',
                        gap: '1vh',
                        fontFamily: 'Helvetica',
                        fontSize: '24px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            height: '10vh',
                            width: '100%',
                            border: '1px solid black',
                            borderRadius: '12.5px',
                            color: 'white',
                            backgroundImage: 'url("https://i.imgur.com/JigIQj9.gif")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundClip: 'content-box',
                        }}
                    >
                        Possible Endings:
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1vh',
                            width: '100%',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                padding: '3vh', // Consistent padding across all boxes
                                borderRadius: '12.5px',
                                fontSize: '24px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                height: '10vh', // Same height for all boxes
                            }}
                        >
                            Good Ending: Arrive home safe
                        </div>

                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                padding: '3vh',
                                borderRadius: '12.5px',
                                fontSize: '24px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                height: '10vh',
                            }}
                        >
                            True Ending: Party the night away
                        </div>

                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                padding: '3vh',
                                borderRadius: '12.5px',
                                fontSize: '24px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                height: '10vh',
                            }}
                        >
                            Bad Ending: Arrested
                        </div>

                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                padding: '3vh',
                                borderRadius: '12.5px',
                                fontSize: '24px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                height: '10vh',
                            }}
                        >
                            Noob Ending: Dead
                        </div>
                    </div>
                </div>

                <Link to="/">
                    <button
                        style={{
                            padding: '15px 30px',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            fontSize: '20px',
                            borderRadius: '12.5px',
                            cursor: 'pointer',
                            alignSelf: 'center',  // Centers the button horizontally
                            marginBottom: '20px',
                        }}
                    >
                        Go Back to Menu
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Endings;
