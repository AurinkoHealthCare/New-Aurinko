import { Routes, Route } from 'react-router-dom';
import User from './User/User';
import Admin from './Admin/admin';

// User Pages
import Home from './User/Pages/Home/Home';
import ContactUs from "./User/Pages/contact/contact";

// About Us Pages
import About from "./User/Pages/About us/about";
import VisionMission from "./User/Pages/About us/vision&mission";
import ManufacturingFacility from "./User/Pages/About us/manufacturing-facility";
import ResearchDevelopment from "./User/Pages/About us/ResearchDevelopment";
import Export from "./User/Pages/About us/Export";
import Certificates from "./User/Pages/About us/Certificates";

// Human Product Pages
import Healthsupplements from "./User/Pages/Human/Health-supplements";
import Nanophosphosome from './User/Pages/Human/Nano-biotechnology Compounds/H-Nanophosphosomes';
import Neunamin from './User/Pages/Human/Nano-biotechnology Compounds/H-Neunamin';
import Neunaparticles from './User/Pages/Human/Nano-biotechnology Compounds/H-Neunaparticles';
import Persnolcare from "./User/Pages/Human/Persnol care";
import Yeppuen from "./User/Pages/Human/Yeppuen";

// Veterinary Pages
import Livestock from "./User/Pages/Veterinary/Livestock";
import Poultry from "./User/Pages/Veterinary/Poultry";
import Aqua from "./User/Pages/Veterinary/Aqua";
import Swine from "./User/Pages/Veterinary/Swine";
import Pet from "./User/Pages/Veterinary/Pet";
import Equines from "./User/Pages/Veterinary/Equines";
import FeedGrain from "./User/Pages/Veterinary/Feed & Grain";
import VNanophosphosome from './User/Pages/Veterinary/Nano-biotechnology Compounds/V-Nanophosphosomes';
import VNeunamin from './User/Pages/Veterinary/Nano-biotechnology Compounds/V-Neunamin';
import VNeunaparticles from './User/Pages/Veterinary/Nano-biotechnology Compounds/V-Neunaparticles';

// Agriculture Pages
import NanoFertilizers from './User/Pages/Agriculture/NanoFertilizers';
import SoilMinerals from './User/Pages/Agriculture/SoilMinerals';

// Media Pages
import Ingredients from "./User/Pages/Media/Ingredients";
import Reports from "./User/Pages/Media/Report";
import Articles from "./User/Pages/Media/Articles";
import ProductBrochures from "./User/Pages/Media/ProductBrochures";
import Blog from "./User/Pages/Media/Blog";
import Gallery from './User/Pages/Media/Gallery';
import PhotoGallery from './User/Components/Gallery/PhotoGallery';
import VideoGallery from './User/Components/Gallery/VideoGallery';

// Blog Components
import Blog1 from "./User/Components/Blog/blog1";
import Blog2 from "./User/Components/Blog/blog2";

// Banner Data
import Nanophosphome from "./User/Data/banner_data/Nanophosphome";
import Neuna_particles from "./User/Data/banner_data/neuna-particle";
import Nunamin from "./User/Data/banner_data/nunamin";
import Auribery_plus from "./User/Data/banner_data/auribery-plus";
import Reintoni from "./User/Data/banner_data/reintoni";
import Navbar from './Admin/Dashboard';
import Dashboard from './Admin/Dashboard';
import PrivateRoute from '../private/privaterouts';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<User />}>

          {/* Home & Banner */}
          <Route path="/" element={<Home />} />
          <Route path="/nanophosphosom" element={<Nanophosphome />} />
          <Route path="/neuna-particle" element={<Neuna_particles />} />
          <Route path="/nunamin" element={<Nunamin />} />
          <Route path="/auribery-plus" element={<Auribery_plus />} />
          <Route path="/reintoni" element={<Reintoni />} />

          {/* About Us */}
          <Route path="/about-us" element={<About />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/manufacturing-facility" element={<ManufacturingFacility />} />
          <Route path="/research-development" element={<ResearchDevelopment />} />
          <Route path="/export" element={<Export />} />
          <Route path="/certificates" element={<Certificates />} />

          {/* Human */}
          <Route path="/health-supplements" element={<Healthsupplements />} />
          <Route path="/h-nanophosphosome" element={<Nanophosphosome />} />
          <Route path="/h-neunamin" element={<Neunamin />} />
          <Route path="/h-neuna-particles" element={<Neunaparticles />} />
          <Route path="/personal-care" element={<Persnolcare />} />
          <Route path="/yeppuen" element={<Yeppuen />} />

          {/* Veterinary */}
          <Route path="/livestock" element={<Livestock />} />
          <Route path="/poultry" element={<Poultry />} />
          <Route path="/aqua" element={<Aqua />} />
          <Route path="/swine" element={<Swine />} />
          <Route path="/equine" element={<Equines />} />
          <Route path="/pet" element={<Pet />} />
          <Route path="/feed-grain" element={<FeedGrain />} />
          <Route path="/v-nanophosphosome" element={<VNanophosphosome />} />
          <Route path="/v-neunamin" element={<VNeunamin />} />
          <Route path="/v-neuna-particles" element={<VNeunaparticles />} />

          {/* Agriculture */}
          <Route path="/NanoFertilizers" element={<NanoFertilizers />} />
          <Route path="/SoilMinerals" element={<SoilMinerals />} />

          {/* Media */}
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/photos" element={<PhotoGallery />} />
          <Route path="/videos" element={<VideoGallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blog1" element={<Blog1 />} />
          <Route path="/blog/blog2" element={<Blog2 />} />
          <Route path="/productbrochures" element={<ProductBrochures />} />
          <Route path="/articles" element={<Articles />} />

          {/* Contact */}
          <Route path="/contact-us" element={<ContactUs />} />

        </Route>

        {/* Admin */}
        <Route path="/admin" element={<Admin />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
         <Route
    path="/dashboard"
    element={
      <PrivateRoute
         allowedRoles={["admin"]}>
        <Dashboard />
      </PrivateRoute>
    }
  />
      </Routes>
    </div>
  );
}

export default App;
