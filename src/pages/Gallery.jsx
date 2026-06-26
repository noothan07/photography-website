import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryData = {
  
  Halfsaree: [
  'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1782448573/fxjerzc7vodhlrycuxn8.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782447189/zjab7ftmrzmcdxxqxvil.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1782447918/cba3il2kz0fussno67bo.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1782447920/socjmv8phksaezgs37sx.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1782447923/a8xfjioxzocj9v7ag1af.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1782447918/dqewckirs2jncuayirwp.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1782447919/jkfmv3rfmguzwwu6mk1v.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1782447923/ibsc1oc5wp4bygij7tym.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1782447921/xgxkkhw5ibewwhvber8l.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1762262945/y7qbdddrlqukpamrqhyu.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1782448572/syjniusx2zbivei1o3j3.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1762262945/hbxmzl3akhyfx1zsxmbr.jpg',
  
  ],
  
  Wedding: [
  'https://res.cloudinary.com/dtosuksvd/image/upload/c_fill,w_1000,h_1000,q_80/v1762262945/y7m1yzopfjlwy2uparxb.png',
  'https://res.cloudinary.com/dtosuksvd/image/upload/c_fill,w_1000,h_900,q_80/v1762262945/er2dhkxlsdkbyyrk5d0g.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/c_fill,w_1000,h_1500,q_80/v1762262945/dt8vvtfr0avwwteainfb.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/c_fill,w_1000,h_1500,q_80/v1762262945/y7qbdddrlqukpamrqhyu.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/c_fill,w_1000,h_1500,q_80/v1762262945/hbxmzl3akhyfx1zsxmbr.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/c_fill,w_1000,h_1000,q_80/v1762262945/y7m1yzopfjlwy2uparxb.png',
  'https://res.cloudinary.com/dtosuksvd/image/upload/c_fill,w_1000,h_900,q_80/v1762262945/er2dhkxlsdkbyyrk5d0g.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/c_fill,w_1000,h_1500,q_80/v1762262945/dt8vvtfr0avwwteainfb.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/c_fill,w_1000,h_1500,q_80/v1762262945/y7qbdddrlqukpamrqhyu.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/c_fill,w_1000,h_1500,q_80/v1762262945/hbxmzl3akhyfx1zsxmbr.jpg',
  
  ],
  
  Portraits: [
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782449661/mfkztruirf2wc0zy7cfa.jpg',
   'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1782447918/cba3il2kz0fussno67bo.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782449660/jzdmwsb9wcstt4qctbfh.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1782447923/a8xfjioxzocj9v7ag1af.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782449660/jbm1nefr2kqgupopopoi.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782449667/ttvu1judp8gmhowtixb6.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782449666/yjkdxsg6a83bfxzzbqoz.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782449662/ebjm1km0vcyeyx5o3dcm.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782449659/su9xtq2jntojnp33lbzx.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782449663/ua6yltafauskaaptvj5k.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782449662/wast9owe8sqsgyxygdhq.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/q_50/v1782448572/syjniusx2zbivei1o3j3.jpg',
  
  ],
  Birthdays: [
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782451981/friscgovuiylkhuu3doe.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782451980/fbdlhywxdavpzikiykxq.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782451981/rjvlmdl5csfnufxfipar.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/c_fill,w_1000,h_1500,q_80/v1762262945/er2dhkxlsdkbyyrk5d0g.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782451981/nm2kkmscj0zvvhgrad2l.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782451983/zlbwhwtp3clxgvbbbcvw.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782451983/lzj06b5dawuornjkleqv.jpg',
  'https://res.cloudinary.com/dtosuksvd/image/upload/v1782451983/a35wxgtmgbupvde0eiij.jpg',

  
  ],
};

export default function Gallery() {
  const categories = Object.keys(galleryData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Fix potential initial blank issue by scrolling to top & forcing layout load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="gallery"
      className="py-20 px-5 pt-30 md:pt-30 md:px-20 transition-colors duration-300"
    >
  
      {/* ✨ Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-8 poppins"
      >
        GALLERY
      </motion.h2>

      {/* 🟡 Category Buttons */}
      <motion.div className="flex flex-wrap justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-yellow-400 text-black shadow-lg scale-105"
                : "bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-300 hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* 🖼️ Masonry Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {galleryData[activeCategory].map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`${activeCategory} ${index}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] scale-105 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0  backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center text-white font-semibold text-lg roboto">
                View
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* 🔍 Modal Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-[3px]"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Preview"
              className="max-w-[90%] max-h-[80vh] rounded-xl shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
