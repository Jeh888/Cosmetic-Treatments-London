import Link from 'next/link';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import ServiceCard from '@/components/ServiceCard';
import FAQAccordion from '@/components/FAQAccordion';
import { getAllLocations, getLocationBySlug, getLocationsByBorough, getAllLocationSlugs } from '@/data/locations';
import { services } from '@/data/services';
import { getGeneralFaqs } from '@/data/faqs';

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }) {
  const location = getLocationBySlug(params.city);
  if (!location) return {};

  return {
    title: `Cosmetic Treatments ${location.name} | Compare Local Providers | Free Quotes`,
    description: `Find verified cosmetic treatment providers in ${location.name}. Compare teeth whitening, Invisalign, Botox, fillers, veneers and more. Get free quotes from local practitioners.`,
  };
}

export default function CityPage({ params }) {
  const location = getLocationBySlug(params.city);
  
  if (!location) {
    notFound();
  }

  const nearbyLocations = location.nearbyAreas
    .map(name => getAllLocations().find(l => l.name === name))
    .filter(Boolean)
    .slice(0, 5);

  const boroughLocations = getLocationsByBorough(location.borough)
    .filter(l => l.slug !== location.slug)
    .slice(0, 8);

  const faqs = getGeneralFaqs().slice(0, 5).map(faq => ({
    ...faq,
    question: faq.question.replace('this service', `finding providers in ${location.name}`),
  }));

  return (
    <>
      {/* Hero - ~80 words */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="text-primary-200 text-sm mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <span className="mx-2">→</span>
                <Link href="/locations" className="hover:text-white">Locations</Link>
                <span className="mx-2">→</span>
                <span>{location.name}</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Cosmetic Treatments in {location.name}
              </h1>
              <p className="text-xl text-primary-100 mb-6">
                Compare verified cosmetic treatment providers in {location.name} and the surrounding {location.borough} area. Get free quotes for teeth whitening, Invisalign, Botox, dermal fillers, veneers, and more from qualified local practitioners.
              </p>
              
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-green-400">✓ Local providers</span>
                <span className="text-green-400">✓ Free quotes</span>
                <span className="text-green-400">✓ Verified practitioners</span>
              </div>
            </div>

            <div>
              <LeadForm 
                preselectedLocation={location.slug}
                variant="hero"
                title={`Get Quotes in ${location.name}`}
                subtitle="Compare local providers"
              />
            </div>
          </div>
        </div>
      </section>

      {/* City Overview - ~100 words */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About {location.name}
          </h2>
          <p className="text-gray-600 mb-4">
            {location.description}
          </p>
          <p className="text-gray-600">
            {location.businessContext} With a population of approximately {location.population}, {location.name} is home to a diverse community seeking quality cosmetic treatments. The area's excellent transport links and local amenities make it convenient for attending consultations and treatment appointments with nearby providers.
          </p>
        </div>
      </section>

      {/* Why Cosmetic Treatments Matter - ~100 words */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why {location.name} Residents Choose Cosmetic Treatments
          </h2>
          <p className="text-gray-600 mb-4">
            Cosmetic treatments have become increasingly popular among {location.name} residents looking to enhance their appearance and boost their confidence. From professionals wanting to make a strong impression in their careers to individuals preparing for special occasions, there are many reasons why people invest in cosmetic dental and aesthetic treatments.
          </p>
          <p className="text-gray-600">
            Having access to qualified local providers means shorter travel times, easier follow-up appointments, and the convenience of treatment close to home or work. Finding a trusted provider in the {location.borough} area ensures continuity of care and makes maintaining results much simpler.
          </p>
        </div>
      </section>

      {/* Available Services - ~120 words */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Cosmetic Treatments Available in {location.name}
          </h2>
          <p className="text-gray-600 mb-8">
            Find verified providers offering a full range of cosmetic dental and aesthetic treatments in {location.name}. Each treatment page connects you with qualified practitioners who serve the {location.borough} area. Compare prices, read about procedures, and request free quotes from local providers.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/locations/${location.slug}/${service.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition mb-2">
                  {service.name} in {location.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {service.shortDescription}
                </p>
                <span className="text-primary-600 text-sm font-medium">{service.priceRange}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - ~80 words */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How to Find Providers in {location.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Choose Treatment</h3>
              <p className="text-gray-600 text-sm">Select the cosmetic treatment you're interested in from the options above</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Request Quotes</h3>
              <p className="text-gray-600 text-sm">Submit a quick form to receive quotes from verified {location.name} providers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Compare & Book</h3>
              <p className="text-gray-600 text-sm">Review quotes, check credentials, and book with your chosen provider</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Industries - ~60 words */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {location.name}'s Local Economy
          </h2>
          <p className="text-gray-600 mb-4">
            {location.name} has a thriving local economy with key industries including {location.industries.slice(0, 4).join(', ')}. Professionals working in these sectors often seek cosmetic treatments to maintain a polished, confident appearance in their careers.
          </p>
          <p className="text-gray-600">
            Whether preparing for important presentations, client meetings, or simply wanting to look and feel their best, {location.name} residents can find qualified cosmetic treatment providers conveniently located in the area.
          </p>
        </div>
      </section>

      {/* Nearby Areas - ~50 words */}
      {nearbyLocations.length > 0 && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Areas Near {location.name}
            </h2>
            <p className="text-gray-600 mb-6">
              Providers serving {location.name} often also cover these nearby areas in {location.borough}. Explore cosmetic treatment options in surrounding locations.
            </p>
            <div className="flex flex-wrap gap-3">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}`}
                  className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-primary-100 hover:text-primary-700 transition"
                >
                  {nearby.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs - ~150 words */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Finding Cosmetic Treatments in {location.name}: FAQs
          </h2>
          <FAQAccordion faqs={[
            {
              question: `How do I find a verified cosmetic treatment provider in ${location.name}?`,
              answer: `Submit a quote request through this platform specifying ${location.name} as your location. Verified providers who serve the area will contact you with personalised quotes within 24 hours. All practitioners in the network are qualified professionals with appropriate registrations and insurance.`
            },
            {
              question: `What cosmetic treatments are available in ${location.name}?`,
              answer: `Providers in ${location.name} and the ${location.borough} area offer a full range of treatments including teeth whitening, Invisalign, Botox, dermal fillers, veneers, dental bonding, lip fillers, crowns, and comprehensive smile makeovers. Compare quotes to find the right provider for your specific needs.`
            },
            {
              question: `How much do cosmetic treatments cost in ${location.name}?`,
              answer: `Prices vary depending on the treatment and provider. Getting multiple quotes allows comparison of value across different practitioners. Many providers offer payment plans and finance options to make treatments more accessible.`
            },
            {
              question: `Are consultations free in ${location.name}?`,
              answer: `Many providers offer free initial consultations where they assess your needs and provide detailed treatment plans and pricing. This is confirmed when providers respond to your quote request through this platform.`
            },
            {
              question: `Can I find providers who work evenings or weekends in ${location.name}?`,
              answer: `Yes, many providers in the ${location.borough} area offer flexible appointment times including evenings and weekends. Mention your scheduling preferences when requesting quotes and providers will confirm their availability.`
            }
          ]} />
        </div>
      </section>

      {/* Other Borough Locations - ~30 words */}
      {boroughLocations.length > 0 && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Other Areas in {location.borough}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {boroughLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600 transition text-center"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Find Your {location.name} Provider Today
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Compare verified cosmetic treatment providers in {location.name}. Get free, no-obligation quotes within 24 hours.
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
