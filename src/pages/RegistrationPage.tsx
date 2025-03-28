import { useForm } from "react-hook-form";
import { useState } from "react";
import procureai from "../images/registrationcard.jpg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const countries = ["Australia" , "Canada" , "China" , "France" , "Germany" , "India" , "Ireland" , "Italy" , "Japan" , "Poland" , "South Korea" , "The Czech Republic" , "United Kingdom" , "United States"];
const industries = ["Aerospace" , "Automotive" , "Constuction and Infrastructure" , "Electronics" , "Energy" , "Food & Beverages" , "Machinery Manufacturing" , "Medical Equipments" , "Oil and Gas" , "Ship Building"];
const categories = ["Manufacturer", "Supplier", "Buyer"];

interface FormData {
  companyName: string;
  country: string;
  category: string[];
  industry: string;
  fullName: string;
  designation: string;
  email: string;
  contactNo: string;
}

const schema = yup.object().shape({
  companyName: yup.string().required("Company Name is required"),
  country: yup.string().oneOf(countries, "Invalid country").required("Country is required"),
  category: yup.array().min(1, "Select at least one category").required("Category is required"),
  industry: yup.string().oneOf(industries, "Invalid industry").required("Industry is required"),
  fullName: yup.string().required("Full Name is required"),
  designation: yup.string().required("Designation is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contactNo: yup
    .string()
    .matches(/^\d{10}$/, "Contact number must be 10 digits")
    .required("Contact number is required"),
});

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setIsSubmitted(true); // Hide form and show success message
    reset();
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 p-4">
        <div className=" lg:w-1/2 flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={procureai} alt="AI in Procurement" />
            <div className="p-5 d-flex align-items-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Unlock the Power of AI in Procurement!</h5>
                <p className="text-center text-white mt-2">We’re excited to invite Manufacturers, Suppliers, and Buyers to join our innovative platform where cutting-edge AI meets streamlined procurement processes. By registering today, you'll gain access to smarter, faster, and more efficient ways to connect, collaborate, and drive growth in your business.</p><br></br>
                <p className="text-center text-white mt-2">
                Together, we’ll transform the procurement landscape and unlock new opportunities for success. <br></br>Join us, and be a part of the future of procurement!</p>
            </div>
        </div>

      
        <div className="flex justify-center items-center w-full lg:w-1/2 rounded-lg">
        {isSubmitted ? (
        // Success message shown after submission
        <div>
          <h2 className="text-2xl font-bold text-green-600">🎉 Registration Successful!</h2>
          <p className="mt-2 text-gray-700">Welcome aboard! Our team will contact you soon.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register Again
          </button>
        </div>
        ) : (
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
            >
            {/* <h2 className="text-xl font-bold mb-4 text-center">Registration Form</h2> */}
            <div className="mb-4">
            <label className="block text-gray-700">Category [Select all that apply]</label>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    value={category}
                    {...register("category")}
                    className="mr-2"
                  />
                  {category}
                </label>
              ))}
            </div>
            <p className="text-red-500 text-sm">{errors.category?.message}</p>
            </div>
            <div className="mb-4">
                <label htmlFor="companyName" className="block text-gray-700">Company Name</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-white bg-aigent border border-e-0 border-gray-300 rounded-s-md dark:bg-aigent dark:text-white dark:border-aigent">
                    <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    </span>
                    <input type="text" id="companyName" {...register("companyName")} className="rounded-none rounded-e-lg bg-white border border-aigent text-gray-900 focus:ring-aigent focus:border-aigent block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-white dark:border-aigent dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-aigent dark:focus:border-aigent" placeholder="Company name" />
                </div>
                <p className="text-red-500 text-sm">{errors.companyName?.message}</p>
            </div>

            <div className="mb-4">
                <label htmlFor="countryhq" className="block text-gray-700">Country Headquarters</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-white bg-aigent border border-e-0 border-gray-300 rounded-s-md dark:bg-aigent dark:text-white dark:border-aigent">
                        <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M10.915 2.345a2 2 0 0 1 2.17 0l7 4.52A2 2 0 0 1 21 8.544V9.5a1.5 1.5 0 0 1-1.5 1.5H19v6h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1v-6h-.5A1.5 1.5 0 0 1 3 9.5v-.955a2 2 0 0 1 .915-1.68l7-4.52ZM17 17v-6h-2v6h2Zm-6-6h2v6h-2v-6Zm-2 6v-6H7v6h2Z" clip-rule="evenodd"/>
                            <path d="M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"/>
                        </svg>  
                    </span>
                    <select id="countryhq"
                    {...register("country")}
                    className="rounded-none rounded-e-lg bg-white border border-aigent text-gray-900 focus:ring-aigent focus:border-aigent block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-white dark:border-aigent dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-aigent dark:focus:border-aigent"
                    >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                    ))}
                    </select>
                </div>
                <p className="text-red-500 text-sm">{errors.country?.message}</p>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="industry">Industry</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-white bg-aigent border border-e-0 border-gray-300 rounded-s-md dark:bg-aigent dark:text-white dark:border-aigent">
                        <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z" clip-rule="evenodd"/>
                        </svg>  
                    </span>
                    <select id="industry"
                    {...register("industry")}
                    className="rounded-none rounded-e-lg bg-white border border-aigent text-gray-900 focus:ring-aigent focus:border-aigent block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-white dark:border-aigent dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-aigent dark:focus:border-aigent"
                    >
                    <option value="">Select Industry</option>
                    {industries.map((industry) => (
                    <option key={industry} value={industry}>
                        {industry}
                    </option>
                    ))}
                    </select>

                </div>
                <p className="text-red-500 text-sm">{errors.industry?.message}</p>
            </div>

            <div className="mb-4">
                <label htmlFor="fullname" className="block text-gray-700">Full Name</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-white bg-aigent border border-e-0 border-gray-300 rounded-s-md dark:bg-aigent dark:text-white dark:border-aigent">
                    <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    </span>
                    <input type="text" id="fullname" {...register("fullName")} className="rounded-none rounded-e-lg bg-white border border-aigent text-gray-900 focus:ring-aigent focus:border-aigent block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-white dark:border-aigent dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-aigent dark:focus:border-aigent" placeholder="First and Last name" />
                </div>
                {/* <input
                type="text"
                {...register("fullName")}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                /> */}
                <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
            </div>

            <div className="mb-4">
                <label htmlFor="designation" className="block text-gray-700">Designation</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-white bg-aigent border border-e-0 border-gray-300 rounded-s-md dark:bg-aigent dark:text-white dark:border-aigent">
                    <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2c-1.10457 0-2 .89543-2 2v4c0 .55228.44772 1 1 1s1-.44772 1-1V4h12v7h-2c-.5523 0-1 .4477-1 1v2h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h5c.5523 0 1-.4477 1-1V3.85714C20 2.98529 19.3667 2 18.268 2H6Z"/>
                    <path d="M6 11.5C6 9.567 7.567 8 9.5 8S13 9.567 13 11.5 11.433 15 9.5 15 6 13.433 6 11.5ZM4 20c0-2.2091 1.79086-4 4-4h3c2.2091 0 4 1.7909 4 4 0 1.1046-.8954 2-2 2H6c-1.10457 0-2-.8954-2-2Z"/>
                    </svg>
                    </span>
                    <input type="text" id="designation" {...register("designation")} className="rounded-none rounded-e-lg bg-white border border-aigent text-gray-900 focus:ring-aigent focus:border-aigent block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-white dark:border-aigent dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-aigent dark:focus:border-aigent" placeholder="Designation" />
                </div>
                <p className="text-red-500 text-sm">{errors.designation?.message}</p>
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-white bg-aigent border border-e-0 border-gray-300 rounded-s-md dark:bg-aigent dark:text-white dark:border-aigent">
                    <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                    </span>
                    <input type="text" id="email" {...register("email")} className="rounded-none rounded-e-lg bg-white border border-aigent text-gray-900 focus:ring-aigent focus:border-aigent block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-white dark:border-aigent dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-aigent dark:focus:border-aigent" placeholder="Valid email address" />
                </div>
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <div className="mb-4">
                <label htmlFor="contactNo" className="block text-gray-700">Contact No.</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-white bg-aigent border border-e-0 border-gray-300 rounded-s-md dark:bg-aigent dark:text-white dark:border-aigent">
                    <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                    </svg>
                    </span>
                    <input type="text" id="contactNo" {...register("contactNo")} className="rounded-none rounded-e-lg bg-white border border-aigent text-gray-900 focus:ring-aigent focus:border-aigent block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-white dark:border-aigent dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-aigent dark:focus:border-aigent" placeholder="Contact number" />
                </div>
                <p className="text-red-500 text-sm">{errors.contactNo?.message}</p>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
                Register
            </button>
            </form>
        )}
        </div>
    </div>
  );
}