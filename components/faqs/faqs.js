"use client";

import React, { useState } from "react";
import "./faq.css";

export default function FAQs() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem((prevItem) => (prevItem === index ? null : index));
  };

  const faqItemsColumn1 = faqItems.slice(0, Math.ceil(faqItems.length / 2));
  const faqItemsColumn2 = faqItems.slice(Math.ceil(faqItems.length / 2));

  return (
    <section id="faq" className="faq-area pb-120">
      <div className="container">
        <div className="section-header">
          <h4 className="poppins-extrabold section-title">FAQs</h4>
          <h3 className="poppins-extrabold about-intro">What to Know</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="faq-wrap">
              <div className="accordion" id="accordionColumn1">
                {faqItemsColumn1.map((item, index) => (
                  <div className="card" key={index}>
                    <div className="card-header" id={`heading${index}`}>
                      <h2 className="mb-0">
                        <button
                          className={`faq-btn ${
                            openItem === index ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleItem(index)}
                          aria-expanded={openItem === index ? "true" : "false"}
                          aria-controls={`collapse${index}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                    </div>
                    <div
                      id={`collapse${index}`}
                      className={`collapse ${openItem === index ? "show" : ""}`}
                      aria-labelledby={`heading${index}`}
                      data-parent="#accordionColumn1"
                    >
                      <div className="card-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="faq-wrap">
              <div className="accordion" id="accordionColumn2">
                {faqItemsColumn2.map((item, index) => (
                  <div className="card" key={index}>
                    <div className="card-header" id={`heading${index}`}>
                      <h2 className="mb-0">
                        <button
                          className={`faq-btn ${
                            openItem === index + faqItemsColumn1.length
                              ? ""
                              : "collapsed"
                          }`}
                          type="button"
                          onClick={() =>
                            toggleItem(index + faqItemsColumn1.length)
                          }
                          aria-expanded={
                            openItem === index + faqItemsColumn1.length
                              ? "true"
                              : "false"
                          }
                          aria-controls={`collapse${index}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                    </div>
                    <div
                      id={`collapse${index}`}
                      className={`collapse ${
                        openItem === index + faqItemsColumn1.length
                          ? "show"
                          : ""
                      }`}
                      aria-labelledby={`heading${index}`}
                      data-parent="#accordionColumn2"
                    >
                      <div className="card-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sample FAQ items
const faqItems = [
  {
    question: "How can I get involved with Humanity Touch?",
    answer:
      "You can get involved by volunteering your time, making a donation, or spreading awareness about our cause.",
  },
  {
    question: "What programs and services does Humanity Touch offer",
    answer:
      "Humanity Touch offers a range of programs and services, including food distribution, educational support, healthcare services, and community development projects",
  },
  {
    question: "How are donations used?",
    answer:
      "Donations are used to support our programs and services, including purchasing food and supplies, funding educational initiatives, and providing healthcare resources to those in need. We are committed to transparency and accountability in our use of funds.",
  },
  {
    question: "How can I request assistance from Humanity Touch",
    answer:
      "If you or someone you know requires assistance, please contact us through our website or email to submit a request. Our team will review your inquiry and respond as soon as possible.",
  },

  {
    question: "Can I donate goods or services instead of money?",
    answer:
      "Yes, Humanity Touch accepts in-kind donations of goods and services that align with our mission and programs",
  },

  {
    question: "How does Humanity Touch ensure accountability and transparency?",
    answer:
      "Humanity Touch is committed to accountability and transparency in all aspects of our operations. We regularly publish financial reports, conduct audits, and adhere to best practices in governance and management",
  },

  {
    question: "Who can I contact for more information? ",
    answer:
      "For more information, please contact our team via email address or phone number. You can also follow us on social media platforms for updates and news about our work.",
  },
  {
    question: "Does Humanity Touch work with other organizations or partners?",
    answer:
      "Yes, Humanity Touch collaborates with other charities, NGOs, government agencies, and corporate partners to maximize our impact and reach more people in need.",
  },

  {
    question: "How can I stay updated on Humanity Touch's activities and news?",
    answer:
      "To stay updated on Humanity Touch's activities and news, subscribe to our newsletter, follow us on social media, or visit our website regularly for updates and blog posts.",
  },
];
