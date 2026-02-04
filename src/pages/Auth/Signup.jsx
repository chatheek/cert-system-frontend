import { useState } from 'react'
import backgroundImage from '../../assets/images/background.png'
import studentImage from '../../assets/images/hero-image.png'
import instituteImage from '../../assets/images/how-it-works.png'

export default function Signup() {
  const [userType, setUserType] = useState('student')
  const [formData, setFormData] = useState({
    // Student fields
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Institute fields
    institutionName: '',
    walletAddress: '',
    verifiedDocuments: null,
    instituteLogo: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e, fieldName) => {
    setFormData(prev => ({ ...prev, [fieldName]: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', userType, formData)
  }

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'repeat' }} className="min-h-screen bg-gray-50">
      {/* Navbar placeholder */}
      <nav className="bg-gradient-primary px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">CertiChain</h1>
          <div className="flex gap-3">
            <a href="/login" className="text-white hover:opacity-90 font-medium">Log In</a>
            <button className="bg-white text-gray-800 rounded-lg px-4 py-2 font-semibold hover:shadow-md">
              Verify
            </button>
          </div>
        </div>
      </nav>

      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-6xl">
          {/* Role Toggle */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-4 bg-gray-200 rounded-lg p-1.5">
              <button
                onClick={() => setUserType('student')}
                className={`px-6 py-2.5 rounded font-semibold transition-all ${
                  userType === 'student'
                    ? 'bg-gradient-primary text-white shadow-md'
                    : 'bg-transparent text-gray-700 hover:text-gray-900'
                }`}
              >
                Student
              </button>
              <button
                onClick={() => setUserType('institute')}
                className={`px-6 py-2.5 rounded font-semibold transition-all ${
                  userType === 'institute'
                    ? 'bg-gradient-primary text-white shadow-md'
                    : 'bg-transparent text-gray-700 hover:text-gray-900'
                }`}
              >
                Institute
              </button>
            </div>
          </div>

          {/* Student Signup Form */}
          {userType === 'student' && (
            <div className="flex gap-8 lg:gap-12 items-center">
              {/* Left Side - Form */}
              <div className="flex-1">
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="col-span-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="col-span-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <input
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    value={formData.userName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm mb-4 focus:outline-none focus:border-purple-500"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm mb-4 focus:outline-none focus:border-purple-500"
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm mb-4 focus:outline-none focus:border-purple-500"
                  />

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm mb-6 focus:outline-none focus:border-purple-500"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-primary text-white rounded-lg px-6 py-3 font-semibold hover:opacity-90 transition-opacity mb-4"
                  >
                    Register
                  </button>

                  <div className="text-center text-sm">
                    <span className="text-gray-600">Already a member? </span>
                    <a href="/login" className="text-purple-600 hover:underline font-semibold">
                      Login
                    </a>
                  </div>
                </form>
              </div>

              {/* Right Side - Image */}
              <div className="hidden lg:flex flex-1 justify-center">
                <div className="bg-purple-100 rounded-3xl p-8 w-full max-w-sm flex items-center justify-center min-h-96">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-black mb-2">
                      certi<span className="text-purple-600">chain</span>
                    </h2>
                    <p className="text-gray-700 font-semibold mb-6">New Here?</p>
                    <p className="text-gray-600 text-sm mb-8">Join now and unlock your student dashboard.</p>
                    <img src={studentImage} alt="Student" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Institute Signup Form */}
          {userType === 'institute' && (
            <div className="flex gap-8 lg:gap-12 items-center">
              {/* Left Side - Form */}
              <div className="flex-1">
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg">
                  <input
                    type="text"
                    name="institutionName"
                    placeholder="Institution Name"
                    value={formData.institutionName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm mb-4 focus:outline-none focus:border-purple-500"
                  />

                  <input
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    value={formData.userName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm mb-4 focus:outline-none focus:border-purple-500"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Official Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm mb-4 focus:outline-none focus:border-purple-500"
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm mb-4 focus:outline-none focus:border-purple-500"
                  />

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm mb-4 focus:outline-none focus:border-purple-500"
                  />

                  <input
                    type="text"
                    name="walletAddress"
                    placeholder="Wallet Address"
                    value={formData.walletAddress}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm mb-4 focus:outline-none focus:border-purple-500"
                  />

                  <label className="block mb-4">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, 'instituteLogo')}
                      className="hidden"
                      id="instituteLogo"
                    />
                    <label htmlFor="instituteLogo" className="w-full border border-blue-500 rounded-lg px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 cursor-pointer flex items-center gap-2 transition-colors">
                      📁 Upload Institute Logo
                    </label>
                  </label>

                  <button
                    type="button"
                    className="w-full border-2 border-orange-500 rounded-lg px-4 py-2.5 text-sm font-semibold text-orange-600 hover:bg-orange-50 mb-4 transition-colors flex items-center justify-center gap-2"
                  >
                    🔗 Connect MetaMask
                  </button>

                  <label className="block mb-6">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, 'verifiedDocuments')}
                      className="hidden"
                      id="verifiedDocs"
                    />
                    <label htmlFor="verifiedDocs" className="w-full border border-blue-500 rounded-lg px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 cursor-pointer flex items-center gap-2 transition-colors">
                      📁 Upload Verified Documents
                    </label>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-gradient-primary text-white rounded-lg px-6 py-3 font-semibold hover:opacity-90 transition-opacity mb-4"
                  >
                    Register
                  </button>

                  <div className="text-center text-sm">
                    <span className="text-gray-600">Already a member? </span>
                    <a href="/login" className="text-purple-600 hover:underline font-semibold">
                      Login
                    </a>
                  </div>
                </form>
              </div>

              {/* Right Side - Image */}
              <div className="hidden lg:flex flex-1 justify-center">
                <div className="bg-purple-100 rounded-3xl p-8 w-full max-w-sm flex items-center justify-center min-h-96">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-black mb-2">
                      certi<span className="text-purple-600">chain</span>
                    </h2>
                    <p className="text-gray-700 font-semibold mb-2">Register Your Institution</p>
                    <p className="text-gray-600 text-sm mb-8">Issue, manage, and verify certificates securely.</p>
                    <img src={instituteImage} alt="Institute" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
