import React from "react";

function Company() {
  return (
    <div className="company-page">
      {/* About Us Section */}
      <section className="about-section mt-30 px-4 md:px-8 lg:px-16">
        <h1 className="about-title text-blue-600 text-4xl font-bold mt-20 mb-8 border-b-2 border-blue-200 pb-4">
          About Us
        </h1>

        <div className="about-content max-w-6xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold">
              Unique Aqua Systems and Chemical Industries
            </span>
            , as the name suggests, is a premier water treatment company that
            has been providing professional and value-added consultancy and
            technical services to customers across the Asian region since 2002.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            With extensive experience in water treatment, Unique Aqua Systems
            and Chemical Industries combines innovative technologies with
            exceptional services delivered by our highly skilled
            representatives. Through intensive research and development, coupled
            with our own production facilities, we offer an extensive range of
            products as well as tailor-made solutions to address every specific
            application. Our goal is to help you optimize the efficiency of your
            water processes, achieving maximum economy and long-term operational
            reliability. Our diversified experience in handling the needs of
            various industries and institutions has enabled us to standardize
            our products according to required specifications. As an
            ISO-certified company, we strictly adhere to quality procedures in
            every aspect of our operations.The dream of a comprehensive water
            treatment solution provider has become a reality at Unique Aqua
            Systems and Chemical Industries. You will find every product you
            need for your water treatment requirements within our organization.
            The products we manufacture and trade are of the highest quality,
            incorporating the latest technological advancements and research.
          </p>

          <h2 className="quality-policy-title text-blue-600 text-2xl font-semibold mt-10 mb-4">
            Quality Policy
          </h2>
          <p>
            Unique Aqua Systems and Chemical Industries is committed to
            providing all customers with products and services related to
            specialty chemicals and equipment that comply with agreed
            requirements.In compliance with customer requirements as well as
            product and service regulatory requirements, we foster quality
            awareness among all employees and provide comprehensive skills and
            knowledge training in quality aspects relating to our systems,
            products, and services.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Company;
