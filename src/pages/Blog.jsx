
 import React, { useEffect, useState } from 'react';
 import {
  Play,
   ArrowRight,
  Mail,
  Phone,
 MapPin,
   Globe,
   Calendar,
   Clock,
   ChevronRight,
  PlayCircle
} from 'lucide-react';
 import Blogload from '../components/Blogload';
 import { Link } from 'react-router';

// // --- MOCK DATA ---


 const galleryImages = [
   "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
   "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
   "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
 ];

 export default function Blog() {
 const [isLoaded, setIsLoaded] = useState(false);
const [blogPosts, setBlogPosts] = useState([])
  const handlescroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
   };
 const formatDate = (isoString) => {
   const options = { year: 'numeric', month: 'short', day: 'numeric' };
 return new Date(isoString).toLocaleDateString('en-US', options);
 };

  useEffect(() => {
     const FetchBlogData = async () => {
         setIsLoaded(true)
           const url = `${import.meta.env.VITE_BACKEND_URL}/api/v6/blogMsm/fetch-all-blog`;
       const response = await fetch(url, {
       method: 'GET',
      headers: {
           "Content-Type": "application/json"
     },
      });
     const data = await response.json();
       setBlogPosts(data.blogdata);
       setIsLoaded(false)
    }
     FetchBlogData();
  }, [])


  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans selection:bg-blue-200 selection:text-blue-900">
      {/* --- INLINE STYLES FOR EXACT MATCHING & ANIMATIONS --- */}
      <style dangerouslySetInnerHTML={{
       __html: `
       .dot-bg {
         background-color: #f8fafc;
          background-image: radial-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px);
          background-size: 32px 32px;
        }
         @keyframes fadeInUp {
         from { opacity: 0; transform: translateY(30px); }
           to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          opacity: 0;
           animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
         .delay-100 { animation-delay: 100ms; }
         .delay-200 { animation-delay: 200ms; }
         .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
       
       .card-glow:hover {
         box-shadow: 0 0 30px rgba(37, 99, 235, 0.1);
           border-color: rgba(37, 99, 235, 0.3);
        }
      `}} />

       {/* Main Wrapper with Dot Background */}
       <div className="dot-bg min-h-screen pb-20">


       {/* --- FEATURED VIDEO SECTION --- */}

         {/* --- LATEST BLOG POSTS --- */}

     <section className="max-w-7xl mx-auto px-6 mb-32 ">
           <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4 flex-1">
               <h2 className="text-3xl font-bold text-slate-900 tracking-tight  pt-[77px]">Latest <span className="text-blue-600">Blog</span></h2>
               <div className="h-px flex-1 bg-linear-to-r from-blue-200 to-transparent max-w-md"></div>
             </div>

           </div>

           {isLoaded ? <Blogload /> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {blogPosts.map((post) => (
               <article key={post._id} className="group bg-white border border-blue-500 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.15)] flex flex-col">
                 {/* Image Container */}
                 <div className="relative h-56 overflow-hidden border border-blue-500">

                  <img
                    src={post.blog_image_url}
                    alt={post.blog_title}
                    className="w-full h-full  transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                   />
                   <div className="absolute inset-0 bg-linear-to-t from-white to-transparent opacity-80"></div>

                 </div>

                 {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                   <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                     <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {formatDate(post.createdAt)}</span>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.blog_title}
                   </h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                     {post.blog_description}
                  </p>
                   <Link to={`/blog/${post._id}`} onClick={handlescroll} className="pt-4 border-t border-blue-50 flex items-center text-blue-600 text-sm font-semibold mt-auto">
                     Read Article <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                   </Link>
                </div>
               </article>
             ))}
          </div>}
         </section>
        
      </div>
  </div>
   );
 }
