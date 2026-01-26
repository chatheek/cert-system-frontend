import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import heroImage from "../../assets/images/hero-image.png";

export default function Homepage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <div id="top">
      <Navbar />

      <header className="py-8 px-4 md:py-10 lg:py-20">
        <div className="max-w-[1248px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="font-bold mb-4 md:mb-6 text-center">
              <span className="text-black text-4xl md:text-6xl lg:text-[75px] leading-tight">
                Certi
              </span>
              <span className="text-(--color-primary-violet) text-4xl md:text-6xl lg:text-[75px] leading-tight">
                Chain
              </span>
            </h1>
            <h3 className="font-bold text-xl md:text-2xl lg:text-[30px] mb-4 md:mb-6 text-gray-800 text-center">
              Blockchain-Based Certificate Verification
            </h3>

            <p className="text-base md:text-lg lg:text-[20px] text-center mb-6 md:mb-8 text-gray-700 leading-relaxed">
              CertiChain enables secure certificate verification using
              blockchain technology. Certificates are permanently recorded on
              the blockchain, preventing forgery and allowing instant
              verification without relying on centralized authorities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                id="verifyCertificate"
                className="bg-white text-(--color-primary-violet) border-2 border-(--color-primary-violet) rounded-lg px-6 py-3 text-[18px] font-bold transition-shadow hover:shadow-lg"
              >
                Verify Certificate
              </button>
              <button
                id="howItWorks"
                className="bg-(--color-primary-violet) text-white border-2 border-(--color-primary-violet) rounded-lg px-6 py-3 text-[18px] font-bold transition-shadow hover:shadow-lg"
              >
                How it Works
              </button>
            </div>
          </div>

          <div className="shrink-0">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full max-w-146 h-auto aspect-584/556 object-cover rounded-lg lg:w-146"
            />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-12 px-4 md:py-16 lg:py-20">
        <div className="max-w-[1248px] mx-auto bg-[#F3E8FF] rounded-3xl p-6 md:p-10 lg:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-4">
            About CertiChain
          </h2>
          <p className="text-center text-gray-700 text-lg md:text-xl mb-12 max-w-4xl mx-auto">
            Redefining certificate issuance and verification using blockchain technology
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Card - Purple Gradient */}
            <div className="bg-gradient-primary rounded-3xl p-8 md:p-10 lg:p-12 flex items-center justify-center">
              <p className="text-white text-center text-base md:text-lg lg:text-xl leading-relaxed">
                CertiChain is a blockchain-powered platform that helps institutions issue tamper-proof digital certificates and enables students to securely store, share, and verify their academic achievements in one place.
              </p>
            </div>

            {/* Right Card - Features List */}
            <div className="bg-white border-2 border-gray-300 rounded-3xl p-8 md:p-10 lg:p-12">
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">🔐</span>
                  <span className="text-base md:text-lg font-semibold text-black">
                    Built on blockchain for trust & immutability
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">⚡</span>
                  <span className="text-base md:text-lg font-semibold text-black">
                    Bulk certificate issuance using relay technology
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">🎓</span>
                  <span className="text-base md:text-lg font-semibold text-black">
                    Student portfolios with verified credentials
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">🌍</span>
                  <span className="text-base md:text-lg font-semibold text-black">
                    Instantly verifiable anywhere, anytime
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">📋</span>
                  <span className="text-base md:text-lg font-semibold text-black">
                    Standardized certificate templates for consistency
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-12 px-4 md:py-16 lg:py-20 bg-white">
        <div className="max-w-[1248px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-6">How it works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl border border-(--color-primary-violet) p-6 md:p-8">
              <ol className="space-y-6">
                <li className="flex items-start gap-3">
                  <span className="text-(--color-primary-violet) font-bold">1</span>
                  <div>
                    <h4 className="font-semibold">Unique ID for each Certificate</h4>
                    <p className="text-gray-700">Each certificate is assigned a unique ID and securely recorded on the Polygon blockchain.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-(--color-primary-violet) font-bold">2</span>
                  <div>
                    <h4 className="font-semibold">Data stored on the blockchain</h4>
                    <p className="text-gray-700">Institutions issue certificates individually or in bulk using CSV uploads for scalability.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-(--color-primary-violet) font-bold">3</span>
                  <div>
                    <h4 className="font-semibold">Verify with certificate ID</h4>
                    <p className="text-gray-700">Anyone can verify instantly using the certificate ID from anywhere, anytime.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-130 h-70 md:h-85 bg-[#F3E8FF] rounded-3xl border border-(--color-primary-violet) flex items-center justify-center text-gray-600">
                Illustration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Start Section */}
      <section id="get-start" className="py-12 px-4 md:py-16 lg:py-20">
        <div className="max-w-[1248px] mx-auto bg-gradient-primary rounded-3xl p-6 md:p-10 lg:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Get Start</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/95 rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Student Account</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Sign up using your email address.</li>
                <li>Verify certificates using a unique certificate code.</li>
                <li>View and manage all your verified certificates in one place.</li>
                <li>Get personalized career path suggestions based on results.</li>
              </ul>
              <div className="mt-6">
                <button className="bg-white text-(--color-primary-violet) border-2 border-(--color-primary-violet) rounded-lg px-5 py-2.5 text-[18px] font-bold transition-shadow hover:shadow-lg">Create Student Account</button>
              </div>
            </div>
            <div className="bg-white/95 rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Institute Account</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Register and verify your institution.</li>
                <li>Generate certificates using trusted templates.</li>
                <li>Issue certificates individually or in bulk using CSV uploads.</li>
                <li>Securely record certificate proofs on the blockchain.</li>
                <li>Manage and track all issued certificates.</li>
              </ul>
              <div className="mt-6">
                <button className="bg-white text-(--color-primary-violet) border-2 border-(--color-primary-violet) rounded-lg px-5 py-2.5 text-[18px] font-bold transition-shadow hover:shadow-lg">Create Institute Account</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Certificate Generation Section */}
      <section id="auto-generation" className="py-12 px-4 md:py-16 lg:py-20 bg-white">
        <div className="max-w-[1248px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-8">Automated Certificate Generation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl border border-(--color-primary-violet) p-6 md:p-8 flex items-center justify-center">
              <div className="w-full max-w-130 h-70 md:h-85 bg-[#F3E8FF] rounded-2xl flex items-center justify-center text-gray-600">Certificate Preview</div>
            </div>
            <div className="bg-white rounded-3xl border border-(--color-primary-violet) p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed">
                Institutions can issue certificates by uploading a simple CSV file containing student details such as name, course title, issue date, institute logo, and authorized signature. The platform automatically applies this data to secure, predefined certificate templates, generating standardized and verifiable certificates at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
