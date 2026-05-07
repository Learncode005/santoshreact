// import React from 'react';
// import ReactDOM from 'react-dom';

// const Customers = () => {
//     return (
//         <div>
//             <h1>Welcome to the Customers Page</h1>
//             <p>This is where customer-related information will be displayed.</p>
//         </div>
//     );
// };

// export default Customers;
// // ReactDOM.render(<Customers />, document.getElementById('root'));

// ...existing code...
import React from 'react';

const Customers = () => {
    const containerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: '#fff',
        borderBottom: '1px solid #e0e0e0',
        padding: '12px 16px',
        zIndex: 1000,
        boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
    };

    // adjust this height if you change padding / font-size of header
    const spacerStyle = { height: 56 }; 

    return (
        <>
            <div style={containerStyle}>
                <h1>Welcome to the Customers Page</h1>
                <p>This is where customer-related information will be displayed.</p>
            </div>
            <div style={spacerStyle} aria-hidden="true" />
        </>
    );
};

export default Customers;
// ...existing code...