// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// // import instance from '../../../axios';

// function ProductDetail() {
//     const { id } = useParams();
//     console.log(id);

//     const [product, setProduct] = useState({});

//     useEffect(() => {
//         (async () => {
//             try {
//                 const { data } = await instance.get(`/product/${id}`);
//                 console.log(data);

//                 setProduct(data);
//             } catch (error) {
//                 console.log(error);
//             }
//         })();
//     }, []);

//     return <>Product Detail</>;
// }

// export default ProductDetail;
