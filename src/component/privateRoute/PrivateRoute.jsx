// // PrivateRoute.js
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import * as Yup from 'yup'; // Import Yup để sử dụng
// import {
//     selectUser,
//     selectIsAuthenticated,
// } from '../../redux/user/userReducer';

// // Định nghĩa schema dùng Yup để kiểm tra tính hợp lệ của allowedRoles
// const validationSchema = Yup.object().shape({
//     allowedRoles: Yup.array()
//         .of(Yup.string())
//         .required('Allowed roles are required'),
// });

// const PrivateRoute = ({ children, allowedRoles }) => {
//     const user = useSelector(selectUser);
//     const isAuthenticated = useSelector(selectIsAuthenticated);

//     // Validate allowedRoles với Yup
//     try {
//         validationSchema.validateSync({ allowedRoles });
//     } catch (error) {
//         console.error(error.message);
//         return <Navigate to="/" replace />;
//     }

//     // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
//     if (!isAuthenticated) {
//         return <Navigate to="/sign-in" replace />;
//     }

//     // Kiểm tra nếu role người dùng không nằm trong danh sách được phép
//     if (!allowedRoles.includes(user.role)) {
//         return <Navigate to="/" replace />;
//     }

//     return children;
// };

// export default PrivateRoute;
