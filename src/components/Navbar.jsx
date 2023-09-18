import traveljournalLogo from '../assets/img/travel-journal-logo.webp'

function Navbar() {
    
    return(
        <nav className="navbar bg-pink d-flex align-items-center justify-content-center">
            <div className="logo-div">
                <img className="logo-img" src={traveljournalLogo}/>
            </div>
            <div className="title-div">
                <span class="title-text text-white">mytraveljournal.</span>
            </div>
        </nav>
    )
}

export default Navbar