
function NavBar(){


    return (
        <>
        <nav>
            <h1>Cesar Castro</h1>
             <ul className="nav-btns"> 
                <a 
                href="#homePage"
                onClick={() => handlePageChange('HomePage')}
                className={ currentPage === '' ? '' : ''}
                >Home</a>
                <a 
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={ currentPage === '' ? '' : ''}
                >Portfolio</a>
                <a 
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={ currentPage === '' ? '' : ''}
                >Contact</a>
                <a 
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={ currentPage === '' ? '' : ''}
                ></a>
             </ul>
        </nav>
        </>
    )
}

export default NavBar;