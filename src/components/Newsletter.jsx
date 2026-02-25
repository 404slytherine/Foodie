import { useState } from 'react';
import Swal from 'sweetalert2'

const Newsletter = () => {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
          name: '', 
      });
      const [errors, setErrors] = useState({});
  
      const handleChange = (e) => {
          setForm({ ...form, [e.target.name]: e.target.value });
        };
  
      const validate = () => {
          let tempErrors = {};
          const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!form.email) {
              tempErrors.email = "Email is required";
          } else if(!regex.test(form.email)) {
              tempErrors.email = "Invalid Email Address";
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
                title: "Thank you for Subscribing our Newsletter!",
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
    <div className="newletter max-w-7xl mx-auto bg-[#E7F9FD] md:mt-25 mt-15">
        <h2>Deliciousness to your inbox</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis culpa atque omnis unde tempore provident eveniet? Vitae, eum repellendus!</p>
        {loading && (
          <div className="loader-overlay">
            <div className="spinner"></div>
          </div>
        )}
        <form onSubmit={onSubmit} className="subscribe bg-white p-2.5 sm:mt-15 mt-10 rounded-2xl">
            <input className="sm:px-8 px-4" type="text" name='email' placeholder="Your email address..." onChange={handleChange} />
            <button>Subscribe</button>
        </form>
        {errors.email && <span className="text-red-500 mt-1.5">{errors.email}</span>}
        <img className="img-1" src="/Newsletter/salad-fresh-food-healthylife-vegetables.png" alt="Newletter 1" />
        <img className="img-2" src="/Newsletter/rucola-and-plate.png" alt="Newletter 2" />
    </div>
  )
}

export default Newsletter