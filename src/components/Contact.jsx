import Newsletter from "./Newsletter.jsx"
import Popular from "./Popular.jsx"
import Swal from 'sweetalert2'
import { useState } from "react"
import { useContext } from "react";
import { RecipeContext } from "../Contexts/RecipeContext";

const Contact = () => {

    const [loading, setLoading] = useState(false);
    const {recipe} = useContext(RecipeContext);

    const [form, setForm] = useState({
        name: '', 
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

    const validate = () => {
        let tempErrors = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!form.name) {
           tempErrors.name = "Name is required"; 
        } 
        if (!form.email) {
            tempErrors.email = "Email is required";
        } else if(!regex.test(form.email)) {
            tempErrors.email = "Invalid Email Address";
        }
        if (!form.message) {
           tempErrors.message = "Message is required"; 
        } 
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const sendData = async (event)=> {
        const formData = new FormData(event.target);
    
        formData.append("access_key", "47923029-f6c5-43b9-a7b9-55d9bcd77f1f");
    
        setLoading(true); // start loading
                  try {
                    const response = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: formData,
                    });
        
                    const data = await response.json();
        
                    if (data.success) {
                      Swal.fire({
                        icon: "success",
                        title: "Form Submitted Successfully!",
                        text: "Thank you! The form has been submitted successfully. We will reply to you soon!",
                        confirmButtonText: "Continue"
                      });
                      event.target.reset();
                    } else {
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                      });
                    }
                  } catch (err) {
                    console.log("Error submitting form:", err);
                  } finally {
                    setLoading(false); // stop loading
                  }
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            sendData(event);
        }
      };

  return (
    <>
     <div className="max-w-7xl lg:mx-auto md:mx-5 mx-2.5 md:mt-10 mt-5">
        <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-center">Contact Us</h1>
        <div className="form-container flex lg:flex-row flex-col gap-10 mt-10">
            <img src="/Contact.png" alt="Contact" className="lg:order-1 order-2 lg:w-auto md:w-[60%] sm:w-[75%] mx-auto w-[90%]" />
            {loading && (
                <div className="loader-overlay">
                    <div className="spinner"></div>
                </div>
            )}
            <form onSubmit={onSubmit} className="w-full lg:order-2 order-1">
                <div className="sm:grid sm:grid-cols-2 flex flex-col sm:w-auto w-[90%] sm:mx-[unset] mx-auto sm:gap-5 gap-3">
                    <div>
                        <label htmlFor="name" className="text-gray-600 text-[13px] font-medium">NAME</label>
                        <input type="text" id="name" name="name" onChange={handleChange} className="w-full py-2.5 px-4 border border-gray-300 rounded-[10px] mt-2" placeholder="Enter your name..." />
                        {errors.name && <span className="text-red-500">{errors.name}</span>}
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-600 text-[13px] font-medium">EMAIL</label>
                        <input type="text" id="email" name="email" onChange={handleChange} className="w-full py-2.5 px-4 border border-gray-300 rounded-[10px] mt-2" placeholder="Enter email address..." />
                        {errors.email && <span className="text-red-500">{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="subject" className="text-gray-600 text-[13px] font-medium">SUBJECT</label>
                        <input type="text" id="subject" name="subject" className="w-full py-2.5 px-4 border border-gray-300 rounded-[10px] mt-2" placeholder="Enter subject..." />
                    </div>
                    <div>
                        <label htmlFor="enquiry" className="text-gray-600 text-[13px] font-medium">ENQUIRY TYPE</label>
                        <select name="enquiry" id="enquiry" className="w-full py-2.5 px-4 border border-gray-300 rounded-[10px] mt-2">
                            <option value="Advertising">Advertising</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Recipe Suggestion">Recipe Suggestion</option>
                            <option value="Recipe Submission">Recipe Submission</option>
                            <option value="Website Feedback">Website Feedback</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="message" className="text-gray-600 text-[13px] font-medium">MESSAGE</label>
                        <textarea name="message" onChange={handleChange} id="message" rows={6} className="w-full py-2.5 px-4 border border-gray-300 rounded-[10px] mt-2" placeholder="Enter your messages..."></textarea>
                        {errors.message && <span className="text-red-500">{errors.message}</span>}
                    </div>
                    <div>
                        <button className="btn-submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
     </div>
     
     {/* Popular Recipies */}
     <div className='max-w-7xl mx-auto text-center lg:text-[32px] sm:text-3xl text-[21px] font-semibold px-5 lg:mt-20 sm:mt-10 mt-5'>
                <h2>You may like these recipe too</h2>
            </div>
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-5 sm:mt-10 mt-7 px-5">
                {recipe.slice(6, 10).map((p) => (
                    <Popular key={p.name} {...p}></Popular>
                ))}
            </div>
            {/* Popular Recipies End */}
            <Newsletter />
    </>
  )
}

export default Contact