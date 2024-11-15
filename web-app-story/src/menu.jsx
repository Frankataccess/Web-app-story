import React from 'react';
import { Link } from 'react-router-dom';
import App from './App.jsx';
import Endings from './endings.jsx';

const Menu = () => {

    document.body.style.margin = '0';
    document.body.style.padding = '0';

    return ( 
        <div 
        style={{ 
            position: 'relative', 
            width: '100vw', 
            height: '100vh' ,
            display: 'flex', 
            justifyContent:'center',
            alignItems:'center',
            backgroundImage: 'url("https://i.imgur.com/GuVp0O6.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}>
        

        <div
        style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        position: 'relative',
        width: '70vw',
        height: '95vh',
        display: "flex",
        flexDirection: "column",
        borderRadius: '25px',
        alignItems: 'center',
        overflow: 'hidden',
        }}
        >
        <div
            style={{
            padding: '3vh',
            display: 'flex',
            flexDirection: 'column',
            width: '60vw',
            gap: '3vh',
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
            height: '20vh',
            width: '100%',
            border: 'none',
            borderRadius: '12.5px',
            color:'white',
            backgroundImage: 'url("https://i.imgur.com/JigIQj9.gif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
        >
        Night out in
        <p
        style={{
        fontSize: '30px',
        color: 'red',
    }}
>
    &nbsp;BRISTOL
</p>
        </div>
        <Link to="/App">
            <button
            style={{
                height: '20vh',
                width: '100%',
                borderRadius: '12.5px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                fontFamily: 'Helvetica',
                fontSize: '24px',
                cursor: 'pointer',
            }}
            >
            Start
            </button>
        </Link>

        <Link to="/Endings">
            <button
            style={{
                height: '20vh',
                width: '100%',
                borderRadius: '12.5px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                fontFamily: 'Helvetica',
                fontSize: '24px',
                cursor: 'pointer',
            }}
            >
            Endings
            </button>
        </Link>

            <button
            onClick={() => window.open("https://github.com/Frankataccess")}
            style={{
                height: '20vh',
                width: '100%',
                borderRadius: '12.5px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                fontFamily: 'Helvetica',
                fontSize: '24px',
                cursor: 'pointer',

            }}
            >
            Github
            </button>
        </div>
        </div>
    </div>
    )
}

export default Menu;
