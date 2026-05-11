import React from 'react';
import  Navbar  from '../components/Navbar';
import  Footer  from '../components/Footer';
import { LEGAL_NAME, PHONE, EMAIL, ADDRESS } from '../data';

const PrivacyPolicy: React.FC = () => {
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
              Privacy Policy
            </h1>
            <div className="bg-white rounded-2xl shadow-lg p-6 mx-auto max-w-2xl border border-gray-200">
              <p className="text-gray-700 text-lg">
                Last Updated: <span className="font-bold text-sky-600">{lastUpdated}</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {LEGAL_NAME} — {ADDRESS}
              </p>
              <p className="text-sm text-gray-500">
                {PHONE} | {EMAIL}
              </p>
            </div>
          </header>

          {/* Introduction */}
          <section className="mb-20" aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="text-3xl font-black text-gray-900 mb-8">
              1. Introduction
            </h2>
            <div className="prose prose-lg max-w-none bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
              <p>
                {LEGAL_NAME} ("we", "us", "our") is committed to protecting your privacy in compliance with the <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong> and British Columbia's <strong>Personal Information Protection Act (PIPA)</strong>.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and protect personal information when you use our website, services, or contact our Victoria, BC headquarters.
              </p>
              {/* // LEGAL REVIEW NEEDED */}
              <div className="bg-orange-50 border-l-4 border-orange-400 pl-6 py-4 rounded-r-xl mt-8">
                <p className="font-bold text-orange-800 mb-1">Legal Review Required</p>
                <p className="text-orange-700 text-sm">
                  {/* // LEGAL REVIEW NEEDED */}
                  Client to have lawyer review before deployment. Contact information correct?
                </p>
              </div>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-20" aria-labelledby="collect-heading">
            <h2 id="collect-heading" className="text-3xl font-black text-gray-900 mb-8">
              2. Information We Collect
            </h2>
            <div className="prose prose-lg max-w-none grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Form Data</h3>
                <ul className="space-y-3 text-lg">
                  <li><strong>Name</strong> - Full name from quote forms</li>
                  <li><strong>Email</strong> - For quote delivery and communication</li>
                  <li><strong>Phone</strong> - For direct scheduling calls</li>
                  <li><strong>Service Type</strong> - Cleaning, pressure washing, handyman selection</li>
                  <li><strong>Location</strong> - City & province for service area verification</li>
                  <li><strong>Message</strong> - Project details (optional)</li>
                </ul>
              </div>
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Automatic Data</h3>
                <ul className="space-y-3 text-lg">
                  <li><strong>IP Address</strong> - Approximate location (no tracking)</li>
                  <li><strong>Browser Type</strong> - Site compatibility</li>
                  <li><strong>Visit Time</strong> - Aggregate analytics only</li>
                  <li><strong>Pages Viewed</strong> - Service interest (no individual tracking)</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4 italic">
                  No cookies, no personal tracking, no data sales.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Data */}
          <section className="mb-20" aria-labelledby="use-heading">
            <h2 id="use-heading" className="text-3xl font-black text-gray-900 mb-8">
              3. How We Use Your Information
            </h2>
            <div className="prose prose-lg max-w-none bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
              <p>We use personal information solely for:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-lg">
                <li><strong>Quote Delivery</strong> - Send customized service estimates</li>
                <li><strong>Service Coordination</strong> - Schedule appointments and communicate details</li>
                <li><strong>Service Improvement</strong> - Aggregate data improves offerings (no individual profiling)</li>
                <li><strong>Legal Compliance</strong> - Insurance, WCB reporting, contract requirements</li>
              </ul>
              <blockquote className="border-sky-300 bg-sky-50/50 rounded-2xl p-8 my-12">
                <p className="text-xl text-sky-800 font-semibold">
                  We never sell, trade, or share personal information with third parties for marketing.
                </p>
              </blockquote>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-20" aria-labelledby="security-heading">
            <h2 id="security-heading" className="text-3xl font-black text-gray-900 mb-8">
              4. Data Security
            </h2>
            <div className="prose prose-lg max-w-none bg-linear-to-r from-emerald-50 to-sky-50 rounded-3xl p-12 shadow-2xl border">
              <h3 className="text-2xl font-bold mb-6">Commercial-Grade Protection</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                <li>Formspree secure transmission (256-bit SSL)</li>
                <li>Microsoft Outlook enterprise hosting</li>
                <li>Role-based access (need-to-know only)</li>
                <li>Automatic data purging after service completion</li>
                <li>PIPEDA / PIPA compliance audited annually</li>
              </ul>
              <div className="bg-white rounded-2xl p-8 mt-12 shadow-lg border border-emerald-200">
                <p className="font-bold text-emerald-800 text-lg mb-3">
                  Data Retention: 90 days post-service unless contract requires longer
                </p>
                <p className="text-emerald-700">
                  {/* // LEGAL REVIEW NEEDED - retention periods */}
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-20" aria-labelledby="rights-heading">
            <h2 id="rights-heading" className="text-3xl font-black text-gray-900 mb-8">
              5. Your Rights Under PIPEDA
            </h2>
            <div className="prose prose-lg max-w-none grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Access & Correction</h3>
                <ul className="space-y-3 text-lg">
                  <li><strong>Right to Access</strong> - View what data we have</li>
                  <li><strong>Right to Correct</strong> - Update inaccurate information</li>
                  <li><strong>Right to Delete</strong> - Remove your data from our systems</li>
                </ul>
                <div className="mt-8 p-5 bg-blue-50 rounded-2xl border border-blue-200">
                  <p className="font-bold text-blue-800 mb-2">Contact Privacy Officer:</p>
                  <p className="text-blue-700">{EMAIL}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Withdraw Consent</h3>
                <ul className="space-y-3 text-lg">
                  <li>Opt-out of any future communications</li>
                  <li>Request data export in standard format</li>
                  <li>File complaint with BC Privacy Commissioner</li>
                </ul>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-r-xl mt-8">
                  <p className="font-bold text-orange-800 mb-1">
                    {/* // LEGAL REVIEW NEEDED */}
                    Complaints to: Office of the Information and Privacy Commissioner for BC
                  </p>
                  <p className="text-orange-700 text-sm">1-800-663-7867 | www.oipc.bc.ca</p>
                </div>
              </div>
            </div>
          </section>

          {/* Changes & Contact */}
          <section className="text-center" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl font-black text-gray-900 mb-8">
              Questions About This Policy?
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Changes to this Privacy Policy will be posted here with updated dates. Continued use constitutes acceptance.
              </p>
              <div className="bg-sky-50 rounded-3xl p-10 shadow-lg border border-sky-200">
                <div className="flex flex-col md:flex-row items-center gap-6 justify-center mb-8">
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-black text-sky-800 mb-2">{PHONE}</div>
                    <p className="text-sm text-sky-600 font-bold uppercase tracking-wide">Privacy Officer Direct Line</p>
                  </div>
                  <div className="w-px h-20 bg-sky-200 hidden md:block" aria-hidden />
                  <a href={`mailto:${EMAIL}`} className="text-sky-600 hover:text-sky-700 font-bold text-lg underline md:no-underline">
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

