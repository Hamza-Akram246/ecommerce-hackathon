import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const FAQPage = () => {
  const faqs = [
    {
      question: "How we serve food?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?",
    },
    {
      question: "How is our food quality?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?",
    },
    {
      question: "How do we give home delivery?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?",
    },
    {
      question: "What will be delivered? And When?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?",
    },
    {
      question: "Is this restaurant 24 hours open?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <Navbar/>
        {/* beckground image */}
        <section className='w-full bg-[url("/signup.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
  <div className='container mx-auto px-4'>
    <div className='flex flex-col items-center'>
      {/* Page Title */}
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
        FAQ Page
      </h1>
      {/* Breadcrumb Navigation */}
      <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
        {/* Link to Home */}
        <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
          Home
        </Link>
        {/* Divider */}
        <span className='text-white'>/</span>
        {/* Link to Blog */}
        <Link href="/blog" className='text-[#FF9F0D]'>
          FAQ Page
        </Link>
      </div>
    </div>
  </div>
</section>
      <div className="container mx-auto px-4 md:px-8 mt-[80px]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Questions Looks Here</h1>
          <p className="text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow border border-gray-200"
            >
              <h2 className="text-lg font-semibold mb-4">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
