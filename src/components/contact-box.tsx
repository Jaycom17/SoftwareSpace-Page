import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

const ContactInfo = () => {
  return (
    <div className=" col-span-1 bg-primary-300 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full content-center justify-center">
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Mail /> <a href="mailto:joanrosero@unicauca.edu.co">joanrosero@unicauca.edu.co</a>
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Phone /> <p>+57 3135739668</p>
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Web /> <a href="https://softwarespace-lovat.vercel.app/">softwarespace-lovat.vercel.app/</a>
      </h5>
    </div>
  );
};

export default ContactInfo;
