import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Sidebar from "../Sidebar";
import "./index.scss";



const Contact = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onBlur",
    });
  
    const form = useRef();
  
    const sendEmail = (data) => {
      emailjs.sendForm("service_dhzov9a", "template_lx783t8", form.current, "BH1p0pr5RpsHiWLBq")
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    const onSubmit = (data, event) => {
      console.log(data);
      sendEmail(data);
      event.target.reset();
    };
  
    return (
      <>
        <Sidebar />
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="form-container">
          <label>Name</label>
          <input type="text" name="user_name" {...register("user_name", { required: "This is required" })} />
          <span className="errorMsg">{errors.user_name?.message}</span>
          <label>Email</label>
          <input type="email" name="user_email" {...register("user_email", { required: "This is required" })} />
          <span className="errorMsg">{errors.user_email?.message}</span>
          <label>Message</label>
          <textarea name="message" {...register("message", { required: "This is required" })}></textarea>
          <span className="errorMsg">{errors.message?.message}</span>
          <input type="submit" value="Send" />
        </form>
      </>
    );
  };
  
  export default Contact;
  