import ContactsForm from "@/components/Form/ContactsForm";
import Image from "next/image";

export default function Contacts() {
  return (
    <>
      <div className=" container shadow-lg mx-auto grid md:grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 relative">
          <Image
            src={"/Images/contact.png"}
            alt="contact me image"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="col-span-2  my-auto  p-6">
          <div className="flex flex-col gap-16 my-auto">
            <h1 className="text-5xl text-center">Send me a message</h1>
            <ContactsForm />
          </div>
        </div>
      </div>
    </>
  );
}
