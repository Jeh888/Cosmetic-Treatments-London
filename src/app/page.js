import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import StatsBar from '@/components/StatsBar';
import FAQAccordion from '@/components/FAQAccordion';
import { services } from '@/data/services';
import { getBoroughs } from '@/data/locations';
import { getFeaturedReviews } from '@/data/reviews';
import { getGeneralFaqs } from '@/data/faqs';

export default function HomePage() {
  const boroughs = getBoroughs();
  const featuredReviews = getFeaturedReviews(6);
  const generalFaqs = getGeneralFaqs().slice(0, 5);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Find the Best <span className="text-primary-300">Cosmetic Treatments</span> in London
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Compare top-rated providers for teeth whitening, Invisalign, Botox, fillers, veneers, and more. Get free quotes from verified practitioners across 100+ London locations.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Free quotes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Verified providers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>No obligation</span>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex items-center space-x-6 text-sm text-primary-200">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">★★★★★</span>
                  <span>4.9/5 Rating</span>
                </div>
                <div>500+ Providers</div>
                <div>24hr Response</div>
              </div>
            </div>

            <div className="lg:pl-8">
              <LeadForm 
                variant="hero"
                title="Get Free Quotes Today"
                subtitle="Compare prices from top-rated providers"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Compare Cosmetic Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find verified providers for all major cosmetic dental and aesthetic treatments across London. Get personalised quotes and choose the best option for your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Getting quotes from top cosmetic treatment providers is simple
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Your Request</h3>
              <p className="text-gray-600">
                Fill in a quick form with your treatment requirements and preferred location. It takes less than 2 minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Receive Free Quotes</h3>
              <p className="text-gray-600">
                Up to 3 verified providers in your area will contact you with personalised quotes within 24 hours.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compare & Choose</h3>
              <p className="text-gray-600">
                Compare prices, reviews, and services. Choose the provider that best fits your needs and budget.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/free-quote"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition text-lg"
            >
              Get Your Free Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Cosmetic Treatments Across London
            </h2>
            <p className="text-xl text-gray-600">
              Find verified providers in over 100 locations across all London boroughs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {boroughs.map((borough) => (
              <Link
                key={borough.slug}
                href={`/locations/${borough.slug}`}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition">
                  {borough.name}
                </h3>
                <p className="text-sm text-gray-500">{borough.region}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              View All 100+ Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              What Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Thousands have found their perfect cosmetic treatment provider through this service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about finding cosmetic treatment providers
            </p>
          </div>

          <FAQAccordion faqs={generalFaqs} />

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get free quotes from verified cosmetic treatment providers in your area. Compare prices, read reviews, and find the perfect provider for your needs.
          </p>
          <Link
            href="/free-quote"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Get Free Quotes Now →
          </Link>
        </div>
      </section>
    </>
  );
}
