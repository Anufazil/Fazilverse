import { services } from "../../../data/services";

export default function FooterServices() {
  return (
    <div>
      <p className="mb-4 font-mono text-sm text-signal">Services</p>

      <div className="flex flex-col gap-2">
        {services.map((service) => (
          <span key={service} className="text-sm text-muted">
            {service}
          </span>
        ))}
      </div>
    </div>
  );
}
