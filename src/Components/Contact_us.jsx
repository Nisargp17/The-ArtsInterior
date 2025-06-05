import { useState } from "react";
import axios from "axios";

function Contact_us() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post("http://localhost:5000/send", formData);

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[50vh] bg-[url(/src/assets/pheader-service-detail1.jpg)]">
        <div className="text-[4.5rem] text-white font-[300]">Contact Us</div>
      </div>

      <section className="flex justify-around items-center h-[70vh] gap-[2vh]">
        <div className="flex flex-col justify-center items-start gap-[4vh]">
          <div className="text-[3vw]">Get In Touch</div>
          <div className="text-[20px]">
            Your email address will not be published. Required fields are marked
            *
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[2vh]">
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME *"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-[2vh] border-b-[1px] w-[20vw]"
            />
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL *"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-[2vh] border-b-[1px] w-[20vw]"
            />
            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-[2vh] border-b-[1px] w-[20vw] h-[15vh]"
            />
            <button
              className="bg-black text-white font-[400] px-[20px] py-[10px]"
              type="submit"
            >
              SEND MESSAGE
            </button>
            <div className="text-[14px] text-gray-600 mt-[1vh]">{status}</div>
          </form>
        </div>

        <div className="flex flex-col justify-center items-start px-[3vh] text-left h-[70vh] w-[30vw] bg-cover bg-[url(/src/assets/bg-pinfo.jpg)] text-white">
          <div className="text-[20px] font-[600] text-[#989898]">
            [ our contact details ]
          </div>
          <div className="text-[3vw]">Let's Start a Project</div>
          <div className="text-[20px] text-[#989898]">
            Give us a call or drop by anytime, we endeavour to answer all
            enquiries within 24 hours on business days. We will be happy to
            answer your questions.
          </div>
          <div className="py-[2vh]">
            <div className="text-[22px]">- OUR ADDRESS</div>
            <div className="text-[20px]">- XYZ Streets</div>
          </div>
          <div className="py-[2vh]">
            <div className="text-[22px]">- OUR EMAIL</div>
            <div className="text-[20px]">- The-artsInteriors@gmail.com</div>
          </div>
          <div className="py-[2vh]">
            <div className="text-[22px]">- OUR Number</div>
            <div className="text-[20px]">- +xxxxxxxxxxx</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact_us;
