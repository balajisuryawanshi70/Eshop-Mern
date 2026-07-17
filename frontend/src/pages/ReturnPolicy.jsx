import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-400 rounded-3xl shadow-xl p-10 text-white mb-10">

          <h1 className="text-4xl font-bold">
            Return & Refund Policy
          </h1>

          <p className="mt-4 text-orange-100 text-lg max-w-3xl">
            Your satisfaction is important to us. Please review our return and
            refund policy to understand the conditions for returns, refunds, and
            exchanges.
          </p>

        </div>

        {/* Policy Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-10">

          {/* Intro */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Commitment
            </h2>

            <p className="text-gray-600 leading-8">
              At <span className="font-semibold text-orange-500">Eshop</span>,
              we stand behind the quality of every product we sell. If you're not
              completely satisfied with your purchase, you can request a return
              within <span className="font-semibold">30 days</span> of receiving
              your order, subject to the conditions below.
            </p>
          </section>

          {/* Eligibility */}
          <section className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              1. Eligibility for Returns
            </h3>

            <p className="text-gray-600 leading-8">
              Products must be unused, undamaged, and returned in their original
              packaging with all accessories, tags, manuals, and proof of
              purchase.
            </p>
          </section>

          {/* Refund */}
          <section className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2. Refund Processing
            </h3>

            <p className="text-gray-600 leading-8">
              Once your returned item is received and inspected, we'll notify you
              of the approval status. Approved refunds are processed to your
              original payment method within
              <span className="font-semibold text-green-600">
                {" "}5–7 business days.
              </span>
            </p>
          </section>

          {/* Non Returnable */}
          <section className="border-l-4 border-red-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              3. Non-Returnable Items
            </h3>

            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-8">
              <li>Perishable goods</li>
              <li>Digital products & software</li>
              <li>Gift cards</li>
              <li>Customized or personalized products</li>
              <li>Items damaged after delivery</li>
            </ul>
          </section>

          {/* Shipping */}
          <section className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              4. Return Shipping
            </h3>

            <p className="text-gray-600 leading-8">
              Customers are responsible for return shipping costs unless the item
              received was defective or incorrect. Shipping charges are generally
              non-refundable.
            </p>
          </section>

          {/* Important Notice */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              Important Notice
            </h3>

            <p className="text-gray-700 leading-7">
              Please inspect your order immediately after delivery. If you receive
              a damaged, defective, or incorrect item, contact our support team as
              soon as possible so we can resolve the issue promptly.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ReturnPolicy;
