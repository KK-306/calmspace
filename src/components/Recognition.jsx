import assamLogo from "../assets/logos/assam.png";
import donboscoLogo from "../assets/logos/donbosco.png";
import tbiLogo from "../assets/logos/tbi.png";
import iitLogo from "../assets/logos/iit.png";
import wadhwaniLogo from "../assets/logos/wadhwani.png";

export default function Recognition() {
  const partners = [
    { name: "Assam Startup", logo: assamLogo },
    { name: "IIT Guwahati EDP Program", logo: iitLogo },
    { name: "Supported by Don Bosco Hub", logo: donboscoLogo },
    { name: "Incubated by TBI (Chandigarh University)", logo: tbiLogo },
    { name: "Wadhwani Foundation", logo: wadhwaniLogo },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-center text-gray-900">
          Recognized & Supported By 🏆
        </h2>

        <p className="text-lg md:text-xl text-gray-600 text-center mt-5 max-w-2xl mx-auto">
          CalmSpace is proudly backed by leading incubation programs and startup ecosystems.
        </p>

        {/* Logo Grid */}
       {/* Logo Flex Layout */}
<div className="flex flex-wrap justify-center gap-10 mt-16">

  {partners.map((partner, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-3xl p-7 flex items-center gap-5
                 border border-gray-100 w-[320px]
                 hover:shadow-xl hover:-translate-y-1
                 transition duration-300"
    >
      {/* Logo */}
      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center border shadow-md overflow-hidden">
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-w-[85%] max-h-[85%] object-contain"
        />
      </div>

      {/* Name */}
      <p className="font-heading font-semibold text-gray-800 text-lg">
        {partner.name}
      </p>
    </div>
  ))}

</div>


        {/* Divider */}
        <div className="mt-20 w-full h-[2px] bg-gradient-to-r from-transparent via-calmTeal/40 to-transparent"></div>
      </div>
    </section>
  );
}
