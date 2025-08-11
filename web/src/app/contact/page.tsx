export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with La Flor Blanca - we&apos;d love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Visit Us
            </h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a
                    href="tel:(XXX) XXX-XXXX"
                    className="text-amber-600 hover:text-amber-700"
                  >
                    (323) 735-1802
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    1279 W. Jefferson Blvd<br />
                    Los Angeles, CA 90007
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🕐</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Hours</h3>
                  <p className="text-gray-600">
                    Mon: Closed<br />
                    Tue-Thu: 10:00 AM - 7:00 PM<br />
                    Fri-Sun: 10:00 AM - 7:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/order"
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-center"
                >
                  Order Online
                </a>
                <a
                  href="tel:(323) 735-1802"
                  className="bg-white text-amber-600 border-2 border-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors text-center"
                >
                  Call for Catering
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Location
            </h2>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">
                  Map integration coming soon
                </p>
              </div>
            </div>
            
            {/* Directions */}
            <div className="mt-6">
              <a
                href="https://maps.google.com/?q=La+Flor+Blanca+Los+Angeles"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-amber-50 border border-amber-200 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-amber-800 mb-4">
              Planning a Special Event?
            </h3>
            <p className="text-amber-700 mb-4">
              We offer catering services for your special occasions. 
              Call us to discuss menu options and pricing.
            </p>
            <a
              href="tel:(323) 735-1802"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Call for Catering
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
