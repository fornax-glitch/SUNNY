import React from 'react';
import Navbar from '../components/Navbar';
import { Phone, Mail } from 'lucide-react';
import { LEGAL_NAME, PHONE, EMAIL, ADDRESS } from '../data';


const TermsOfService: React.FC = () => {

  const lastUpdated = new Date().toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Navbar />
      <div className="pt-[88px] min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <header className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Terms of Service
            </h1>
            <div className="bg-white rounded-2xl shadow-lg p-6 mx-auto max-w-2xl border border-gray-200">
              <p className="text-gray-700 text-lg">
                Effective Date: <span className="font-bold text-emerald-600">{lastUpdated}</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm text-gray-500">
                <p>{LEGAL_NAME}</p>
                <p>{ADDRESS}</p>
                <p>{PHONE} | {EMAIL}</p>
              </div>
            </div>
          </header>

          {/* Introduction */}
          <section className="mb-20 prose prose-lg max-w-none bg-white rounded-3xl p-12 shadow-2xl border border-gray-200" aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="text-3xl font-black text-gray-900 mb-8 not-prose">
              1. Introduction & Acceptance
            </h2>
            <p>
              Welcome to {LEGAL_NAME} ("Company", "we", "us"). These Terms of Service ("Terms") govern your use of our website and building maintenance services.
            </p>
            <p>
              By requesting a quote, scheduling service, or using our website, you agree to these Terms. If you represent a business, you confirm authority to bind your organization.
            </p>
            <blockquote className="bg-emerald-50 border-emerald-200">
              {/* // TODO: Have lawyer review before deployment */}
              <p className="text-emerald-800 font-semibold">
                These Terms are subject to final legal review. Contact us for binding contract documents.
              </p>
            </blockquote>
          </section>

          {/* Services */}
          <section className="mb-20" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-3xl font-black text-gray-900 mb-8">
              2. Services Provided
            </h2>
            <div className="prose prose-lg max-w-none bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
              <h3>Cleaning Services</h3>
              <p>Interior cleaning, exterior pressure washing, commercial janitorial for residential and commercial properties.</p>
              
              <h3>Handyman Services</h3>
              <p>Repairs, installations, and maintenance including drywall, lighting, assembly, carpentry.</p>
              
              <h3>Service Area</h3>
<p>Victoria BC headquarters serving Vancouver Island. {/* // TODO: Confirm exact service areas with client — Waiting for client input */}</p>
              
              <h3>Exclusions</h3>
              <ul>
                <li>Hazardous material removal</li>
                <li>Structural engineering</li>
                <li>Electrical/plumbing beyond minor repairs</li>
              </ul>
            </div>
          </section>

          {/* Booking & Payment */}
          <section className="mb-20" aria-labelledby="booking-heading">
            <h2 id="booking-heading" className="text-3xl font-black text-gray-900 mb-8">
              3. Booking, Payment & Cancellation
            </h2>
            <div className="prose prose-lg max-w-none grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Booking Process</h3>
                <ol className="space-y-3 text-lg">
                  <li>Submit quote request (24hr response)</li>
                  <li>Receive detailed estimate</li>
                  <li>Confirm booking & payment method</li>
                  <li>Schedule service date/time</li>
                </ol>
              </div>
              
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Payment Terms</h3>
                <ul className="space-y-3 text-lg">
                  <li><strong>Residential:</strong> Payment due on completion</li>
                  <li><strong>Commercial:</strong> Net 30 invoice terms {/* // TODO: Confirm commercial payment terms with client — Waiting for client input */}</li>
                  <li>Accepted: Cash, e-transfer, credit card (3% fee), commercial accounts</li>
                </ul>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none bg-linear-to-r from-orange-50 to-red-50 rounded-3xl p-10 mt-12 shadow-xl border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-900 mb-6">Cancellation Policy</h3>
              <ul className="space-y-3 text-lg">
                <li><strong>48+ hours notice:</strong> No charge</li>
                <li><strong>24-48 hours:</strong> 50% service fee</li>
<strong>Less than 24 hours / No Show:</strong> 100% service fee
                <li>Commercial contracts have specific terms</li>
              </ul>
            </div>
          </section>

          {/* Service Delivery */}
          <section className="mb-20" aria-labelledby="delivery-heading">
            <h2 id="delivery-heading" className="text-3xl font-black text-gray-900 mb-8">
              4. Service Delivery Standards
            </h2>
            <div className="prose prose-lg max-w-none bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
              <h3>Arrival & Preparation</h3>
              <p>Team arrives 15 minutes early, uniformed, with PPE. Site walk-through before starting.</p>
              
              <h3>Quality Guarantee</h3>
              <p>30-day satisfaction guarantee on all services. We'll re-clean free of charge if not satisfied.</p>
              
              <h3>Damage Protection</h3>
              <p>$2,000,000 general liability insurance. Pre-service photos and client walkthrough.</p>
              
              <h3>Post-Service</h3>
              <ul>
                <li>Full site cleanup</li>
                <li>Service completion report</li>
                <li>Payment receipt</li>
                <li>Follow-up satisfaction call (24hr)</li>
              </ul>
            </div>
          </section>

          {/* Liability */}
          <section className="mb-20" aria-labelledby="liability-heading">
            <h2 id="liability-heading" className="text-3xl font-black text-gray-900 mb-8">
              5. Liability & Insurance
            </h2>
            <div className="prose prose-lg max-w-none bg-linear-to-r from-gray-50 to-sky-50 rounded-3xl p-12 shadow-xl border">
              <h3>Our Protection</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                <li>$2M General Liability Insurance</li>
                <li>$1M Commercial Auto</li>
                <li>Workers Compensation (WCB)</li>
                <li>Bonded employees</li>
                <li>Equipment damage protection</li>
              </ul>
              
              <h3>Client Responsibilities</h3>
              <ul>
                <li>Provide safe access to work areas</li>
                <li>Secure valuables/pets</li>
                <li>Notify of pre-existing damages</li>
                <li>Clear work areas when possible</li>
              </ul>
              
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Exclusions from Coverage</h3>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Pre-existing damages not disclosed</li>
                  <li>Normal wear and tear</li>
                  <li>Client property left unsecured</li>
                  <li>Hazardous materials not identified</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-20" aria-labelledby="termination-heading">
            <h2 id="termination-heading" className="text-3xl font-black text-gray-900 mb-8">
              6. Termination
            </h2>
            <div className="prose prose-lg max-w-none bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
              <p>We may suspend or terminate services for:</p>
              <ul className="mt-6 space-y-3 text-lg">
                <li>Non-payment after 30 days</li>
                <li>Unsafe work conditions</li>
                <li>Abuse of staff</li>
                <li>Violation of these Terms</li>
              </ul>
              <p className="mt-12 font-bold text-lg">
                {/* // TODO: Cancellation policy details — Waiting for client input */}
                Commercial contracts have specific termination clauses. See your service agreement.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-20" aria-labelledby="governing-heading">
            <h2 id="governing-heading" className="text-3xl font-black text-gray-900 mb-8">
              7. Governing Law
            </h2>
            <div className="prose prose-lg max-w-none bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
              <p>
                These Terms governed by laws of British Columbia and Canada. Disputes resolved in Victoria, BC courts.
              </p>
              <p className="mt-8 text-center font-bold text-xl text-gray-800 bg-gray-100 rounded-2xl p-8">
                {/* // LEGAL REVIEW NEEDED */}
                Jurisdiction clause subject to final legal review.
              </p>
            </div>
          </section>

          {/* Changes */}
          <section className="mb-20" aria-labelledby="changes-heading">
            <h2 id="changes-heading" className="text-3xl font-black text-gray-900 mb-8">
              8. Changes to Terms
            </h2>
            <div className="prose prose-lg max-w-none bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
              <p>We may update these Terms. Continued use constitutes acceptance. Significant changes notified by email.</p>
            </div>
          </section>

          {/* Contact */}
          <section aria-labelledby="terms-contact">
            <h2 id="terms-contact" className="text-3xl font-black text-gray-900 mb-12 text-center">
              Questions About These Terms?
            </h2>
            <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="group p-10 rounded-3xl bg-linear-to-br from-sky-500 to-emerald-500 text-white shadow-2xl hover:shadow-white/20 hover:scale-[1.02] transition-all cursor-pointer">
<Phone size={16} className="w-16 h-16 mx-auto mb-6 opacity-80 group-hover:opacity-100 group-hover:rotate-6 transition-all" />
                <div className="text-2xl font-black mb-4 text-center">{PHONE}</div>
                <p className="text-sky-100 text-center opacity-90 leading-relaxed">Direct line for service questions and scheduling</p>
              </div>
              <div className="group p-10 rounded-3xl bg-linear-to-br from-emerald-500 to-teal-500 text-white shadow-2xl hover:shadow-white/20 hover:scale-[1.02] transition-all cursor-pointer">
                <Mail className="w-16 h-16 mx-auto mb-6 opacity-80 group-hover:opacity-100 group-hover:rotate-6 transition-all" />
                <div className="text-lg font-black mb-4 break-all text-center">{EMAIL}</div>
                <p className="text-emerald-100 text-center opacity-90 leading-relaxed">For contracts, quotes, and formal inquiries</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;


