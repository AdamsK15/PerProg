// import React from 'react';

// function apiTest() {
//     const getData = () => {
//         fetch('data.json'
//             , {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 }
//             }
//         )
//             .then(function (response) {
//                 console.log(response)
//                 return response.json();
//             })
//             .then(function (myJson) {
//                 console.log(myJson);
//                 setData(myJson)
//             });
//     }
//     useEffect(() => {
//         getData()
//     }, [])
// }

// export default apiTest;