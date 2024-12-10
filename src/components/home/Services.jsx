import React from "react";

import Analytic from "../../assets/services-analytics.svg";
import Automation from "../../assets/services-automation.svg";
import Integration from "../../assets/services-integrations.svg";
import Support from "../../assets/services-support.svg";

function Services() {
  return (
    <section className="w-full grid grid-flow-row mx-auto">
      <div className="px-8 md:px-32 border-y border-lightGray-700 border-dashed">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 border-x border-lightGray-700 border-dashed">
          <div className="flex flex-col justify-between items-center p-6 border border-lightGray-700 rounded-lg">
            <div className="w-40 h-40 p-6">
              <img
                src={Analytic}
                alt="Lorem ipsum dolor sit amet"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col items-start gap-4">
              <h3 className="text-lg font-semibold">Advanced Analytics</h3>
              <p className="text-sm text-darkGray-300/60">
                Gain actionable insights with real-time data analytics and
                powerful visualization tools to make smarter decisions.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center p-6 border border-lightGray-700 rounded-lg">
            <div className="w-40 h-40 p-6">
              <img
                src={Automation}
                alt="Lorem ipsum dolor sit amet"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col items-start gap-4">
              <h3 className="text-lg font-semibold">Automation Tools</h3>
              <p className="text-sm text-darkGray-300/60">
                Streamline your workflows with our automation tools, helping you
                save time and focus on growing your business.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center p-6 border border-lightGray-700 rounded-lg">
            <div className="w-40 h-40 p-6">
              <img
                src={Integration}
                alt="Lorem ipsum dolor sit amet"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col items-start gap-4">
              <h3 className="text-lg font-semibold">Seamless Integrations</h3>
              <p className="text-sm text-darkGray-300/60">
                Connect with your favorite platforms effortlessly, ensuring a
                smooth and unified digital experience.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center p-6 border border-lightGray-700 rounded-lg">
            <div className="w-40 h-40 p-6">
              <img
                src={Support}
                alt="Lorem ipsum dolor sit amet"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col items-start gap-4">
              <h3 className="text-lg font-semibold">24/7 Support</h3>
              <p className="text-sm text-darkGray-300/60">
                Our team of experts is available around the clock to provide
                assistance whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-24 grid grid-cols-[30%_1fr] px-8 md:px-32 border-b border-lightGray-700 border-dashed">
        <div className="border-x border-lightGray-700 border-dashed"></div>

        <div className="grid grid-cols-5 border-r border-lightGray-700 border-dashed"></div>
      </div>
    </section>
  );
}

export default Services;
