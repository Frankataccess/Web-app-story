const Menu = () => {

    document.body.style.margin = '0'; // Reset body margin
    document.body.style.padding = '0'; // Reset body padding


    return ( 
        <div 
        style={{ 
            position: 'relative', 
            width: '100vw', 
            height: '100vh' ,
            display: 'flex', 
            justifyContent:'center',
            alignItems:'center'}}>
        <picture>
            <source srcSet="https://i.imgur.com/rkr1dmk.jpg"  />
            <img
            style={{
                position: 'absolute',
                top: -1,
                left: -1,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                
                
            }}
            />
        </picture>

            <div
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                position: 'relative',
                width: '70vw',
                height: '95vh',
                display: "flex",
                flexDirection:"column",
                borderRadius: '25px',
                alignItems:'center'
            }}
            ><div style={{
                display:'flex',
                flexDirection:'column',
                borderRadius:'25px',
                height:'20vh',
                width:'60vw',
                gap:'0.2vh',
            }}>
                <div >Title</div>
                    <button style={{ height: '50px', width: '100%' }}>Start</button>
                    <button style={{ height: '50px', width: '100%' }}>Settings</button>
                    <button style={{ height: '50px', width: '100%' }}>Github</button>
                </div>
            </div>
            
        </div>


    )
}


export default Menu;