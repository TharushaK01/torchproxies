export interface FAQItem {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
}

interface FAQModuleProps {
  title?: string;
  faqs: FAQItem[];
}

export function FAQModule({
  title = "Frequently Asked Questions",
  faqs,
}: FAQModuleProps) {
  if (!faqs || faqs.length === 0) return null;

  // Normalize items so both 'q/a' and 'question/answer' work
  const normalizedFaqs = faqs.map((item) => ({
    question: item.question || item.q || "",
    answer: item.answer || item.a || "",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: normalizedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="my-12 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-6 divide-y divide-gray-100">
        {normalizedFaqs.map((faq, index) => (
          <div key={index} className={index === 0 ? "" : "pt-6"}>
            <h3 className="text-lg font-semibold text-gray-900">
              {faq.question}
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
