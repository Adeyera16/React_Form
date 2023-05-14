import { useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !message) {
      setError("Name, email and message are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address.");
      return;
    }

    const data = {
      id: nanoid(),
      name,
      email,
      subject,
      message,
    };

    try {
      await axios.post(
        "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries",
        data
      );

      setSuccess("Inquiry submitted successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setError("An error occurred while submitting the inquiry.");
    }
  };

  return (
    <div className="max-w-md mx-auto my-4 p-4 py-6 bg-white rounded shadow-md">
      <h1 className="text-lg font-bold mb-4">Contact Us</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          </div>
          <button 
          className="border rounded-full w-[6rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           type='submit'>Submit</button>
        </form>
        </div>
  )
}
    
           

// import React from "react"
// import { useState } from "react"

// export default function Form(){
//     const [FormData, setFormData] = useState({
//         name: "",
//         email: "",
//         subject: "",
//         message: ""
//     })
//     return(
//         <form>
//             <div>
//                 <label htmlFor="name"> Name</label>
//                 <input id="name" type="text" name="name" />
//             </div>
//             <div>
//                 <label htmlFor="email"> Email</label>
//                 <input id="email" type="email" name="email" />
//             </div>
//             <div>
//                 <label htmlFor="subject"> Subject</label>
//                 <input id="subject" type="text" name="subject" />
//             </div>
//             <div>
//             <   label htmlFor="message">Message</label>
//                 <textarea id="message" placeholder="Enter your messsage" name="message" />
//             </div>
//         </form>
        
//     )
// }