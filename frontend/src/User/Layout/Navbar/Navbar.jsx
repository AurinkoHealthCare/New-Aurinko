import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const reloadPage = (e, url) => {
    e.preventDefault();
    window.location.href = url;
  };

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(isDropdownOpen === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed w-full z-50 top-0 transition-all duration-300 bg-white text-black shadow-md`}>
      <div className="container mx-auto flex items-center justify-between py-4 lg:py-1 px-6">
        <div className="hidden lg:flex items-center ">
          <Link to="/" onClick={(e) => reloadPage(e, "/")}>
            <img src="/Assets/Aurinko Logo.png" alt="Aurinko Logo" className="h-16 w-auto cursor-pointer mb-[2%]" />
          </Link>
        </div>
        <nav className="hidden lg:flex space-x-6 relative">
          <Link to="/" className="py-2 px-4 hover:underline hover:underline-offset-8 rounded" onClick={(e) => reloadPage(e, "/")}>
            Home
          </Link>

          <div className="relative group">
            <button className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
              About Us
            </button>
            <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/about-us")}>Overview</Link>
              <Link to="/vision-mission" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/vision-mission")}>Vision & Mission</Link>
              <Link to="/manufacturing-facility" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/manufacturing-facility")}>Manufacturing Facility</Link>
              <Link to="/research-development" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/research-development")}>Research & Development</Link>
              <Link to="/export" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/export")}>Export</Link>
              <Link to="/certificates" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/certificates")}>Certificates</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
              Human
            </button>
            <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="relative group/nano">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Nano-biotechnology Compounds
                </button>
                <div className="absolute left-full top-0 bg-white shadow-lg rounded w-48 hidden group-hover/nano:block transition-all duration-200">
                  <Link to="/h-nanophosphosome" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/h-nanophosphosome"); }}>
                    Nanophosphosomes®
                  </Link>
                  <Link to="/h-neunamin" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/h-neunamin"); }}>
                    Neuna®mins
                  </Link>
                  <Link to="/h-neuna-particles" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/h-neuna-particles"); }}>
                    Neuna®particles
                  </Link>
                </div>
              </div>
              <Link to="/health-supplements" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/health-supplements")}>Health Supplements</Link>
              <Link to="/personal-care" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/personal-care")}>Personal Care</Link>
              <Link to="/yeppuen" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/yeppuen")}>Yeppuen</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
              Veterinary
            </button>
            <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="relative group/nano">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Nano-biotechnology Compounds
                </button>
                <div className="absolute left-full top-0 bg-white shadow-lg rounded w-48 hidden group-hover/nano:block transition-all duration-200">
                  <Link to="/v-nanophosphosome" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/v-nanophosphosome"); }}>
                    Nanophosphosomes®
                  </Link>
                  <Link to="/v-neunamin" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/v-neunamin"); }}>
                    Neuna®mins
                  </Link>
                  <Link to="/v-neuna-particles" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/v-neuna-particles"); }}>
                    Neuna®particles
                  </Link>
                </div>
              </div>
              <Link to="/livestock" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/livestock")}>Livestock</Link>
              <Link to="/poultry" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/poultry")}>Poultry</Link>
              <Link to="/aqua" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/aqua")}>Aqua</Link>
              <Link to="/swine" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/swine")}>Swine</Link>
              <Link to="/equine" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/equine")}>Equine</Link>
              <Link to="/pet" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/pet")}>Pet</Link>
              <Link to="/feed-grain" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/feed-grain")}>Feed & Grain</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
              Agriculture
            </button>
            <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/NanoFertilizers" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/NanoFertilizers")}>Nano Fertilizers</Link>
              <Link to="/SoilMinerals" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/SoilMinerals")}>Soil Minerals</Link>
            </div>
          </div>

          <Link to="/ingredients" className="py-2 px-4 hover:underline hover:underline-offset-8 rounded" onClick={(e) => reloadPage(e, "/ingredients")}>
            Ingredients
          </Link>

          <div className="relative group">
            <button className="py-2 px-4 hover:underline hover:underline-offset-8 rounded">
              Media
            </button>
            <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/reports" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/reports")}>Reports</Link>
              <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/gallery")}>Gallery</Link>
              <Link to="/productbrochures" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/productbrochures")}>Brochures</Link>
              <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/blog")}>Blogs</Link>
              <Link to="/articles" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => reloadPage(e, "/articles")}>Articles</Link>
            </div>
          </div>

          <Link to="/contact-us" className="py-2 px-4 hover:underline hover:underline-offset-8 rounded" onClick={(e) => reloadPage(e, "/contact-us")}>
            Contact Us
          </Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-black hover:text-gray-700 relative ">
            <Link to="https://aurinkohealthcare.in" onClick={(e) => reloadPage(e, "https://aurinkohealthcare.in")}> <i className="fas fa-shopping-bag text-2xl"></i></Link>
          </button>
        </div>

        <div className="lg:hidden flex items-center w-full justify-between">

          <button className="text-black hover:text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
            <i className="fas fa-bars text-xl"></i>
          </button>

          <div className="absolute left-1/2 transform -translate-x-1/2 mt-[-6%]">
            <Link to="/" onClick={(e) => reloadPage(e, "/")}>
              <img src="/Assets/Aurinko Logo.png" alt="Aurinko Logo" className="h-16 w-auto cursor-pointer" />
            </Link>
          </div>

          <button className="text-black hover:text-gray-700 relative mr-[7%]">
            <Link to="https://aurinkohealthcare.in" onClick={(e) => reloadPage(e, "https://aurinkohealthcare.in")}><i className="fas fa-shopping-bag text-xl"></i></Link>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-13 left-0 w-full bg-white/30 backdrop-blur-lg shadow-lg px-4 pb-4 overflow-auto" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
          <Link to="/" className="block py-2 text-gray-800 hover:bg-gray-200" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/"); }}>Home</Link>
          <div className="mt-2">
            <button onClick={() => toggleDropdown("about")} className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
              About Us
            </button>
            <div className={`pl-4 ${isDropdownOpen === "about" ? 'block' : 'hidden'}`}>
              <Link to="/about-us" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/about-us"); }}>
                Overview
              </Link>
              <Link to="/vision-mission" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/vision-mission"); }}>
                Vision & Mission
              </Link>
              <Link to="/manufacturing-facility" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/manufacturing-facility"); }}>
                Manufacturing Facility
              </Link>
              <Link to="/research-development" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/research-development"); }}>
                Research & Development
              </Link>
              <Link to="/export" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/export"); }}>
                Export
              </Link>
              <Link to="/certificates" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/certificates"); }}>
                Certificates
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <button onClick={() => toggleDropdown("human")} className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
              Human
            </button>
            <div className={`pl-4 ${isDropdownOpen === "human" ? 'block' : 'hidden'}`}>
              <div className="relative group/nano">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Nano-biotechnology Compounds
                </button>
                <div className="absolute right-0 top-0 bg-white shadow-lg rounded w-48 hidden group-hover/nano:block transition-all duration-200">
                  <Link to="/h-nanophosphosome" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/h-nanophosphosome"); }}>
                    Nanophosphosomes®
                  </Link>
                  <Link to="/h-neunamin" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/h-neunamin"); }}>
                    Neuna®mins
                  </Link>
                  <Link to="/h-neuna-particles" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/h-neuna-particles"); }}>
                    Neuna®particles
                  </Link>
                </div>
              </div>
              <Link to="/health-supplements" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/health-supplements"); }}>
                Health Supplements
              </Link>
              <Link to="/personal-care" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/personal-care"); }}>
                Personal Care
              </Link>
              <Link to="/yeppuen" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/yeppuen"); }}>
                Yeppuen
              </Link>
            </div>
          </div>

          <div className="mt-2">
            <button onClick={() => toggleDropdown("veterinary")} className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
              Veterinary
            </button>
            <div className={`pl-4 ${isDropdownOpen === "veterinary" ? 'block' : 'hidden'}`}>
              <div className="relative group/nano">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Nano-biotechnology Compounds
                </button>
                <div className="absolute right-0 top-0 bg-white shadow-lg rounded w-48 hidden group-hover/nano:block transition-all duration-200">
                  <Link to="/v-nanophosphosome" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/v-nanophosphosome"); }}>
                    Nanophosphosomes®
                  </Link>
                  <Link to="/v-neunamin" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/v-neunamin"); }}>
                    Neuna®mins
                  </Link>
                  <Link to="/v-neuna-particles" className="block px-4 py-2 hover:bg-gray-100" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/v-neuna-particles"); }}>
                    Neuna®particles
                  </Link>
                </div>
              </div>
              <Link to="/livestock" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/livestock"); }}>
                Livestock
              </Link>
              <Link to="/poultry" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/poultry"); }}>
                Poultry
              </Link>
              <Link to="/aqua" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/aqua"); }}>
                Aqua
              </Link>
              <Link to="/swine" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/swine"); }}>
                Swine
              </Link>
              <Link to="/equine" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/equine"); }}>
                Equine
              </Link>
              <Link to="/pet" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/pet"); }}>
                Pet
              </Link>
              <Link to="/feed-grain" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/feed-grain"); }}>
                Feed & Grain
              </Link>
            </div>
          </div>

          <div className="mt-2">
            <button onClick={() => toggleDropdown("agriculture")} className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
              Agriculture
            </button>
            <div className={`pl-4 ${isDropdownOpen === "agriculture" ? 'block' : 'hidden'}`}>
              <Link to="/NanoFertilizers" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/NanoFertilizers"); }}>
                Nano Fertilizers
              </Link>
              <Link to="/SoilMinerals" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/SoilMinerals"); }}>
                Soil Minerals
              </Link>
            </div>
          </div>

          <Link to="/ingredients" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/ingredients"); }}>
            Ingredients
          </Link>

          <div className="mt-2">
            <button onClick={() => toggleDropdown("media")} className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
              Media
            </button>
            <div className={`pl-4 ${isDropdownOpen === "media" ? 'block' : 'hidden'}`}>
              <Link to="/reports" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/reports"); }}>
                Reports
              </Link>
              <Link to="/gallery" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/gallery"); }}>
                Gallery
              </Link>
              <Link to="/productbrochures" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/productbrochures"); }}>
                Brochures
              </Link>
              <Link to="/blog" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/blog"); }}>
                Blogs
              </Link>
              <Link to="/articles" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/articles"); }}>
                Articles
              </Link>
            </div>
          </div>

          <Link to="/contact-us" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={(e) => { closeMobileMenu(); reloadPage(e, "/contact-us"); }}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
