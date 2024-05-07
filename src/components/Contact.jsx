import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="pb-20 border-b border-neutral-900">
      <h2 className="my-10 text-4xl text-center">Get in Touch</h2>
      <div className="tracking-tighter text-center">
        <p className="my-4">{CONTACT.address}</p>
        <a className="border-b" href="#">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
