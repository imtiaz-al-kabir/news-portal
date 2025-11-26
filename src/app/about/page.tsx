export default function AboutUsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are committed to delivering accurate, fast, and meaningful news
          to help people stay informed and inspired every day.
        </p>
      </section>

      {/* Mission Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-gray-700 leading-7">
          Our mission is to provide high-quality, trusted, and unbiased news
          across various categories including technology, business, sports,
          health, and global affairs. We aim to help readers stay updated
          with the information that matters most.
        </p>
      </section>

      {/* What We Do */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What We Do</h2>
        <p className="text-gray-700 leading-7">
          Our team works consistently to collect, verify, and present news
          from reliable sources. We focus on delivering well-structured,
          engaging, and informative content that supports better decision-making
          and awareness.
        </p>
        <p className="text-gray-700 leading-7">
          From breaking headlines to in-depth articles, we cover a wide range of
          stories that reflect real-world happenings with clarity and insight.
        </p>
      </section>

      {/* Our Values */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>✔ Accuracy & Trust</li>
          <li>✔ Transparency & Responsibility</li>
          <li>✔ Speed & Reliability</li>
          <li>✔ Empowering Readers with Knowledge</li>
        </ul>
      </section>

      {/* Closing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Thank You</h2>
        <p className="text-gray-700 leading-7">
          Thank you for being part of our journey. Your support motivates us to
          continue improving and delivering better content every day.
        </p>
      </section>
    </div>
  );
}
