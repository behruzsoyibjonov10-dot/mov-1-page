import { useState } from "react";
import Questions from '../Components/Main/Questions';
import Banner from '../Components/Main/Banner';

const countries = [
  { code: "+998", name: "Uzbekistan", flag: "🇺🇿" },
  { code: "+1", name: "USA", flag: "🇺🇸" },
  { code: "+44", name: "UK", flag: "🇬🇧" },
  { code: "+91", name: "India", flag: "🇮🇳" },
];

const Support = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="bg-black min-h-screen">
      <div className="our px-4 py-10 md:px-15 md:py-20 flex flex-col md:flex-row gap-10 items-start">
        
        <div className="flex-1 md:mt-25 order-1 md:order-1 relative bottom-10">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Welcome to our <br className="hidden md:block" />
            support page!
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            We're here to help you with any problems you may be having with <br className="hidden md:block" />
            our product.
          </p>
          <div className="bg-[#1a1a1a] p-2 rounded-2xl border border-gray-800 inline-block w-full md:w-auto">
            <img
              className="w-full md:w-[400px] rounded-xl"
              src="/img/Sub Container.png"
              alt="Support Illustration"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5 w-full md:mt-[120px] order-2 md:order-2 bg-[#0f0f0f] md:bg-transparent p-6 md:p-0 rounded-2xl border border-gray-800 md:border-none">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label className="text-white mb-2 text-sm">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full p-4 rounded-lg border border-gray-800 bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="text-white mb-2 text-sm">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-full p-4 rounded-lg border border-gray-800 bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label className="text-white mb-2 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-4 rounded-lg border border-gray-800 bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label className="text-white mb-2 text-sm">Phone Number</label>
              <div className="flex items-center gap-2">
                <select
                  value={selectedCountry.code}
                  onChange={(e) =>
                    setSelectedCountry(
                      countries.find((c) => c.code === e.target.value)
                    )
                  }
                  className="bg-[#1a1a1a] text-white p-4 rounded-lg border border-gray-800 cursor-pointer focus:outline-none"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full p-4 rounded-lg border border-gray-800 bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-2 text-sm">Message</label>
            <textarea
              placeholder="Enter your Message..."
              rows={4}
              className="w-full p-4 rounded-lg border border-gray-800 bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-red-600 resize-none"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-2">
            <label className="flex items-center text-gray-400 text-xs md:text-sm gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-red-600" />
              I agree with Terms of Use and Privacy Policy
            </label>
            <button className="w-full md:w-auto bg-red-600 text-white py-4 px-8 rounded-lg hover:bg-red-700 transition font-semibold">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <Questions />
      <div className="mt-10">
        <Banner />
      </div>
    </div>
  );
};

export default Support;