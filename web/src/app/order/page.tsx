import orderData from '../../../data/order.json';

export default function OrderPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Online</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your preferred way to enjoy La Flor Blanca
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pickup Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏪</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {orderData.pickup.title.en}
              </h2>
              <p className="text-gray-600">
                {orderData.pickup.description.en}
              </p>
            </div>
            <div className="text-center">
              <a
                href={orderData.pickup.squareCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors inline-block"
              >
                {orderData.pickup.ctaText.en}
              </a>
            </div>
          </div>

          {/* Delivery Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🚚</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {orderData.delivery.title.en}
              </h2>
              <p className="text-gray-600 mb-6">
                {orderData.delivery.description.en}
              </p>
            </div>
            <div className="space-y-4">
              {orderData.delivery.partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      Order on {partner.name}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hours Notice */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">
            Restaurant Hours
          </h3>
          <p className="text-amber-700">
            Monday - Sunday: 11:00 AM - 9:00 PM
          </p>
          <p className="text-sm text-amber-600 mt-2">
            Please note that pickup and delivery availability may vary during peak hours
          </p>
        </div>
      </div>
    </div>
  );
}
