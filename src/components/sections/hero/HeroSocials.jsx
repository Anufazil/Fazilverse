import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function HeroSocials() {
  return (
    <div className="mt-10 flex gap-6 text-2xl text-gray-400">

      <FaGithub className="cursor-pointer transition hover:text-white" />

      <FaLinkedin className="cursor-pointer transition hover:text-cyan-400" />

      <FaEnvelope className="cursor-pointer transition hover:text-orange-400" />

      <FaInstagram className="cursor-pointer transition hover:text-pink-400" />

      <FaWhatsapp className="cursor-pointer transition hover:text-green-400" />

    </div>
  );
}