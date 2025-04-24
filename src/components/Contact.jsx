import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text">Contact</p>
          <p className="py-6">Get in touch with me with the form :</p>

        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/bdrryvjb" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <textarea name="Message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button className="text-white bg-gradient-to-b from cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's Chat</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     const scriptURL = "https://script.google.com/macros/s/AKfycbxj57mjpHE3rvpnXCGQ8m3bFsND2HwdphSyjQ3pPeUqzA1bBztrBQNsimdYMyxn5iRx/exec"; // Google Script URL

//     try {
//       const response = await fetch(scriptURL, {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus("Failed to send. Try again.");
//       }
//     } catch (error) {
//       setStatus("Error sending message.");
//     }
//   };

//   return (
//     <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
//       <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//         <div className="pb-8 text-center">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
//           <p className="py-6">Get in touch with me using the form below:</p>
//         </div>

//         <div className="flex justify-center items-center">
//           <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2">
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               value={formData.name}
//               onChange={handleChange}
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Enter your message"
//               rows="10"
//               value={formData.message}
//               onChange={handleChange}
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               required
//             ></textarea>
//             <button className="text-white bg-gradient-to-b from cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's Chat</button>

//           </form>
//         </div>

//         {/* Status Message */}
//         {status && <p className="text-center text-lg text-gray-400">{status}</p>}
//       </div>
//     </div>
//   );
// };

// export default Contact;
