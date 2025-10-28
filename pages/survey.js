import Layout from "@/components/layout/Layout";
import { useState } from "react";
import Head from "next/head";
import api from "@/lib/axios"; // ✅ axios instance

export default function Survey() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const payload = {
      user_id: formData.yourName && formData.yourName.trim() !== "" 
        ? formData.yourName.trim() 
        : "anonymous",
      answers: { ...formData }, // ensure object
    };

    const response = await api.post("/survey", payload);

    if (response.data.data.success) {
      alert("✅ Thank you! Your survey has been submitted.");
      setFormData({}); // reset form
    } else {
      alert("⚠️ Something went wrong: " + response.data.data.success);
    }
  } catch (err) {
    console.error("Survey submit error:", err.response?.data || err.message);
    alert("❌ Failed to submit survey. Please try again later.");
  } finally {
    setLoading(false);
  }
};


  const serviceOptions = [
    "Estate Administration",
    "Probate",
    "Insolvency",
    "Minors account",
    "Property Transfer",
  ];

  const ratingOptions = [
    "Excellent",
    "Good",
    "Average",
    "Below Average",
    "Poor",
  ];

  const recommendOptions = ["Very Likely", "Likely", "Unlikely", "Unsure"];

  const yesNoOptions = ["No", "Yes"];

  return (
    <>
      <Head>
        <title>Customer Experience Survey</title>
      </Head>
      <Layout breadcrumbTitle="Customer Experience Survey">
        <section className="survey-section py-5">
          <div className="container">
            <form
              onSubmit={handleSubmit}
              className="survey-form mx-auto p-4 shadow rounded bg-white row row-cols-md-2 g-4"
              style={{ maxWidth: "1000px" }}
            >
              <h2 className="mb-4 text-center text-primary">
                Customer Experience Survey
              </h2>

              {/* Q1 */}
              <div className="form-group col-md-12">
                <label className="fw-bold">1. What services did you use?</label>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {serviceOptions.map((opt) => (
                    <label key={opt} className="option-pill">
                      <input
                        type="radio"
                        name="serviceUsed"
                        value={opt}
                        checked={formData.serviceUsed === opt}
                        onChange={handleChange}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Q2 group */}
              {[
                "My needs as a beneficiary was listened to and addressed",
                "Information received was clear, accurate and assisted me",
                "The knowledge and expertise of the Public Trustee Staff",
                "Staff was polite, helpful and acted professionally",
                "It was easy to contact Public Trustee Staff, when I need help",
                "The timeliness of response to my enquiries",
              ].map((q, idx) => (
                <div className="form-group col-md-6" key={idx}>
                  <label className="fw-bold">{`${idx + 2}. ${q}`}</label>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {ratingOptions.map((opt) => (
                      <label key={opt} className="option-pill">
                        <input
                          type="radio"
                          name={`q2_${idx + 1}`}
                          value={opt}
                          checked={formData[`q2_${idx + 1}`] === opt}
                          onChange={handleChange}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              {/* Q3 */}
              <div className="form-group col-md-12">
                <label className="fw-bold">
                  3. How likely are you to recommend the Public Trustee?
                </label>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {recommendOptions.map((opt) => (
                    <label key={opt} className="option-pill">
                      <input
                        type="radio"
                        name="recommend"
                        value={opt}
                        checked={formData.recommend === opt}
                        onChange={handleChange}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Q4 */}
              <div className="form-group col-md-12">
                <label className="fw-bold">
                  4. Do you have any comments or suggestions?
                </label>
                <textarea
                  name="comments"
                  rows={3}
                  className="form-control mt-2"
                  value={formData.comments || ""}
                  onChange={handleChange}
                />
              </div>

              {/* Q5 */}
              <div className="form-group col-md-12">
                <label className="fw-bold">
                  5. Can we share your testimony publicly?
                </label>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {yesNoOptions.map((opt) => (
                    <label key={opt} className="option-pill">
                      <input
                        type="radio"
                        name="testimony"
                        value={opt}
                        checked={formData.testimony === opt}
                        onChange={handleChange}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Q6 */}
              <h4 className="mt-4 mb-2 text-center text-secondary">
                6. Contact details (optional)
              </h4>
              <div className="form-group col-md-6">
                <label>Name of Legal Clerk assisting</label>
                <input
                  type="text"
                  name="legalClerk"
                  className="form-control mt-1"
                  value={formData.legalClerk || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Estate Name</label>
                <input
                  type="text"
                  name="estateName"
                  className="form-control mt-1"
                  value={formData.estateName || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Your Name</label>
                <input
                  type="text"
                  name="yourName"
                  className="form-control mt-1"
                  value={formData.yourName || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Contact Details</label>
                <input
                  type="text"
                  name="contactDetails"
                  className="form-control mt-1"
                  value={formData.contactDetails || ""}
                  onChange={handleChange}
                />
              </div>

              {/* Submit */}
              <div className="form-group col-12 text-center mt-4">
                <button
                  type="submit"
                  className="btn btn-primary px-5 py-2 rounded-pill"
                  disabled={loading}
                >
                  {loading ? "⏳ Submitting..." : "🚀 Submit Survey"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
}
