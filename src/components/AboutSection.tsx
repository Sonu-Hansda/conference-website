import attachedImage from "@/assets/Attached_image.png";

const AboutSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Panel - Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-dark mb-6 leading-tight">
              International Conference on Recent Innovation in Sustainable Energy 2026
            </h2>
            
            <div className="text-[#333333] space-y-4 text-sm leading-relaxed font-bold">
              <p>
                The <strong>International Conference on Recent Innovation in Sustainable Energy 2026</strong>, 
                held from <strong>March 26-27, 2026</strong>, in <strong>Tokyo, Japan</strong>, 
                with the theme <strong>"Exploring Cutting-Edge Innovations for a Sustainable Energy Future"</strong> as 
                a premier event showcasing the latest breakthroughs in sustainable energy technologies and innovations.
              </p>
              
              <p>
                This conference brings together leading researchers, engineers, policymakers, and industry professionals from around the world, 
                all dedicated to exploring and advancing the most recent innovations in sustainable energy systems. 
                The conference will highlight <strong>cutting-edge technologies, emerging trends, and innovative solutions</strong> 
                that are shaping the future of sustainable energy.
              </p>
              
              <p>
                Discussions will focus on <strong>recent innovations in renewable energy technologies, energy storage systems, 
                smart grid solutions, energy efficiency advancements, and sustainable energy policies</strong>. 
                The conference will also explore the integration of artificial intelligence, machine learning, and other 
                emerging technologies in sustainable energy applications.
              </p>
              
              <p>
                <strong>RISE 2026</strong> in Tokyo will be a pivotal gathering for energy innovators, providing 
                a platform to showcase groundbreaking research, share innovative ideas, and foster collaborations that 
                will drive the next generation of sustainable energy solutions. Participants will gain insights into the 
                latest developments and emerging trends that are transforming the global energy landscape.
              </p>
            </div>
          </div>

          {/* Right Panel - Image */}
          <div className="w-full">
            <img 
              src={attachedImage} 
              alt="Conference Venue" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
