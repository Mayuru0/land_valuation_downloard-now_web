import { Download } from "lucide-react";
import React from "react";

const CTASection = () => {
  const driveDownloadLink =
    "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID";

  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h3 className="text-4xl font-bold mb-4">Download Now</h3>
        <p className="text-xl mb-8 opacity-90">
          Download the Land Valuation app today and experience something new
        </p>

      <a
  href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-green-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto w-fit"
>
  <Download className="w-7 h-7" />
  Download Now
</a>

      </div>
    </section>
  );
};

export default CTASection;
