
const ContactForm = () => {
  return (
    <div className=" text-white py-8 px-4 max-w-3xl mx-auto rounded-md">
      <h1 className="text-3xl font-bold text-center mb-9">Contact Me</h1>
      <form>
        <div className="mb-8">
          <label htmlFor="email" className="block text-sm font-medium mb-3">Your email</label>
          <input
            type="email"
            id="email"
            placeholder="Please write your email here"
            className=" text-sm font-thin w-full p-2 bg-gray-700 rounded-md text-gray-300 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="subject" className="block text-sm font-medium mb-3">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Let me know how can I help you?"
            className="text-sm font-thin w-full p-2 bg-gray-700 rounded-md text-gray-300 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="message" className="block text-sm font-medium mb-3">Your message</label>
          <textarea
            id="message"
            placeholder="Please leave your message here..."
            rows={4}
            className="text-sm font-thin  w-full p-2 bg-gray-700 rounded-md text-gray-300 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full mb-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md "
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
