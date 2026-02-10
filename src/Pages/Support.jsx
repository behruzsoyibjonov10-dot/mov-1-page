import React from 'react'
import Questions from '../Components/Main/Questions'
import Banner from '../Components/Main/Banner'
const Support = () => {
  return (
    <div>
    <div className="our px-15 py-10 flex flex-col md:flex-row gap-10 items-start bg-black">
  <div className="flex-1 mt-25">
    <h1 className="text-white text-4xl font-bold mb-4">
      Welcome to our <br />
      support page!
    </h1>
    <p className="text-gray-400 mb-6">
      We're here to help you with any problems you may be having with <br />
      our product.
    </p>
    <img
      className="w-[80%] md:w-[60%] mt-4"
      src="/img/Sub Container.png"
      alt="Support Illustration"
    />
  </div>

  <div className="flex-1 flex flex-col gap-4 mt-30 mr-0">

    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 flex flex-col">
        <label className="text-white mb-1">First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          className="w-full p-3 rounded-lg border border-gray-600 bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <label className="text-white mb-1">Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          className="w-full p-3 rounded-lg border border-gray-600 bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
        />
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-4 items-center">
      <div className="flex-1 flex flex-col">
        <label className="text-white mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 rounded-lg border border-gray-600 bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <label className="text-white mb-1">Phone Number</label>
        <div className="flex items-center gap-2">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAAAb1BMVEX///8whzgwgffsAAD72dmzTZT2BC+zUDIqiTj2BRIrf/ckfPcdevc1g/f8/f8AcvaRtvpKjfg8hvfq8f5fmPhnnfl/q/l4p/muyfu60PxSkfji6/7Y5P3z9/5xovnJ2/wAbveau/rB1fyJsPqlwfslvJZfAAAE7ElEQVR4nO2b2ZKjOBBFNfTM9HRKIPZ9Mcv/f+NgsEBZm+mIqijTvuepMrAccEpKZQIWDrAQ330CjwV0MKCD8Z4OklJJSUe+4qMPHfqCB+JNHbOJIG6zNHEPXI7rvh85PHp8XusgRYmfD3XUTW14VwepNKbtUyTb2D5YHviGh+KVDimzovaE6PrEUXevxSU1jGqLHJ3n2wKZo3Qo1akmyEsdKigiIUTll+pA5qAy75qq61cFFPZd1HR5sB5z06Fq6iE+0/zgOlydVbMM0cUkDw0P21qI4nbF5MaDJ7rWZJxgakQ0hp96vl8M0+Fe/OZqowiP7SmzASo8kZpPk548UWyrRWeNqMJjXh8EW4erR+9qYzi+P8o2T8bcTAAK8jHuSjNaTlPQtWdaK0yHShYb9dGp4VzThStluEchyXDLne4cOeFZUyk5y0qJgt+Z3tdNdrdHDqu86HR1mKVD11cbja9P9f/8XHYdKlsmR6W/8Wy+HUtHd7Xh7UXVM7LpkHG0ZI77leifzKZDT2vJ8cyZw9KxrhXRHlkr9H5EH0QnwOigYNlXxIGWntrA+pBsSztK7MgJkpN2tCpZmhXv7uSQOhziiylNSOki1SbfkLpMvdJ71BahPpUPo0Nmaya9t81Smw/NUKS3KJ6KqC6mdU5R0OdVVdw6WsdN87opiuRrTvxr2GZHuuq43MmkFEyR8MwVU5jOk6ozV+wmcwKqUrPgyrwRTX+q5fJKx70BsqyFV5o1RaoQIts72l6Iacutqo1E/Vsl/7ezLZZ2yR3N3ZpUjUNbjyaScTcWe0frDpNfb4lWTUNbJWeaHLuOct1Z7lZhVAZKlmY9XCMdm/VAQSDVHoWlq8LyK876y9g2Wlrrjvju3L7WEvstgKWjfTeis1UeRoeri0XH9NQdnFWVrjvtcze0uw5yluTh3V8tfzJ7g6/7pYcbnnp67Dpu06NJzvWg6HOxbg7ebod1b3RxL1pY+uDYB588AexO+rRkj/zVnfSgtJ8dUcw6WhbxY3PlcaqHTlwHUbHePGZtLUndTqE2GXbuaPNYWx1tntkdbe/LrZKTOplO2tEuSMf4sJ4VhNk4RL1vHrUm/hTlfnY7WI5jNYy+6WjHsa793nS02VjMA0/Z0a5It198THLfbinpvHkF3WY9BcUcdea1hbCPPK9qb8fcdG7vmpuceeEsA4MzTY8XT/CJ2ms15nWBJrPBXG+FdNtFyaAT0VackLQ7Wkf5ntXRXtvC7lQ2Xr3QQPMEaZaESpfbktFTXUSlEaDSOm+yXU5dVNM+uOi6vaOdB+ZNeaqy7q23f2S6VCBdtsx6CpLwkmwv9cgkvoSZ6VplHCuVbg1+mTiXNDBR2AbzwFNVMW+9GzZvEKpM+zwfl380SXKtvXf+k/ZwTjK0b0RzD+taWYcPPANvvznoklRa6+d7IIf3ShnQwYAOBnQwxD/AQvwCFuIHsBB/AwsBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw+Xz3TyYeC/y8hyH+BRbiJ7AQ/wEL8RewgA4GdDCggwEdDOhgQAcDOhjQwYAOBnQwoIMBHQzoYEAHAzoY0MGADgZ0MKCDAR0M6GBABwM6GNDBgA4GdDCggwEdDOhgQAcDOhjQwYAOBnQwoIMBHQzoYEAHAzoY0MGADgZ0MKCDAR0M6GD8D/ONAW/zNGtzAAAAAElFTkSuQmCC"
            alt="UZB"
            className="w-6 h-4 rounded-sm"
          />
          <input
            type="tel"
            placeholder="Enter Phone Number"
            className="w-full p-3 rounded-lg border border-gray-600 bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
          />
        </div>
      </div>
    </div>

    <div className="flex flex-col">
      <label className="text-white mb-1">Message</label>
      <textarea
        placeholder="Enter your Message..."
        rows={5}
        className="w-full p-3 rounded-lg border border-gray-600 bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:border-red-500 resize-none"
      />
    </div>

    <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
      <label className="flex items-center text-white gap-2">
        <input type="checkbox" className="accent-red-600" />
        I agree with Terms of Use and Privacy Policy
      </label>
      <button className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition mt-2 md:mt-0">
        Send Message
      </button>
    </div>

  </div>
</div>

       <Questions/>
       <Banner/>
    </div>
  )
}

export default Support