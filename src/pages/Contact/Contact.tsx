import { useEffect, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import DiscordProfile from "./DiscordProfile";
import "animate.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [isAngry, setIsAngry] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);

    setTimeout(() => {
      setHasLoaded(false);
    }, 1000);
  }, []);

  const submit = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (
      email === "hello@anuragsawant.in" ||
      email === "contact@anuragsawant.in"
    ) {
      toast.warning("You can't pretend to be me!");
      toast.warning("YOU MADE THE WEBSITE ANGRY! 😡");

      setIsAngry(true);
      setTimeout(() => setIsAngry(false), 1000);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          subject,
          message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log(error);
          toast.error("An error occurred. Please try again later");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className={`md:w-auto w-[85vw] animate__animated ${
        hasLoaded ? "animate__fadeIn" : ""
      } ${isAngry ? "animate__wobble" : ""}`}
      id="mainContact"
    >
      <h1 className="md:text-7xl text-center text-3xl drop-shadow-glow font-poly">
        Get in Touch{" "}
        <span className="font-gloock italic bg-gradient-to-b from-[#ffffff6e] via-[#d8d9d8bc] to-[#10101000] text-transparent bg-clip-text">
          With Me.
        </span>
      </h1>
      <p className="text-center mt-2 text-gray-500">
        I would love to hear from you
      </p>

      <div className="flex items-center justify-center my-5">
        <DiscordProfile />
      </div>

      <div className="flex items-center justify-center flex-col mt-10">
        <p
          className="cursor-pointer hover:text-blue-500 transition-all duration-300"
          onClick={() => window.open("mailto:hello@anuragsawant.in")}
        >
          hello@anuragsawant.in
        </p>

        <form action="" className="mt-5 md:w-auto w-[85vw]">
          <div className="flex">
            <input
              type="text"
              placeholder="Name"
              className="border-b-4 rounded-lg border border-gray-500 p-2 m-2 bg-transparent w-[50%]"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b-4 rounded-lg border border-gray-500 p-2 m-2 bg-transparent w-[50%]"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Subject"
              className="border-b-4 rounded-lg border border-gray-500 p-2 m-2 bg-transparent"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              value={subject}
            />
            <textarea
              name=""
              id=""
              cols={30}
              rows={5}
              placeholder="Message"
              className="border-b-4 rounded-lg border border-gray-500 p-2 m-2 bg-transparent"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            ></textarea>

            <button
              className="bg-transparent flex items-center justify-center border-b-4 border border-gray-700 hover:border-gray-500 transition-all duration-300 text-white p-2 rounded-lg m-2"
              onClick={submit}
            >
              {loading ? <div className="loader"></div> : " Submit"}
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center">
        <img src="./name.png" className="w-48 invert-[0.2]" />
      </div>
    </div>
  );
};

export default Contact;
