import React from "react";
import { ShieldAlert, FileText } from "lucide-react";

const Disclaimer = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-400 p-10 text-white">

            <div className="flex items-center gap-4">
              <ShieldAlert size={42} />

              <div>
                <h1 className="text-4xl font-bold">
                  Legal Disclaimer
                </h1>

                <p className="mt-2 text-orange-100">
                  Please read the following information carefully before using
                  our website.
                </p>
              </div>
            </div>

          </div>

          {/* Content */}
          <div className="p-8 md:p-10 space-y-8">

            <div className="flex items-start gap-4">
              <FileText
                className="text-orange-500 mt-1"
                size={24}
              />

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Educational Purpose
                </h2>

                <p className="text-gray-600 leading-8">
                  The ShopNest platform is developed for educational,
                  demonstration, and portfolio purposes. It showcases modern
                  web development practices using the MERN stack and should not
                  be considered a production e-commerce platform unless
                  configured accordingly.
                </p>
              </div>
            </div>

            <hr />

            <div>
              <h2 className="text-xl font-semibold text-orange-500 mb-3">
                1. Accuracy of Information
              </h2>

              <p className="text-gray-600 leading-8">
                Product information, pricing, descriptions, and images may be
                placeholders or sample content used for demonstration. We do
                not guarantee the completeness or accuracy of this information.
              </p>
            </div>

            <hr />

            <div>
              <h2 className="text-xl font-semibold text-orange-500 mb-3">
                2. Payment Processing
              </h2>

              <p className="text-gray-600 leading-8">
                Payment functionality is intended for testing purposes using
                Razorpay Sandbox or similar development environments. No real
                financial transactions should occur unless the application is
                configured with live payment credentials.
              </p>
            </div>

            <hr />

            <div>
              <h2 className="text-xl font-semibold text-orange-500 mb-3">
                3. External Links
              </h2>

              <p className="text-gray-600 leading-8">
                This website may contain links to third-party websites. We are
                not responsible for the content, privacy policies, or practices
                of any external sites or services.
              </p>
            </div>

            <hr />

            <div>
              <h2 className="text-xl font-semibold text-orange-500 mb-3">
                4. Limitation of Liability
              </h2>

              <p className="text-gray-600 leading-8">
                Eshop and its developers shall not be liable for any direct,
                indirect, incidental, or consequential damages resulting from
                the use or inability to use this website or its content.
              </p>
            </div>

            <hr />

            <div>
              <h2 className="text-xl font-semibold text-orange-500 mb-3">
                5. Acceptance
              </h2>

              <p className="text-gray-600 leading-8">
                By accessing or using this website, you acknowledge that you
                have read, understood, and agreed to this disclaimer and its
                terms.
              </p>
            </div>

            {/* Footer Notice */}
            <div className="mt-10 rounded-2xl bg-orange-50 border border-orange-200 p-6">

              <p className="text-orange-700 text-center font-medium">
                Last Updated: {new Date().toLocaleDateString()}
              </p>

              <p className="text-center text-gray-600 mt-3">
                © {new Date().getFullYear()} Eshop. All rights reserved.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Disclaimer;