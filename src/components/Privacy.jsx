import CTACard2 from './CTACard2.jsx'
import Newsletter from './Newsletter'

const Privacy = () => {
  return (
    <div className="max-w-7xl lg:mx-auto md:mx-5 mx-2.5 sm:mt-7 mt-5 px-5">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-semibold text-center">Privacy Policy</h1>
        <img src="privacy policy.jpg" className="about-image w-full sm:max-h-96 object-cover sm:mt-10 mt-5 rounded-2xl" alt="Privacy Policy" />
        <div className="flex flex-wrap justify-between">
          <div className="lg:w-[65%] md:w-[60%] sm:w-[70%] w-[100%]">
            <div className='sm:mt-10 mt-6'>
              <h2 className="sm:text-3xl text-2xl font-semibold">Information We Collect</h2>
              <p className='sm:mt-5 mt-2.5'>We may collect basic usage details such as your IP address, browser type, and pages visited. This information helps us understand how visitors interact with our site. We do not require personal details like your name or email to browse recipes.</p>
            </div>
            <div className='sm:mt-10 mt-6'>
              <h2 className="sm:text-3xl text-2xl font-semibold">How We Use Your Information</h2>
              <p className='sm:mt-5 mt-1.5'>The information we gather is used only to improve your browsing experience. It allows us to analyze traffic, enhance website performance, and provide content you’ll enjoy. We never use it for advertising or profiling.</p>
            </div>
            <div className='sm:mt-10 mt-6'>
              <h2 className="sm:text-3xl text-2xl font-semibold">Cookies & Tracking</h2>
              <p className='sm:mt-5 mt-1.5'>Currently, we do not use cookies or similar tracking tools. If we decide to use them in the future, we will update this page and let you know clearly. You can always choose whether to accept cookies in your browser settings.</p>
            </div>
            <div className='sm:mt-10 mt-6'>
              <h2 className="sm:text-3xl text-2xl font-semibold">Sharing Your Data</h2>
              <p className='sm:mt-5 mt-1.5'>We do not sell, rent, or share your personal information with third parties. Since we collect only anonymous usage data, your privacy is fully protected when visiting our site.</p>
            </div>
            <div className='sm:mt-10 mt-6'>
              <h2 className="sm:text-3xl text-2xl font-semibold">Third-Party Links</h2>
              <p className='sm:mt-5 mt-1.5'>Our site may contain links to other recipe blogs, tools, or resources. Please note that we are not responsible for the privacy practices of those websites. We encourage you to read their policies when visiting them.</p>
            </div>
            <div className='sm:mt-10 mt-6'>
              <h2 className="sm:text-3xl text-2xl font-semibold">Contact Us</h2>
              <p className='sm:mt-5 mt-1.5'>If you have any questions about this Privacy Policy, feel free to contact us at <a href="mailto: info@foodielandrecipes.com" className='privacy-mail-text'>info@foodielandrecipes.com</a>. We will be happy to assist and ensure your browsing experience is safe and transparent.</p>
            </div>
            <div className='sm:mt-10 mt-6'>
              <h2 className="sm:text-3xl text-2xl font-semibold">Quick Summary</h2>
              <div className='sm:overflow-x-auto overflow-x-scroll sm:mt-7 mt-5'>
                <table class="quick-summary-table">
                  <tr>
                    <th>Topic</th>
                    <th>Summary</th>
                  </tr>
                  <tr>
                    <td>Data Collected</td>
                    <td>Only anonymous usage data</td>
                  </tr>
                  <tr>
                    <td>Purpose</td>
                    <td>Improve site and content</td>
                  </tr>
                  <tr>
                    <td>Data Sharing</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>Cookies</td>
                    <td>Not used</td>
                  </tr>
                  <tr>
                    <td>Children Under 13</td>
                    <td>No data collected; deleted if found</td>
                  </tr>
                  <tr>
                    <td>Policy Changes</td>
                    <td>Posted with effective date</td>
                  </tr>
                  <tr>
                    <td>Questions?</td>
                    <td>Email us at <a href="mailto: info@foodielandrecipes.com" className='privacy-mail-text'>info@foodielandrecipes.com</a></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className='lg:w-[30%] md:w-[35%] sm:w-[35%] w-[100%] sm:mt-8 mt-3 relative'>
            <CTACard2 />
          </div>
        </div>
        <Newsletter />
      </div>
  )
}

export default Privacy