export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-200px)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="text-amber-600">La Flor Blanca</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Experience authentic Salvadoran cuisine made with love and tradition in the heart of Los Angeles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              View Menu
            </a>
            <a
              href="/order"
              className="bg-white text-amber-600 border-2 border-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🫓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fresh Pupusas
              </h3>
              <p className="text-gray-600">
                Handmade daily with traditional recipes passed down through generations
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🥤</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Traditional Drinks
              </h3>
              <p className="text-gray-600">
                Authentic horchata and other refreshing Salvadoran beverages
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Ordering
              </h3>
              <p className="text-gray-600">
                Order online for pickup or delivery through our trusted partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to taste authentic El Salvador?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Visit us today or place your order online
          </p>
          <a
            href="/order"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Order Now
          </a>
        </div>
      </section>
    </div>
  );
}