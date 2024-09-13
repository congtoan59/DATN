import NavBar from "./Navbar/Navbar";

function DefaultLayout( { children}) {
    return ( 
        <>
           <div>
               <NavBar/>
        
            </div>
            <div>
                {children}
            </div>
        </>
     );
}

export default DefaultLayout;