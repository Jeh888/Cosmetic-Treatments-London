import Link from 'next/link';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import FAQAccordion from '@/components/FAQAccordion';
import ReviewCard from '@/components/ReviewCard';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { getBoroughs } from '@/data/locations';
import { getFaqsByTreatment } from '@/data/faqs';
import { getReviewsByTreatment } from '@/data/reviews';

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ service: slug }));
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.service);
  if (!service) return {};

  return {
    title: `${service.name} London | Compare Providers | Free Quotes`,
    description: `Compare ${service.name.toLowerCase()} providers across London. Get free quotes from verified practitioners. ${service.shortDescription}`,
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.service);
  
  if (!service) {
    notFound();
  }

  const boroughs = getBoroughs();
  const faqs = getFaqsByTreatment(service.slug);
  const reviews = getReviewsByTreatment(service.name);
  const otherServices = services.filter(s => s.slug !== service.slug).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="text-primary-200 text-sm mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <span className="mx-2">→</span>
                <span>{service.name}</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {service.name} in London
              </h1>
              <p className="text-xl text-primary-100 mb-6">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-primary-200 text-sm">Price Range</span>
                  <div className="font-semibold">{service.priceRange}</div>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-primary-200 text-sm">Timeline</span>
                  <div className="font-semibold">{service.timeline}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <span className="text-green-400">✓ Free quotes</span>
                <span className="text-green-400">✓ Verified providers</span>
                <span className="text-green-400">✓ No obligation</span>
              </div>
            </div>

            <div>
              <LeadForm 
                preselectedService={service.slug}
                variant="hero"
                title={`Get ${service.name} Quotes`}
                subtitle="Compare prices from verified providers"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About {service.name}
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {service.longDescription}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Key Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What's Included
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-primary-500">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-gray-500">Price Range</dt>
                    <dd className="font-semibold text-gray-900">{service.priceRange}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Treatment Time</dt>
                    <dd className="font-semibold text-gray-900">{service.timeline}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Category</dt>
                    <dd className="font-semibold text-gray-900 capitalize">{service.category}</dd>
                  </div>
                </dl>
                
                <hr className="my-6" />
                
                <Link
                  href="/free-quote"
                  className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
                >
                  Get Free Quotes →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Find {service.name} Providers by Location
          </h2>
          <p className="text-gray-600 mb-8">
            Compare verified {service.name.toLowerCase()} providers across all London boroughs
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {boroughs.map((borough) => (
              <Link
                key={borough.slug}
                href={`/locations/${borough.slug}/${service.slug}`}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition"
              >
                <span className="font-semibold text-gray-900 hover:text-primary-600">
                  {service.name} in {borough.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/locations"
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              View All 100+ Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {service.name} FAQs
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      )}

      {/* Reviews */}
      {reviews.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {service.name} Reviews
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Other Treatments
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{s.shortDescription}</p>
                <span className="text-primary-600 text-sm font-medium">{s.priceRange}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for {service.name}?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Compare verified providers in your area and get free quotes today
          </p>
          <Link
            href="/free-quote"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Get Free Quotes →
          </Link>
        </div>
      </section>
    </>
  );
}
