import { services } from "@/Data/Data";

export default function Services() {
  return (
    <div className="text-center my-8 md:px-8">
      <div className="uppercase font-semibold text-sm text-WhiteGray">
        - Services
      </div>
      <div className="font-semibold text-3xl mt-8 text-White uppercase">
        What I am Great At
      </div>
      <p className="text-WhiteGray text-sm mt-8 leading-7 max-w-3xl mx-auto">
        I believe that every photograph has a unique story to tell. Whether its the twinkle in a childs eye, the grandeur of a breathtaking landscape, or the intimate connection between two people, I strive to capture the essence and emotion of the moment. My goal is to make every photo a work of art that resonates with viewers and invokes emotions.
      </p>
      <div className="grid gap-4 mt-8 text-White sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map(service => (
          <div key={service.id} className="p-8 bg-Blur text-center hover:scale-105 transition-all duration-300">
            <div className="flex justify-center text-5xl mb-4">{service.icon}</div>
            <div className="mb-4 text-2xl font-medium">{service.title}</div>
            <div className="text-Orange text-sm">{service.finished} projects</div>
          </div>
        ))}
      </div>
    </div>
  );
}
